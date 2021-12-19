import React from 'react';
import {
  Text as NativeText,
  StyleSheet,
  Platform,
  TextProps as TextProperties,
  TextStyle,
  StyleProp,
} from 'react-native';
import { fonts } from '../config';
import { patchWebProps, RneFunctionComponent } from '../helpers';
import normalize from '../helpers/normalizeText';

export type TextProps = TextProperties & {
  /**  Add additional styling for Text. */
  style?: StyleProp<TextStyle>;

  /**  Text with Font size 40. */
  h1?: boolean;

  /**  Text with Font size 34. */
  h2?: boolean;

  /**  Text with Font size 28. */
  h3?: boolean;

  /**  Text with Font size 22. */
  h4?: boolean;

  /**  Styling when h1 is set. */
  h1Style?: StyleProp<TextStyle>;

  /**  Styling when h2 is set. */
  h2Style?: StyleProp<TextStyle>;

  /**  Styling when h3 is set. */
  h3Style?: StyleProp<TextStyle>;

  /**  Styling when h3 is set. */
  h4Style?: StyleProp<TextStyle>;
};

/** Text displays words and characters of various sizes. */
export const Text: RneFunctionComponent<TextProps> = ({
  style = {},
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h1Style = {},
  h2Style = {},
  h3Style = {},
  h4Style = {},
  children = '',
  theme,
  ...rest
}) => {
  return (
    <NativeText
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
        (h1 || h2 || h3 || h4) && (styles.bold as TextStyle),
        h1 && StyleSheet.flatten([{ fontSize: normalize(40) }, h1Style]),
        h2 && StyleSheet.flatten([{ fontSize: normalize(34) }, h2Style]),
        h3 && StyleSheet.flatten([{ fontSize: normalize(28) }, h3Style]),
        h4 && StyleSheet.flatten([{ fontSize: normalize(22) }, h4Style]),
      ])}
      {...patchWebProps(rest)}
    >
      {children}
    </NativeText>
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

Text.displayName = 'Text';
