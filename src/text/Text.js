import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, Platform } from 'react-native';

import { fonts, withTheme } from '../config';
import { patchWebProps } from '../helpers';
import normalize from '../helpers/normalizeText';

const TextElement = (props) => {
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
  } = props;

  return (
    <Text
      style={StyleSheet.flatten([
        styles.text,
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

TextElement.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h1Style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  h2Style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  h3Style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  h4Style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
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
