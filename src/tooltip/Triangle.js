import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const Triangle = ({ style, isDown }) => (
  <View
    style={StyleSheet.flatten([
      styles.triangle,
      style,
      isDown ? styles.down : {},
    ])}
  />
);

Triangle.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isDown: PropTypes.bool,
};

const styles = StyleSheet.create({
  down: {
    transform: [{ rotate: '180deg' }],
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
});

export default Triangle;
