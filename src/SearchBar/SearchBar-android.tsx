import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Keyboard,
  TextInput,
} from 'react-native';
import { defaultTheme, renderNode } from '../helpers';
import { Input, InputProps } from '../Input';
import { Icon } from '../Icon';
import { SearchBarAndroidProps } from './types';
import { Theme } from '../helpers';
import { SearchBarRef } from './SearchBar';

export type { SearchBarAndroidProps };

const defaultSearchIcon = (theme: Theme) => ({
  type: 'material',
  size: 25,
  color: theme?.colors?.platform?.android?.grey,
  name: 'search',
});

const defaultCancelIcon = (theme: Theme) => ({
  type: 'material',
  size: 25,
  color: theme?.colors?.platform?.android?.grey,
  name: 'arrow-back',
});

const defaultClearIcon = (theme: Theme) => ({
  type: 'material',
  size: 25,
  color: theme?.colors?.platform?.android?.grey,
  name: 'clear',
});

const SearchBarAndroid = forwardRef<SearchBarRef, SearchBarAndroidProps>(
  (props, ref) => {
    const {
      theme = defaultTheme,
      clearIcon = { name: 'clear' },
      containerStyle,
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      searchIcon = { name: 'search' },
      cancelIcon = { name: 'arrow-back' },
      showLoading = false,
      loadingProps = {},
      onClear = () => null,
      onCancel = () => null,
      onFocus = () => null,
      onBlur = () => null,
      onChangeText = () => null,
      onKeyboardHide,
      value = '',
      ...attributes
    } = props;

    const [hasFocus, setHasFocus] = useState(false);
    const [isEmpty, setIsEmpty] = useState(value === '');
    const inputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => {
        inputRef.current?.clear();
        handleChangeText('');
        onClear();
      },
      cancel: () => {
        inputRef.current?.blur();
        onCancel();
      },
    }));

    const handleFocus: InputProps['onFocus'] = (event) => {
      onFocus(event);
      setHasFocus(true);
      setIsEmpty(value === '');
    };

    const handleBlur: InputProps['onBlur'] = (event) => {
      onBlur(event);
      setHasFocus(false);
    };

    const handleChangeText = (text: string) => {
      onChangeText(text);
      setIsEmpty(text === '');
    };

    const handleCancel = () => {
      inputRef.current?.blur();
      onCancel();
    };

    useEffect(() => {
      let keyboardListener: any;
      if (onKeyboardHide) {
        keyboardListener = Keyboard.addListener('keyboardDidHide', () => {
          inputRef.current?.blur();
          onKeyboardHide();
        });
      }
      return () => {
        if (keyboardListener) {
          keyboardListener.remove();
        }
      };
    }, [onKeyboardHide]);

    const { style: loadingStyle, ...otherLoadingProps } = loadingProps;

    return (
      <View
        testID="RNE__SearchBar-wrapper"
        style={StyleSheet.flatten([
          {
            backgroundColor: theme?.colors?.background,
            paddingTop: 8,
            paddingBottom: 8,
          },
          containerStyle,
        ])}
      >
        <Input
          testID="RNE__SearchBar"
          value={value}
          renderErrorMessage={false}
          {...attributes}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          // @ts-ignore
          ref={inputRef}
          containerStyle={{ paddingHorizontal: 0 }}
          inputStyle={StyleSheet.flatten([styles.input, inputStyle])}
          inputContainerStyle={StyleSheet.flatten([
            styles.inputContainer,
            inputContainerStyle,
          ])}
          leftIcon={
            hasFocus
              ? renderNode(Icon, cancelIcon, {
                  ...defaultCancelIcon(theme as Theme),
                  onPress: handleCancel,
                })
              : renderNode(Icon, searchIcon, defaultSearchIcon(theme as Theme))
          }
          leftIconContainerStyle={StyleSheet.flatten([
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
          ])}
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
                  ...defaultClearIcon(theme as Theme),
                  key: 'cancel',
                  onPress: () => {
                    inputRef.current?.clear();
                    handleChangeText('');
                    onClear();
                  },
                })}
            </View>
          }
          rightIconContainerStyle={StyleSheet.flatten([
            styles.rightIconContainerStyle,
            rightIconContainerStyle,
          ])}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  input: {
    marginLeft: 24,
    marginRight: 8,
  },
  inputContainer: {
    borderBottomWidth: 0,
    width: '100%',
  },
  rightIconContainerStyle: {
    marginRight: 8,
  },
  leftIconContainerStyle: {
    marginLeft: 8,
  },
});

export default SearchBarAndroid;
