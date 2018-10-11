import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

import { ViewPropTypes } from '../config';
import { renderNode, nodeType } from '../helpers';

import Input from '../input/Input';
import Icon from '../icons/Icon';

const defaultSearchIcon = theme => ({
  type: 'material-community',
  size: 18,
  name: 'magnify',
  color: theme.colors.grey3,
});

const defaultClearIcon = theme => ({
  type: 'material-community',
  size: 18,
  name: 'close',
  color: theme.colors.grey3,
});

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
    };
  }

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

  onFocus = () => {
    this.props.onFocus();
  };

  onBlur = () => {
    this.props.onBlur();
  };

  onChangeText = text => {
    this.props.onChangeText(text);
    this.setState({ isEmpty: text === '' });
  };

  render() {
    const { theme, ...rest } = this.props;

    const {
      lightTheme,
      round,
      clearIcon = defaultClearIcon(theme),
      containerStyle,
      searchIcon = defaultSearchIcon(theme),
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      showLoading,
      loadingProps,
      placeholderTextColor = theme.colors.grey3,
      ...attributes
    } = rest;

    const { isEmpty } = this.state;
    const { style: loadingStyle, ...otherLoadingProps } = loadingProps;

    return (
      <View
        style={StyleSheet.flatten([
          styles.container(theme),
          lightTheme && styles.containerLight(theme),
          containerStyle,
        ])}
      >
        <Input
          {...attributes}
          testID="searchInput"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          ref={input => (this.input = input)}
          placeholderTextColor={placeholderTextColor}
          inputStyle={StyleSheet.flatten([
            styles.inputStyle(theme),
            inputStyle,
          ])}
          inputContainerStyle={StyleSheet.flatten([
            styles.inputContentContainer(theme),
            lightTheme && styles.inputContentContainerLight(theme),
            round && styles.round,
            inputContainerStyle,
          ])}
          containerStyle={styles.inputContainer}
          leftIcon={renderNode(Icon, searchIcon, defaultSearchIcon(theme))}
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
  clearIcon: nodeType,
  searchIcon: nodeType,
  loadingProps: PropTypes.object,
  showLoading: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  leftIconContainerStyle: ViewPropTypes.style,
  rightIconContainerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  inputStyle: Text.propTypes.style,
  onClear: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  placeholderTextColor: PropTypes.string,
  lightTheme: PropTypes.bool,
  round: PropTypes.bool,
  theme: PropTypes.object,
};

SearchBar.defaultProps = {
  loadingProps: {},
  showLoading: false,
  lightTheme: false,
  round: false,
  onClear: () => null,
  onFocus: () => null,
  onBlur: () => null,
  onChangeText: () => null,
};

const styles = {
  container: theme => ({
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderTopColor: '#000',
    padding: 8,
    backgroundColor: theme.colors.grey0,
  }),
  rightIconContainerStyle: {
    marginRight: 8,
  },
  leftIconContainerStyle: {
    marginLeft: 8,
  },
  containerLight: theme => ({
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1',
    backgroundColor: theme.colors.grey5,
  }),
  inputContainer: {
    width: '100%',
  },
  inputStyle: theme => ({
    color: theme.colors.grey3,
  }),
  inputContentContainer: theme => ({
    borderBottomWidth: 0,
    borderRadius: 3,
    overflow: 'hidden',
    height: 30,
    backgroundColor: theme.colors.searchBg,
  }),
  inputContentContainerLight: theme => ({
    backgroundColor: theme.colors.grey4,
  }),
  round: {
    borderRadius: 15,
  },
};

export default SearchBar;
