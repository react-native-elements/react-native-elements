import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

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

  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
    };
  }

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
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.grey0,
          },
          lightTheme && styles.containerLight,
          lightTheme && {
            backgroundColor: theme.colors.grey5,
          },
          containerStyle,
        ]}
      >
        <Input
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          ref={input => (this.input = input)}
          placeholderTextColor={placeholderTextColor}
          inputStyle={[
            {
              color: theme.colors.grey3,
            },
            inputStyle,
          ]}
          inputContainerStyle={[
            styles.inputContentContainer,
            {
              backgroundColor: theme.colors.searchBg,
            },
            inputContainerStyle,
            lightTheme && {
              backgroundColor: theme.colors.grey4,
            },
            round && styles.round,
          ]}
          containerStyle={styles.inputContainer}
          leftIcon={renderNode(Icon, searchIcon, defaultSearchIcon(theme))}
          leftIconContainerStyle={[
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
          ]}
          rightIcon={
            <View style={{ flexDirection: 'row' }}>
              {showLoading && (
                <ActivityIndicator
                  style={[{ marginRight: 5 }, loadingStyle]}
                  {...otherLoadingProps}
                />
              )}
              {!isEmpty &&
                renderNode(Icon, clearIcon, {
                  ...defaultClearIcon(theme),
                  onPress: this.clear,
                })}
            </View>
          }
          rightIconContainerStyle={[
            styles.rightIconContainerStyle,
            rightIconContainerStyle,
          ]}
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

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderTopColor: '#000',
    padding: 8,
  },
  rightIconContainerStyle: {
    marginRight: 8,
  },
  leftIconContainerStyle: {
    marginLeft: 8,
  },
  containerLight: {
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1',
  },
  inputContainer: {
    width: '100%',
  },
  inputContentContainer: {
    borderBottomWidth: 0,
    borderRadius: 3,
    overflow: 'hidden',
    height: 30,
  },
  round: {
    borderRadius: 15,
  },
});

export default SearchBar;
