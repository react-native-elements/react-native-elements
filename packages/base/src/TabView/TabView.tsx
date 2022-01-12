import React from 'react';
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

export type TabViewBaseProps = {
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
};

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
}) => {
  const { current: translateX } = React.useRef(new Animated.Value(0));
  const currentIndex = React.useRef(value);
  const length = React.Children.count(children);
  const window = useWindowDimensions();

  const onPanResponderRelease = (
    _: GestureResponderEvent,
    { dx, dy }: PanResponderGestureState
  ) => {
    if (
      (dx > 0 && currentIndex.current <= 0) ||
      (dx < 0 && currentIndex.current >= length - 1)
    ) {
      return;
    }
    if (Math.abs(dy) > Math.abs(dx)) {
      return;
    }
    const position = dx / -window.width;
    const next = position > value ? Math.ceil(position) : Math.floor(position);
    onChange?.(currentIndex.current + next);
  };

  const { current: panResponder } = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => true,
      onPanResponderRelease,
    })
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
              translateX: translateX.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -window.width],
              }),
            },
          ],
        },
        containerStyle,
      ])}
      {...panResponder.panHandlers}
    >
      {React.Children.map(children, (child) => (
        <View
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
