import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, View } from 'react-native';
import { withTheme } from '../config';

const INDETERMINATE_WIDTH_FACTOR = 0.3;
const BAR_WIDTH_ZERO_POSITION =
  INDETERMINATE_WIDTH_FACTOR / (1 + INDETERMINATE_WIDTH_FACTOR);

class ProgressBarElement extends Component {
  static propTypes = {
    animated: PropTypes.bool,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    children: PropTypes.node,
    color: PropTypes.string,
    height: PropTypes.number,
    indeterminate: PropTypes.bool,
    indeterminateAnimationDuration: PropTypes.number,
    progress: PropTypes.number,
    style: PropTypes.any,
    unfilledColor: PropTypes.string,
    width: PropTypes.number,
    useNativeDriver: PropTypes.bool,
    animationConfig: PropTypes.object,
    animationType: PropTypes.oneOf(['decay', 'timing', 'spring']),
  };

  static defaultProps = {
    animated: true,
    borderRadius: 0,
    borderWidth: 1,
    height: 8,
    indeterminate: false,
    indeterminateAnimationDuration: 1000,
    progress: 0,
    useNativeDriver: false,
    animationConfig: { bounciness: 0 },
    animationType: 'spring',
    theme: {
      colors: {
        primary: 'blue',
      },
    },
  };

  constructor(props) {
    super(props);
    const progress = Math.min(Math.max(props.progress, 0), 1);
    this.state = {
      width: 0,
      progress: new Animated.Value(
        props.indeterminate ? INDETERMINATE_WIDTH_FACTOR : progress
      ),
      animationValue: new Animated.Value(BAR_WIDTH_ZERO_POSITION),
    };
  }

  componentDidMount() {
    if (this.props.indeterminate) {
      this.animate();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      if (this.props.indeterminate) {
        this.animate();
      } else {
        Animated.spring(this.state.animationValue, {
          toValue: BAR_WIDTH_ZERO_POSITION,
          useNativeDriver: this.props.useNativeDriver,
        }).start();
      }
    }
    if (
      prevProps.indeterminate !== this.props.indeterminate ||
      prevProps.progress !== this.props.progress
    ) {
      const progress = this.props.indeterminate
        ? INDETERMINATE_WIDTH_FACTOR
        : Math.min(Math.max(this.props.progress, 0), 1);

      if (this.props.animated) {
        const { animationType, animationConfig } = this.props;
        Animated[animationType](this.state.progress, {
          ...animationConfig,
          toValue: progress,
          useNativeDriver: this.props.useNativeDriver,
        }).start();
      } else {
        this.state.progress.setValue(progress);
      }
    }
  }

  handleLayout = event => {
    if (!this.props.width) {
      this.setState({ width: event.nativeEvent.layout.width });
    }
  };

  animate() {
    this.state.animationValue.setValue(0);
    Animated.timing(this.state.animationValue, {
      toValue: 1,
      duration: this.props.indeterminateAnimationDuration,
      easing: Easing.linear,
      isInteraction: false,
      useNativeDriver: this.props.useNativeDriver,
    }).start();
  }

  render() {
    const {
      borderColor,
      borderRadius,
      borderWidth,
      children,
      color,
      height,
      style,
      unfilledColor,
      width,
      theme,
      ...restProps
    } = this.props;

    const innerWidth = Math.max(0, width || this.state.width) - borderWidth * 2;
    const containerStyle = {
      width,
      borderWidth,
      borderColor: borderColor || color || theme.colors.primary,
      borderRadius,
      overflow: 'hidden',
      backgroundColor: unfilledColor,
    };
    const progressStyle = {
      backgroundColor: color || theme.colors.primary,
      height,
      transform: [
        {
          translateX: this.state.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [innerWidth * -INDETERMINATE_WIDTH_FACTOR, innerWidth],
          }),
        },
        {
          translateX: this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [innerWidth / -2, 0],
          }),
        },
        {
          // Interpolation a temp workaround for https://github.com/facebook/react-native/issues/6278
          scaleX: this.state.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.0001, 1],
          }),
        },
      ],
    };

    return (
      <View
        style={[containerStyle, style]}
        onLayout={this.handleLayout}
        {...restProps}
      >
        <Animated.View style={progressStyle} />
        {children}
      </View>
    );
  }
}

export { ProgressBarElement };
export default withTheme(ProgressBarElement, 'ProgressBar');
