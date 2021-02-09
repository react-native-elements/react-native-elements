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
import { Theme } from '../config/theme';
import { patchWebProps } from '../helpers';
import normalize from '../helpers/normalizeText';

export type TextProps = TextProperties & {
  style?: StyleProp<TextStyle>;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h1Style?: StyleProp<TextStyle>;
  h2Style?: StyleProp<TextStyle>;
  h3Style?: StyleProp<TextStyle>;
  h4Style?: StyleProp<TextStyle>;
  theme?: Theme;
};

const TextElement: React.FunctionComponent<TextProps> = (props) => {
  const {
    style,
    theme,
    children,
    h1,
    h2,
    h3,
    h4,
    h1Style,
    h2Style,
    h3Style,
    h4Style,
    ...rest
  } = props;

  return (
    <Text
      style={StyleSheet.flatten([
        styles.text(theme),
        style,
        (h1 || h2 || h3 || h4) && styles.bold,
        h1 && StyleSheet.flatten([{ fontSize: normalize(40) }, h1Style]),
        h2 && StyleSheet.flatten([{ fontSize: normalize(34) }, h2Style]),
        h3 && StyleSheet.flatten([{ fontSize: normalize(28) }, h3Style]),
        h4 && StyleSheet.flatten([{ fontSize: normalize(22) }, h4Style]),
      ])}
      {...patchWebProps(rest)}
    >
      {children}
    </Text>
  );
};

TextElement.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  style: {},
  h1Style: {},
  h2Style: {},
  h3Style: {},
  h4Style: {},
  children: '',
};

const styles = {
  text: (theme) => ({
    ...Platform.select({
      android: {
        ...fonts.android.regular,
      },
    }),
    color: theme.colors.black,
  }),
  bold: {
    ...Platform.select({
      android: {
        ...fonts.android.bold,
      },
    }),
  },
};

export { TextElement };
export default withTheme(TextElement, 'Text');
