import React from 'react';
import {
  Animated,
  PanResponder,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  PanResponderGestureState,
  GestureResponderEvent,
  useWindowDimensions,
  ViewProps,
} from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';

// TabView.Item
const TabViewItem: RneFunctionComponent<ViewProps> = ({
  children,
  ...props
}) => {
  return <View {...props}>{React.isValidElement(children) && children}</View>;
};

// TabView
export type TabViewProps = {
  value?: number;
  onChange?: (value: number) => any;
  animationType?: 'spring' | 'timing';
  containerStyle?: StyleProp<ViewStyle>;
  tabItemContainerStyle?: StyleProp<ViewStyle>;
  animationConfig?: Omit<
    Animated.SpringAnimationConfig & Animated.TimingAnimationConfig,
    'toValue'
  >;
};

const TabView: RneFunctionComponent<TabViewProps> = ({
  children,
  onChange,
  value = 0,
  animationType = 'spring',
  animationConfig = {},
  containerStyle,
  tabItemContainerStyle,
}) => {
  const { width: screenWidth } = useWindowDimensions();
  const { current: translateX } = React.useRef(new Animated.Value(0));
  const currentIndex = React.useRef(value);
  const length = React.Children.count(children);

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
    const position = dx / -screenWidth;
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
          width: screenWidth * length,
          transform: [
            {
              translateX: translateX.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -screenWidth],
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
          style={StyleSheet.flatten([styles.container, tabItemContainerStyle])}
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
    width: '100%',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});

interface TabView extends RneFunctionComponent<TabViewProps> {
  Item: typeof TabViewItem;
}

const TabViewComponent: TabView = Object.assign(withTheme(TabView, 'TabView'), {
  Item: withTheme(TabViewItem, 'TabViewItem'),
});

export default TabViewComponent;
