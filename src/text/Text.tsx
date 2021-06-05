import React from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  TextProps as TextProperties,
  TextStyle,
  StyleProp,
} from 'react-native';
import { fonts, withTheme } from '../config';
import Color from 'color';
import { patchWebProps, RneFunctionComponent } from '../helpers';
import normalize from '../helpers/normalizeText';

export type TextProps = TextProperties & {
  style?: StyleProp<TextStyle>;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'caption';
};

const TextElement: RneFunctionComponent<TextProps> = ({
  style,
  variant,
  theme,
  children = '',
  ...rest
}) => {
  return (
    <Text
      accessibilityRole="text"
      style={StyleSheet.flatten([
        {
          ...Platform.select({
            android: {
              ...(fonts.android.regular as TextStyle),
            },
          }),
          color: theme?.colors?.black,
        },
        style,
        variant && (styles.bold as TextStyle),
        variant === 'h1' && StyleSheet.flatten([{ fontSize: normalize(40) }]),
        variant === 'h2' && StyleSheet.flatten([{ fontSize: normalize(34) }]),
        variant === 'h3' && StyleSheet.flatten([{ fontSize: normalize(28) }]),
        variant === 'h4' && StyleSheet.flatten([{ fontSize: normalize(22) }]),
        variant === 'caption' &&
          StyleSheet.flatten([
            { color: Color(theme?.colors?.black).alpha(0.8).rgb().toString() },
          ]),
      ])}
      {...patchWebProps(rest)}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  bold: {
    ...Platform.select({
      android: {
        ...(fonts.android.bold as TextStyle),
      },
    }),
  },
});

export { TextElement };
export default withTheme(TextElement, 'Text');
