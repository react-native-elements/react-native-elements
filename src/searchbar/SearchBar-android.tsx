import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Keyboard,
  TextInput,
} from 'react-native';
import { renderNode } from '../helpers';
import Input from '../input/Input';
import Icon, { IconNode } from '../icons/Icon';
import { SearchBarBaseProps } from './SearchBar';

const defaultSearchIcon = (theme) => ({
  type: 'material',
  size: 25,
  color: theme.colors.platform.android.grey,
  name: 'search',
});

const defaultCancelIcon = (theme) => ({
  type: 'material',
  size: 25,
  color: theme.colors.platform.android.grey,
  name: 'arrow-back',
});

const defaultClearIcon = (theme) => ({
  type: 'material',
  size: 25,
  color: theme.colors.platform.android.grey,
  name: 'clear',
});

export type SearchBarAndroidProps = SearchBarBaseProps &
  typeof SearchBar.defaultProps & {
    cancelIcon?: IconNode;
  };

type SearchBarState = {
  hasFocus: boolean;
  isEmpty: boolean;
};

class SearchBar extends Component<SearchBarAndroidProps, SearchBarState> {
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

  onFocus = (event: any) => {
    this.props.onFocus(event);
    this.setState({
      hasFocus: true,
      isEmpty: this.props.value === '',
    });
  };

  onBlur = (event: any) => {
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
        style={StyleSheet.flatten([styles.container(theme), containerStyle])}
      >
        <Input
          testID="searchInput"
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
                  ...defaultCancelIcon(theme),
                  onPress: this.cancel,
                })
              : renderNode(Icon, searchIcon, defaultSearchIcon(theme))
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
                  ...defaultClearIcon(theme),
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

const styles = {
  container: (theme) => ({
    backgroundColor: theme.colors.white,
    paddingTop: 8,
    paddingBottom: 8,
  }),
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
};

export default SearchBar;
