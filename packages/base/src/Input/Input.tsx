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
import { renderNode, patchWebProps, defaultTheme, Theme } from '../helpers';
import { fonts } from '../helpers';
import { Icon, IconNode } from '../Icon';

const renderText = (content: any, defaultProps: any, style: StyleProp<any>) =>
  renderNode(Text, content, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

export interface InputProps
  extends React.ComponentPropsWithRef<typeof TextInput> {
  /**
   * Shake method
   */
  shake?: () => void;
  /**
   * Style for container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * disables the input component
   */
  disabled?: boolean;
  /**
   * disabled styles that will be passed to the style props of the React Native TextInput
   */
  disabledInputStyle?: StyleProp<TextStyle>;
  /**
   * styling for Input Component Container
   */
  inputContainerStyle?: StyleProp<ViewStyle>;
  /**
   * displays an icon on the left
   */
  leftIcon?: IconNode;
  /**
   * styling for left Icon Component container
   */
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  /**
   * displays an icon on the right
   */
  rightIcon?: IconNode;
  /**
   * styling for right Icon Component container
   */
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Style for Input Component
   */
  inputStyle?: StyleProp<TextStyle>;
  /**
   * component that will be rendered in place of the React Native TextInput
   * @type React Component
   */
  InputComponent?: React.ComponentType | React.ForwardRefExoticComponent<any>;
  /**
   * props to be passed to the React Native Text component used to display the error message
   */
  errorProps?: object;
  /**
   * add styling to error message
   */
  errorStyle?: StyleProp<TextStyle>;
  /**
   * Error message to be displayed under the input field
   */
  errorMessage?: string;
  /**
   * add a label on top of the input
   */
  label?: string | React.ReactNode;
  /**
   * styling for the label; You can only use this if label is a string
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * props to be passed to the React Native Text component used to display the label or React Component used instead of simple string in label prop
   */
  labelProps?: object;
  /**
   * If the error message container should be rendered (take up vertical space). If false, when showing errorMessage, the layout will shift to add it at that time.
   */
  renderErrorMessage?: boolean;
}

export class Input extends React.Component<InputProps & { theme?: Theme }> {
  static displayName = 'Input';
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
      theme = defaultTheme,
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
      <View
        testID="RNE__Input__view-wrapper"
        style={StyleSheet.flatten([styles.container, containerStyle])}
      >
        {renderText(
          label,
          { style: labelStyle, ...labelProps },
          {
            fontSize: 16,
            color: theme?.colors?.grey3,
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
              borderColor: theme?.colors?.grey3,
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
                color: theme?.colors?.black,
                fontSize: 18,
                flex: 1,
                minHeight: 40,
              },
              inputStyle,
              disabled && styles.disabledInput,
              disabled && disabledInputStyle,
              style,
            ])}
            placeholderTextColor={theme?.colors?.grey3}
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
              color: theme?.colors?.error,
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
