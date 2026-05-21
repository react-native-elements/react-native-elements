import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { defaultTheme, renderNode } from '../helpers';
import { Input } from '../Input';
import { Icon } from '../Icon';
import { Theme } from '../helpers';
import { SearchBarDefaultProps } from './types';
import { SearchBarRef } from './SearchBar';

export type { SearchBarDefaultProps };

const defaultSearchIcon = (theme: Theme) => ({
  type: 'material',
  size: 18,
  name: 'search',
  color: theme?.colors?.grey3,
});

const defaultClearIcon = (theme: Theme) => ({
  type: 'material',
  size: 18,
  name: 'clear',
  color: theme?.colors?.grey3,
});

const SearchBarDefault = forwardRef<SearchBarRef, SearchBarDefaultProps>(
  (props, ref) => {
    const {
      theme = defaultTheme,
      value = '',
      loadingProps = {},
      showLoading = false,
      lightTheme = false,
      round = false,
      onClear = () => null,
      onFocus = () => null,
      onBlur = () => null,
      onChangeText = () => null,
      clearIcon = defaultClearIcon(theme as Theme),
      containerStyle,
      searchIcon = defaultSearchIcon(theme as Theme),
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      placeholderTextColor = theme?.colors?.grey3,
      ...attributes
    } = props;

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
      cancel: () => {},
    }));

    const handleFocus: TextInputProps['onFocus'] = (event) => {
      onFocus(event);
      setIsEmpty(value === '');
    };

    const handleBlur: TextInputProps['onBlur'] = (event) => {
      onBlur(event);
    };

    const handleChangeText = (text: string) => {
      onChangeText(text);
      setIsEmpty(text === '');
    };

    const { style: loadingStyle, ...otherLoadingProps } = loadingProps;

    return (
      <View
        testID="RNE__SearchBar-wrapper"
        style={StyleSheet.flatten([
          {
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            borderTopColor: '#000',
            padding: 8,
            backgroundColor: theme?.colors?.grey0,
          },
          lightTheme && {
            borderTopColor: '#e1e1e1',
            borderBottomColor: '#e1e1e1',
            backgroundColor: theme?.colors?.grey5,
          },
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
          placeholderTextColor={placeholderTextColor}
          inputStyle={StyleSheet.flatten([
            {
              color: theme?.colors?.grey3,
              marginLeft: 10,
            },
            inputStyle,
          ])}
          inputContainerStyle={StyleSheet.flatten([
            {
              borderBottomWidth: 0,
              borderRadius: 3,
              overflow: 'hidden',
              minHeight: 30,
              backgroundColor: theme?.colors?.searchBg,
            },
            lightTheme && {
              backgroundColor: theme?.colors?.grey4,
            },
            round && styles.round,
            inputContainerStyle,
          ])}
          containerStyle={styles.inputContainer}
          leftIcon={renderNode(
            Icon,
            searchIcon,
            defaultSearchIcon(theme as Theme)
          )}
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
  rightIconContainerStyle: {
    marginRight: 8,
  },
  leftIconContainerStyle: {
    marginLeft: 8,
  },
  inputContainer: {
    paddingHorizontal: 0,
  },
  round: {
    borderRadius: 15,
  },
});

export default SearchBarDefault;
