import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  LayoutAnimation,
  Platform,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Input from '../input/Input';

const SCREEN_WIDTH = Dimensions.get('window').width;
const IOS_GRAY = '#7d7d7d';
const ANDROID_GRAY = 'rgba(0, 0, 0, 0.54)';

class SearchBar extends Component {

  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  clear() {
    this.input.clear();
    this.onChangeText('');
  }

  onFocus = () => {
    this.props.onFocus && this.props.onFocus();
    Platform.OS === 'ios' && LayoutAnimation.easeInEaseOut();
    this.setState({ hasFocus: true });
  }

  onBlur = () => {
    this.props.onBlur && this.props.onBlur();
    Platform.OS === 'ios' && LayoutAnimation.easeInEaseOut();
    this.setState({ hasFocus: false });
  }

  onChangeText = text => {
    this.props.onChangeText && this.props.onChangeText(text);
    this.setState({ isEmpty: text === '' });
  }
  
  constructor(props) {
    super(props);
    this.state = {
      hasFocus: false,
      isEmpty: true,
    };
  }

  render() {
    const {
      cancelButtonTitle,
      clearIcon,
      containerStyle,
      leftIcon,
      leftIconContainerStyle,
      rightIconContainerStyle,
      inputStyle,
      noIcon,
      onBlur,
      onFocus,
      onChangeText,
      placeholderTextColor,
      showLoading,
      loadingProps,
      ...attributes,
    } = this.props;
    const { hasFocus, isEmpty } = this.state;
    const {
      style: loadingStyle,
      ...otherLoadingProps,
    } = loadingProps;
    const searchIcon = Platform.select({
      ios: <Ionicon
        size={20}
        name={'ios-search'}
        color={IOS_GRAY}
      />,
      android: (hasFocus &&
        <MaterialIcon
          name={'arrow-left'}
          size={25}
          color={ANDROID_GRAY}
          onPress={() => this.input.blur()}
        />) ||
        <MaterialIcon
          size={25}
          color={ANDROID_GRAY}
          name={'magnify'}
        />
    });
    return(
        <View style={styles.container}>
          <Input
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChangeText={this.onChangeText}
            ref={input => (this.input = input)}
            inputStyle={[styles.input, inputStyle]}
            containerStyle={[
              styles.inputContainer,
              Platform.OS === 'ios' && !hasFocus && { width: SCREEN_WIDTH - 32, marginRight: 15 },
              containerStyle,
            ]}
            leftIcon={noIcon ? undefined : (leftIcon ? leftIcon : searchIcon)}
            leftIconContainerStyle={[styles.leftIconContainerStyle, leftIconContainerStyle]}
            placeholderTextColor={placeholderTextColor || IOS_GRAY}
            rightIcon={
              <View style={{ flexDirection: 'row' }}>
                {showLoading &&
                  <ActivityIndicator
                    style={[
                      styles.loadingIcon,
                      clearIcon && !isEmpty && { marginRight: 10 },
                      loadingStyle,
                    ]}
                    {...otherLoadingProps}
                  />
                }
                {clearIcon && !isEmpty &&
                  Platform.select({
                    ios: <Ionicon
                      name={'ios-close-circle'}
                      size={20}
                      color={IOS_GRAY}
                      onPress={() => this.clear()}
                    />,
                    android: <MaterialIcon
                      name={'close'}
                      size={25}
                      color={ANDROID_GRAY}
                      onPress={() => this.clear()}
                    />,
                  })
                }
              </View>
            }
            rightIconContainerStyle={[ styles.rightIconContainerStyle, rightIconContainerStyle ]}
            {...attributes}
          />
          {Platform.OS === 'ios' &&
            <Button
              title={cancelButtonTitle}
              onPress={() => this.blur()}
            />
          }
        </View>
    );
  }
}

SearchBar.propTypes = {
  cancelButtonTitle: PropTypes.string,
  clearIcon: PropTypes.bool,
  loadingProps: PropTypes.object,
  noIcon: PropTypes.bool,
  showLoading: PropTypes.bool,

};

SearchBar.defaultProps = {
  cancelButtonTitle: 'Cancel',
  clearIcon: true,
  loadingProps: {},
  noIcon: false,
  showLoading: false,
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    ...Platform.select({
      ios: {
        backgroundColor: '#f5f5f5',
        paddingBottom: 13,
        paddingTop: 13,
        borderBottomWidth: 1,
        borderBottomColor: '#c4c4c4',
        flexDirection: 'row',
      },
      android: {
        paddingTop: 8,
        paddingBottom: 8,
      },
    }),
  },
  input: {
    flex: 1,
    ...Platform.select({
      ios: {
        marginLeft: 6,
      },
      android: {
        marginLeft: 24,
        marginRight: 8,
      },
    }),
  },
  loadingIcon: {
    ...Platform.select({
      ios: {
        // backgroundColor: 'transparent',
      },
    }),
  },
  inputContainer: {
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        backgroundColor: '#dcdce1',
        borderRadius: 9,
        height: 36,
        marginLeft: 15,
      },
      android: {
        width: SCREEN_WIDTH,
      },
    }),
  },
  rightIconContainerStyle: {
    marginRight: 8,
  },
  leftIconContainerStyle: {
    marginLeft: 8,
  },
});

export default SearchBar;
