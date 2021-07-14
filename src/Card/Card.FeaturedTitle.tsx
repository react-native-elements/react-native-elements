import React from 'react';
import { Platform, StyleSheet, TextStyle } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts } from '../config';
import Text, { TextProps } from '../Text';
import { RneFunctionComponent } from '../helpers';

type CardFeaturedTitleProps = TextProps;

/** Add a featured title to the Card.
 * This, Receives all [Text](text.md#props) props. */
export const CardFeaturedTitle: RneFunctionComponent<CardFeaturedTitleProps> = ({
  theme,
  style,
  ...props
}) => (
  <Text
    style={
      StyleSheet.flatten([
        {
          fontSize: normalize(18),
          marginBottom: 8,
          color: theme?.colors?.white,
          ...Platform.select({
            android: {
              ...fonts.android.black,
            },
            default: {
              fontWeight: '800',
            },
          }),
        },
        style,
      ]) as TextStyle
    }
    {...props}
  />
);

CardFeaturedTitle.displayName = 'Card.FeaturedTitle';
