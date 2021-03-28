// @ts-nocheck
import React, { VFC, useEffect, useState, useRef } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  PanResponder,
  Platform,
  ViewStyle,
  StyleProp,
  // PanResponderInstance,
} from 'react-native';
import { ThemeProps, withTheme } from '../config';

const TRACK_SIZE = 4;
const THUMB_SIZE = 40;
const TRACK_STYLE = Platform.select({ web: 0, default: -1 });
const DEFAULT_ANIMATION_CONFIGS = {
  spring: {
    friction: 7,
    tension: 100,
    useNativeDriver: false,
  },
  timing: {
    duration: 150,
    easing: Easing.inOut(Easing.ease),
    delay: 0,
    useNativeDriver: false,
  },
};

const getBoundedValue = (
  value: number,
  maximumValue: number,
  minimumValue: number
) => Math.max(Math.min(value, maximumValue), minimumValue);

class Rect {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  containsPoint(x: number, y: number) {
    return (
      x >= this.x &&
      y >= this.y &&
      x <= this.x + this.width &&
      y <= this.y + this.height
    );
  }
}

type Sizable = {
  width: number;
  height: number;
};

export type SliderProps = {
  value?: number;
  disabled?: boolean;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  minimumTrackTintColor?: string;
  maximumTrackTintColor?: string;
  allowTouchTrack?: boolean;
  thumbTintColor?: string;
  thumbTouchSize?: Sizable;
  onValueChange?(value: number): void;
  onSlidingStart?(value: number): void;
  onSlidingComplete?(value: number): void;
  style?: StyleProp<ViewStyle>;
  trackStyle?: StyleProp<ViewStyle>;
  thumbStyle?: StyleProp<ViewStyle>;
  thumbProps?: any;
  debugTouchArea?: boolean;
  animateTransitions?: boolean;
  animationType?: 'spring' | 'timing';
  orientation?: 'horizontal' | 'vertical';
  animationConfig?:
    | Animated.TimingAnimationConfig
    | Animated.SpringAnimationConfig;
  containerStyle?: StyleProp<ViewStyle>;
};

type SliderState = {
  containerSize: Sizable;
  trackSize: Sizable;
  thumbSize: Sizable;
  allMeasured: boolean;
  value: Animated.Value;
};

const Slider: VFC<
  SliderProps & Partial<ThemeProps<SliderProps>>,
  SliderState
