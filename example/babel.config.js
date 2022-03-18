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
            '@react-native-elements/themed': path.resolve(
              __dirname,
              '..',
              'packages/themed/src'
            ),
            '@react-native-elements/circular-slider': path.resolve(
              __dirname,
              '..',
              'packages/circular-slider/src'
            ),
            '@react-native-elements/base': path.resolve(
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
