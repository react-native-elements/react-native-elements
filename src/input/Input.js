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
  TouchableHighlight
} from 'react-native';

import ViewPropTypes from '../config/ViewPropTypes.js
';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Input extends Component {

  constructor(){
    super();
    this.state = {
      hidePassword: true
    };
    this.togglePassword = this.togglePassword.bind(this);
  }

  togglePassword(){
    console.log('toggle password is clicked');
    if(this.state.hidePassword){
      this.setState({
        hidePassword : false
      });
      this.forceUpdate();
    }else{
      this.setState({
        hidePassword : true
      });
      this.forceUpdate();
    }
  }


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
      secureTextEntry,
      showPasswordIcon,
      hidePasswordIcon,
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
            { width: SCREEN_WIDTH - 90, height: 40 },
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
            underlineColorAndroid='rgba(0,0,0,0)'
            style={[
              styles.input,
              { width: SCREEN_WIDTH - 100, height: 40 },
              inputStyle,
            ]}
            secureTextEntry={this.state.hidePassword}
            {...attributes}
          />
          {secureTextEntry && (
            <TouchableHighlight onPress={this.togglePassword} style={[styles.iconContainer, { paddingRight: 15 }, rightIconContainerStyle]}>
              {this.state.hidePassword?showPasswordIcon:hidePasswordIcon}
            </TouchableHighlight>
          )}
          {rightIcon && (
            <View  style={[styles.iconContainer, rightIconContainerStyle]}>
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

  secureTextEntry: PropTypes.bool,
  showPasswordIcon: PropTypes.object,
  hidePasswordIcon: PropTypes.object,
  inputStyle: Text.propTypes.style,
  shake: PropTypes.any,
  displayError: PropTypes.bool,
  errorStyle: Text.propTypes.style,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  secureTextEntry: false,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  iconContainer: {
    height: 70,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
  error: {
    color: '#FF2D00',
    margin: 5,
    fontSize: 12,
  },
});

export default Input;