> = (props) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: handleMoveShouldSetPanResponder,
      onPanResponderGrant: handlePanResponderGrant,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderEnd,
      onPanResponderTerminationRequest: handlePanResponderRequestEnd,
      onPanResponderTerminate: handlePanResponderEnd,
    })
  ).current;

  const isVertical = useRef(props.orientation === 'vertical').current;

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [trackSize, setTrackSize] = useState({ width: 0, height: 0 });
  const [thumbSize, setThumbSize] = useState({ width: 0, height: 0 });
  const [allMeasured, setAllMeasured] = useState(false);
  const [value, setValue] = useState(
    new Animated.Value(
      getBoundedValue(props.value, props.maximumValue, props.minimumValue)
    )
  );

  useEffect(() => {
    const newValue = getBoundedValue(
      props.value,
      props.maximumValue,
      props.minimumValue
    );
    if (props.value !== newValue) {
      if (props.animateTransitions) {
        setCurrentValueAnimated(newValue);
      } else {
        setCurrentValue(newValue);
      }
    }
  }, [props.value]);

  const setCurrentValue = (newValue) => {
    value.setValue(newValue);
  };

  const setCurrentValueAnimated = (newValue) => {
    const { animationType } = props;
    const animationConfig = Object.assign(
      {},
      DEFAULT_ANIMATION_CONFIGS[animationType],
      props.animationConfig,
      {
        toValue: newValue,
      }
    );
    Animated[animationType](newValue, animationConfig).start();
  };

  const handleMoveShouldSetPanResponder = () => {
    // Should we become active when the user moves a touch over the thumb?
    if (!TRACK_STYLE) {
      return true;
    }
    return false;
  };

  const handlePanResponderGrant = () => {
    getThumbLeft(getCurrentValue());
    // _previousLeft = getThumbLeft(getCurrentValue());
    fireChangeEvent('onSlidingStart');
  };

  const handlePanResponderMove = (_, gestureState) => {
    if (props.disabled) {
      return;
    }
    setCurrentValue(getValue(gestureState));
    fireChangeEvent('onValueChange');
  };

  const handlePanResponderRequestEnd = () => {
    // Should we allow another component to take over this pan?
    return false;
  };

  const handlePanResponderEnd = (_, gestureState) => {
    if (props.disabled) {
      return;
    }
    setCurrentValue(getValue(gestureState));
    fireChangeEvent('onSlidingComplete');
  };

  const thumbHitTest = ({ nativeEvent }) => {
    const thumbTouchRect = getThumbTouchRect();
    return thumbTouchRect.containsPoint(
      nativeEvent.locationX,
      nativeEvent.locationY
    );
  };

  const handleStartShouldSetPanResponder = (e /* gestureState: Object */) => {
    // Should we become active when the user presses down on the thumb?
    if (!props.allowTouchTrack) {
      return thumbHitTest(e);
    }
    setCurrentValue(getOnTouchValue(e));
    fireChangeEvent('onValueChange');
    return true;
  };

  const fireChangeEvent = (event) => {
    if (props[event]) {
      props[event](getCurrentValue());
    }
  };

  // get value of where some touched on slider.
  const getOnTouchValue = ({ nativeEvent }) => {
    const location = isVertical ? nativeEvent.locationY : nativeEvent.locationX;
    return getValueForTouch(location);
  };

  const getValueForTouch = (location) => {
    const length = containerSize.width - thumbSize.width;
    const ratio = location / length;
    let newValue = ratio * (props.maximumValue - props.minimumValue);
    if (props.step) {
      newValue = Math.round(newValue / props.step) * props.step;
    }
    return getBoundedValue(
      newValue + props.minimumValue,
      props.maximumValue,
      props.minimumValue
    );
  };

  const getTouchOverflowSize = () => {
    const { thumbTouchSize } = props;
    const size = {};
    if (allMeasured === true) {
      size.width = Math.max(0, thumbTouchSize.width - thumbSize.width);
      size.height = Math.max(0, thumbTouchSize.height - containerSize.height);
    }
    return size;
  };

  const getTouchOverflowStyle = () => {
    const { width, height } = getTouchOverflowSize();
    const touchOverflowStyle = {};
    if (width !== undefined && height !== undefined) {
      const verticalMargin = -height / 2;
      touchOverflowStyle.marginTop = verticalMargin;
      touchOverflowStyle.marginBottom = verticalMargin;
      const horizontalMargin = -width / 2;
      touchOverflowStyle.marginLeft = horizontalMargin;
      touchOverflowStyle.marginRight = horizontalMargin;
    }
    if (props.debugTouchArea === true) {
      touchOverflowStyle.backgroundColor = 'orange';
      touchOverflowStyle.opacity = 0.5;
    }
    return touchOverflowStyle;
  };

  const handleMeasure = (name, x) => {
    const { width: layoutWidth, height: layoutHeight } = x.nativeEvent.layout;
    const width = isVertical ? layoutHeight : layoutWidth;
    const height = isVertical ? layoutWidth : layoutHeight;
    const size = { width, height };
    const storeName = `_${name}`;
    const currentSize = this[storeName];
    if (
      currentSize &&
      width === currentSize.width &&
      height === currentSize.height
    ) {
      return;
    }
    this[storeName] = size;
    if (containerSize && trackSize && thumbSize) {
      setContainerSize(containerSize);
      setTrackSize(trackSize);
      setThumbSize(thumbSize);
      setAllMeasured(true);
    }
  };

  const measureContainer = (x) => {
    handleMeasure('containerSize', x);
  };

  const measureTrack = (x) => {
    handleMeasure('trackSize', x);
  };

  const measureThumb = (x) => {
    handleMeasure('thumbSize', x);
  };

  const getValue = (gestureState) => {
    const location = isVertical ? gestureState.dy : gestureState.dx;
    // _previousLeft + (isVertical ? gestureState.dy : gestureState.dx);
    return getValueForTouch(location);
  };

  const getCurrentValue = () => {
    return value.__getValue();
  };

  const getRatio = (newValue) => {
    return (
      (newValue - props.minimumValue) /
      (props.maximumValue - props.minimumValue)
    );
  };

  const getThumbLeft = (newValue) => {
    const ratio = getRatio(newValue);
    return ratio * (containerSize.width - thumbSize.width);
  };

  const getThumbTouchRect = () => {
    const { thumbTouchSize } = props;
    const touchOverflowSize = getTouchOverflowSize();
    const height =
      touchOverflowSize.height / 2 +
      (containerSize.height - thumbTouchSize.height) / 2;
    const width =
      touchOverflowSize.width / 2 +
      getThumbLeft(getCurrentValue()) +
      (thumbSize.width - thumbTouchSize.width) / 2;
    if (isVertical) {
      return new Rect(
        height,
        width,
        thumbTouchSize.width,
        thumbTouchSize.height
      );
    }
    return new Rect(width, height, thumbTouchSize.width, thumbTouchSize.height);
  };

  const renderDebugThumbTouchRect = (thumbLeft) => {
    const thumbTouchRect = getThumbTouchRect();
    const positionStyle = {
      left: thumbLeft,
      top: thumbTouchRect.y,
      width: thumbTouchRect.width,
      height: thumbTouchRect.height,
    };
    return <Animated.View style={positionStyle} pointerEvents="none" />;
  };

  const getMinimumTrackStyles = (thumbStart) => {
    const minimumTrackStyle = {
      position: 'absolute',
    };
    if (isVertical) {
      minimumTrackStyle.height = Animated.add(thumbStart, thumbSize.height / 2);
      minimumTrackStyle.marginLeft = trackSize.width * TRACK_STYLE;
    } else {
      minimumTrackStyle.width = Animated.add(thumbStart, thumbSize.width / 2);
      minimumTrackStyle.marginTop = trackSize.height * TRACK_STYLE;
    }
    return minimumTrackStyle;
  };

  const getThumbPositionStyles = (thumbStart) => {
    return [{ [isVertical ? 'translateY' : 'translateX']: thumbStart }];
  };

  const {
    minimumValue,
    maximumValue,
    minimumTrackTintColor,
    maximumTrackTintColor,
    thumbTintColor,
    containerStyle,
    style,
    trackStyle,
    thumbStyle,
    thumbProps,
    debugTouchArea,
    ...other
  } = props;
  const mainStyles = containerStyle || styles;
  const appliedTrackStyle = StyleSheet.flatten([styles.track, trackStyle]);
  const thumbStart = value.interpolate({
    inputRange: [minimumValue, maximumValue],
    outputRange: [0, containerSize.width - thumbSize.width],
  });
  const valueVisibleStyle = {};
  if (!allMeasured) {
    valueVisibleStyle.height = 0;
    valueVisibleStyle.width = 0;
  }
  const minimumTrackStyle = {
    ...getMinimumTrackStyles(thumbStart),
    backgroundColor: minimumTrackTintColor,
    ...valueVisibleStyle,
  };
  const touchOverflowStyle = getTouchOverflowStyle();

  return (
    <View
      {...other}
      style={StyleSheet.flatten([
        isVertical
          ? mainStyles.containerVertical
          : mainStyles.containerHorizontal,
        style,
      ])}
      onLayout={measureContainer}
    >
      <View
        style={StyleSheet.flatten([
          mainStyles.track,
          isVertical ? mainStyles.trackVertical : mainStyles.trackHorizontal,
          appliedTrackStyle,
          { backgroundColor: maximumTrackTintColor },
        ])}
        onLayout={measureTrack}
      />
      <Animated.View
        style={StyleSheet.flatten([
          mainStyles.track,
          isVertical ? mainStyles.trackVertical : mainStyles.trackHorizontal,
          appliedTrackStyle,
          minimumTrackStyle,
        ])}
      />
      <SliderThumb
        isVisible={allMeasured}
        onLayout={measureThumb}
        style={thumbStyle}
        color={thumbTintColor}
        start={thumbStart}
        vertical={isVertical}
        {...thumbProps}
      />
      <View
        style={StyleSheet.flatten([styles.touchArea, touchOverflowStyle])}
        {...panResponder.panHandlers}
      >
        {debugTouchArea === true && renderDebugThumbTouchRect(thumbStart)}
      </View>
    </View>
  );
};

