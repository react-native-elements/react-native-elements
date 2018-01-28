import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Input from '../input/Input';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ANDROID_GRAY = 'rgba(0, 0, 0, 0.54)';

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
    this.props.onClearText && this.props.onClearText();
  };

  cancel = () => {
    this.blur();
    this.props.onCancel && this.props.onCancel();
  };

  onFocus = () => {
    this.props.onFocus && this.props.onFocus();
    this.setState({ hasFocus: true });
  };

  onBlur = () => {
    this.props.onBlur && this.props.onBlur();
    this.setState({ hasFocus: false });
  };

  onChangeText = text => {
    this.props.onChangeText && this.props.onChangeText(text);
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
      leftIcon,
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputStyle,
      noIcon,
      showLoading,
      loadingProps,
      ...attributes
    } = this.props;
    const { hasFocus, isEmpty } = this.state;
    const { style: loadingStyle, ...otherLoadingProps } = loadingProps;
    const searchIcon = (
      <MaterialIcon
        size={25}
        color={ANDROID_GRAY}
        name={hasFocus ? 'arrow-left' : 'magnify'}
        onPress={hasFocus && this.cancel}
      />
    );
    return (
      <View style={styles.container}>
        <Input
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          ref={input => (this.input = input)}
          inputStyle={[styles.input, inputStyle]}
          containerStyle={[styles.inputContainer, containerStyle]}
          leftIcon={noIcon ? undefined : leftIcon ? leftIcon : searchIcon}
          leftIconContainerStyle={[
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
          ]}
          rightIcon={
            <View style={{ flexDirection: 'row' }}>
              {showLoading && (
                <ActivityIndicator
                  style={[
                    clearIcon && !isEmpty && { marginRight: 10 },
                    loadingStyle,
                  ]}
                  {...otherLoadingProps}
                />
              )}
              {clearIcon &&
                !isEmpty && (
                  <MaterialIcon
                    name={'close'}
                    size={25}
                    color={ANDROID_GRAY}
                    onPress={() => this.clear()}
                  />
                )}
            </View>
          }
          rightIconContainerStyle={[
            styles.rightIconContainerStyle,
            rightIconContainerStyle,
          ]}
          {...attributes}
        />
      </View>
    );
  }
}

SearchBar.propTypes = {
  clearIcon: PropTypes.bool,
  loadingProps: PropTypes.object,
  noIcon: PropTypes.bool,
  showLoading: PropTypes.bool,
  onClearText: PropTypes.func,
  onCancel: PropTypes.func,
};

SearchBar.defaultProps = {
  clearIcon: true,
  loadingProps: {},
  noIcon: false,
  showLoading: false,
  onClearText: null,
  onCancel: null,
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    flex: 1,
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