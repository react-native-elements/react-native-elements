import { transformSync, PluginItem, types as t } from '@babel/core';
import fs from 'node:fs';
import path from 'path';

export function parse(filePath: string) {
  const file = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath).split('.');
  const fileKey = fileName.slice(0, fileName.length > 2 ? -2 : -1).join('');

  const component = { info: '', usage: [], stack: '', fileKey };
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
                  if (name === 'info') {
                    node.expression.arguments.forEach((arg) => {
                      if (t.isStringLiteral(arg)) {
                        component.info += arg.value;
                      }
                    });
                  } else if (name === 'usage') {
                    let usage = {
                      title: '',
                      desc: '',
                      code: '',
                    };
                    const [title, desc, jsx] = node.expression.arguments;
                    if (t.isStringLiteral(title)) {
                      usage.title = title.value;
                    }
                    if (t.isStringLiteral(desc)) {
                      usage.desc = desc.value;
                    }
                    if (t.isArrowFunctionExpression(jsx)) {
                      if (t.isJSXElement(jsx.body)) {
                        usage.code = file.slice(jsx.body.start, jsx.body.end);
                      }
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
}
