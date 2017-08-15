import { StyleSheet, Platform } from 'react-native';
import base from './colors';
import fonts from './fonts';
import normalize from '../helpers/normalizeText';

export default function getTheme(theme) {
  const colors = {
    ...base,
    ...theme,
  };

  return {
    badge: StyleSheet.create({
      container: {
        flexDirection: 'row',
      },
      badge: {
        padding: 12,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: colors.grey1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 14,
        color: 'white',
      },
    }),
    card: StyleSheet.create({
      container: {
        backgroundColor: 'white',
        borderColor: colors.grey5,
        borderWidth: 1,
        padding: 15,
        margin: 15,
        marginBottom: 0,
        ...Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .2)',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 1,
            shadowRadius: 1,
          },
          android: {
            elevation: 1,
          },
        }),
      },
      featuredTitle: {
        fontSize: normalize(18),
        marginBottom: 8,
        color: 'white',
        ...Platform.select({
          ios: {
            fontWeight: '800',
          },
          android: {
            ...fonts.android.black,
          },
        }),
      },
      featuredSubtitle: {
        fontSize: normalize(13),
        marginBottom: 8,
        color: 'white',
        ...Platform.select({
          ios: {
            fontWeight: '400',
          },
          android: {
            ...fonts.android.black,
          },
        }),
      },
      wrapper: {
        backgroundColor: 'transparent',
      },
      divider: {
        marginBottom: 15,
      },
      cardTitle: {
        fontSize: normalize(14),
        ...Platform.select({
          ios: {
            fontWeight: 'bold',
          },
          android: {
            ...fonts.android.black,
          },
        }),
        textAlign: 'center',
        marginBottom: 15,
        color: colors.grey1,
      },
      imageCardTitle: {
        marginTop: 15,
      },
      overlayContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        alignSelf: 'stretch',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    }),
  };
}
