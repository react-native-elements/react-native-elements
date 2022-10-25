import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Keyboard,
  TextInput,
  EmitterSubscription,
} from 'react-native';
import { defaultTheme, renderNode } from '../helpers';
import { Input, InputProps } from '../Input';
import { Icon } from '../Icon';
import { SearchBarAndroidProps } from './types';
import { Theme } from '../helpers';

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

type NewType = 'android';

type SearchBarState = {
  hasFocus: boolean;
  isEmpty: boolean;
};

export class SearchBarAndroid extends Component<
  SearchBarAndroidProps,
  SearchBarState
> {
  input!: TextInput;

  static defaultProps = {
    onClear: () => null,
    onCancel: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onChangeText: () => null,
  };

  keyboardListener: EmitterSubscription;

  focus = () => {
    this.input.focus();
  };

  blur = () => {
    this.input.blur();
  };

  clear = () => {
    this.input.clear();
    this.onChangeText('');
    this.props.onClear();
  };

  cancel = () => {
    this.blur();
    this.props.onCancel();
  };

  onFocus: InputProps['onFocus'] = (event) => {
    this.props.onFocus(event);
    this.setState({
      hasFocus: true,
      isEmpty: this.props.value === '',
    });
  };

  onBlur: InputProps['onBlur'] = (event) => {
    this.props.onBlur(event);
    this.setState({ hasFocus: false });
  };

  onChangeText = (text: string) => {
    this.props.onChangeText(text);
    this.setState({ isEmpty: text === '' });
  };

  constructor(props: SearchBarAndroidProps) {
    super(props);
    const { value = '' } = props;
    this.state = {
      hasFocus: false,
      isEmpty: value ? value === '' : true,
    };
    if (this.props.onKeyboardHide) {
      this.keyboardListener = Keyboard.addListener(
        'keyboardDidHide',
        this._keyboardDidHide
      );
    }
  }
  _keyboardDidHide = () => {
    this.blur();
    this.props.onKeyboardHide?.();
  };

  componentWillUnmount() {
    if (this.keyboardListener) {
      this.keyboardListener.remove();
    }
  }

  render() {
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
      ...attributes
    } = this.props;
    const { hasFocus, isEmpty } = this.state;
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
          renderErrorMessage={false}
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          // @ts-ignore
          ref={(input: TextInput) => {
            this.input = input;
          }}
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
                  onPress: this.cancel,
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
                  onPress: this.clear,
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
}

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
