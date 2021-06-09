import React from 'react';
import {
  View,
  Animated,
  StyleProp,
  ViewStyle,
  ViewProps,
  StyleSheet,
} from 'react-native';
import Button, { ButtonProps } from '../buttons/Button';
import { RneFunctionComponent } from '../helpers';
import { withTheme } from '../config';
import Color from 'color';

export type TabItemProps = ButtonProps & {
  active?: boolean;
  variant?: 'primary' | 'default';
};

const TabItem: RneFunctionComponent<TabItemProps> = ({
  active,
  theme,
  titleStyle,
  containerStyle,
  buttonStyle,
  variant,
  iconPosition = 'top',
  title,
  ...props
}) => {
  return (
    <Button
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      accessibilityValue={
        typeof title === 'string' ? { text: title } : undefined
      }
      buttonStyle={[styles.buttonStyle, buttonStyle]}
      titleStyle={[
        styles.titleStyle,
        {
          color: variant === 'primary' ? 'white' : theme?.colors?.secondary,
          paddingVertical: !props.icon ? 8 : 2,
        },
        titleStyle,
      ]}
      containerStyle={[
        styles.containerStyle,
        {
          backgroundColor: active
            ? Color(theme?.colors?.secondary).alpha(0.2).rgb().toString()
            : 'transparent',
        },
        containerStyle,
      ]}
      iconPosition={iconPosition}
      title={title}
      {...props}
    />
  );
};

export type TabProps = ViewProps & {
  value?: number;
  onChange?: (value: number) => void;
  disableIndicator?: boolean;
  indicatorStyle?: StyleProp<ViewStyle>;
  variant?: 'primary' | 'default';
};

const TabContainer: RneFunctionComponent<TabProps> = ({
  theme,
  children,
  value,
  onChange = () => {},
  indicatorStyle,
  disableIndicator,
  variant,
  ...props
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
        {...props}
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

interface Tab extends RneFunctionComponent<TabProps> {
  Item: typeof TabItem;
}

const Tab: Tab = Object.assign(TabContainer, {
  Item: TabItem,
});

export { Tab };

export default Object.assign(withTheme(TabContainer, 'Tab'), {
  Item: withTheme(TabItem, 'TabItem'),
});

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
