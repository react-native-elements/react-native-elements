import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, View } from 'react-native';
import { withTheme } from '../config';

const INDETERMINATE_WIDTH_FACTOR = 0.3;
const BAR_WIDTH_ZERO_POSITION =
  INDETERMINATE_WIDTH_FACTOR / (1 + INDETERMINATE_WIDTH_FACTOR);

class ProgressBarElement extends Component {
  static propTypes = {
    color: PropTypes.string,
    indeterminate: PropTypes.bool,
    progress: PropTypes.number,
    style: PropTypes.any,
    containerStyle: PropTypes.any,
    unfilledColor: PropTypes.string,
  };

  static defaultProps = {
    containerStyle: {},
    indeterminate: false,
    progress: 0,
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
          useNativeDriver: false,
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

      Animated.spring(this.state.progress, {
        bounciness: 0,
        toValue: progress,
        useNativeDriver: false,
      }).start();
    }
  }

  handleLayout = event => {
    if (!this.props.containerStyle.width) {
      this.setState({ width: event.nativeEvent.layout.width });
    }
  };

  animate() {
    this.state.animationValue.setValue(0);
    Animated.timing(this.state.animationValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      isInteraction: false,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const {
      children,
      color,
      containerStyle: cs,
      style,
      unfilledColor,
      theme,
      ...restProps
    } = this.props;

    const {
      borderColor,
      borderRadius = 0,
      borderWidth = 1,
      height = 8,
      width,
    } = cs;

    const innerWidth = Math.max(0, width || this.state.width) - borderWidth * 2;
    const containerStyle = {
      width,
      borderWidth,
      borderColor: borderColor || color || theme.colors.primary,
      borderRadius,
      overflow: 'hidden',
      backgroundColor: unfilledColor,
      ...cs,
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
