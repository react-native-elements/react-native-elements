import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

let styles = {};

const Badge = props => {
  const { badge } = props;

  if (!badge) throw Error('badge prop is required');

  if (badge.element) return badge.element;

  return (
    <View style={[ styles.badge, badge.badgeContainerStyle ]}>
      <Text style={[ styles.text, badge.badgeTextStyle ]}>{badge.value}</Text>
    </View>
  );
};

Badge.propTypes = {
  badge: React.PropTypes.any,
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
