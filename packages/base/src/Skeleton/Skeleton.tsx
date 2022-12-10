import React, { useEffect, useRef } from 'react';
import {
  Animated,
  View,
  Platform,
  ViewProps,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { defaultTheme, RneFunctionComponent } from '../helpers';
import Color from 'color';

export interface SkeletonProps extends ViewProps {
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
   * Custom Linear Gradient Component
   * @type React Component
   */
  LinearGradientComponent?: React.ComponentType<any>;
}

export const Skeleton: RneFunctionComponent<SkeletonProps> = ({
  circle,
  width = '100%',
  height,
  animation = 'pulse',
  style,
  skeletonStyle,
  theme = defaultTheme,
  LinearGradientComponent,
  ...rest
}) => {
  const animationRef = useRef(new Animated.Value(0));
  const animationLoop = useRef<Animated.CompositeAnimation>();

  const [layoutWidth, setLayoutWidth] = React.useState<number>(0);

  useEffect(() => {
    animationLoop.current = Animated.timing(animationRef.current, {
      toValue: 2,
      delay: 400,
      duration: 1500,
      useNativeDriver: !!Platform.select({
        web: false,
        native: true,
      }),
    });
    animationRef.current.setValue(0);
    Animated.loop(animationLoop.current).start();
  }, []);

  return (
    <View
      accessibilityRole="none"
      accessibilityLabel="loading..."
      accessible={false}
      testID="RNE__Skeleton"
      onLayout={({ nativeEvent }) => {
        setLayoutWidth(nativeEvent.layout.width);
      }}
      style={[
        styles.container,
        {
          width: width,
          height: height || 12,
          backgroundColor: theme?.colors?.grey4,
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
        <Animated.View
          style={[
            styles.skeleton,
            !LinearGradientComponent && {
              backgroundColor: Color(theme?.colors?.grey4)
                .darken(0.1)
                .rgb()
                .string(),
            },
            animation === 'pulse' && {
              width: '100%',
              opacity: animationRef.current.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [1, 0, 1],
              }),
            },
            animation === 'wave' && {
              transform: [
                {
                  translateX: animationRef.current.interpolate({
                    inputRange: [0, 2],
                    outputRange: [-layoutWidth * 2, layoutWidth * 2],
                  }),
                },
              ],
            },
            skeletonStyle,
          ]}
        >
          {LinearGradientComponent && (
            <LinearGradientComponent
              style={styles.skeleton}
              colors={[
                theme.colors.grey4,
                theme.colors.grey5,
                theme.colors.grey4,
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          )}
        </Animated.View>
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
    height: '100%',
  },
});
