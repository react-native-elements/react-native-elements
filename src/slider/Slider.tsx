// @ts-nocheck
import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  PanResponder,
  Platform,
  ViewStyle,
  StyleProp,
  PanResponderInstance,
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

class Slider extends React.Component<
  SliderProps & Partial<ThemeProps<SliderProps>>,
  SliderState
> {
  panResponder: PanResponderInstance;
  isVertical: boolean;

  constructor(props: any) {
    super(props);
    this.state = {
      containerSize: { width: 0, height: 0 },
      trackSize: { width: 0, height: 0 },
      thumbSize: { width: 0, height: 0 },
      allMeasured: false,
      value: new Animated.Value(
        getBoundedValue(props.value, props.maximumValue, props.minimumValue)
      ),
    };
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder.bind(
        this
      ),
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder.bind(
        this
      ),
      onPanResponderGrant: this.handlePanResponderGrant.bind(this),
      onPanResponderMove: this.handlePanResponderMove.bind(this),
      onPanResponderRelease: this.handlePanResponderEnd.bind(this),
      onPanResponderTerminationRequest: this.handlePanResponderRequestEnd.bind(
        this
      ),
      onPanResponderTerminate: this.handlePanResponderEnd.bind(this),
    });
    this.isVertical = props.orientation === 'vertical';
    this.componentDidUpdate(props, true);
  }

  componentDidUpdate(prevProps: any, force: boolean) {
    const newValue = getBoundedValue(
      this.props.value,
      this.props.maximumValue,
      this.props.minimumValue
    );
    if (prevProps.value !== newValue || force) {
      if (this.props.animateTransitions) {
        this.setCurrentValueAnimated(newValue);
      } else {
        this.setCurrentValue(newValue);
      }
    }
  }

  setCurrentValue(value) {
    this.state.value.setValue(value);
  }

  setCurrentValueAnimated(value) {
    const { animationType } = this.props;
    const animationConfig = Object.assign(
      {},
      DEFAULT_ANIMATION_CONFIGS[animationType],
      this.props.animationConfig,
      {
        toValue: value,
      }
    );
    Animated[animationType](this.state.value, animationConfig).start();
  }

  handleMoveShouldSetPanResponder() {
    // Should we become active when the user moves a touch over the thumb?
    if (!TRACK_STYLE) {
      return true;
    }
    return false;
  }

  handlePanResponderGrant() {
    this._previousLeft = this.getThumbLeft(this.getCurrentValue());
    this.fireChangeEvent('onSlidingStart');
  }

  handlePanResponderMove(_, gestureState) {
    if (this.props.disabled) {
      return;
    }
    this.setCurrentValue(this.getValue(gestureState));
    this.fireChangeEvent('onValueChange');
  }

  handlePanResponderRequestEnd() {
    // Should we allow another component to take over this pan?
    return false;
  }

  handlePanResponderEnd(_, gestureState) {
    if (this.props.disabled) {
      return;
    }
    this.setCurrentValue(this.getValue(gestureState));
    this.fireChangeEvent('onSlidingComplete');
  }

  thumbHitTest({ nativeEvent }) {
    const thumbTouchRect = this.getThumbTouchRect();
    return thumbTouchRect.containsPoint(
      nativeEvent.locationX,
      nativeEvent.locationY
    );
  }

  handleStartShouldSetPanResponder(e /* gestureState: Object */) {
    // Should we become active when the user presses down on the thumb?
    if (!this.props.allowTouchTrack) {
      return this.thumbHitTest(e);
    }
    this.setCurrentValue(this.getOnTouchValue(e));
    this.fireChangeEvent('onValueChange');
    return true;
  }

  fireChangeEvent(event) {
    if (this.props[event]) {
      this.props[event](this.getCurrentValue());
    }
  }

  // get value of where some touched on slider.
  getOnTouchValue({ nativeEvent }) {
    const location = this.isVertical
      ? nativeEvent.locationY
      : nativeEvent.locationX;
    return this.getValueForTouch(location);
  }

  getValueForTouch(location) {
    const length = this.state.containerSize.width - this.state.thumbSize.width;
    const ratio = location / length;
    let newValue = ratio * (this.props.maximumValue - this.props.minimumValue);
    if (this.props.step) {
      newValue = Math.round(newValue / this.props.step) * this.props.step;
    }
    return getBoundedValue(
      newValue + this.props.minimumValue,
      this.props.maximumValue,
      this.props.minimumValue
    );
  }

  getTouchOverflowSize() {
    const { thumbSize, allMeasured, containerSize } = this.state;
    const { thumbTouchSize } = this.props;
    const size = {};
    if (allMeasured === true) {
      size.width = Math.max(0, thumbTouchSize.width - thumbSize.width);
      size.height = Math.max(0, thumbTouchSize.height - containerSize.height);
    }
    return size;
  }

  getTouchOverflowStyle() {
    const { width, height } = this.getTouchOverflowSize();
    const touchOverflowStyle = {};
    if (width !== undefined && height !== undefined) {
      const verticalMargin = -height / 2;
      touchOverflowStyle.marginTop = verticalMargin;
      touchOverflowStyle.marginBottom = verticalMargin;
      const horizontalMargin = -width / 2;
      touchOverflowStyle.marginLeft = horizontalMargin;
      touchOverflowStyle.marginRight = horizontalMargin;
    }
    if (this.props.debugTouchArea === true) {
      touchOverflowStyle.backgroundColor = 'orange';
      touchOverflowStyle.opacity = 0.5;
    }
    return touchOverflowStyle;
  }

  handleMeasure(name, x) {
    const { width: layoutWidth, height: layoutHeight } = x.nativeEvent.layout;
    const width = this.isVertical ? layoutHeight : layoutWidth;
    const height = this.isVertical ? layoutWidth : layoutHeight;
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
    if (this._containerSize && this._trackSize && this._thumbSize) {
      this.setState({
        containerSize: this._containerSize,
        trackSize: this._trackSize,
        thumbSize: this._thumbSize,
        allMeasured: true,
      });
    }
  }

  measureContainer = (x) => {
    this.handleMeasure('containerSize', x);
  };

  measureTrack = (x) => {
    this.handleMeasure('trackSize', x);
  };

  measureThumb = (x) => {
    this.handleMeasure('thumbSize', x);
  };

  getValue(gestureState) {
    const location =
      this._previousLeft +
      (this.isVertical ? gestureState.dy : gestureState.dx);
    return this.getValueForTouch(location);
  }

  getCurrentValue() {
    return this.state.value.__getValue();
  }

  getRatio(value) {
    return (
      (value - this.props.minimumValue) /
      (this.props.maximumValue - this.props.minimumValue)
    );
  }

  getThumbLeft(value) {
    const ratio = this.getRatio(value);
    return (
      ratio * (this.state.containerSize.width - this.state.thumbSize.width)
    );
  }

  getThumbTouchRect() {
    const { thumbSize, containerSize } = this.state;
    const { thumbTouchSize } = this.props;
    const touchOverflowSize = this.getTouchOverflowSize();
    const height =
      touchOverflowSize.height / 2 +
      (containerSize.height - thumbTouchSize.height) / 2;
    const width =
      touchOverflowSize.width / 2 +
      this.getThumbLeft(this.getCurrentValue()) +
      (thumbSize.width - thumbTouchSize.width) / 2;
    if (this.isVertical) {
      return new Rect(
        height,
        width,
        thumbTouchSize.width,
        thumbTouchSize.height
      );
    }
    return new Rect(width, height, thumbTouchSize.width, thumbTouchSize.height);
  }

  renderDebugThumbTouchRect(thumbLeft) {
    const thumbTouchRect = this.getThumbTouchRect();
    const positionStyle = {
      left: thumbLeft,
      top: thumbTouchRect.y,
      width: thumbTouchRect.width,
      height: thumbTouchRect.height,
    };
    return <Animated.View style={positionStyle} pointerEvents="none" />;
  }

  getMinimumTrackStyles(thumbStart) {
    const { thumbSize, trackSize } = this.state;
    const minimumTrackStyle = {
      position: 'absolute',
    };
    if (this.isVertical) {
      minimumTrackStyle.height = Animated.add(thumbStart, thumbSize.height / 2);
      minimumTrackStyle.marginLeft = trackSize.width * TRACK_STYLE;
    } else {
      minimumTrackStyle.width = Animated.add(thumbStart, thumbSize.width / 2);
      minimumTrackStyle.marginTop = trackSize.height * TRACK_STYLE;
    }
    return minimumTrackStyle;
  }

  getThumbPositionStyles(thumbStart) {
    return [{ [this.isVertical ? 'translateY' : 'translateX']: thumbStart }];
  }

  render() {
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
    } = this.props;
    const { value, containerSize, thumbSize, allMeasured } = this.state;
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
      ...this.getMinimumTrackStyles(thumbStart),
      backgroundColor: minimumTrackTintColor,
      ...valueVisibleStyle,
    };
    const touchOverflowStyle = this.getTouchOverflowStyle();

    return (
      <View
        {...other}
        style={StyleSheet.flatten([
          this.isVertical
            ? mainStyles.containerVertical
            : mainStyles.containerHorizontal,
          style,
        ])}
        onLayout={this.measureContainer}
      >
        <View
          style={StyleSheet.flatten([
            mainStyles.track,
            this.isVertical
              ? mainStyles.trackVertical
              : mainStyles.trackHorizontal,
            appliedTrackStyle,
            { backgroundColor: maximumTrackTintColor },
          ])}
          onLayout={this.measureTrack}
        />
        <Animated.View
          style={StyleSheet.flatten([
            mainStyles.track,
            this.isVertical
              ? mainStyles.trackVertical
              : mainStyles.trackHorizontal,
            appliedTrackStyle,
            minimumTrackStyle,
          ])}
        />
        <SliderThumb
          isVisible={allMeasured}
          onLayout={this.measureThumb.bind(this)}
          style={thumbStyle}
          color={thumbTintColor}
          start={thumbStart}
          vertical={this.isVertical}
          {...thumbProps}
        />
        <View
          style={StyleSheet.flatten([styles.touchArea, touchOverflowStyle])}
          {...this.panResponder.panHandlers}
        >
          {debugTouchArea === true &&
            this.renderDebugThumbTouchRect(thumbStart)}
        </View>
      </View>
    );
  }
}

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
