import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Keyboard,
  TextInput,
} from 'react-native';
import { renderNode } from '../helpers';
import Input, { InputProps } from '../Input';
import Icon, { IconNode } from '../Icon';
import { SearchBarBaseProps } from './SearchBar';
import { Theme, ThemeProps } from '../config';

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

export type SearchBarAndroidProps = SearchBarBaseProps & {
  cancelIcon?: IconNode;
};

export const SearchBarAndroid = React.forwardRef<
  TextInput,
  SearchBarAndroidProps & Partial<ThemeProps<SearchBarAndroidProps>>
>(
  (
    {
      theme,
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
      onClear,
      onFocus,
      onBlur,
      onChangeText,
      onCancel,
      value,
      ...attributes
    },
    ref: React.MutableRefObject<TextInput>
  ) => {
    const [hasFocus, setHasFocus] = React.useState(false);
    const [isEmpty, setIsEmpty] = React.useState(value ? value === '' : true);

    const clear = () => {
      ref.current.clear();
      onChangeTextHandler('');
      onClear();
    };

    const cancel = React.useCallback(() => {
      ref.current.blur();
      onCancel();
    }, [onCancel, ref]);

    const onFocusHandler: InputProps['onFocus'] = React.useCallback(
      (event) => {
        onFocus(event);
        setIsEmpty(value === '');
        setHasFocus(true);
      },
      [onFocus, value]
    );

    const onBlurHandler: InputProps['onBlur'] = React.useCallback(
      (event) => {
        onBlur(event);
        setHasFocus(false);
      },
      [onBlur]
    );

    const onChangeTextHandler = React.useCallback(
      (text: string) => {
        onChangeText(text);
        setIsEmpty(text === '');
      },
      [onChangeText]
    );

    React.useEffect(() => {
      Keyboard.addListener('keyboardDidHide', cancel);
      return () => Keyboard.removeListener('keyboardDidHide', cancel);
    }, [cancel]);

    const { style: loadingStyle, ...otherLoadingProps } = loadingProps;

    return (
      <View
        testID="RNE__SearchBar-wrapper"
        style={StyleSheet.flatten([
          {
            backgroundColor: theme?.colors?.white,
            paddingTop: 8,
            paddingBottom: 8,
          },
          containerStyle,
        ])}
      >
        <Input
          testID="RNE__SearchBar"
          renderErrorMessage={false}
          {...attributes}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChangeText={onChangeTextHandler}
          ref={ref}
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
                  onPress: cancel,
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
                  onPress: clear,
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
