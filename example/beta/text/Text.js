import PropTypes from 'prop-types';
import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import fonts from '../config/fonts';
import normalize from '../helpers/normalizeText';

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

const TextElement = props => {
  const { style, children, h1, h2, h3, h4, fontFamily, ...rest } = props;

  return (
    <Text
      style={[
        styles.text,
        h1 && { fontSize: normalize(40) },
        h2 && { fontSize: normalize(34) },
        h3 && { fontSize: normalize(28) },
        h4 && { fontSize: normalize(22) },
        h1 && styles.bold,
        h2 && styles.bold,
        h3 && styles.bold,
        h4 && styles.bold,
        fontFamily && { fontFamily },
        style && style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

TextElement.propTypes = {
  style: PropTypes.any,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  fontFamily: PropTypes.string,
  children: PropTypes.any,
};

export default TextElement;
