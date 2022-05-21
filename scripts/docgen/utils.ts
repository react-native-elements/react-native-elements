import { transform, types as t } from '@babel/core';
import dedent from 'dedent';

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
            JSXExpressionContainer(path) {
              const { node } = path;
              if (node.expression.type === 'BinaryExpression') {
                const { left, right, operator } = node.expression;
                if (left.name === '$' && operator === '+') {
                  const { properties } = right;
                  const keys = [];
                  properties.forEach(({ key }) => {
                    keys.push(key.value);
                  });
                  if (keys.length < 1) {
                    return;
                  }
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
                    ]
                  );
                  path.replaceWith(element);
                }
              }
            },
          },
        };
      },
    ],
  }).code.replace(/<>|<\/>;|{" "}/g, '');
};

export const codify = (str: string) => (str ? `\`${str?.trim()}\`` : '');
export const isTrue = (cond: number | boolean, value: string) =>
  cond ? dedent(value) : '';
export const removeNewline = (str: string) => str?.replace(/\n/g, '');

export const snippetToCode = (snippet = '') =>
  snippet
    .replace(/%live (.*)/g, '```jsx live\n$1\n```')
    .replace(/%jsx (.*)/g, '```jsx\n$1\n```');

export const filterPropType = (value: string) => {
  if (!value) {
    return '`None`';
  }
  if (value.includes('|')) {
    return value.replace(/"/g, '').split('|').map(codify).join(' \\| ');
  }
  if (value.includes('&')) {
    return value.replace(/"/g, '').split('&').map(codify).join(' & ');
  }
  return value;
};
