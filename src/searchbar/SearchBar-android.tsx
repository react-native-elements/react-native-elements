import * as React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { renderNode } from '../helpers';
import Input from '../input/Input';
import Icon from '../icons/Icon';
const ANDROID_GRAY = 'rgba(0, 0, 0, 0.54)';
const defaultSearchIcon = {
  type: 'material',
  size: 25,
  color: ANDROID_GRAY,
  name: 'search',
};
const defaultCancelIcon = {
  type: 'material',
  size: 25,
  color: ANDROID_GRAY,
  name: 'arrow-back',
};
const defaultClearIcon = {
  type: 'material',
  size: 25,
  color: ANDROID_GRAY,
  name: 'clear',
};
type SearchBarProps = {
  value?: string;
  clearIcon?: any;
  searchIcon?: any;
  cancelIcon?: any;
  loadingProps?: object;
  showLoading?: boolean;
  containerStyle?: any;
  leftIconContainerStyle?: any;
  rightIconContainerStyle?: any;
  inputContainerStyle?: any;
  inputStyle?: any;
  onClear?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  onFocus?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  onChangeText?: (...args: any[]) => any;
};
type SearchBarState = {
  hasFocus: boolean;
  isEmpty: boolean;
};
class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  static defaultProps = {
    value: '',
    loadingProps: {},
    showLoading: false,
    onClear: () => null,
    onCancel: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onChangeText: () => null,
    searchIcon: defaultSearchIcon,
    clearIcon: defaultClearIcon,
    cancelIcon: defaultCancelIcon,
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
  onFocus = () => {
    this.props.onFocus();
    this.setState({
      hasFocus: true,
      isEmpty: this.props.value === '',
    });
  };
  onBlur = () => {
    this.props.onBlur();
    this.setState({ hasFocus: false });
  };
  onChangeText = text => {
    this.props.onChangeText(text);
    this.setState({ isEmpty: text === '' });
  };
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      hasFocus: false,
      isEmpty: value ? value === '' : true,
    };
  }
  render() {
    const {
      clearIcon,
      containerStyle,
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      searchIcon,
      cancelIcon,
      showLoading,
      loadingProps,
      ...attributes
    } = this.props;
    const { hasFocus, isEmpty } = this.state;
    const { style: loadingStyle, ...otherLoadingProps } = loadingProps;
    return (
      <View style={StyleSheet.flatten([styles.container, containerStyle])}>
        <Input
          testID="searchInput"
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          ref={input => {
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
                  ...defaultCancelIcon,
                  onPress: this.cancel,
                })
              : renderNode(Icon, searchIcon, defaultSearchIcon)
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
                  ...defaultClearIcon,
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
  container: {
    backgroundColor: 'white',
    paddingTop: 8,
    paddingBottom: 8,
  },
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
export default SearchBar;
