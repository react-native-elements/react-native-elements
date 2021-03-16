import React from 'react';
import { View, StyleProp, ViewStyle, Animated } from 'react-native';
import { withTheme, FullTheme } from '../config';
import Color from 'color';

export type LinearProgressProps = {
  value?: number; // 0 to 1
  variant?: 'determinate' | 'indeterminate';
  color?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
  theme?: FullTheme;
};

const LinearProgress: React.FunctionComponent<LinearProgressProps> = ({
  value,
  variant,
  style,
  theme,
  color,
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
        useNativeDriver: true,
        isInteraction: false,
      }).start();
    }
  }, [animation, variant, value]);

  const tintColor =
    theme.colors[color === 'secondary' ? 'secondary' : 'primary'];
  const trackTintColor = Color(tintColor).alpha(0.58).rgb().string();

  React.useEffect(() => {
    startAnimation();
  }, [startAnimation, value]);

  return (
    <View
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
          backgroundColor: tintColor,
          flex: 1,
        }}
      />
    </View>
  );
};

export default withTheme(LinearProgress, 'linearProgress');
