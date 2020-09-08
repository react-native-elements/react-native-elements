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
import { fonts, withTheme } from '../config';

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
      useNativeDriver: true,
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
      InputComponent,
      inputStyle,
      errorProps,
      errorStyle,
      errorMessage,
      label,
      labelStyle,
      labelProps,
      theme,
      renderErrorMessage,
      style,
      ...attributes
    } = this.props;

    const translateX = this.shakeAnimationValue.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -15, 0, 15, 0, -15, 0],
    });

    const hideErrorMessage = !renderErrorMessage && !errorMessage;

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
            ref={(ref) => {
              this.input = ref;
            }}
            style={StyleSheet.flatten([
              styles.input(theme),
              inputStyle,
              disabled && styles.disabledInput,
              disabled && disabledInputStyle,
              style,
            ])}
            placeholderTextColor={theme.colors.grey3}
            {...patchWebProps(attributes)}
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

        <Text
          {...errorProps}
          style={StyleSheet.flatten([
            styles.error(theme),
            errorStyle && errorStyle,
            hideErrorMessage && {
              height: 0,
              margin: 0,
              padding: 0,
            },
          ])}
        >
          {errorMessage}
        </Text>
      </View>
    );
  }
}

Input.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
  disabledInputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  inputContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  leftIcon: nodeType,
  leftIconContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  rightIcon: nodeType,
  rightIconContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  InputComponent: PropTypes.elementType,
  errorProps: PropTypes.object,
  errorStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  errorMessage: PropTypes.string,
  label: PropTypes.node,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelProps: PropTypes.object,
  theme: PropTypes.object,
  renderErrorMessage: PropTypes.bool,
};

Input.defaultProps = {
  InputComponent: TextInput,
  renderErrorMessage: true,
};

const styles = {
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  disabledInput: {
    opacity: 0.5,
  },
  inputContainer: (theme) => ({
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: theme.colors.grey3,
  }),
  iconContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
    marginVertical: 4,
  },
  input: (theme) => ({
    alignSelf: 'center',
    color: theme.colors.black,
    fontSize: 18,
    flex: 1,
    minHeight: 40,
  }),
  error: (theme) => ({
    margin: 5,
    fontSize: 12,
    color: theme.colors.error,
  }),
  label: (theme) => ({
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
