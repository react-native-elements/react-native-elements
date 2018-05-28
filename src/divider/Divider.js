import React from 'react';
import { View, StyleSheet } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';


const Divider = ({ style }) => <View style={[styles.container, style]} />;


const hairlineWidth = StyleSheet.hairlineWidth;
// Darker color if hairlineWidth is not thin enough
export const dividerColor = hairlineWidth < 1 ? '#BCBBC1' : 'rgba(0, 0, 0, 0.12)'

Divider.propTypes = {
  style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: dividerColor,
    height: hairlineWidth,
  },
});

export default Divider;
