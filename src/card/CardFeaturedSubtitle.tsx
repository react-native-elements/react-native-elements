import React from 'react';
import { Platform, StyleSheet, TextStyle } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts, withTheme } from '../config';
import Text, { TextProps } from '../text/Text';
import { RneFunctionComponent } from '../helpers';

const CardFeaturedSubtitle: RneFunctionComponent<TextProps> = ({
  theme,
  style,
  ...props
}) => {
  return (
    <Text
      style={
        StyleSheet.flatten([
          {
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
          },
          style,
        ]) as TextStyle
      }
      {...props}
    />
  );
};

export default withTheme(CardFeaturedSubtitle, 'CardFeaturedSubtitle');
