import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts, withTheme } from '../config';
import Text from '../text/Text';

const CardFeaturedSubtitle = ({ theme, style, ...props }) => {
  return (
    <Text
      style={StyleSheet.flatten([styles.featuredSubtitle(theme), style])}
      {...props}
    />
  );
};

const styles = {
  featuredSubtitle: (theme) => ({
    fontSize: normalize(13),
    marginBottom: 8,
    color: theme.colors.white,
    ...Platform.select({
      android: {
        ...fonts.android.black,
      },
      default: {
        fontWeight: '400',
      },
    }),
  }),
};

export default withTheme(CardFeaturedSubtitle, 'CardFeaturedSubtitle');
