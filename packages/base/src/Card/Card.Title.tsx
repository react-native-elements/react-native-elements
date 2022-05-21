import React from 'react';
import { Platform, StyleSheet, TextStyle } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts } from '../helpers';
import { Text, TextProps } from '../Text';
import { defaultTheme, RneFunctionComponent } from '../helpers';

export interface CardTitleProps extends TextProps {}

/** Add a general title to the Card.
 * This, Receives all [Text](text#props) props. */
export const CardTitle: RneFunctionComponent<CardTitleProps> = ({
  style,
  theme = defaultTheme,
  ...rest
}) => (
  <Text
    testID="cardTitle"
    style={
      StyleSheet.flatten([
        {
          fontSize: normalize(14),
          color: theme?.colors?.grey1,
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
        },
        style,
      ]) as TextStyle
    }
    {...rest}
  />
);

CardTitle.displayName = 'Card.Title';
