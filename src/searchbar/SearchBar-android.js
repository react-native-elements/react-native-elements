import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';

import ViewPropTypes from '../config/ViewPropTypes';
import nodeType from '../helpers/nodeType';
import Input from '../input/Input';
import Icon from '../icons/Icon';
import renderNode from '../helpers/renderNode';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ANDROID_GRAY = 'rgba(0, 0, 0, 0.54)';
const defaultSearchIcon = {
  type: 'material-community',
  size: 25,
  color: ANDROID_GRAY,
  name: 'magnify',
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
    this.setState({ hasFocus: true });
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
    this.state = {
      hasFocus: false,
      isEmpty: true,
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

    const defaultCancelIcon = {
      type: 'material-community',
      size: 25,
      color: ANDROID_GRAY,
      name: 'arrow-left',
      onPress: this.cancel,
    };
    const defaultClearIcon = {
      type: 'material-community',
      name: 'close',
      size: 25,
      color: ANDROID_GRAY,
      onPress: this.clear,
    };
    return (
      <View style={[styles.container, containerStyle]}>
        <Input
          {...attributes}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          ref={input => (this.input = input)}
          inputStyle={[styles.input, inputStyle]}
          inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
          leftIcon={
            hasFocus
              ? renderNode(Icon, cancelIcon, defaultCancelIcon)
              : renderNode(Icon, searchIcon, defaultSearchIcon)
          }
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
              {!isEmpty && renderNode(Icon, clearIcon, defaultClearIcon)}
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
  loadingProps: {},
  showLoading: false,
  onClear: () => null,
  onCancel: () => null,
  onFocus: () => null,
  onBlur: () => null,
  onChangeText: () => null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    marginLeft: 24,
    marginRight: 8,
  },
  inputContainer: {
    borderBottomWidth: 0,
    width: SCREEN_WIDTH,
  },
  rightIconContainerStyle: {
    marginRight: 8,
  },
  leftIconContainerStyle: {
    marginLeft: 8,
  },
});

export default SearchBar;
