import React from 'react';
import {
  Animated,
  View,
  Platform,
  ViewProps,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

type SkeletonProps = {
  circle?: boolean;
  width?: number;
  height?: number;
  animation?: 'none' | 'pulse' | 'wave';
  skeletonStyle?: StyleProp<ViewStyle>;
} & ViewProps;

const AnimationGradient = {
  wave: ['#f5f6f7', '#dedfe0', '#f5f6f7'],
  pulse: ['#dedfe0', '#dedfe0'],
};

const Skeleton: React.FC<SkeletonProps> = ({
  circle,
  width = '100%',
  height,
  animation = 'wave',
  style,
  skeletonStyle,
  ...rest
}) => {
  const animationRef = React.useRef(new Animated.Value(0));

  React.useEffect(() => {
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
    backgroundColor: '#f5f6f7',
    overflow: 'hidden',
    borderRadius: 2,
  },
  skeleton: {
    width: 200,
    height: '100%',
  },
});

export default Skeleton;
