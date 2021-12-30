import React, { Component } from 'react';
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

export type SearchBarAndroidProps = InputProps &
  SearchBarBaseProps &
  typeof SearchBarAndroid.defaultProps & {
    cancelIcon?: IconNode;
  };

type SearchBarState = {
  hasFocus: boolean;
  isEmpty: boolean;
};

export class SearchBarAndroid extends Component<
  SearchBarAndroidProps & Partial<ThemeProps<SearchBarAndroidProps>>,
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
    Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  _keyboardDidHide = () => {
    this.cancel();
  };

  componentWillUnmount() {
    Keyboard.removeListener('keyboardDidHide', this._keyboardDidHide);
  }

  render() {
    const {
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
      ...attributes
    } = this.props;
    const { hasFocus, isEmpty } = this.state;
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
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
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
