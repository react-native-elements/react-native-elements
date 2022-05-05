const path = require('path');
const webpack = require('webpack');

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
              }),
              new webpack.ProvidePlugin({
                process: 'process/browser',
              }),
            ],
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
            // {
            //   test: /\.(t|j)sx?$/,
            //   use: [
            //     getJSLoader(isServer, {
            //       presets: [['@babel/preset-env'], ['@babel/preset-react']],
            //       plugins: [],
            //     }),
            //     // getJSLoader(!isServer, {
            //     //   presets: [
            //     //     ['@babel/preset-env', { modules: 'commonjs' }],
            //     //     ['@babel/preset-react', { modules: 'commonjs' }],
            //     //   ],
            //     //   plugins: [
            //     //     new webpack.DefinePlugin({
            //     //       process: { env: {} },
            //     //     }),
            //     //   ],
            //     // }),
            //   ],
            //   // include: [
            //   //   path.resolve(__dirname, '..', 'src'),
            //   //   path.resolve(nodeModules, 'react-view'),
            //   //   path.resolve(nodeModules, '@babel/core'),
            //   //   path.resolve(nodeModules, '@docusaurus/core'),
            //   // ],
            // },
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
