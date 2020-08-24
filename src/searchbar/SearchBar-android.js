import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { nodeType, renderNode } from '../helpers';

import Input from '../input/Input';
import Icon from '../icons/Icon';

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

  onFocus = (event) => {
    this.props.onFocus(event);
    this.setState({
      hasFocus: true,
      isEmpty: this.props.value === '',
    });
  };

  onBlur = (event) => {
    this.props.onBlur(event);
    this.setState({ hasFocus: false });
  };

  onChangeText = (text) => {
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
      theme,
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
          ref={(input) => {
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

SearchBar.propTypes = {
  value: PropTypes.string,
  clearIcon: nodeType,
  searchIcon: nodeType,
  cancelIcon: nodeType,
  loadingProps: PropTypes.object,
  showLoading: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  leftIconContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  rightIconContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  inputContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
  searchIcon: { name: 'search' },
  clearIcon: { name: 'clear' },
  cancelIcon: { name: 'arrow-back' },
};

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
