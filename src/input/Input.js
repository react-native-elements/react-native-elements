import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

import ViewPropTypes from '../config/ViewPropTypes';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Input extends Component {
  componentWillMount() {
    this.shake = this.shake.bind(this);
    this.shakeAnimationValue = new Animated.Value(0);
    this.props.shake && this.shake();
  }

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  clear() {
    this.input.clear();
  }

  shake() {
    const { shakeAnimationValue } = this;

    shakeAnimationValue.setValue(0);
    // Animation duration based on Material Design
    // https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
    Animated.timing(shakeAnimationValue, {
      duration: 375,
      toValue: 3,
      ease: Easing.bounce,
    }).start();
  }

  render() {
    const {
      containerStyle,
      leftIcon,
      leftIconContainerStyle,
      rightIcon,
      rightIconContainerStyle,
      inputStyle,
      displayError,
      errorStyle,
      errorMessage,
      ...attributes
    } = this.props;
    const translateX = this.shakeAnimationValue.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -15, 0, 15, 0, -15, 0],
    });

    return (
      <View>
        <Animated.View
          style={[
            styles.container,
            { width: SCREEN_WIDTH - 100, height: 40 },
            containerStyle,
            { transform: [{ translateX }] },
          ]}
        >
          {leftIcon && (
            <View
              style={[
                styles.iconContainer,
                { marginLeft: 15 },
                leftIconContainerStyle,
              ]}
            >
              {leftIcon}
            </View>
          )}
          <TextInput
            ref={input => (this.input = input)}
            underlineColorAndroid="transparent"
            style={[
              styles.input,
              { width: SCREEN_WIDTH - 100, height: 40 },
              inputStyle,
            ]}
            {...attributes}
          />
          {rightIcon && (
            <View style={[styles.iconContainer, rightIconContainerStyle]}>
              {rightIcon}
            </View>
          )}
        </Animated.View>
        {displayError && (
          <Text style={[styles.error, errorStyle && errorStyle]}>
            {errorMessage || 'Error!'}
          </Text>
        )}
      </View>
    );
  }
}

Input.propTypes = {
  containerStyle: ViewPropTypes.style,

  leftIcon: PropTypes.object,
  leftIconContainerStyle: ViewPropTypes.style,

  rightIcon: PropTypes.object,
  rightIconContainerStyle: ViewPropTypes.style,

  inputStyle: Text.propTypes.style,

  shake: PropTypes.any,
  displayError: PropTypes.bool,
  errorStyle: Text.propTypes.style,
  errorMessage: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(171, 189, 219, 1)',
    alignItems: 'center',
  },
  iconContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
  },
  error: {
    color: '#FF2D00',
    margin: 5,
    fontSize: 12,
  },
});

export default Input;
