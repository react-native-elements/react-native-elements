import React from 'react';
import { Platform, StyleSheet, TextStyle } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts } from '../helpers';
import { Text, TextProps } from '../Text';
import { defaultTheme, RneFunctionComponent } from '../helpers';

export interface CardFeaturedTitleProps extends TextProps {}

/** Add a featured title to the Card.
 * This, Receives all [Text](text#props) props. */
export const CardFeaturedTitle: RneFunctionComponent<
  CardFeaturedTitleProps
> = ({ theme = defaultTheme, style, ...rest }) => (
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
    {...rest}
  />
);

CardFeaturedTitle.displayName = 'Card.FeaturedTitle';
