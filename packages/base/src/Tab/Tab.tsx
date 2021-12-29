import React from 'react';
import {
  View,
  Animated,
  StyleProp,
  ViewStyle,
  ViewProps,
  StyleSheet,
} from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { TabItemProps } from './Tab.Item';

export type TabBaseProps = ViewProps & {
  /** Child position index value. */
  value?: number;

  /** On Index Change Callback. */
  onChange?: (value: number) => void;

  /** Disable the indicator below. */
  disableIndicator?: boolean;

  /** Additional styling for tab indicator. */
  indicatorStyle?: StyleProp<ViewStyle>;

  /** Define the background Variant. */
  variant?: 'primary' | 'default';
};

/** Tabs organize content across different screens, data sets, and other interactions. */
export const TabBase: RneFunctionComponent<TabBaseProps> = ({
  theme,
  children,
  value,
  onChange = () => {},
  indicatorStyle,
  disableIndicator,
  variant,
  ...rest
}) => {
  const [dim, setDim] = React.useState({ width: 0 });
  const { current: animation } = React.useRef(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: value as number,
      useNativeDriver: true,
      duration: 170,
    }).start();
  }, [animation, value]);

  const WIDTH = dim.width / React.Children.count(children);

  return (
    <>
      <View
        {...rest}
        accessibilityRole="tablist"
        style={[
          styles.viewStyle,
          variant === 'primary' && {
            backgroundColor: theme?.colors?.primary,
          },
        ]}
        onLayout={({ nativeEvent: { layout } }) => setDim(Object(layout))}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child as React.ReactElement<TabItemProps>, {
            onPress: () => onChange(index),
            active: index === value,
            variant,
          });
        })}
        {!disableIndicator && (
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
    </>
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
