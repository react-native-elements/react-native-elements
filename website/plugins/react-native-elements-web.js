const path = require('path');
const webpack = require('webpack');

const rootNodeModules = path.join(__dirname, '..', '..', 'node_modules');
const nodeModules = path.join(__dirname, '..', 'node_modules');

/** @type {()=>import('@docusaurus/types').Plugin} */
const a = function () {
  return {
    name: 'docs-plugin-react-native-elements-web',
    configureWebpack(config, isServer, utils) {
      const { getJSLoader } = utils;
      return {
        plugins: isServer
          ? []
          : [
              new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
                process: 'process/browser',
              }),
            ],
        module: {
          rules: [
            {
              test: /\.(jpg|png|woff|woff2|eot|svg)$/,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
            {
              test: /\.ttf$/,
              loader: 'url-loader', // or directly file-loader
              include: path.resolve(
                __dirname,
                'node_modules/react-native-vector-icons'
              ),
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
                path.resolve(nodeModules, '@rneui/base/src'),
                path.resolve(nodeModules, 'react-native-elements'),
                path.resolve(nodeModules, 'react-native-vector-icons'),
                path.resolve(nodeModules, 'react-native-ratings'),
                path.resolve(rootNodeModules, 'react-native-vector-icons'),
                path.resolve(rootNodeModules, 'react-native-ratings'),
              ],
            },
          ],
        },
        resolve: {
          alias: {
            'react-native$': 'react-native-web',
            '@rneui/base$': path.resolve(nodeModules, '@rneui/base/src'),
            'react-native-linear-gradient': 'react-native-web-linear-gradient',
          },
          fallback: isServer
            ? {}
            : {
                path: require.resolve('path-browserify'),
                os: require.resolve('os-browserify/browser'),
                fs: false,
                process: 'process/browser',
              },
        },
      };
    },
  };
};

module.exports = a;
