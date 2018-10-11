import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  LayoutAnimation,
  UIManager,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';

import ViewPropTypes from '../config/ViewPropTypes';
import Input from '../input/Input';
import Icon from '../icons/Icon';
import { renderNode, nodeType } from '../helpers';

const IOS_GRAY = '#7d7d7d';
const defaultSearchIcon = {
  type: 'ionicon',
  size: 20,
  name: 'ios-search',
  color: IOS_GRAY,
};
const defaultClearIcon = {
  type: 'ionicon',
  name: 'ios-close-circle',
  size: 20,
  color: IOS_GRAY,
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
      isEmpty: true,
      cancelButtonWidth: 0,
      cancelButtonTransform: 0,
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

  cancel = () => {
    this.blur();
    this.props.onCancel();
  };

  onFocus = () => {
    this.props.onFocus();
    UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut();
    this.setState({
      hasFocus: true,
      cancelButtonTransform: -this.state.cancelButtonWidth,
    });
  };

  onBlur = () => {
    this.props.onBlur();
    UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut();
    this.setState({
      hasFocus: false,
      cancelButtonTransform: 0,
    });
  };

  onChangeText = text => {
    this.props.onChangeText(text);
    this.setState({ isEmpty: text === '' });
  };

  render() {
    const {
      cancelButtonProps,
      cancelButtonTitle,
      clearIcon,
      containerStyle,
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputContainerStyle,
      inputStyle,
      placeholderTextColor,
      showLoading,
      loadingProps,
      searchIcon,
      ...attributes
    } = this.props;
    const { hasFocus, isEmpty } = this.state;

    const { style: loadingStyle, ...otherLoadingProps } = loadingProps;

    return (
      <View style={StyleSheet.flatten([styles.container, containerStyle])}>
        <Input
          {...attributes}
          testID="searchInput"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          ref={input => (this.input = input)}
          inputStyle={StyleSheet.flatten([styles.input, inputStyle])}
          containerStyle={{
            width: '100%',
          }}
          inputContainerStyle={StyleSheet.flatten([
            styles.inputContainer,
            hasFocus && { marginRight: this.state.cancelButtonWidth },
            inputContainerStyle,
          ])}
          leftIcon={renderNode(Icon, searchIcon, defaultSearchIcon)}
          leftIconContainerStyle={StyleSheet.flatten([
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
          ])}
          placeholderTextColor={placeholderTextColor}
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

        <View
          style={{ marginLeft: this.state.cancelButtonTransform }}
          onLayout={event =>
            this.setState({ cancelButtonWidth: event.nativeEvent.layout.width })
          }
        >
          <Button
            title={cancelButtonTitle}
            onPress={this.cancel}
            {...cancelButtonProps}
          />
        </View>
      </View>
    );
  }
}

SearchBar.propTypes = {
  cancelButtonProps: PropTypes.object,
  cancelButtonTitle: PropTypes.string,
  clearIcon: nodeType,
  searchIcon: nodeType,
  loadingProps: PropTypes.object,
  showLoading: PropTypes.bool,
  onClear: PropTypes.func,
  onCancel: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  leftIconContainerStyle: ViewPropTypes.style,
  rightIconContainerStyle: ViewPropTypes.style,
  inputContainerStyle: ViewPropTypes.style,
  inputStyle: Text.propTypes.style,
  placeholderTextColor: PropTypes.string,
};

SearchBar.defaultProps = {
  cancelButtonTitle: 'Cancel',
  loadingProps: {},
  showLoading: false,
  onClear: () => null,
  onCancel: () => null,
  onFocus: () => null,
  onBlur: () => null,
  onChangeText: () => null,
  placeholderTextColor: IOS_GRAY,
  searchIcon: defaultSearchIcon,
  clearIcon: defaultClearIcon,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingBottom: 13,
    paddingTop: 13,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  input: {
    marginLeft: 6,
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: '#dcdce1',
    borderRadius: 9,
    height: 36,
    marginLeft: 15,
    marginRight: 15,
  },
  rightIconContainerStyle: {
    marginRight: 8,
  },
  leftIconContainerStyle: {
    marginLeft: 8,
  },
});

export default SearchBar;
