import React from 'react';
import {
  Animated,
  PanResponder,
  View,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {
  RneFunctionComponent,
  ScreenWidth,
} from 'react-native-elements/dist/helpers';

export type TabViewItemProps = { containerStyle?: StyleProp<ViewStyle> };
export const TabViewItem: RneFunctionComponent<TabViewItemProps> = ({
  children,
  containerStyle,
}) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

export type TabViewProps = {
  value?: number;
  onChange?: (value: number) => any;
};

export const TabView: RneFunctionComponent<TabViewProps> = ({
  children,
  onChange,
  value = 0,
}) => {
  const { current: translateX } = React.useRef(new Animated.Value(0));
  const { current: panX } = React.useRef(new Animated.Value(0));
  const length = React.Children.count(children);

  const { current: panResponder } = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => true,
      onPanResponderMove(_, gestureState) {
        if (
          // swiping left
          (gestureState.dx > 0 && value <= 0) ||
          // swiping right
          (gestureState.dx < 0 && value >= length - 1)
        ) {
          return;
        }

        // @ts-expect-error:
        const position = (panX._offset + gestureState.dx) / -ScreenWidth;
        const next =
          position > value ? Math.ceil(position) : Math.floor(position);
        console.log({ value, next, position });
        onChange?.(value + next);
        panX.setValue(gestureState.dx);
      },
      onPanResponderRelease(_, {}) {
        panX.flattenOffset();
        console.log('saf');
      },
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
