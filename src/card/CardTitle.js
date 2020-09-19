import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts, withTheme } from '../config';
import Text from '../text/Text';

const CardTitle = ({ style, theme, ...props }) => {
  return (
    <Text
      testID="cardTitle"
      style={StyleSheet.flatten([styles.cardTitle(theme), style])}
      {...props}
    />
  );
};

const styles = {
  cardTitle: (theme) => ({
    fontSize: normalize(14),
    color: theme.colors.grey1,
    ...Platform.select({
      android: {
        ...fonts.android.black,
      },
      default: {
        fontWeight: 'bold',
      },
    }),
    textAlign: 'center',
    marginBottom: 15,
  }),
};

export default withTheme(CardTitle, 'CardTitle');
