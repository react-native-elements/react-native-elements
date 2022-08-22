import { ComponentDoc } from 'react-docgen-typescript';
import { ParentType } from 'react-docgen-typescript/lib/parser';

const ALLOWED_INCLUDES = {
  TextProps: '[Text](https://reactnative.dev/docs/text#props)',
  ViewProps: '[View](https://reactnative.dev/docs/view#props)',
  ImageProps: '[React Native Image](https://reactnative.dev/docs/image#props)',
  ImagePropsBase:
    '[React Native Image](https://reactnative.dev/docs/image#props)',
  TouchableOpacityProps:
    '[TouchableOpacityProps](https://reactnative.dev/docs/touchableopacity#props)',
  TextInputProps:
    '[React Native TextInput](https://reactnative.dev/docs/textinput#props)',
  SwitchPropsIOS:
    '[React Native Switch](https://reactnative.dev/docs/switch.html#props)',
};

export const MUST_INCLUDE_PROP_TYPES = [
  'InlinePressableProps',
  'SearchBarBaseProps',
];

export function separateParent(components: ComponentDoc[]) {
  const parentComp: Record<string, ParentType[]> = {};
  components.forEach(({ displayName, props }) => {
    for (const id in props) {
      const { parent } = props[id];
      if (!parentComp[displayName]) {
        parentComp[displayName] = [];
      }
      if (!parent) {
        continue;
      }
      const is = parentComp[displayName].some((prop) => {
        return prop.name === parent.name;
      });
      if (!is) {
        parentComp[displayName].push(parent);
      }
    }
  });
  let finalParent = {};

  for (let componentName in parentComp) {
    finalParent[componentName] = parentComp[componentName]
      .reduce((all, single) => {
        const name = single.name.replace('Props', '');
        if (parentComp[name] && name !== componentName) {
          return [
            single,
            ...all.filter((a) => {
              return !parentComp[name].some((n) => n.name === a.name);
            }),
          ];
        }
        return all;
      }, parentComp[componentName])
      .map((parent) => {
        if (parent.fileName.includes('node_modules')) {
          if (ALLOWED_INCLUDES[parent.name]) {
            return ALLOWED_INCLUDES[parent.name];
          }
          return undefined;
        }
        if (
          componentName.replace('.', '') + 'Props' === parent.name ||
          MUST_INCLUDE_PROP_TYPES.includes(parent.name)
        ) {
          return undefined;
        }

        const compName = parent.name.replace(/Props|\./, '');
        return `[${compName}](${compName.toLowerCase()}#props)`;
      })
      .filter(Boolean);
  }
  return finalParent;
}
