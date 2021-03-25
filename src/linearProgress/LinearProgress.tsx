import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  Animated,
  Platform,
  ViewProps,
} from 'react-native';
import { FullTheme } from '../config';
import Color from 'color';
import { RneFunctionComponent } from '../helpers';

export type LinearProgressProps = {
  value?: number; // 0 to 1
  variant?: 'determinate' | 'indeterminate';
  color?: 'primary' | 'secondary' | string;
  trackColor?: string;
  style?: StyleProp<ViewStyle>;
  theme?: FullTheme;
} & ViewProps;

const LinearProgress: RneFunctionComponent<LinearProgressProps> = ({
  value = 0,
  variant = 'indeterminate',
  color = 'secondary',
  style,
  theme,
  trackColor,
  ...props
}) => {
  const [width, setWidth] = React.useState<number>(0);

  const { current: animation } = React.useRef<Animated.Value>(
    new Animated.Value(0)
  );

  const intermediate = React.useRef<Animated.CompositeAnimation>();

  const startAnimation = React.useCallback(() => {
    if (variant === 'indeterminate') {
      intermediate.current = Animated.timing(animation, {
        duration: 2000,
        toValue: 1,
        useNativeDriver: true,
        isInteraction: false,
      });
      animation.setValue(0);

      Animated.loop(intermediate.current).start();
    } else {
      Animated.timing(animation, {
        duration: 1000,
        toValue: value || 0,
        useNativeDriver: Platform.OS !== 'web',
        isInteraction: false,
      }).start();
    }
  }, [animation, variant, value]);

  const tintColor =
    color === 'secondary' || color === 'primary'
      ? theme.colors[color]
      : Color(color).rgb().string() || theme.colors.secondary;

  const trackTintColor =
    trackColor || Color(tintColor).alpha(0.4).rgb().string();

  React.useEffect(() => {
    startAnimation();
  }, [startAnimation, value]);

  return (
    <View
      {...props}
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
      }}
      style={[
        {
          height: 4,
          overflow: 'hidden',
          width: '100%',
          backgroundColor: trackTintColor,
        },
        style,
      ]}
    >
      <Animated.View
        style={{
          transform: [
            {
              translateX: animation.interpolate(
                variant === 'indeterminate'
                  ? {
                      inputRange: [0, 1],
                      outputRange: [-width, 0.5 * width],
                    }
                  : {
                      inputRange: [0, 1],
                      outputRange: [-0.5 * width, 0],
                    }
              ),
            },
            {
              scaleX: animation.interpolate(
                variant === 'indeterminate'
                  ? {
                      inputRange: [0, 0.5, 1],
                      outputRange: [0.0001, 1, 0.001],
                    }
                  : {
                      inputRange: [0, 1],
                      outputRange: [0.0001, 1],
                    }
              ),
            },
          ],
          backgroundColor: tintColor as string,
          flex: 1,
        }}
      />
    </View>
  );
};

export default LinearProgress;
