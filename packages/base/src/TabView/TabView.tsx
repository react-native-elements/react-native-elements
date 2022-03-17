import React, { useEffect } from 'react';
import {
  Animated,
  PanResponder,
  View,
  StyleSheet,
  PanResponderGestureState,
  GestureResponderEvent,
  useWindowDimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { RneFunctionComponent } from '../helpers';

export interface TabViewBaseProps {
  /** Child position index value. */
  value?: number;

  /** On Index Change Callback. */
  onChange?: (value: number) => any;

  /** Choose the animation type among `spring` and `timing`. This is visible when there is tab change. */
  animationType?: 'spring' | 'timing';

  /** Define the animation configurations. */
  animationConfig?: Omit<
    Animated.SpringAnimationConfig & Animated.TimingAnimationConfig,
    'toValue'
  >;

  /** Styling for Component container. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Styling for TabView.Item Component container. */
  tabItemContainerStyle?: StyleProp<ViewStyle>;

  /** Swipe disabled or not */
  disableSwipe?: Boolean;

  /** Disables transition */
  disableTransition?: Boolean;
}

/** Tabs organize content across different screens, data sets, and other interactions.
 * TabView enables swipeable tabs. */
export const TabViewBase: RneFunctionComponent<TabViewBaseProps> = ({
  children,
  onChange,
  value = 0,
  animationType = 'spring',
  animationConfig = {},
  containerStyle,
  tabItemContainerStyle,
  disableSwipe = false,
  disableTransition = false,
}) => {
  const { current: translateX } = React.useRef(new Animated.Value(0));
  const currentIndex = React.useRef(value);
  const validChildren = React.Children.toArray(children);
  const length = validChildren.length;
  const window = useWindowDimensions();

  useEffect(() => {
    if (currentIndex.current > length - 1) {
      onChange(length - 1);
    }
  }, [length, onChange]);

  const onPanResponderRelease = React.useCallback(
    (_: GestureResponderEvent, { dx, dy }: PanResponderGestureState) => {
      if (
        (dx > 0 && currentIndex.current <= 0) ||
        (dx < 0 && currentIndex.current >= length - 1)
      ) {
        return;
      }
      if (Math.abs(dy) > Math.abs(dx)) {
        return;
      }

      onChange?.(currentIndex.current + (dx > 0 ? -1 : 1));
    },
    [length, onChange]
  );

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => true,
        onPanResponderRelease,
      }),
    [onPanResponderRelease]
  );

  const animate = React.useCallback(() => {
    Animated[animationType](translateX, {
      toValue: value,
      useNativeDriver: true,
      ...animationConfig,
    }).start();
  }, [translateX, value, animationType, animationConfig]);

  React.useEffect(() => {
    animate();
    currentIndex.current = value;
  }, [animate, value]);

  return (
    <Animated.View
      testID="tabView-test"
      style={StyleSheet.flatten([
        styles.container,
        {
          width: window.width * length,
          transform: [
            {
              translateX: disableTransition
                ? -value * window.width
                : translateX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -window.width],
                  }),
            },
          ],
        },
        containerStyle,
      ])}
      {...(!disableSwipe && panResponder.panHandlers)}
    >
      {validChildren.map((child, index) => (
        <View
          key={index}
          style={StyleSheet.flatten([
            styles.container,
            { width: window.width },
            tabItemContainerStyle,
          ])}
        >
          {child}
        </View>
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});

TabViewBase.displayName = 'TabView';
