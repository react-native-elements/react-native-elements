import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts, withTheme } from '../config';
import Text, { TextProps } from '../text/Text';

const CardFeaturedSubtitle: React.FunctionComponent<TextProps> = ({
  theme,
  style,
  ...props
}) => {
  return (
    <Text
      //@ts-ignore
      style={StyleSheet.flatten([
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
      ])}
      {...props}
    />
  );
};

export default withTheme(CardFeaturedSubtitle, 'CardFeaturedSubtitle');
