import React from 'react';
import { View, StyleSheet } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';

const Divider = ({ style }) => <View style={[styles.container, style]} />;

const hairlineWidth = StyleSheet.hairlineWidth;

Divider.propTypes = {
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  container: {
    // Darker color if hairlineWidth is not thin enough
    backgroundColor: hairlineWidth < 1 ? '#BCBBC1' : 'rgba(0, 0, 0, 0.12)',
    height: hairlineWidth,
  },
});

export default Divider;
