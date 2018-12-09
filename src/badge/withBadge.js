import React from 'react';
import { StyleSheet, View } from 'react-native';

import Badge from './Badge';

const withBadge = (value, options = {}) => WrappedComponent => {
  class WithBadge extends React.Component {
    render() {
      const {
        left = -7,
        bottom = 0,
        top = -2,
        right = 0,
        hidden = false,
        ...badgeProps
      } = options;

      const badgeValue =
        typeof value === 'function' ? value(this.props) : value;

      return (
        <View style={styles.container}>
          <WrappedComponent {...this.props} />

          {!hidden && (
            <Badge
              value={badgeValue}
              status="error"
              containerStyle={StyleSheet.flatten([
                styles.badgeContainer,
                { bottom, left, right, top },
              ])}
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

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
});

export default withBadge;
