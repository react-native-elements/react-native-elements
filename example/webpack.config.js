const path = require('path');
const fs = require('fs');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

const node_modules = path.resolve(__dirname, '..', 'node_modules');
const packages = path.resolve(__dirname, '..', 'packages');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.(js|ts|tsx)$/,
    include: /(packages|example)\/.+/,
    exclude: /node_modules/,
    use: 'babel-loader',
  });

  Object.assign(config.resolve.alias, {
    react: path.resolve(node_modules, 'react'),
    'react-native': path.resolve(node_modules, 'react-native-web'),
    'react-native-web': path.resolve(node_modules, 'react-native-web'),
    'react-native-reanimated': path.resolve(
      node_modules,
      'react-native-reanimated'
    ),
    '@expo/vector-icons': path.resolve(node_modules, '@expo/vector-icons'),
  });

  fs.readdirSync(packages)
    .filter((name) => !name.startsWith('.'))
    .forEach((name) => {
      const pak = require(`../packages/${name}/package.json`);

      config.resolve.alias[pak.name] = path.resolve(packages, name, 'src');
    });

  return config;
};
