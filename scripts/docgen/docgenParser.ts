import path from 'path';
import { ParserOptions, withCustomConfig } from 'react-docgen-typescript';

const themeProps = ['theme'];

// The config object is passed to the parser.
const parserOptions: ParserOptions = {
  savePropValueAsString: true,
  shouldIncludePropTagMap: true,
  propFilter: (prop, component) => {
    // This removes the theme props(theme, updateTheme, replaceTheme) from the documentation as they are common to all
    if (themeProps.includes(prop.name)) {
      return false;
    }

    // To replace @default tag with component default value
    if ((prop?.tags as { default?: string })?.default) {
      prop.defaultValue.value = (prop?.tags as { default?: string })?.default;
    }

    // To deal with the props of type StyleProp<ViewStyle> and StyleProp<TextStyle> which breaks the markdown
    // Input - StyleProp<ViewStyle>
    // Output - View style(Object)
    if (prop?.type?.name?.includes('StyleProp')) {
      if (prop.type.name.includes('TextStyle')) {
        prop.type.name = 'Text Style';
      } else {
        prop.type.name = 'View Style';
      }
    }

    // To deal with the props of type `() => void` or `() => any`
    // Input - () => void or () => any
    // Output - Function
    if (prop?.type?.name === '() => void' || prop?.type?.name === '() => any') {
      prop.type.name = 'Function';
    }

    // To deal with prop's defaultValue of type `() => null` or `() => {}`
    // Input - `() => null` or `() => {}`
    // Output - Function
    if (
      prop?.defaultValue?.value === '() => {}' ||
      prop?.defaultValue?.value === '() => null'
    ) {
      prop.defaultValue.value = 'Function';
    }

    // To deal with the props of type Partial<> which breaks the markdown
    // Input - Partial<ImageProps>
    // Output - ImageProps(Object)
    if (prop?.type?.name.includes('Partial')) {
      const propName = prop.type.name;
      prop.type.name =
        propName.substring(
          propName.lastIndexOf('<') + 1,
          propName.lastIndexOf('>')
        ) + '(Object)';
    }

    // Replace the occurrences of type Component/ViewComponent to React Component
    // Input - Component/ViewComponent
    // Output - React Component
    if (prop.name === 'Component' || prop.name === 'ViewComponent') {
      prop.type.name = 'React Component';
    }

    // To deal with the Badge Component with prop name onPress
    // Input - (...args: any[]) => an
    // Output - Function
    if (component.name === 'Badge' && prop.name === 'onPress') {
      prop.type.name = 'Function';
    }

    // Replace all the props with default value theme?.colors?.primary to Color(Primary)
    // Input - theme?.colors?.primary
    // Output - Color(Primary)
    if (prop?.defaultValue?.value === 'theme?.colors?.primary') {
      prop.defaultValue.value = 'Color [Primary]';
    }

    // Filter to show the props of the components only related to the src and ignore the props of the node modules
    // if (
    //   prop?.declarations?.length > 0 &&
    //   !componentsWithParentsTypeToBeParsed.includes(component.name)
    // ) {
    //   return prop.declarations.some((declaration) => {
    //     return /packages\/.*\/src/.test(declaration.fileName);
    //   });
    // }
    return true;
  },
};

export const docgenParser = withCustomConfig(
  path.join(__dirname, '../../tsconfig.json'),
  parserOptions
);
