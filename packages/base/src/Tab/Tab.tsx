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

export interface TabProps extends ViewProps {
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

  /** Style for Tab container */
  containerStyle?: StyleProp<ViewStyle>;

  /** Define the background Variant. */
  variant?: 'primary' | 'default';
}

/**
 * Tabs organize content across different screens, data sets, and other interactions.
 *
 * :::note
 * This component is not for (complex) navigation. Use [React Navigation](https://reactnavigation.org) for that.
 * :::
 * %jsx <Tab.Item title="Tab 1" buttonStyle={(active)=>{backgroundColor: active ? 'red' : 'blue'}} />
 *
 *  */
export const TabBase: RneFunctionComponent<TabProps> = ({
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
  const animationRef = React.useRef(new Animated.Value(0));
  const scrollViewRef = React.useRef<ScrollView>(null);
  const scrollViewPosition = React.useRef(0);
  const validChildren = React.Children.toArray(children);

  const tabItemsPosition = React.useRef<
    Array<{ position: number; width: number }>
  >([]);
  const [tabContainerWidth, setTabContainerWidth] = React.useState(0);

  const scrollHandler = React.useCallback(() => {
    if (tabItemsPosition.current.length > value) {
      let itemStartPosition =
        value === 0 ? 0 : tabItemsPosition.current[value - 1].position;
      let itemEndPosition = tabItemsPosition.current[value].position;

      const scrollCurrentPosition = scrollViewPosition.current;
      const tabContainerCurrentWidth = tabContainerWidth;

      let scrollX = scrollCurrentPosition;

      if (itemStartPosition < scrollCurrentPosition) {
        scrollX += itemStartPosition - scrollCurrentPosition;
      } else if (
        scrollCurrentPosition + tabContainerCurrentWidth <
        itemEndPosition
      ) {
        scrollX +=
          itemEndPosition - (scrollCurrentPosition + tabContainerCurrentWidth);
      }

      scrollViewRef.current.scrollTo({
        x: scrollX,
        y: 0,
        animated: true,
      });
    }
  }, [tabContainerWidth, value]);

  React.useEffect(() => {
    Animated.timing(animationRef.current, {
      toValue: value as number,
      useNativeDriver: true,
      duration: 170,
    }).start();
    scrollable && requestAnimationFrame(scrollHandler);
  }, [animationRef, scrollHandler, value, scrollable]);

  const onScrollHandler = React.useCallback((event) => {
    scrollViewPosition.current = event.nativeEvent.contentOffset.x;
  }, []);

  const indicatorTransitionInterpolate = React.useMemo(() => {
    const countItems = validChildren.length;
    if (countItems < 2 || !tabItemsPosition.current.length) {
      return 0;
    }
    const inputRange = [...Array(countItems).keys()];
    const outputRange = tabItemsPosition.current.map(
      ({ position }) => position
    );
    if (inputRange.length !== outputRange.length) {
      return 0;
    }
    return animationRef.current.interpolate({
      inputRange,
      outputRange: [0, ...outputRange].slice(0, -1),
    });
  }, [animationRef, validChildren]);

  const WIDTH = tabItemsPosition.current[value]?.width;

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
        setTabContainerWidth(layout.width);
      }}
    >
      {React.createElement(scrollable ? ScrollView : React.Fragment, {
        ...(scrollable && {
          horizontal: true,
          ref: scrollViewRef,
          onScroll: onScrollHandler,
          showsHorizontalScrollIndicator: false,
        }),
        children: (
          <>
            {validChildren.map((child, index) => {
              return React.cloneElement(
                child as React.ReactElement<TabItemProps>,
                {
                  onPress: () => onChange(index),
                  onLayout: (event: LayoutChangeEvent) => {
                    const { width } = event.nativeEvent.layout;
                    const previousItemPosition =
                      tabItemsPosition.current[index - 1]?.position || 0;

                    tabItemsPosition.current[index] = {
                      position: previousItemPosition + width,
                      width,
                    };
                  },
                  active: index === value,
                  variant,
                }
              );
            })}
            {!disableIndicator && (
              <Animated.View
                style={[
                  styles.indicator,
                  {
                    backgroundColor: theme?.colors?.secondary,
                    transform: [
                      {
                        translateX: indicatorTransitionInterpolate,
                      },
                    ],
                    width: WIDTH,
                  },
                  indicatorStyle,
                ]}
              />
            )}
          </>
        ),
      })}
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
