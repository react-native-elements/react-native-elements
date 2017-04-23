import React, { PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';

let styles = {};

const Badge = props => {
  const { containerStyle, textStyle, value, children } = props.badge || props;

  if (children && value) {
    throw 'Badge can only contain a single child or string value';
  }

  var element = <Text style={[styles.text, textStyle]}>{value}</Text>;

  if (children) {
    element = children;
  }

  return (
    <View style={[styles.badge, containerStyle]}>
      {element}
    </View>
  );
};

Badge.propTypes = {
  badge: React.PropTypes.any,
  containerStyle: View.propTypes.style,
  textStyle: View.propTypes.style,
  children: PropTypes.element,
  value: PropTypes.string
};

styles = StyleSheet.create({
  badge: {
    top: 2,
    padding: 12,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: '#444',
    borderRadius: 20,
    position: 'absolute',
    right: 30
  },
  text: {
    fontSize: 14,
    color: 'white'
  }
});

export default Badge;
