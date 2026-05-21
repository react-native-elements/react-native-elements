import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, ViewProps, ModalProps } from 'react-native';

export interface BottomSheetAnimationConfigProps {
  animationDuration: number;
  isVisible: boolean;
  animationType: ModalProps['animationType'];
  easing?: Animated.TimingAnimationConfig['easing'];
}

const useBottomSheetAnimationConfig = ({
  animationDuration,
  isVisible,
  animationType,
  easing: _easing,
}: BottomSheetAnimationConfigProps) => {
  const [isVisibleWithAnimationDelay, setIsVisibleWithAnimationDelay] =
    useState(isVisible);
  const fadeValue = useRef(new Animated.Value(0)).current;
  const translateYValue = useRef(new Animated.Value(0)).current;
  const [contentContainerHeight, setContentContainerHeight] = useState(0);
  const easing = useRef(_easing).current;

  const animate = useCallback(
    (visible) => {
      if (visible) {
        setIsVisibleWithAnimationDelay(true);
      }
      if (!contentContainerHeight) {
        return null;
      }
      const fadeAnimation = Animated.timing(fadeValue, {
        toValue: visible ? 1 : 0,
        duration: animationDuration,
        easing,
        useNativeDriver: true,
      });
      fadeAnimation.start(
        !visible ? () => setIsVisibleWithAnimationDelay(false) : undefined
      );

      const translateAnimation = Animated.timing(translateYValue, {
        toValue: visible ? 0 : contentContainerHeight,
        duration: animationDuration,
        easing,
        useNativeDriver: true,
      });
      if (animationType === 'slide') {
        translateAnimation.start();
      }

      return () => {
        fadeAnimation.stop();
        translateAnimation.stop();
      };
    },
    [
      animationDuration,
      animationType,
      contentContainerHeight,
      easing,
      fadeValue,
      translateYValue,
    ]
  );

  useEffect(() => {
    if (animationType === 'none') {
      setIsVisibleWithAnimationDelay(isVisible);
      fadeValue.setValue(1);
      translateYValue.setValue(0);
      return;
    }

    animate(isVisible);
  }, [animate, animationType, fadeValue, isVisible, translateYValue]);

  const onContentContainerLayout: ViewProps['onLayout'] = useCallback(
    (e) => {
      /**
       * !!! Warning !!!
       * Following code block e.persist is added to mitigate event-pooling error
       * if user open and closes bottom sheet too frequently then this error happens so we need to add check if e.native event is not null
       * but that will throw a warning to add e.persist
       *
       * this is temporary fix until this is fixed in react native core.
       *
       * https://github.com/expo/expo/issues/19999
       * https://github.com/facebook/react-native/issues/35599
       *
       */
      if (e.nativeEvent) {
        e.persist();
      }
      setContentContainerHeight((prev) => {
        if (!prev && animationType !== 'none') {
          translateYValue.setValue(e.nativeEvent.layout.height);
        }
        return e.nativeEvent.layout.height;
      });
    },
    [animationType, translateYValue]
  );

  return {
    onContentContainerLayout,
    isVisibleWithAnimationDelay,
    fadeValue,
    translateYValue,
    contentContainerHeight,
  };
};

export default useBottomSheetAnimationConfig;
