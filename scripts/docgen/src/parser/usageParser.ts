import { transformSync, PluginItem, types as t } from '@babel/core';
import fs from 'node:fs';
import path from 'path';

enum Methods {
  desc = 'info',
  usage = 'usage',
  meta = 'meta',
}

export type ComponentUsage = {
  desc: string;
  usage: {
    title: string;
    desc: string;
    code: string;
    metaData: any[];
  }[];
  meta: any[];
  fileKey: string;
};

export const usageGenParser = function parse(filePath: string) {
  const file = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath).split('.');
  const fileKey = fileName.slice(0, fileName.length > 2 ? -2 : -1).join('');

  const component: ComponentUsage = {
    desc: '',
    usage: [],
    meta: [],
    fileKey,
  };
  transformSync(file, {
    filename: filePath,
    presets: ['@babel/preset-typescript'],
    plugins: [
      function myCustomPlugin(): PluginItem {
        return {
          visitor: {
            ExpressionStatement({ node }) {
              if (t.isCallExpression(node.expression)) {
                const { callee } = node.expression;
                if (t.isIdentifier(callee)) {
                  const { name } = callee;
                  if (name === Methods.desc) {
                    node.expression.arguments.forEach((arg) => {
                      if (t.isStringLiteral(arg)) {
                        component.desc += arg.value + ' ';
                      }
                    });
                  } else if (name === Methods.meta) {
                    const [objs] = node.expression.arguments;
                    if (t.isObjectExpression(objs)) {
                      objs.properties.forEach((obj) => {
                        if (
                          t.isObjectProperty(obj) &&
                          t.isIdentifier(obj.key)
                        ) {
                          if (t.isStringLiteral(obj.value)) {
                            component.meta.push([
                              obj.key.name,
                              obj.value.value,
                            ]);
                          }
                        }
                      });
                    }
                  } else if (name === Methods.usage) {
                    let usage = {
                      title: '',
                      desc: '',
                      code: '',
                      metaData: [],
                    };
                    const [title, desc, jsx, metaData] =
                      node.expression.arguments;
                    if (t.isStringLiteral(title)) {
                      usage.title = title.value;
                    }
                    if (t.isStringLiteral(desc)) {
                      usage.desc = desc.value;
                    }
                    if (t.isArrowFunctionExpression(jsx)) {
                      usage.code = file.slice(jsx.body.start, jsx.body.end);
                    }

                    if (t.isObjectExpression(metaData)) {
                      metaData.properties.forEach((obj) => {
                        if (
                          t.isObjectProperty(obj) &&
                          t.isIdentifier(obj.key)
                        ) {
                          if (
                            t.isStringLiteral(obj.value) ||
                            t.isBooleanLiteral(obj.value)
                          ) {
                            usage.metaData.push([
                              obj.key.name,
                              obj.value.value,
                            ]);
                          }
                        }
                      });
                    }
                    component.usage.push(usage);
                  }
                }
              }
            },
          },
        };
      },
    ],
  });

  return component;
};
