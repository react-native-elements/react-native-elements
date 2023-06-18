import React from 'react';
import {
  Animated,
  Easing,
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

  /** Define the background Variant. */
  variant?: 'primary' | 'default';
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

const TabContext = React.createContext(
  {} as {
    __translateX: React.MutableRefObject<Animated.Value>;
    __currentIndex: React.MutableRefObject<number>;
    changeIndex: (toValue: number) => void;
  }
);

export const Tabs = ({
  children,
  animationType = 'spring',
  animationConfig = {},
}) => {
  const translateX = React.useRef(new Animated.Value(0));
  const currentIndex = React.useRef(0);
  const onIndexChangeRef = React.useRef((value: number) => value);

  const animate = React.useCallback(
    (toValue: number, onDone) => {
      currentIndex.current = toValue;
      onIndexChangeRef.current?.(toValue);
      Animated[animationType](translateX.current, {
        toValue,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
        duration: 150,
        ...animationConfig,
      }).start();
      onDone?.(toValue);
    },
    [animationConfig, animationType]
  );

  return (
    <TabContext.Provider
      value={{
        changeIndex: animate,
        __translateX: translateX,
        __currentIndex: currentIndex,
        __onIndexChangeRef: onIndexChangeRef,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const useTabsInternal = () => React.useContext(TabContext);

export const TabBase: RneFunctionComponent<TabProps> = ({
  theme = defaultTheme,
  children,
  value = 0,
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
  defaultActive = 0,
  ...rest
}) => {
  const {
    changeIndex: animate,
    __translateX: translateX,
    __currentIndex: currentIndex,
    __onIndexChangeRef,
  } = useTabsInternal();
  const scrollViewRef = React.useRef<ScrollView>(null);
  const scrollViewPosition = React.useRef(0);
  const validChildren = React.useMemo(
    () => React.Children.toArray(children),
    [children]
  );

  React.useEffect(() => {
    if (__onIndexChangeRef) {
      __onIndexChangeRef.current = scrollHandler;
    }
  }, [__onIndexChangeRef, scrollHandler]);

  const tabItemPositions = React.useRef<{ position: number; width: number }[]>(
    []
  );

  const [tabContainerWidth, setTabContainerWidth] = React.useState(0);

  const scrollHandler = React.useCallback(
    (currValue: number) => {
      if (tabItemPositions.current.length > currValue) {
        let itemStartPosition =
          currValue === 0
            ? 0
            : tabItemPositions.current[currValue - 1].position;
        let itemEndPosition = tabItemPositions.current[currValue].position;

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
            itemEndPosition -
            (scrollCurrentPosition + tabContainerCurrentWidth);
        }

        scrollViewRef.current?.scrollTo({
          x: scrollX,
          y: 0,
          animated: true,
        });
      }
    },
    [tabContainerWidth]
  );

  const onScrollHandler = React.useCallback((event) => {
    scrollViewPosition.current = event.nativeEvent.contentOffset.x;
  }, []);

  const indicatorWidth = tabItemPositions.current[defaultActive]?.width;

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
    }, tabItemPositions.current[defaultActive]);

    return translateX.current.interpolate({
      inputRange,
      outputRange,
      extrapolate: 'extend',
    });
  };

  return (
    <View
      {...rest}
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
            {validChildren.map((child, index) => (
              <View
                key={index}
                style={{
                  flex: 1,
                  flexDirection: 'column',
                }}
                onLayout={({ nativeEvent: { layout } }) => {
                  tabItemPositions.current[index] = {
                    position: layout.x,
                    width: layout.width,
                  };
                }}
              >
                {React.cloneElement(child as React.ReactElement<TabItemProps>, {
                  onPress: () => {
                    animate(index);
                    onChange(index);
                  },
                  active: index === currentIndex.current,
                  variant,
                  _parentProps: {
                    dense,
                    iconPosition,
                    buttonStyle,
                    containerStyle,
                    titleStyle,
                  },
                })}
              </View>
            ))}
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
