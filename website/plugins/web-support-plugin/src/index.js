const path = require('path');

module.exports = function () {
  return {
    name: 'docs-plugin-react-native-elements-web',
    configureWebpack(config, isServer, utils) {
      const { getBabelLoader } = utils;
      return {
        module: {
          rules: [
            {
              test: /\.m?js$/,
              use: [
                getBabelLoader(isServer, {
                  plugins: ['@babel/plugin-proposal-class-properties'],
                  presets: ['@babel/preset-react'],
                }),
              ],
              include: [
                path.join(
                  __dirname,
                  '..',
                  '..',
                  '..',
                  'node_modules',
                  'react-native-elements'
                ),
                path.resolve(
                  __dirname,
                  '..',
                  '..',
                  '..',
                  'node_modules',
                  'react-native-vector-icons'
                ),
                path.resolve(
                  __dirname,
                  '..',
                  '..',
                  '..',
                  'node_modules',
                  'react-native-ratings'
                ),
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
