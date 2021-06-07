import React from 'react';
import {
  Animated,
  PanResponder,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  PanResponderGestureState,
  GestureResponderEvent,
} from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent, ScreenWidth } from '../helpers';

export type TabViewItemProps = { containerStyle?: StyleProp<ViewStyle> };

const TabViewItem: RneFunctionComponent<TabViewItemProps> = ({
  children,
  containerStyle,
}) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

export type TabViewProps = {
  value?: number;
  onChange?: (value: number) => any;
};

const TabView: RneFunctionComponent<TabViewProps> = ({
  children,
  onChange,
  value = 0,
}) => {
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
    const position = dx / -ScreenWidth;
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

  const animate = React.useCallback(
    (index?: number) => {
      Animated.spring(translateX, {
        toValue: index || value,
        useNativeDriver: true,
      }).start();
    },
    [translateX, value]
  );

  React.useEffect(() => {
    animate();
    currentIndex.current = value;
  }, [animate, value]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          width: ScreenWidth * length,
          transform: [
            {
              translateX: translateX.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -ScreenWidth],
              }),
            },
          ],
        },
      ]}
      {...panResponder.panHandlers}
    >
      {React.Children.map(children, (child) => (
        <View>{child}</View>
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    width: ScreenWidth,
  },
});

interface TabView extends RneFunctionComponent<TabViewProps> {
  Item: typeof TabViewItem;
}

const Tab: TabView = Object.assign(TabView, {
  Item: TabViewItem,
});

export { Tab };

export default Object.assign(withTheme(TabView, 'Tab'), {
  Item: withTheme(TabViewItem, 'TabItem'),
});
