import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Easing, PanResponder } from 'react-native';

import { withTheme } from '../config';

const TRACK_SIZE = 4;
const THUMB_SIZE = 20;

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

const getBoundedValue = ({ value, maximumValue, minimumValue }) =>
  value > maximumValue
    ? maximumValue
    : value < minimumValue
    ? minimumValue
    : value;

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

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerSize: { width: 0, height: 0 },
      trackSize: { width: 0, height: 0 },
      thumbSize: { width: 0, height: 0 },
      allMeasured: false,
      value: new Animated.Value(getBoundedValue(props)),
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
  }

  componentDidUpdate(prevProps) {
    const newValue = getBoundedValue(this.props);

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
    return this.thumbHitTest(e);
  }

  fireChangeEvent(event) {
    if (this.props[event]) {
      this.props[event](this.getCurrentValue());
    }
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
    const width =
      this.props.orientation === 'vertical' ? layoutHeight : layoutWidth;
    const height =
      this.props.orientation === 'vertical' ? layoutWidth : layoutHeight;
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

  measureContainer = x => {
    this.handleMeasure('containerSize', x);
  };

  measureTrack = x => {
    this.handleMeasure('trackSize', x);
  };

  measureThumb = x => {
    this.handleMeasure('thumbSize', x);
  };

  getValue(gestureState) {
    const length = this.state.containerSize.width - this.state.thumbSize.width;
    const thumbLeft =
      this._previousLeft +
      (this.props.orientation === 'vertical'
        ? gestureState.dy
        : gestureState.dx);

    const ratio = thumbLeft / length;

    if (this.props.step) {
      return Math.max(
        this.props.minimumValue,
        Math.min(
          this.props.maximumValue,
          this.props.minimumValue +
            Math.round(
              (ratio * (this.props.maximumValue - this.props.minimumValue)) /
                this.props.step
            ) *
              this.props.step
        )
      );
    }
    return Math.max(
      this.props.minimumValue,
      Math.min(
        this.props.maximumValue,
        ratio * (this.props.maximumValue - this.props.minimumValue) +
          this.props.minimumValue
      )
    );
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

    if (this.props.orientation === 'vertical') {
      return new Rect(
        touchOverflowSize.height / 2 +
          (containerSize.height - thumbTouchSize.height) / 2,
        touchOverflowSize.width / 2 +
          this.getThumbLeft(this.getCurrentValue()) +
          (thumbSize.width - thumbTouchSize.width) / 2,
        thumbTouchSize.width,
        thumbTouchSize.height
      );
    }
    return new Rect(
      touchOverflowSize.width / 2 +
        this.getThumbLeft(this.getCurrentValue()) +
        (thumbSize.width - thumbTouchSize.width) / 2,
      touchOverflowSize.height / 2 +
        (containerSize.height - thumbTouchSize.height) / 2,
      thumbTouchSize.width,
      thumbTouchSize.height
    );
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

    if (this.props.orientation === 'vertical') {
      minimumTrackStyle.height = Animated.add(thumbStart, thumbSize.height / 2);
      minimumTrackStyle.marginLeft = -trackSize.width;
    } else {
      minimumTrackStyle.width = Animated.add(thumbStart, thumbSize.width / 2);
      minimumTrackStyle.marginTop = -trackSize.height;
    }
    return minimumTrackStyle;
  }

  getThumbPositionStyles(thumbStart) {
    if (this.props.orientation === 'vertical') {
      return [
        {
          translateX:
            -(this.state.trackSize.height + this.state.thumbSize.height) / 2,
        },
        { translateY: thumbStart },
      ];
    }
    return [
      { translateX: thumbStart },
      {
        translateY:
          -(this.state.trackSize.height + this.state.thumbSize.height) / 2,
      },
    ];
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
      debugTouchArea,
      orientation,
      ...other
    } = this.props;

    const { value, containerSize, thumbSize, allMeasured } = this.state;

    const mainStyles = containerStyle || styles;
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

    const thumbStyleTransform = (thumbStyle && thumbStyle.transform) || [];
    const touchOverflowStyle = this.getTouchOverflowStyle();
    return (
      <View
        {...other}
        style={StyleSheet.flatten([
          orientation === 'vertical'
            ? mainStyles.containerVertical
            : mainStyles.containerHorizontal,
          style,
        ])}
        onLayout={this.measureContainer}
      >
        <View
          style={StyleSheet.flatten([
            mainStyles.track,
            orientation === 'vertical'
              ? mainStyles.trackVertical
              : mainStyles.trackHorizontal,
            trackStyle,
            { backgroundColor: maximumTrackTintColor },
          ])}
          onLayout={this.measureTrack}
        />
        <Animated.View
          style={StyleSheet.flatten([
            mainStyles.track,
            orientation === 'vertical'
              ? mainStyles.trackVertical
              : mainStyles.trackHorizontal,
            trackStyle,
            minimumTrackStyle,
          ])}
        />
        <Animated.View
          testID="sliderThumb"
          onLayout={this.measureThumb}
          style={StyleSheet.flatten([
            { backgroundColor: thumbTintColor },
            mainStyles.thumb,
            orientation === 'vertical'
              ? mainStyles.thumbVertical(trackStyle && trackStyle.width)
              : mainStyles.thumbHorizontal(trackStyle && trackStyle.height),
            thumbStyle,
            {
              transform: [
                ...this.getThumbPositionStyles(thumbStart),
                ...thumbStyleTransform,
              ],
              ...valueVisibleStyle,
            },
          ])}
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
  thumbHorizontal: height => ({
    top: 22 + (height ? (height - 4) / 2 : 0),
  }),
  thumbVertical: width => ({
    left: 22 + (width ? (width - 4) / 2 : 0),
  }),
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
