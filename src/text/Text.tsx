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
import { patchWebProps, RneFunctionComponent } from '../helpers';
import normalize from '../helpers/normalizeText';

type VariantStyle = StyleProp<TextStyle> & {
  h1?: StyleProp<TextStyle>;
  h2?: StyleProp<TextStyle>;
  h3?: StyleProp<TextStyle>;
  h4?: StyleProp<TextStyle>;
};
export type TextProps = TextProperties & {
  style?: VariantStyle;
  variant?: 'h1' | 'h2' | 'h3' | 'h4';

  // To be deprecated
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h1Style?: StyleProp<TextStyle>;
  h2Style?: StyleProp<TextStyle>;
  h3Style?: StyleProp<TextStyle>;
  h4Style?: StyleProp<TextStyle>;
};

const TextElement: RneFunctionComponent<TextProps> = ({
  style,
  variant,
  theme,
  children = '',

  // To be deprecated
  h1,
  h2,
  h3,
  h4,
  h1Style,
  h2Style,
  h3Style,
  h4Style,
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
        style as StyleProp<TextStyle>,
        (variant || h1 || h2 || h3 || h4) && (styles.bold as TextStyle),
        (variant === 'h1' || h1) &&
          StyleSheet.flatten([{ fontSize: normalize(40) }, style?.h1]),
        (variant === 'h2' || h2) &&
          StyleSheet.flatten([{ fontSize: normalize(34) }, style?.h2]),
        (variant === 'h3' || h3) &&
          StyleSheet.flatten([{ fontSize: normalize(28) }, style?.h3]),
        (variant === 'h4' || h4) &&
          StyleSheet.flatten([{ fontSize: normalize(22) }, style?.h4]),
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
