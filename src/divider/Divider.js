import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { ViewPropTypes, withTheme } from '../config';

const Divider = ({ style, theme, ...rest }) => (
  <View
    style={StyleSheet.flatten([styles.container(theme), style])}
    {...rest}
  />
);

Divider.propTypes = {
  style: ViewPropTypes.style,
  theme: PropTypes.object,
};

const styles = {
  container: theme => ({
    backgroundColor: theme.colors.divider,
    height: StyleSheet.hairlineWidth,
  }),
};

export { Divider };
export default withTheme(Divider, 'Divider');
