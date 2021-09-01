import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  Animated,
  Platform,
  ViewProps,
} from 'react-native';
import Color from 'color';
import { RneFunctionComponent } from '../helpers';

/**
 * Keep value between 0 and 1
 */
const clamp = (value: number): number => Math.max(0, Math.min(value, 1));

export type LinearProgressProps = ViewProps & {
  /** The value of the progress indicator for the determinate variant. Value between 0 and 1. */
  value?: number;

  /** Type of button. */
  variant?: 'determinate' | 'indeterminate';

  /** Color for linear progress. */
  color?: 'primary' | 'secondary' | string;

  /** Track color for linear progress. */
  trackColor?: string;

  /** Add additional styling for linear progress component. */
  style?: StyleProp<ViewStyle>;

  /** Animation duration */
  animation?:
    | {
        duration?: number;
      }
    | boolean;
};

/** Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.
 * They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen.
 * Also receives all [View](https://reactnative.dev/docs/view#props) props */
export const LinearProgress: RneFunctionComponent<LinearProgressProps> = ({
  value,
  /** If value is given then variant default as determinate */
  variant = value === undefined ? 'indeterminate' : 'determinate',
  color = 'secondary',
  style,
  theme,
  trackColor,
  animation = { duration: 2000 },
  ...rest
}) => {
  const [width, setWidth] = React.useState<number>(0);

  const { current: transition } = React.useRef<Animated.Value>(
    new Animated.Value(0)
  );

  const intermediate = React.useRef<Animated.CompositeAnimation>();

  const startAnimation = React.useCallback(() => {
    if (variant === 'indeterminate') {
      intermediate.current = Animated.timing(transition, {
        duration: typeof animation !== 'boolean' ? animation.duration : 2000,
        toValue: 1,
        useNativeDriver: true,
        isInteraction: false,
      });
      transition.setValue(0);
      Animated.loop(intermediate.current).start();
    } else {
      Animated.timing(transition, {
        duration: typeof animation !== 'boolean' ? animation.duration : 1000,
        toValue: value || 0,
        useNativeDriver: Platform.OS !== 'web',
        isInteraction: false,
      }).start();
    }
  }, [variant, transition, animation, value]);

  const tintColor =
    color === 'secondary' || color === 'primary'
      ? theme?.colors?.[color]
      : Color(color).rgb().string() || theme?.colors?.secondary;

  const trackTintColor =
    trackColor || Color(tintColor).alpha(0.4).rgb().string();

  React.useEffect(() => {
    if (animation) {
      startAnimation();
    }
  }, [animation, startAnimation]);

  return (
    <View
      testID="RNE__LinearProgress_Bar"
      accessible
      accessibilityRole="progressbar"
      accessibilityValue={{
        now: clamp(value),
        min: 0,
        max: 1,
      }}
      {...rest}
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
      }}
      style={[
        {
          height: 4,
          overflow: 'hidden',
          width: '100%',
          backgroundColor: trackTintColor,
          position: 'relative',
        },
        style,
      ]}
    >
      {animation ? (
        <Animated.View
          testID="RNE__LinearProgress_Progress"
          style={{
            transform: [
              {
                translateX: transition.interpolate(
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
                scaleX: transition.interpolate(
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
      ) : (
        <View
          testID="RNE__LinearProgress_Progress"
          style={{
            flex: 1,
            width: width * clamp(value || 0),
            backgroundColor: tintColor as string,
          }}
        />
      )}
    </View>
  );
};

LinearProgress.displayName = 'LinearProgress';
