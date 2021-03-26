import React, { useEffect, useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

import { useTheme } from '../config';
import easingTypes from './easingTypes';
import {
  defaultContainerStyle,
  defaultLinearGradientProps,
} from './defaultConfig';

import type { ViewStyle } from 'react-native';
import type { RneFunctionComponent } from '../helpers';

type SkeletonProps = {
  ViewComponent?: View;
  backgroundColor?: string;
  skeletonColor?: string;
  duration?: number;
  fluid?: boolean;
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
      console.error(
        "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
      );
    }
  });

  const {
    ViewComponent = View,
    backgroundColor = secondary,
    skeletonColor = primary,
    duration = 1000,
    fluid = false,
    height = 20,
    width = '100%',
    containerStyle = {},
    easingType = 'ease',
    linearGradientProps = {},
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
      style={{
        backgroundColor,
        height: fluid ? '100%' : height,
        width: fluid ? '100%' : width,
        ...(defaultContainerStyle as object),
        ...containerStyle,
      }}
      onLayout={({
        nativeEvent: {
          layout: { width: containerWidth },
        },
      }) => {
        setAnimationWidth(containerWidth);
      }}
    >
      <AnimatedViewComponent
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
        {...defaultLinearGradientProps(backgroundColor, skeletonColor)}
        {...linearGradientProps}
      />
    </View>
  );
};

export default Skeleton;