const SliderThumb = ({
  Component,
  isVisible,
  onLayout,
  style,
  start,
  color,
  vertical,
  ...props
}) => {
  const ThumbComponent = Component || Animated.View;
  const axis = vertical ? 'translateY' : 'translateX';
  const thumbPosition = [{ [axis]: start }];
  const styleTransform = (style && style.transform) || [];
  const visibleStyle = isVisible ? {} : { height: 0, width: 0 };

  return (
    <ThumbComponent
      testID="sliderThumb"
      onLayout={onLayout}
      style={StyleSheet.flatten([
        {
          backgroundColor: color,
          transform: [...thumbPosition, ...styleTransform],
          ...visibleStyle,
        },
        styles.thumb,
        style,
      ])}
      {...props}
    />
  );
};

Slider.defaultProps = {
  value: 0,
  minimumValue: 0,
  maximumValue: 1,
  step: 0,
  minimumTrackTintColor: '#3f3f3f',
  maximumTrackTintColor: '#b3b3b3',
  allowTouchTrack: false,
  thumbTintColor: 'red',
  thumbTouchSize: { width: THUMB_SIZE, height: THUMB_SIZE },
  debugTouchArea: false,
  animationType: 'timing',
  orientation: 'horizontal',
};

const styles = StyleSheet.create({
  containerHorizontal: {
    height: 40,
    justifyContent: 'center',
  },
  containerVertical: {
    width: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  track: {
    borderRadius: TRACK_SIZE / 2,
  },
  trackHorizontal: {
    height: TRACK_SIZE,
  },
  trackVertical: {
    flex: 1,
    width: TRACK_SIZE,
  },
  thumb: {
    position: 'absolute',
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
  },
  touchArea: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  debugThumbTouchArea: {
    position: 'absolute',
    backgroundColor: 'green',
    opacity: 0.5,
  },
});

export { Slider };
export default withTheme(Slider, 'Slider');
