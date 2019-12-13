import * as React from 'react';
import { Text, StyleSheet, Platform, TextStyle } from 'react-native';
import { fonts, withTheme } from '../config';
import { patchWebProps } from '../helpers';
import normalize from '../helpers/normalizeText';
type TextElementProps = {
  style?: TextStyle;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h1Style?: TextStyle;
  h2Style?: TextStyle;
  h3Style?: TextStyle;
  h4Style?: TextStyle;
};
class TextElement extends React.PureComponent<TextElementProps> {
  static defaultProps = {
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    style: {},
    h1Style: {},
    h2Style: {},
    h3Style: {},
    h4Style: {},
    children: null,
  };

  render() {
    const {
      style,
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
    } = this.props;
    return (
      <Text
        style={StyleSheet.flatten([
          styles.text,
          style && style,
          h1 && styles.bold,
          h2 && styles.bold,
          h3 && styles.bold,
          h4 && styles.bold,
          h1 &&
            StyleSheet.flatten([
              {
                fontSize: normalize(40),
              },
              h1Style,
            ]),
          h2 &&
            StyleSheet.flatten([
              {
                fontSize: normalize(34),
              },
              h2Style,
            ]),
          h3 &&
            StyleSheet.flatten([
              {
                fontSize: normalize(28),
              },
              h3Style,
            ]),
          h4 &&
            StyleSheet.flatten([
              {
                fontSize: normalize(22),
              },
              h4Style,
            ]),
        ])}
        {...patchWebProps(rest)}
      >
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {
        ...fonts.android.regular,
      },
    }),
  },
  bold: {
    ...Platform.select({
      android: {
        ...fonts.android.bold,
      },
    }),
  },
});
export { TextElement };
export default withTheme(TextElement, 'Text');
