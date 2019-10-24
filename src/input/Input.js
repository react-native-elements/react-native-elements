import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TextInput,
  Animated,
  Easing,
  Platform,
  StyleSheet,
} from 'react-native';

import { nodeType, renderNode, patchWebProps } from '../helpers';
import { fonts, withTheme, ViewPropTypes, TextPropTypes } from '../config';

import Icon from '../icons/Icon';

const renderText = (content, defaultProps, style) =>
  renderNode(Text, content, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

class Input extends React.Component {
  shakeAnimationValue = new Animated.Value(0);

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  clear() {
    this.input.clear();
  }

  isFocused() {
    return this.input.isFocused();
  }

  setNativeProps(nativeProps) {
    this.input.setNativeProps(nativeProps);
  }

  shake = () => {
    const { shakeAnimationValue } = this;

    shakeAnimationValue.setValue(0);
    // Animation duration based on Material Design
    // https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
    Animated.timing(shakeAnimationValue, {
      duration: 375,
      toValue: 3,
      ease: Easing.bounce,
    }).start();
  };

  render() {
    const {
      containerStyle,
      disabled,
      disabledInputStyle,
      inputContainerStyle,
      leftIcon,
      leftIconContainerStyle,
      rightIcon,
      rightIconContainerStyle,
      inputComponent: InputComponent = TextInput,
      inputStyle,
      errorProps,
      errorStyle,
      errorMessage,
      label,
      labelStyle,
      labelProps,
      theme,
      ...attributes
    } = this.props;

    const translateX = this.shakeAnimationValue.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -15, 0, 15, 0, -15, 0],
    });

    return (
      <View style={StyleSheet.flatten([styles.container, containerStyle])}>
        {renderText(
          label,
          { style: labelStyle, ...labelProps },
          styles.label(theme)
        )}

        <Animated.View
          style={StyleSheet.flatten([
            styles.inputContainer(theme),
            inputContainerStyle,
            { transform: [{ translateX }] },
          ])}
        >
          {leftIcon && (
            <View
              style={StyleSheet.flatten([
                styles.iconContainer,
                leftIconContainerStyle,
              ])}
            >
              {renderNode(Icon, leftIcon)}
            </View>
          )}

          <InputComponent
            testID="RNE__Input__text-input"
            underlineColorAndroid="transparent"
            editable={!disabled}
            {...patchWebProps(attributes)}
            ref={ref => {
              this.input = ref;
            }}
            style={StyleSheet.flatten([
              styles.input,
              inputStyle,
              disabled && styles.disabledInput,
              disabled && disabledInputStyle,
            ])}
          />

          {rightIcon && (
            <View
              style={StyleSheet.flatten([
                styles.iconContainer,
                rightIconContainerStyle,
              ])}
            >
              {renderNode(Icon, rightIcon)}
            </View>
          )}
        </Animated.View>

        {!!errorMessage && (
          <Text
            {...errorProps}
            style={StyleSheet.flatten([
              styles.error(theme),
              errorStyle && errorStyle,
            ])}
          >
            {errorMessage}
          </Text>
        )}
      </View>
    );
  }
}

Input.propTypes = {
  containerStyle: ViewPropTypes.style,
  disabled: PropTypes.bool,
  disabledInputStyle: TextPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  leftIcon: nodeType,
  leftIconContainerStyle: ViewPropTypes.style,
  rightIcon: nodeType,
  rightIconContainerStyle: ViewPropTypes.style,
  inputStyle: TextPropTypes.style,
  inputComponent: PropTypes.elementType,
  errorProps: PropTypes.object,
  errorStyle: TextPropTypes.style,
  errorMessage: PropTypes.string,
  label: PropTypes.node,
  labelStyle: TextPropTypes.style,
  labelProps: PropTypes.object,
  theme: PropTypes.object,
};

const styles = {
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  disabledInput: {
    opacity: 0.5,
  },
  inputContainer: theme => ({
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: theme.colors.grey3,
  }),
  iconContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  input: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    flex: 1,
    minHeight: 40,
  },
  error: theme => ({
    margin: 5,
    fontSize: 12,
    color: theme.colors.error,
  }),
  label: theme => ({
    fontSize: 16,
    color: theme.colors.grey3,
    ...Platform.select({
      android: {
        ...fonts.android.bold,
      },
      default: {
        fontWeight: 'bold',
      },
    }),
  }),
};

export { Input };
export default withTheme(Input, 'Input');
