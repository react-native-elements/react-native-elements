import React from 'react';
import { Platform, StyleSheet, TextStyle } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts } from '../config';
import Text, { TextProps } from '../Text';
import { RneFunctionComponent } from '../helpers';

export type CardFeaturedSubtitleProps = TextProps;

export const CardFeaturedSubtitle: RneFunctionComponent<CardFeaturedSubtitleProps> = ({
  theme,
  style,
  ...props
}) => (
  <Text
    style={
      StyleSheet.flatten([
        {
          fontSize: normalize(13),
          marginBottom: 8,
          color: theme?.colors?.white,
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

CardFeaturedSubtitle.displayName = 'CardFeaturedSubtitle';
