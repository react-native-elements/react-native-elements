var path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@react-native-elements/base/dist': path.resolve(
              __dirname,
              '..',
              'packages/base/src'
            ),
          },
        },
      ],
    ],
  };
};
