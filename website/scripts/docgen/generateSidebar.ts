import { ComponentDoc } from 'react-docgen-typescript';

function sidebar(componentDocs: ComponentDoc[]) {
  let items = {};
  componentDocs.map(({ displayName }) => {
    const [componentName, childComponentName] = displayName.split('.');
    if (childComponentName) {
      items[componentName] =
        typeof items[componentName] === 'object'
          ? items[componentName]
          : {
              collapsible: false,
              type: 'category',
              link: {
                type: 'doc',
                id: `components/${componentName.toLowerCase()}`,
              },
              label: componentName,
              items: [],
            };
      items[componentName]?.items?.push(
        `components/${displayName.toLowerCase().replace('.', '_')}`
      );
    } else {
      items[componentName] = `components/${displayName.toLowerCase()}`;
    }
  });
}
