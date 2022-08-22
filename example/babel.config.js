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
            '@rneui/base/dist': path.resolve(
              __dirname,
              '..',
              'packages/base/src'
            ),
            '@rneui/themed': path.resolve(
              __dirname,
              '..',
              'packages/themed/src'
            ),
            '@rneui/circular-slider': path.resolve(
              __dirname,
              '..',
              'packages/circular-slider/src'
            ),
            '@rneui/base': path.resolve(__dirname, '..', 'packages/base/src'),
          },
        },
      ],
    ],
  };
};
