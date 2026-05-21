import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  Pressable,
  LayoutAnimation,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TextInput,
} from 'react-native';
import { InputProps, Input } from '../Input';
import { Icon } from '../Icon';
import { defaultTheme, renderNode } from '../helpers';
import { Theme } from '../helpers';
import { SearchBarIosProps } from './types';
import { SearchBarRef } from './SearchBar';

export type { SearchBarIosProps };

const defaultSearchIcon = (theme: Theme) => ({
  type: 'ionicon',
  size: 20,
  name: 'search',
  color: theme?.colors?.platform?.ios?.grey,
});

const defaultClearIcon = (theme: Theme) => ({
  type: 'ionicon',
  name: 'close-circle',
  size: 20,
  color: theme?.colors?.platform?.ios?.grey,
});

const SearchBarIOS = forwardRef<SearchBarRef, SearchBarIosProps>(
  (props, ref) => {
    const {
      theme = defaultTheme,
      cancelButtonProps = {},
      cancelButtonTitle = 'Cancel',
      clearIcon = { name: 'close-circle' },
      containerStyle,
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      placeholderTextColor,
      showLoading = false,
      loadingProps = {},
      searchIcon = { name: 'search' },
      showCancel = false,
      value = '',
      onClear = () => null,
      onCancel = () => null,
      onFocus = () => null,
      onBlur = () => null,
      onChangeText = () => null,
      ...attributes
    } = props;

    const inputRef = useRef<TextInput>(null);
    const [hasFocus, setHasFocus] = useState(false);
    const [isEmpty, setIsEmpty] = useState(value === '');
    const [cancelButtonWidth, setCancelButtonWidth] = useState<number | null>(
      null
    );

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => {
        inputRef.current?.clear();
        handleChangeText('');
        onClear();
      },
      cancel: () => {
        handleChangeText('');
        if (showCancel) {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setHasFocus(false);
        }
        setTimeout(() => {
          inputRef.current?.blur();
          onCancel();
        }, 0);
      },
    }));

    const handleFocus: InputProps['onFocus'] = (event) => {
      onFocus(event);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setHasFocus(true);
      setIsEmpty(value === '');
    };

    const handleBlur: InputProps['onBlur'] = (event) => {
      onBlur(event);
      if (!showCancel) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setHasFocus(false);
      }
    };

    const handleChangeText = (text: string) => {
      onChangeText(text);
      setIsEmpty(text === '');
    };

    const handleClear = () => {
      inputRef.current?.clear();
      handleChangeText('');
      onClear();
    };

    const handleCancel = () => {
      handleChangeText('');
      if (showCancel) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setHasFocus(false);
      }
      setTimeout(() => {
        inputRef.current?.blur();
        onCancel();
      }, 0);
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
        testID="RNE__SearchBar-wrapper"
        style={StyleSheet.flatten([
          styles.container,
          { backgroundColor: theme?.colors?.background },
          containerStyle,
        ])}
      >
        <Input
          testID="RNE__SearchBar"
          renderErrorMessage={false}
          value={value}
          {...attributes}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          // @ts-ignore
          ref={inputRef}
          inputStyle={StyleSheet.flatten([styles.input, inputStyle])}
          containerStyle={{
            paddingHorizontal: 0,
          }}
          inputContainerStyle={StyleSheet.flatten([
            styles.inputContainer,
            { backgroundColor: theme?.colors?.platform?.ios?.searchBg },
            hasFocus && {
              marginRight: cancelButtonWidth ? cancelButtonWidth : 0,
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
                  onPress: handleClear,
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
          testID="RNE__SearchBar-cancelButtonContainer"
        >
          <Pressable
            accessibilityRole="button"
            onPress={handleCancel}
            disabled={buttonDisabled}
            {...otherCancelButtonProps}
          >
            <View
              style={StyleSheet.flatten([
                buttonStyle,
                buttonDisabled && buttonDisabledStyle,
              ])}
              testID="RNE__SearchBar-cancelButton"
            >
              <Text
                style={StyleSheet.flatten([
                  styles.buttonTextStyle,
                  buttonColor && { color: buttonColor },
                  buttonTextStyle,
                  buttonDisabled &&
                    (buttonDisabledTextStyle || styles.buttonTextDisabled),
                ])}
              >
                {cancelButtonTitle}
              </Text>
            </View>
          </Pressable>
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

export default SearchBarIOS;
