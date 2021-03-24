export default {
    android: {
        regular: {
            fontFamily: 'sans-serif',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'sans-serif-light',
            fontWeight: 'normal',
        },
        condensed: {
            fontFamily: 'sans-serif-condensed',
            fontWeight: 'normal',
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
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'sans-serif-medium',
            fontWeight: 'normal',
        },
        bold: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
        },
    },
    default: {},
};
