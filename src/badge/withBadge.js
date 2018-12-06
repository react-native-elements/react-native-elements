import React from 'react';
import { StyleSheet, View } from 'react-native';
import Badge from './Badge';

const withBadge = (value, options = {}) => WrappedComponent => {
  class WithBadge extends React.Component {
    render() {
      const { left = 0, bottom = 0, top = -5, right = 0, hidden = !value, ...badgeProps } = options;
      const badgeValue = typeof value === 'function' ? value(this.props) : value;
      return (
        <View>
          <WrappedComponent {...this.props} />
          {!hidden && (
            <Badge
              badgeStyle={styles.badge}
              textStyle={styles.badgeText}
              value={badgeValue}
              status="error"
              containerStyle={[styles.badgeContainer, { bottom, left, right, top }]}
              {...badgeProps}
            />
          )}
        </View>
      );
    }
  }
  WithBadge.displayName = `WithBadge(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;
  return WithBadge;
};

export default withBadge;

const styles = StyleSheet.create({
  badge: {
    borderRadius: 9,
    height: 18,
    minWidth: 0,
    width: 18
  },
  badgeContainer: {
    position: 'absolute'
  },
  badgeText: {
    fontSize: 10,
    paddingHorizontal: 0
  }
});
