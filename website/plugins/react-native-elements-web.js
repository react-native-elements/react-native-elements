const path = require('path');

const nodeModules = path.join(__dirname, '..', 'node_modules');

/** @type {()=>import('@docusaurus/types').Plugin} */
const a = function () {
  return {
    name: 'docs-plugin-react-native-elements-web',
    configureWebpack(config, isServer, utils) {
      const { getJSLoader } = utils;
      return {
        module: {
          rules: [
            {
              test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
            {
              test: /\.(t|j)sx?$/,
              use: [
                getJSLoader(isServer, {
                  plugins: ['@babel/plugin-proposal-class-properties'],
                  presets: ['@babel/preset-react', '@babel/preset-env'],
                }),
              ],
              include: [
                path.resolve(nodeModules, 'react-native-elements'),
                path.resolve(nodeModules, '@rneui/themed'),
                path.resolve(nodeModules, '@rneui/base'),
                path.resolve(nodeModules, 'react-native-vector-icons'),
                path.resolve(nodeModules, 'react-native-ratings'),
              ],
            },
          ],
        },
        resolve: {
          alias: {
            'react-native$': 'react-native-web',
            'react-native-linear-gradient': 'react-native-web-linear-gradient',
          },
        },
      };
    },
  };
};

module.exports = a;
