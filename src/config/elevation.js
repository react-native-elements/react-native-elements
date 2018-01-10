import { Platform } from 'react-native';

const penumbraOpacity = 0.14;
const umbraOpacity = 0.2;

export default Platform.select({
  ios: {
    one: {
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 2,
      shadowOpacity: 0.5,
    },
    two: {
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 2,
      shadowOpacity: 0.5,
    },
  },
  android: {
    one: {
      elevation: 1,
    },
    two: {
      elevation: 2,
    },
  },
  web: {
    one: {
      boxShadow: `
        0 2px 2px 0px rgba(0, 0, 0, ${penumbraOpacity}),
        0 3px 1px -2px rgba(0, 0, 0, ${umbraOpacity})
  `,
    },
    two: {
      boxShadow: `
        0 3px 4px 0px rgba(0, 0, 0, ${penumbraOpacity}),
        0 3px 3px -2px rgba(0, 0, 0, ${umbraOpacity})
      `,
    },
  },
});
