import { StyleSheet } from 'react-native';
import base from './colors';

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
  };
}
