import React, { useMemo, useEffect, useRef } from 'react';
import {
  Animated,
  View,
  Platform,
  ViewProps,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
// TODO: find way to remove these deps
import Color from 'color';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

export type SkeletonProps = {
  /**
   * show circular variant
   */
  circle?: boolean;
  /**
   * Width of Skeleton View
   */
  width?: number;
  /**
   * Height of Skeleton View
   * @default 12
   */
  height?: number;
  /**
   * Type of animation
   */
  animation?: 'none' | 'pulse' | 'wave';
  /**
   * Custom style for skeleton gradient
   */
  skeletonStyle?: StyleProp<ViewStyle>;
  /**
   * Skeleton color
   * @default theme.colors.grey5
   */
  color?: string;
  /**
   * @ignore
   */
  theme?: {
    colors?: {
      grey5?: string;
    };
  } & any;
} & ViewProps;

/**
 * A placeholder preview for content before the data gets loaded, an alternative for spinners.
 *
 * @installation @react-native-elements/skeleton
 * @usage
 * <Skeleton variant="circular" width={40} height={40} />
 * <Skeleton variant="rectangular" width={210} height={118} />
 */
const Skeleton: React.FC<SkeletonProps> = ({
  circle,
  width = '100%',
  height,
  animation = 'wave',
  style,
  skeletonStyle,
  theme,
  color = theme?.colors?.grey5 || '#dedfe0',
  ...rest
}) => {
  const animationRef = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(animationRef.current, {
        toValue: 2,
        delay: 400,
        duration: 1500,
        useNativeDriver: !!Platform.select({
          web: false,
          native: true,
        }),
      })
    ).start();
  }, []);

  const AnimationGradient = useMemo(() => {
    const alphaColor = Color(color).alpha(0.4);
    return {
      wave: [alphaColor, color, alphaColor],
      pulse: [color, color],
    };
  }, [color]);

  return (
    <View
      accessibilityRole="none"
      accessibilityLabel="loading..."
      accessible={false}
      testID="RNE__Skeleton"
      style={[
        styles.container,
        {
          width: width,
          height: height || 12,
          backgroundColor: '#f5f6f7',
        },
        circle && {
          borderRadius: 50,
          height: height || width,
        },
        style,
      ]}
      {...rest}
    >
      {animation !== 'none' && (
        <AnimatedGradient
          colors={AnimationGradient[animation]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.skeleton,
            animation === 'pulse' && {
              width: '100%',
              opacity: animationRef.current.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [1, 0.3, 1],
              }),
            },
            animation === 'wave' && {
              transform: [
                {
                  translateX: animationRef.current.interpolate({
                    inputRange: [0, 2],
                    outputRange: ['-150%', '150%'],
                  }),
                },
              ],
            },
            skeletonStyle,
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 2,
  },
  skeleton: {
    width: 200,
    height: '100%',
  },
});

export default Skeleton;
