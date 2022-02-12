import React from 'react';
import {
  View,
  Animated,
  StyleProp,
  ViewStyle,
  ViewProps,
  StyleSheet,
  ScrollView,
  LayoutChangeEvent,
} from 'react-native';
import { defaultTheme, RneFunctionComponent } from '../helpers';
import { TabItemProps } from './Tab.Item';

export type TabBaseProps = ViewProps & {
  /** Child position index value. */
  value?: number;

  /** Makes Tab Scrolling */
  scrollable?: boolean;

  /** On Index Change Callback. */
  onChange?: (value: number) => void;

  /** Disable the indicator below. */
  disableIndicator?: boolean;

  /** Additional styling for tab indicator. */
  indicatorStyle?: StyleProp<ViewStyle>;

  /** Style for container */
  containerStyle?: StyleProp<ViewStyle>;

  /** Define the background Variant. */
  variant?: 'primary' | 'default';
};

/**
 * Tabs organize content across different screens, data sets, and other interactions.
 *
 * :::note
 * This component is not for (complex) navigation. Use [React Navigation](https://reactnavigation.org) for that.
 * :::
 *  */
export const TabBase: RneFunctionComponent<TabBaseProps> = ({
  theme = defaultTheme,
  children,
  value,
  scrollable = false,
  onChange = () => {},
  indicatorStyle,
  disableIndicator,
  variant,
  containerStyle,
  ...rest
}) => {
  const scrollViewRef = React.useRef<ScrollView>(null);
  const scrollViewPosition = React.useRef(0);

  const tabContainerWidth = React.useRef(0);
  const tabItemsWidth = React.useRef<Array<number>>([]);

  const { current: animation } = React.useRef(new Animated.Value(0));

  const scrollHandler = React.useCallback(() => {
    if (tabItemsWidth.current.length > value) {
      let start = value === 0 ? 0 : tabItemsWidth.current[value - 1];
      let end = tabItemsWidth.current[value];

      const scrollCurrentPosition = scrollViewPosition.current;
      const tabContainerCurrentWidth = tabContainerWidth.current;

      let scrollX = scrollCurrentPosition;

      if (start < scrollCurrentPosition) {
        scrollX += start - scrollCurrentPosition;
      } else if (scrollCurrentPosition + tabContainerCurrentWidth < end) {
        scrollX += end - (scrollCurrentPosition + tabContainerCurrentWidth);
      }

      scrollViewRef.current.scrollTo({
        x: scrollX,
        y: 0,
        animated: true,
      });
    }
  }, [value]);

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: value as number,
      useNativeDriver: true,
      duration: 170,
    }).start();

    scrollable && scrollHandler();
  }, [animation, scrollHandler, value, scrollable]);

  const WIDTH = React.useMemo(
    () => tabContainerWidth.current / React.Children.count(children),
    [children]
  );

  const onScrollHandler = React.useCallback((event) => {
    scrollViewPosition.current = event.nativeEvent.contentOffset.x;
  }, []);

  return (
    <View
      {...rest}
      accessibilityRole="tablist"
      style={[
        variant === 'primary' && {
          backgroundColor: theme?.colors?.primary,
        },
        styles.viewStyle,
        containerStyle,
      ]}
      onLayout={({ nativeEvent: { layout } }) => {
        tabContainerWidth.current = layout.width;
      }}
    >
      {scrollable ? (
        <ScrollView
          horizontal
          ref={scrollViewRef}
          onScroll={onScrollHandler}
          showsHorizontalScrollIndicator={false}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(
              child as React.ReactElement<TabItemProps>,
              {
                onPress: () => onChange(index),
                onLayout: (event: LayoutChangeEvent) => {
                  const layout = event.nativeEvent.layout;
                  tabItemsWidth.current[index] =
                    (tabItemsWidth.current[index - 1] || 0) + layout.width;
                },
                active: index === value,
                variant,
              }
            );
          })}
        </ScrollView>
      ) : (
        React.Children.map(children, (child, index) => {
          return React.cloneElement(child as React.ReactElement<TabItemProps>, {
            onPress: () => onChange(index),
            active: index === value,
            variant,
          });
        })
      )}

      {!disableIndicator && !scrollable && (
        <Animated.View
          style={[
            styles.indicator,
            {
              backgroundColor: theme?.colors?.secondary,
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, WIDTH],
                  }),
                },
              ],
            },
            indicatorStyle,
          ]}
        >
          <View style={{ width: WIDTH }} />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  titleStyle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    textTransform: 'uppercase',
  },
  containerStyle: {
    flex: 1,
    borderRadius: 0,
  },
  viewStyle: {
    flexDirection: 'row',
    position: 'relative',
  },
  indicator: {
    display: 'flex',
    position: 'absolute',
    height: 2,
    bottom: 0,
  },
});

TabBase.displayName = 'Tab';
