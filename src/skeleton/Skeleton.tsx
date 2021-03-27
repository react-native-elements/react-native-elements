import React, { useEffect, useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

import { useTheme, withTheme } from '../config';
import easingTypes from './easingTypes';
import {
  defaultContainerStyle,
  createDefaultLinearGradientProps,
  defaultProps,
} from './defaultConfig';

import type { ViewStyle } from 'react-native';
import type { RneFunctionComponent } from '../helpers';

export type SkeletonProps = {
  ViewComponent?: View;
  backgroundColor?: string;
  skeletonColor?: string;
  duration?: number;
  fluid?: boolean;
  rounded?: boolean;
  height?: number | string;
  width?: number | string;
  containerStyle?: ViewStyle;
  easingType?: keyof typeof easingTypes;
  linearGradientProps?: object;
};

const Skeleton: RneFunctionComponent<SkeletonProps> = (props) => {
  const {
    theme: {
      colors: { primary, secondary },
    },
  } = useTheme();

  useEffect(() => {
    if (linearGradientProps && !ViewComponent) {
      /* istanbul ignore next */
      console.error(
        "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
      );
    }
  });

  const {
    ViewComponent = defaultProps.ViewComponent,
    backgroundColor = secondary,
    skeletonColor = primary,
    duration = defaultProps.duration,
    fluid = defaultProps.fluid,
    rounded = defaultProps.rounded,
    height = defaultProps.height,
    width = defaultProps.width,
    containerStyle = defaultProps.containerStyle,
    easingType = defaultProps.easingType,
    linearGradientProps = defaultProps.linearGradientProps,
  } = props;

  const AnimatedViewComponent = Animated.createAnimatedComponent(
    ViewComponent as typeof React.Component
  ) as Animated.AnimatedComponent<typeof View>;

  const animatedValue = new Animated.Value(0);

  const [animationWidth, setAnimationWidth] = useState(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration,
        easing: easingTypes[easingType] as (value: number) => number,
        useNativeDriver: true,
      })
    ).start();
  });

  return (
    <View
      testID={'skeleton-container-test'}
      style={StyleSheet.flatten([
        {
          backgroundColor,
          height: fluid ? '100%' : height,
          width: fluid ? '100%' : width,
        },
        defaultContainerStyle,
        {
          borderRadius: rounded ? 9999 : defaultContainerStyle.borderRadius,
        },
        containerStyle,
      ])}
      onLayout={({
        nativeEvent: {
          layout: { width: containerWidth },
        },
      }) => {
        setAnimationWidth(containerWidth);
      }}
    >
      <AnimatedViewComponent
        testID={'skeleton-test'}
        style={{
          ...(StyleSheet.absoluteFill as object),
          transform: [
            {
              translateX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-animationWidth, animationWidth],
              }),
            },
          ],
        }}
        {...createDefaultLinearGradientProps(backgroundColor, skeletonColor)}
        {...linearGradientProps}
      />
    </View>
  );
};

export { Skeleton };

export default withTheme(Skeleton, 'Skeleton');
