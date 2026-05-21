import React, { useEffect } from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { RneFunctionComponent, defaultTheme } from '../helpers';
import { ParentProps, TabItemProps } from './Tab.Item';

export interface TabProps extends ViewProps, ParentProps {
  /** Makes Tab Scrolling */
  scrollable?: boolean;

  /** On Index Change Callback. */
  onChange?: (value: number) => void;

  /** Disable the indicator below. */
  disableIndicator?: boolean;

  /** Additional styling for tab indicator. */
  indicatorStyle?: StyleProp<ViewStyle>;

  /** Define the background Variant. */
  variant?: 'primary' | 'default';

  /** active index */
  value?: number;

  /** Animation type */
  animationType?: 'timing' | 'spring';

  /** Animation Config */
  animationConfig?: Partial<
    Animated.TimingAnimationConfig | Animated.SpringAnimationConfig
  >;
}

/**
 * Tabs organize content across different screens, data sets, and other interactions.
 *
 * :::note
 * This component is not for (complex) navigation. Use [React Navigation](https://reactnavigation.org) for that.
 * :::
 * @usage
 * ### Basic Tabs
 *  ```tsx live
 *   function RneTab() {
 *    const [index, setIndex] = React.useState(0);
 *    return (
 *      <>
 *        <Tab value={index} onChange={setIndex} dense>
 *          <Tab.Item>Tab</Tab.Item>
 *          <Tab.Item>Tab</Tab.Item>
 *        </Tab>
 *      </>
 *    );
 *  }
 * ```
 *
 * ### Active Tab Items
 * ```tsx live
* <Tab value={0} scrollable>
*   <Tab.Item
*     containerStyle={(active) => ({
*       backgroundColor: active ? 'red' : undefined,
*     })}
*   >
*     Tab
*   </Tab.Item>
*   <Tab.Item
*     buttonStyle={(active) => ({
*       backgroundColor: active ? 'red' : undefined,
*     })}
*   >
*     Tab
*   </Tab.Item>
* </Tab>
* ```
 *

 *  */

