import React from 'react';
import {
  Text,
  View,
  TextInput,
  Animated,
  Easing,
  Platform,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  TextInputProps,
} from 'react-native';
import { renderNode, patchWebProps } from '../helpers';
import { fonts, withTheme } from '../config';
import Icon from '../icons/Icon';
import { ThemeProps } from '../config';
const renderText = (content, defaultProps, style) =>
  renderNode(Text, content, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

export type InputProps = React.ComponentPropsWithRef<typeof TextInput> & {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  disabledInputStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  leftIcon?: any;
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: any;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: object | any[];
  InputComponent?: typeof React.Component;
  errorProps?: object;
  errorStyle?: object | any[];
  errorMessage?: string;
  label?: React.ReactNode;
  labelStyle?: object | any[];
  labelProps?: object;
  renderErrorMessage?: boolean;
};

class Input extends React.Component<
  InputProps & Partial<ThemeProps<InputProps>>
> {
  input: any;
  shakeAnimationValue = new Animated.Value(0);

  focus(): void {
    this.input.focus();
  }

  blur(): void {
    this.input.blur();
  }

  clear(): void {
    this.input.clear();
  }

  isFocused(): boolean {
    return this.input.isFocused();
  }

  setNativeProps(nativeProps: Partial<TextInputProps>): void {
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
      easing: Easing.bounce,
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
      InputComponent = TextInput,
      inputStyle,
      errorProps,
      errorStyle,
      errorMessage,
      label,
      labelStyle,
      labelProps,
      theme,
      renderErrorMessage = true,
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
          {
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
          }
        )}

        <Animated.View
          style={StyleSheet.flatten([
            {
              flexDirection: 'row',
              borderBottomWidth: 1,
              alignItems: 'center',
              borderColor: theme.colors.grey3,
            },
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
            ref={(ref: any) => {
              this.input = ref;
            }}
            style={StyleSheet.flatten([
              {
                alignSelf: 'center',
                color: theme.colors.black,
                fontSize: 18,
                flex: 1,
                minHeight: 40,
              },
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
            {
              margin: 5,
              fontSize: 12,
              color: theme.colors.error,
            },
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  disabledInput: {
    opacity: 0.5,
  },
  iconContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
    marginVertical: 4,
  },
});

export { Input };
export default withTheme(Input, 'Input');
