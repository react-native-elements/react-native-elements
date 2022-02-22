import { transform, types as t } from '@babel/core';

export const snippetToCode = (snippet = '') =>
  snippet
    .replace(/%live (.*)/g, '```jsx live\n$1\n```')
    .replace(/%jsx (.*)/g, '```jsx\n$1\n```');

export const tabify = (str: string) => {
  return transform(`<>\n${str}\n</>`, {
    plugins: [
      '@babel/plugin-syntax-jsx',
      /**
       * @returns {import('@babel/core').PluginItem}
       */
      function () {
        return {
          visitor: {
            JSXElement(path) {
              const name = path.node.openingElement.name.name;
              if (name === 'tab') {
                path.node.openingElement.name.name = 'Tabs';
                path.node.closingElement.name.name = 'Tabs';
                let items = [];
                path.node.children.forEach((child) => {
                  if (child.type === 'JSXElement') {
                    child.openingElement.name.name = 'TabItem';
                    child.closingElement.name.name = 'TabItem';
                    child.openingElement.attributes.forEach((attr) => {
                      if (attr.name.name === 'value') {
                        items.push(attr.value.value);
                      }
                    });
                  }
                });
                path.node.openingElement.attributes.push(
                  t.jSXAttribute(
                    t.jSXIdentifier('values'),
                    t.jSXExpressionContainer(
                      t.arrayExpression(
                        items.map((c) =>
                          t.identifier(
                            `{label: '${c}',value: '${c
                              ?.replace(' ', '')
                              .toLowerCase()}'}`
                          )
                        )
                      )
                    )
                  )
                );
              }
            },
          },
        };
      },
    ],
  })
    .code.replace('<>', '')
    .replace('</>;', '');
};

export const code = (str: string) => (str ? `\`${str?.trim()}\`` : '');
export const removeNewline = (str: string) => str?.replace(/\n/g, '');
