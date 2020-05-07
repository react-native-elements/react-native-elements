import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

import { ViewPropTypes } from '../config';
import { nodeType, renderNode } from '../helpers';

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

class SearchBar extends Component {
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
          renderErrorMessage={false}
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

SearchBar.propTypes = {
  value: PropTypes.string,
  clearIcon: nodeType,
  searchIcon: nodeType,
  cancelIcon: nodeType,
  loadingProps: PropTypes.object,
  showLoading: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  leftIconContainerStyle: ViewPropTypes.style,
  rightIconContainerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  inputStyle: Text.propTypes.style,
  onClear: PropTypes.func,
  onCancel: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
};

SearchBar.defaultProps = {
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
