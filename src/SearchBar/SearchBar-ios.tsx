import React from 'react';
import {
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
  TextStyle,
  TextInput,
} from 'react-native';
import Input, { InputProps } from '../Input';
import Icon from '../Icon';
import { renderNode } from '../helpers';
import { SearchBarBaseProps } from './SearchBar';
import { Theme } from '../config/theme';
import { ThemeProps } from '../config';

const defaultSearchIcon = (theme: Theme) => ({
  type: 'ionicon',
  size: 20,
  name: 'ios-search',
  color: theme?.colors?.platform?.ios?.grey,
});

const defaultClearIcon = (theme: Theme) => ({
  type: 'ionicon',
  name: 'ios-close-circle',
  size: 20,
  color: theme?.colors?.platform?.ios?.grey,
});

export type SearchBarIosProps = SearchBarBaseProps & {
  cancelButtonProps?: Partial<TouchableOpacityProps> & {
    buttonStyle?: StyleProp<ViewStyle>;
    buttonTextStyle?: StyleProp<TextStyle>;
    color?: string;
    buttonDisabledStyle?: StyleProp<ViewStyle>;
    buttonDisabledTextStyle?: StyleProp<ViewStyle>;
  };
  cancelButtonTitle?: string;
  showCancel?: boolean;
};

export const SearchBarIOS = React.forwardRef<
  TextInput,
  SearchBarIosProps & Partial<ThemeProps<SearchBarIosProps>>
>(
  (
    {
      theme,
      cancelButtonProps,
      cancelButtonTitle,
      clearIcon,
      containerStyle,
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      placeholderTextColor,
      showLoading,
      loadingProps,
      searchIcon,
      showCancel,
      onCancel,
      onClear,
      onChangeText,
      onFocus,
      onBlur,
      value,
      ...attributes
    },
    ref: React.MutableRefObject<TextInput>
  ) => {
    const [hasFocus, setHasFocus] = React.useState(false);
    const [isEmpty, setIsEmpty] = React.useState(value ? value === '' : true);
    const [cancelButtonWidth, setCancelButtonWidth] = React.useState<
      number | null
    >(null);

    const clear = () => {
      ref.current.clear();
      onChangeTextHandler('');
      onClear();
    };

    const cancel = () => {
      onChangeTextHandler('');
      if (showCancel) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setHasFocus(false);
      }
      setTimeout(() => {
        ref.current.blur();
        onCancel();
      }, 0);
    };

    const onFocusHandler: InputProps['onFocus'] = (event) => {
      onFocus(event);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setHasFocus(true);
      setIsEmpty(value === '');
    };

    const onBlurHandler: InputProps['onBlur'] = (event) => {
      onBlur(event);
      if (!showCancel) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setHasFocus(false);
      }
    };

    const onChangeTextHandler = (text: string) => {
      onChangeText(text);
      setIsEmpty(text === '');
    };

    const { style: loadingStyle, ...otherLoadingProps } = loadingProps;
    const {
      buttonStyle,
      buttonTextStyle,
      color: buttonColor,
      disabled: buttonDisabled,
      buttonDisabledStyle,
      buttonDisabledTextStyle,
      ...otherCancelButtonProps
    } = cancelButtonProps;

    return (
      <View
        style={StyleSheet.flatten([
          styles.container,
          { backgroundColor: theme?.colors?.white },
          containerStyle,
        ])}
      >
        <Input
          testID="searchInput"
          renderErrorMessage={false}
          {...attributes}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChangeText={onChangeTextHandler}
          ref={ref}
          inputStyle={StyleSheet.flatten([styles.input, inputStyle])}
          containerStyle={{
            paddingHorizontal: 0,
          }}
          inputContainerStyle={StyleSheet.flatten([
            styles.inputContainer,
            { backgroundColor: theme?.colors?.platform?.ios?.searchBg },
            hasFocus && {
              marginRight: cancelButtonWidth || 0,
            },
            inputContainerStyle,
          ])}
          leftIcon={renderNode(Icon, searchIcon, defaultSearchIcon(theme))}
          leftIconContainerStyle={StyleSheet.flatten([
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
          ])}
          placeholderTextColor={
            placeholderTextColor || theme?.colors?.platform?.ios?.grey
          }
          rightIcon={
            <View style={{ flexDirection: 'row' }}>
              {showLoading && (
                <ActivityIndicator
                  key="loading"
                  style={StyleSheet.flatten([{ marginRight: 5 }, loadingStyle])}
                  {...otherLoadingProps}
                />
              )}
              {!isEmpty &&
                renderNode(Icon, clearIcon, {
                  ...defaultClearIcon(theme),
                  key: 'cancel',
                  onPress: clear,
                })}
            </View>
          }
          rightIconContainerStyle={StyleSheet.flatten([
            styles.rightIconContainerStyle,
            rightIconContainerStyle,
          ])}
        />

        <View
          style={StyleSheet.flatten([
            styles.cancelButtonContainer,
            {
              opacity: cancelButtonWidth === null ? 0 : 1,
              right: hasFocus ? 0 : cancelButtonWidth && -cancelButtonWidth,
            },
          ])}
          onLayout={(event) =>
            setCancelButtonWidth(event.nativeEvent.layout.width)
          }
        >
          <TouchableOpacity
            accessibilityRole="button"
            onPress={cancel}
            disabled={buttonDisabled}
            {...otherCancelButtonProps}
          >
            <View style={[buttonStyle, buttonDisabled && buttonDisabledStyle]}>
              <Text
                style={[
                  styles.buttonTextStyle,
                  buttonColor && { color: buttonColor },
                  buttonTextStyle,
                  buttonDisabled &&
                    (buttonDisabledTextStyle || styles.buttonTextDisabled),
                ]}
              >
                {cancelButtonTitle}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 13,
    paddingTop: 13,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
  },
  input: {
    marginLeft: 6,
    overflow: 'hidden',
  },
  inputContainer: {
    borderBottomWidth: 0,
    borderRadius: 9,
    minHeight: 36,
    marginLeft: 8,
    marginRight: 8,
  },
  rightIconContainerStyle: {
    marginRight: 8,
  },
  leftIconContainerStyle: {
    marginLeft: 8,
  },
  buttonTextStyle: {
    color: '#007aff',
    textAlign: 'center',
    padding: 8,
    fontSize: 18,
  },
  buttonTextDisabled: {
    color: '#cdcdcd',
  },
  cancelButtonContainer: {
    position: 'absolute',
  },
});
