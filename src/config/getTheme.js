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
    colors,
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
    checkbox: StyleSheet.create({
      wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      container: {
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fafafa',
        borderColor: '#ededed',
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
      },
      text: {
        marginLeft: 10,
        marginRight: 10,
        color: colors.grey1,
        ...Platform.select({
          ios: {
            fontWeight: 'bold',
          },
          android: {
            ...fonts.android.bold,
          },
        }),
      },
    }),
    divider: StyleSheet.create({
      container: {
        height: 1,
        backgroundColor: colors.grey5,
      },
    }),
    header: StyleSheet.create({
      innerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      },
      outerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1,
        padding: 15,
        height: 70,
      },
    }),
    icon: StyleSheet.create({
      button: {
        margin: 7,
      },
      raised: {
        ...Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
          },
          android: {
            elevation: 2,
          },
        }),
      },
    }),
    input: StyleSheet.create({
      container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(171, 189, 219, 1)',
        alignItems: 'center',
      },
      iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
      },
      input: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 18,
        marginLeft: 10,
      },
      error: {
        color: '#FF2D00',
        margin: 5,
        fontSize: 12,
      },
    }),
    list: StyleSheet.create({
      listContainer: {
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: colors.greyOutline,
        backgroundColor: colors.white,
      },
    }),
    listItem: StyleSheet.create({
      avatar: {
        width: 34,
        height: 34,
      },
      container: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomColor: colors.greyOutline,
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
      },
      wrapper: {
        flexDirection: 'row',
        marginLeft: 10,
      },
      iconStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        marginRight: 8,
      },
      title: {
        fontSize: normalize(14),
        color: colors.grey1,
      },
      subtitle: {
        color: colors.grey3,
        fontSize: normalize(12),
        marginTop: 1,
        ...Platform.select({
          ios: {
            fontWeight: '600',
          },
          android: {
            ...fonts.android.bold,
          },
        }),
      },
      titleSubtitleContainer: {
        justifyContent: 'center',
        flex: 1,
      },
      chevronContainer: {
        flex: 0.15,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
      switchContainer: {
        flex: 0.15,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 5,
      },
      rightTitleContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
      rightTitleStyle: {
        marginRight: 5,
        color: colors.grey4,
      },
      textInputStyle: {
        height: 20,
        textAlign: 'right',
      },
    }),
    pricingCard: StyleSheet.create({
      container: {
        margin: 15,
        marginBottom: 15,
        backgroundColor: 'white',
        borderColor: colors.grey5,
        borderWidth: 1,
        padding: 15,
        ...Platform.select({
          ios: {
            shadowColor: 'rgba(0,0,0, .2)',
            shadowOffset: { height: 1, width: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 0.5,
          },
          android: {
            elevation: 1,
          },
        }),
      },
      wrapper: {
        backgroundColor: 'transparent',
      },
      pricingTitle: {
        textAlign: 'center',
        color: colors.primary,
        fontSize: normalize(30),
        ...Platform.select({
          ios: {
            fontWeight: '800',
          },
          android: {
            ...fonts.android.black,
          },
        }),
      },
      pricingPrice: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: normalize(40),
        ...Platform.select({
          ios: {
            fontWeight: '700',
          },
          android: {
            ...fonts.android.bold,
          },
        }),
      },
      pricingInfo: {
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
        color: colors.grey3,
        ...Platform.select({
          ios: {
            fontWeight: '600',
          },
          android: {
            ...fonts.android.bold,
          },
        }),
      },
      button: {
        marginTop: 15,
        marginBottom: 10,
      },
    }),
    search: StyleSheet.create({
      container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderTopColor: '#000',
        backgroundColor: colors.grey0,
      },
      containerLight: {
        backgroundColor: colors.grey5,
        borderTopColor: '#e1e1e1',
        borderBottomColor: '#e1e1e1',
      },
      icon: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 15.5,
        ...Platform.select({
          android: {
            top: 20,
          },
        }),
      },
      loadingIcon: {
        backgroundColor: 'transparent',
        position: 'absolute',
        right: 16,
        top: 13,
        ...Platform.select({
          android: {
            top: 18,
          },
        }),
      },
      input: {
        paddingLeft: 26,
        paddingRight: 19,
        margin: 8,
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: colors.searchBg,
        fontSize: normalize(14),
        color: colors.grey3,
        height: 40,
        ...Platform.select({
          ios: {
            height: 30,
          },
          android: {
            borderWidth: 0,
          },
        }),
      },
      inputLight: {
        backgroundColor: colors.grey4,
      },
      searchIcon: {
        left: 16,
      },
      clearIcon: {
        right: 16,
      },
    }),
  };
}
