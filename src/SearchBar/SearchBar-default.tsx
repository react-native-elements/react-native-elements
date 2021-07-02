import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { renderNode } from '../helpers';
import Input from '../Input';
import Icon from '../Icon';
import { SearchBarBaseProps } from './SearchBar';
import { Theme } from '../config/theme';
import { ThemeProps } from '../config';

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

export type SearchBarDefaultProps = SearchBarBaseProps & {
  lightTheme?: Boolean;
  round?: Boolean;
};

export const SearchBarDefault = React.forwardRef<
  TextInput,
  SearchBarDefaultProps & Partial<ThemeProps<SearchBarDefaultProps>>
>(
  (
    {
      value = '',
      loadingProps = {},
      showLoading = false,
      lightTheme = false,
      round = false,
      onClear = () => null,
      onFocus = () => null,
      onBlur = () => null,
      onChangeText = () => null,
      theme,
      clearIcon = defaultClearIcon(theme as Theme),
      containerStyle,
      searchIcon = defaultSearchIcon(theme as Theme),
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      placeholderTextColor = theme?.colors?.grey3,
      ...attributes
    },
    ref: React.MutableRefObject<TextInput>
  ) => {
    const [isEmpty, setIsEmpty] = React.useState(value ? value === '' : true);

    const clear = () => {
      ref.current.clear();
      onChangeTextHandler('');
      onClear();
    };

    const onFocusHandler: TextInputProps['onFocus'] = (event) => {
      onFocus(event);
      setIsEmpty(value === '');
    };

    const onBlurHandler: TextInputProps['onBlur'] = (event) => {
      onBlur(event);
    };

    const onChangeTextHandler = (text: string) => {
      onChangeText(text);
      setIsEmpty(text === '');
    };

    const { style: loadingStyle, ...otherLoadingProps } = loadingProps;

    return (
      <View
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
          testID="searchInput"
          renderErrorMessage={false}
          {...attributes}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChangeText={onChangeTextHandler}
          ref={ref}
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
