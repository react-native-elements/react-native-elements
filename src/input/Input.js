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
  Platform,
} from 'react-native';

import ViewPropTypes from '../config/ViewPropTypes';
import nodeType from '../helpers/nodeType';
import fonts from '../config/fonts';
import colors from '../config/colors';
import renderNode from '../helpers/renderNode';
import Icon from '../icons/Icon';

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

  _inputRef = input => (this.input = input);

  render() {
    const {
      containerStyle,
      inputContainerStyle,
      leftIcon,
      leftIconContainerStyle,
      rightIcon,
      rightIconContainerStyle,
      inputStyle,
      errorStyle,
      errorMessage,
      labelStyle,
      label,
      ...attributes
    } = this.props;
    const translateX = this.shakeAnimationValue.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -15, 0, 15, 0, -15, 0],
    });

    return (
      <View style={[{ width: '90%' }, containerStyle]}>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <Animated.View
          style={[
            styles.inputContainer,
            inputContainerStyle,
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
              {renderNode(Icon, leftIcon)}
            </View>
          )}
          <TextInput
            {...attributes}
            ref={this._inputRef}
            underlineColorAndroid="transparent"
            style={[styles.input, inputStyle]}
          />
          {rightIcon && (
            <View style={[styles.iconContainer, rightIconContainerStyle]}>
              {renderNode(Icon, rightIcon)}
            </View>
          )}
        </Animated.View>
        {errorMessage && (
          <Text style={[styles.error, errorStyle && errorStyle]}>
            {errorMessage}
          </Text>
        )}
      </View>
    );
  }
}

Input.propTypes = {
  containerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,

  leftIcon: nodeType,
  leftIconContainerStyle: ViewPropTypes.style,

  rightIcon: nodeType,
  rightIconContainerStyle: ViewPropTypes.style,

  inputStyle: Text.propTypes.style,

  shake: PropTypes.any,
  errorStyle: Text.propTypes.style,
  errorMessage: PropTypes.string,

  label: PropTypes.string,
  labelStyle: Text.propTypes.style,
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.grey3,
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
    flex: 1,
    height: 40,
  },
  error: {
    color: '#FF2D00',
    margin: 5,
    fontSize: 12,
  },
  label: {
    color: colors.grey3,
    fontSize: 16,
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        ...fonts.android.bold,
      },
    }),
  },
});

export default Input;
