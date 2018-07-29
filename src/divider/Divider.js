import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { merge, ThemeConsumer, ViewPropTypes } from '../config';

const Divider = ({ style, theme }) => (
  <View
    style={[
      styles.container,
      {
        backgroundColor: theme.colors.divider,
      },
      style,
    ]}
  />
);

Divider.propTypes = {
  style: ViewPropTypes.style,
  theme: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    height: StyleSheet.hairlineWidth,
  },
});

export default props => (
  <ThemeConsumer>
    {({ theme }) => <Divider {...merge({}, theme.Divider, props)} />}
  </ThemeConsumer>
);
