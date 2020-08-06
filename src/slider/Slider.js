import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  PanResponder,
  Platform,
} from 'react-native';

import { withTheme } from '../config';

const TRACK_SIZE = 4;
const THUMB_SIZE = 20;
const TRACK_STYLE = Platform.select({ web: 0, default: -1 });

const DEFAULT_ANIMATION_CONFIGS = {
  spring: {
    friction: 7,
    tension: 100,
  },
  timing: {
    duration: 150,
    easing: Easing.inOut(Easing.ease),
    delay: 0,
  },
};

const getBoundedValue = (value, maximumValue, minimumValue) =>
  Math.max(Math.min(value, maximumValue), minimumValue);

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  containsPoint(x, y) {
    return (
      x >= this.x &&
      y >= this.y &&
      x <= this.x + this.width &&
      y <= this.y + this.height
    );
  }
}

class Slider extends React.Component {
  constructor(props) {
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
  }

  componentDidUpdate(prevProps) {
    const newValue = getBoundedValue(
      this.props.value,
      this.props.maximumValue,
      this.props.minimumValue
    );

    if (prevProps.value !== newValue) {
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

  handleMoveShouldSetPanResponder(/* e: Object, gestureState: Object */) {
    // Should we become active when the user moves a touch over the thumb?
    return false;
  }

  handlePanResponderGrant(/* e: Object, gestureState: Object */) {
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
      orientation,
      ...other
    } = this.props;

    const { value, containerSize, thumbSize, allMeasured } = this.state;

    const mainStyles = containerStyle || styles;
    const appliedTrackStyle = StyleSheet.flatten([styles.track, trackStyle]);
    const thumbStart = value.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: [0, containerSize.width - thumbSize.width],
      // extrapolate: 'clamp',
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

Slider.propTypes = {
  /**
   * Initial value of the slider. The value should be between minimumValue
   * and maximumValue, which default to 0 and 1 respectively.
   * Default value is 0.
   *
   * *This is not a controlled component*, e.g. if you don't update
   * the value, the component won't be reset to its inital value.
   */
  value: PropTypes.number,

  /**
   * If true the user won't be able to move the slider.
   * Default value is false.
   */
  disabled: PropTypes.bool,

  /**
   * Initial minimum value of the slider. Default value is 0.
   */
  minimumValue: PropTypes.number,

  /**
   * Initial maximum value of the slider. Default value is 1.
   */
  maximumValue: PropTypes.number,

  /**
   * Step value of the slider. The value should be between 0 and
   * (maximumValue - minimumValue). Default value is 0.
   */
  step: PropTypes.number,

  /**
   * The color used for the track to the left of the button. Overrides the
   * default blue gradient image.
   */
  minimumTrackTintColor: PropTypes.string,

  /**
   * The color used for the track to the right of the button. Overrides the
   * default blue gradient image.
   */
  maximumTrackTintColor: PropTypes.string,

  /**
   * If true, thumb will jump if user presses anywhere on the slide.
   */
  allowTouchTrack: PropTypes.bool,

  /**
   * The color used for the thumb.
   */
  thumbTintColor: PropTypes.string,

  /**
   * The size of the touch area that allows moving the thumb.
   * The touch area has the same center has the visible thumb.
   * This allows to have a visually small thumb while still allowing the user
   * to move it easily.
   * The default is {width: 40, height: 40}.
   */
  thumbTouchSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),

  /**
   * Callback continuously called while the user is dragging the slider.
   */
  onValueChange: PropTypes.func,

  /**
   * Callback called when the user starts changing the value (e.g. when
   * the slider is pressed).
   */
  onSlidingStart: PropTypes.func,

  /**
   * Callback called when the user finishes changing the value (e.g. when
   * the slider is released).
   */
  onSlidingComplete: PropTypes.func,

  /**
   * The style applied to the slider container.
   */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  /**
   * The style applied to the track.
   */
  trackStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  /**
   * The style applied to the thumb.
   */
  thumbStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

  /*
   * The props applied to the thumb.
   */
  thumbProps: PropTypes.object,

  /**
   * Set this to true to visually see the thumb touch rect in green.
   */
  debugTouchArea: PropTypes.bool,

  /**
   * Set to true to animate values with default 'timing' animation type
   */
  animateTransitions: PropTypes.bool,

  /**
   * Custom Animation type. 'spring' or 'timing'.
   */
  animationType: PropTypes.oneOf(['spring', 'timing']),

  /**
   * Choose the orientation. 'horizontal' or 'vertical'.
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * Used to configure the animation parameters.  These are the same parameters in the Animated library.
   */
  animationConfig: PropTypes.object,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
  thumbTouchSize: { width: 40, height: 40 },
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
