import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts, withTheme } from '../config';
import Text from '../text/Text';

const CardFeaturedTitle = ({ theme, style, ...props }) => {
  return (
    <Text
      style={StyleSheet.flatten([styles.featuredTitle(theme), style])}
      {...props}
    />
  );
};

const styles = {
  featuredTitle: (theme) => ({
    fontSize: normalize(18),
    marginBottom: 8,
    color: theme.colors.white,
    ...Platform.select({
      android: {
        ...fonts.android.black,
      },
      default: {
        fontWeight: '800',
      },
    }),
  }),
};

export default withTheme(CardFeaturedTitle, 'CardFeaturedTitle');
