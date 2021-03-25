import React from 'react';
import { Platform, StyleSheet, TextStyle } from 'react-native';
import normalize from '../helpers/normalizeText';
import { fonts, withTheme } from '../config';
import Text, { TextProps } from '../text/Text';
import { RneFunctionComponent } from '../helpers';

const CardTitle: RneFunctionComponent<TextProps> = ({
  style,
  theme,
  ...props
}) => {
  return (
    <Text
      testID="cardTitle"
      style={
        StyleSheet.flatten([
          {
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
          },
          style,
        ]) as TextStyle
      }
      {...props}
    />
  );
};

export default withTheme(CardTitle, 'CardTitle');
