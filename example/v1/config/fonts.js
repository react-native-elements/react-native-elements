export default {
  ios: {},
  android: {
    regular: {
      fontFamily: 'sans-serif',
    },
    light: {
      fontFamily: 'sans-serif-light',
    },
    condensed: {
      fontFamily: 'sans-serif-condensed',
    },
    condensed_light: {
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'light',
    },
    black: {
      // note(brentvatne): sans-serif-black is only supported on Android 5+,
      // we can detect that here and use it in that case at some point.
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
    },
    bold: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
  },
};
