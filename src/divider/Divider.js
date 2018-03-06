import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';

let styles = {};

const Divider = ({ style }) => <View style={[styles.container, style]} />;

Divider.propTypes = {
  style: ViewPropTypes.style,
};

styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        height: 0.5,
        backgroundColor: '#BCBBC1',
      },
      android: {
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
      },
    }),
  },
});

export default Divider;
