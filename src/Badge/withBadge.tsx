import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Badge, { BadgeProps } from './index';

type withBadgeOptions = {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
  hidden?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
} & BadgeProps;

export const withBadge =
  (
    /** Text value to be displayed by badge, defaults to empty */
    value: React.ReactNode | ((props: any) => React.ReactNode),

    /** Also receives all [Badge](badge.md#props) props. */
    options: withBadgeOptions = {}
  ) =>
  (WrappedComponent: React.ComponentType<any>): React.ComponentType => {
    const WithBadge = (props: any) => {
      const {
        bottom,
        hidden = false,
        left,
        containerStyle,
        ...badgeProps
      } = options;
      let { right = -16, top = -1 } = options;
      if (!value) {
        right = -3;
        top = 3;
      }
      const badgeValue = typeof value === 'function' ? value(props) : value;
      return (
        <View style={StyleSheet.flatten([styles.container, containerStyle])}>
          <WrappedComponent {...props} />

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
    };
    WithBadge.displayName = `WithBadge(${
      WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`;
    return WithBadge;
  };

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
