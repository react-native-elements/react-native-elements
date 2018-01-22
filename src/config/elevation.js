const penumbraOpacity = 0.14;
const umbraOpacity = 0.2;

const elevations = {
  ios: {
    zero: {
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 0,
    },
    one: {
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: 2,
      shadowOpacity: 0.5,
    },
    two: {
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowRadius: 3,
      shadowOpacity: 0.5,
    },
  },
  android: {
    zero: {
      elevation: 0,
    },
    one: {
      elevation: 1,
    },
    two: {
      elevation: 2,
    },
  },
  web: {
    zero: {
      boxShadow: `
        0 0px 0px 0px rgba(0, 0, 0, 0),
        0 0px 0px 0px rgba(0, 0, 0, 0)
      `,
    },
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
};

export default elevations;
