import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import ViewPropTypes from '../config/ViewPropTypes';

let styles = {};

const Divider = ({ style }) =>
  <View style={[styles.container, style && style]} />;

Divider.propTypes = {
  style: ViewPropTypes.style,
};

styles = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: colors.grey5,
  },
});

export default Divider;