export const TabBase: RneFunctionComponent<TabProps> = ({
  theme = defaultTheme,
  children,
  scrollable = false,
  onChange = () => {},
  indicatorStyle,
  disableIndicator,
  variant = 'primary',
  style,
  dense,
  iconPosition,
  buttonStyle,
  titleStyle,
  containerStyle,
  value: activeIndex = 0,
  animationType = 'spring',
  animationConfig = {},
  ...rest
}) => {
  const translateX = React.useRef(new Animated.Value(0));
  const currentIndex = React.useRef(0);
  const onIndexChangeRef = React.useRef((value: number) => value);

  const setIndicatorRerenderKey = React.useState<number>(0)[1]; //to force re-render the indicator

  const animate = React.useCallback(
    (toValue: number, onDone: (_: number) => void = () => {}) => {
      currentIndex.current = toValue;
      onIndexChangeRef.current?.(toValue);
      //currently we are ignoring the animationConfig types but we need to fix this
      Animated[animationType](translateX.current, {
        //@ts-ignore
        toValue: toValue,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
        duration: 150,
        ...animationConfig,
      }).start(() => {
        onDone?.(toValue);
      });
    },
    [animationConfig, animationType]
  );
  const scrollViewRef = React.useRef<ScrollView>(null);
  const scrollViewPosition = React.useRef(0);
  const validChildren = React.useMemo(
    () => React.Children.toArray(children),
    [children]
  );

  const tabItemPositions = React.useRef<{ position: number; width: number }[]>(
    []
  );

  const [tabContainerWidth, setTabContainerWidth] = React.useState(0);

  const scrollHandler = React.useCallback(
    (currValue: number) => {
      if (tabItemPositions.current.length > currValue) {
        const tab = tabItemPositions.current[currValue];
        const { position, width } = tab;

        const scrollViewWidth = tabContainerWidth;
        const tabCenter = position + width / 2;
        let scrollX = tabCenter - scrollViewWidth / 2;
        const maxScroll =
          tabItemPositions.current.reduce((acc, item) => acc + item.width, 0) -
          scrollViewWidth;

        scrollX = Math.max(0, Math.min(scrollX, maxScroll));

        scrollViewRef.current?.scrollTo({
          x: currValue === 0 ? 0 : scrollX,
          y: 0,
          animated: true,
        });
      }
    },
    [tabContainerWidth]
  );

  useEffect(() => {
    if (
      activeIndex !== currentIndex.current &&
      tabContainerWidth > 0 &&
      tabItemPositions.current.length > 0
    ) {
      //to force re-render the indicator we are using rerenderKey because on initial render the indicator is not visible
      setIndicatorRerenderKey((prev) => prev + 1);
      animate(activeIndex);
    }
    //tabContainerWidth is used so that we know that onLayout has completed also if there is any changes in tabs that get reflected.
  }, [
    activeIndex,
    animate,
    scrollHandler,
    tabContainerWidth,
    setIndicatorRerenderKey,
  ]);

  React.useEffect(() => {
    if (onIndexChangeRef) {
      onIndexChangeRef.current = (changedIndex) => {
        scrollHandler(changedIndex);
        onChange(changedIndex);
        return changedIndex;
      };
    }
  }, [onIndexChangeRef, scrollHandler, onChange]);

  const onScrollHandler = React.useCallback((event) => {
    scrollViewPosition.current = event.nativeEvent.contentOffset.x;
  }, []);

  const indicatorWidth = tabItemPositions.current[activeIndex]?.width;

  const indicatorTranslateX = () => {
    const countItems = validChildren.length;

    if (countItems < 2 || tabItemPositions.current.length !== countItems) {
      return 0;
    }

    const { inputRange, outputRange } = tabItemPositions.current.reduce(
      (prev, curr, index) => {
        prev.inputRange.push(index);
        prev.outputRange.push(
          curr.position + curr.width / 2 - indicatorWidth / 2
        );
        return prev;
      },
      { inputRange: [], outputRange: [] }
    );

    return translateX.current.interpolate({
      inputRange,
      outputRange,
      extrapolate: 'clamp',
    });
  };

  const indicatorScaleX = () => {
    const countItems = validChildren.length;
    if (countItems < 2 || tabItemPositions.current.length !== countItems) {
      return 0;
    }

    const inputRange = [];
    const outputRange = [];

    tabItemPositions.current.reduce((prev, curr, index) => {
      inputRange.push(index);

      outputRange.push(curr.width / prev.width);
      return prev;
    }, tabItemPositions.current[activeIndex]);

    return translateX.current.interpolate({
      inputRange,
      outputRange,
      extrapolate: 'extend',
    });
  };

  return (
    <View
      {...rest}
      accessible
      accessibilityRole="tablist"
      style={[
        variant === 'primary' && {
          backgroundColor: theme?.colors?.primary,
        },
        styles.viewStyle,
        style,
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
                    tabItemPositions.current[index] = {
                      position: 0,
                      width,
                    };
                    if (
                      tabItemPositions.current.filter(Boolean).length ===
                      validChildren.length
                    ) {
                      let cumulativePosition = 0;
                      for (let i = 0; i < validChildren.length; i++) {
                        const item = tabItemPositions.current[i];
                        if (!item) {
                          continue;
                        }
                        item.position = cumulativePosition;
                        cumulativePosition += item.width;
                      }
                    }
                  },
                  active: index === activeIndex,
                  variant,
                  _parentProps: {
                    dense,
                    iconPosition,
                    buttonStyle,
                    containerStyle,
                    titleStyle,
                  },
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
                      { translateX: indicatorTranslateX() },
                      { scaleX: indicatorScaleX() },
                    ],
                    width: indicatorWidth,
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
