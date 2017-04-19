import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

let styles = {};

const Badge = props => {
  const { badge } = props;

  const {
    badgeContainerStyle,
    badgeTextStyle,
    onPress,
    element,
    value,
    ...attributes
  } = props;

  if (element) return badge.element;

  const Component = onPress !== undefined ? TouchableOpacity : View;

  return (
    <Component style={[ styles.badge, badgeContainerStyle ]} onPress={onPress} {...attributes}>
      <Text style={[ styles.text, badgeTextStyle ]}>{value}</Text>
    </Component>
  );

};

Badge.propTypes = {
  badge: React.PropTypes.any,

  onPress: React.PropTypes.func
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
