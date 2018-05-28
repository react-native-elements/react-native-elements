import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import ViewPropTypes from '../config/ViewPropTypes';

const Divider = ({ style }) => <View style={[styles.container, style]} />;

Divider.propTypes = {
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.divider,
    height: StyleSheet.hairlineWidth,
  },
});

export default Divider;
