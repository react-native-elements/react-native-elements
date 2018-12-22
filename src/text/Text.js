import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, Platform } from 'react-native';

import { fonts, withTheme } from '../config';
import normalize from '../helpers/normalizeText';

const TextElement = props => {
  const { style, children, h1, h2, h3, h4, fontFamily, ...rest } = props;

  return (
    <Text
      style={StyleSheet.flatten([
        styles.text,
        style && style,
        h1 && { fontSize: normalize(40) },
        h2 && { fontSize: normalize(34) },
        h3 && { fontSize: normalize(28) },
        h4 && { fontSize: normalize(22) },
        h1 && styles.bold,
        h2 && styles.bold,
        h3 && styles.bold,
        h4 && styles.bold,
      ])}
      {...rest}
    >
      {children}
    </Text>
  );
};

TextElement.propTypes = {
  style: Text.propTypes.style,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  children: PropTypes.node,
};

TextElement.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  style: {},
};

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
