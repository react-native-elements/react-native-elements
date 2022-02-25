const { transform, types: t } = require('@babel/core');

const str = `
{$+{
	"solid":<Button/>,
  "clear":<Button type="clear"></Button>,
}}
`;

{
  /* <Tabs
  groupId="component"
  defaultValue="npm"
  values={[
    { label: 'NPM', value: 'npm' },
    { label: 'Yarn', value: 'yarn' },
  ]}
>
  <TabItem value="npm">
    \`\`\`bash npm install @react-native-elements/${str}
    \`\`\`
  </TabItem>
  <TabItem value="yarn">
    \`\`\`bash yarn add @react-native-elements/${str}
    \`\`\`
  </TabItem>
</Tabs>; */
}

const d = transform(`<>\n${str}\n</>`, {
  plugins: [
    '@babel/plugin-syntax-jsx',
    /**
     * @returns {import('@babel/core').PluginItem}
     */
    function () {
      return {
        visitor: {
          JSXExpressionContainer(path) {
            const { node } = path;
            if (node.expression.type === 'BinaryExpression') {
              const { left, right, operator } = node.expression;
              if (left.name === '$' && operator === '+') {
                const { properties } = right;
                const keys = [];
                properties.forEach(({ key, value }) => {
                  keys.push(key.value);
                });
                if (keys.length < 1) return;
                const element = t.jsxElement(
                  t.jsxOpeningElement(t.jsxIdentifier('Tabs'), [
                    t.jsxAttribute(
                      t.jsxIdentifier('defaultValue'),
                      t.stringLiteral(keys[0])
                    ),
                    t.jsxAttribute(
                      t.jsxIdentifier('values'),
                      t.jsxExpressionContainer(
                        t.arrayExpression(
                          keys.map((key) =>
                            t.objectExpression([
                              t.objectProperty(
                                t.identifier('label'),
                                t.stringLiteral(key)
                              ),
                              t.objectProperty(
                                t.identifier('value'),
                                t.stringLiteral(key)
                              ),
                            ])
                          )
                        )
                      )
                    ),
                  ]),
                  t.jsxClosingElement(t.jsxIdentifier('Tabs')),
                  [
                    ...properties.map(({ key, value }) => {
                      return t.jsxElement(
                        t.jsxOpeningElement(t.jsxIdentifier('TabItem'), [
                          t.jsxAttribute(
                            t.jsxIdentifier('value'),
                            t.stringLiteral(key.value)
                          ),
                        ]),
                        t.jsxClosingElement(t.jsxIdentifier('TabItem')),
                        [value]
                      );
                    }),
                    t.jsxElement(
                      t.jsxOpeningElement(t.jsxIdentifier('TabItem'), [
                        t.jsxAttribute(
                          t.jsxIdentifier('value'),
                          t.stringLiteral('npm')
                        ),
                      ]),
                      t.jsxClosingElement(t.jsxIdentifier('TabItem')),
                      []
                    ),
                  ]
                );
                path.replaceWith(element);
              }
            }
          },
          // JSXElement(path) {
          //   const name = path.node.openingElement.name.name;
          //   if (name === 'tab') {
          //     path.node.openingElement.name.name = 'Tabs';
          //     path.node.closingElement.name.name = 'Tabs';
          //     let items = [];
          //     path.node.children.forEach((child) => {
          //       if (child.type === 'JSXElement') {
          //         child.openingElement.name.name = 'TabItem';
          //         child.closingElement.name.name = 'TabItem';
          //         child.openingElement.attributes.forEach((attr) => {
          //           if (attr.name.name === 'value') {
          //             items.push(attr.value.value);
          //           }
          //         });
          //       }
          //     });
          //     path.node.openingElement.attributes.push(
          //       t.jSXAttribute(
          //         t.jSXIdentifier('values'),
          //         t.jSXExpressionContainer(
          //           t.arrayExpression(
          //             items.map((c) =>
          //               t.identifier(`{label: '${c}',value: '${c}'}`)
          //             )
          //           )
          //         )
          //       )
          //     );
          //   }
          // },
        },
      };
    },
  ],
}).code.replace(/<>|<\/>;|{" "}/g, '');

console.log(d);
