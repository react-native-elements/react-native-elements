import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TextInput,
  Platform,
  Text as NativeText,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../config/colors';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';
import getIconType from '../helpers/getIconType';

class Search extends Component {
  getRef = () => {
    return this.input || this.refs[this.props.textInputRef];
  };

  getRefHandler = () => {
    if (this.props.textInputRef) {
      if (typeof this.props.textInputRef === 'function') {
        return input => {
          this.input = input;
          this.props.textInputRef(input);
        };
      } else {
        return this.props.textInputRef;
      }
    } else {
      return input => (this.input = input);
    }
  };

  focus() {
    this.getRef() && this.getRef().focus();
  }

  blur() {
    this.getRef() && this.getRef().blur();
  }

  clearText() {
    this.getRef() && this.getRef().clear();
    this.props.onChangeText && this.props.onChangeText('');
    this.props.onClearText && this.props.onClearText();
  }

  render() {
    const {
      containerStyle,
      inputStyle,
      icon,
      noIcon,
      lightTheme,
      round,
      showLoadingIcon,
      loadingIcon,
      clearIcon,
      containerRef,
      underlineColorAndroid,
      ...attributes
    } = this.props;

    let Icon = MaterialIcons;
    if (icon.type) {
      Icon = getIconType(icon.type);
    }

    return (
      <View
        ref={containerRef}
        style={[
          styles.container,
          lightTheme && styles.containerLight,
          containerStyle && containerStyle,
        ]}
      >
        <TextInput
          {...attributes}
          ref={this.getRefHandler()}
          underlineColorAndroid={
            underlineColorAndroid ? underlineColorAndroid : 'transparent'
          }
          style={[
            styles.input,
            lightTheme && styles.inputLight,
            noIcon && { paddingLeft: 9 },
            round && { borderRadius: Platform.OS === 'ios' ? 15 : 20 },
            inputStyle && inputStyle,
            clearIcon && showLoadingIcon && { paddingRight: 50 },
            ((clearIcon && !showLoadingIcon) ||
              (!clearIcon && showLoadingIcon)) && { paddingRight: 30 },
          ]}
        />
        {!noIcon && (
          <Icon
            size={16}
            style={[styles.icon, styles.searchIcon, icon.style && icon.style]}
            name={icon.name || 'search'}
            color={icon.color || colors.grey3}
          />
        )}
        {clearIcon && (
          <Icon
            size={16}
            style={[
              styles.icon,
              styles.clearIcon,
              clearIcon.style && clearIcon.style,
            ]}
            name={clearIcon.name || 'close'}
            onPress={this.clearText.bind(this)}
            color={clearIcon.color || colors.grey3}
          />
        )}
        {showLoadingIcon && (
          <ActivityIndicator
            style={[
              styles.loadingIcon,
              loadingIcon.style && loadingIcon.style,
              clearIcon && { right: 35 },
            ]}
            color={icon.color || colors.grey3}
          />
        )}
      </View>
    );
  }
}

Search.propTypes = {
  icon: PropTypes.object,
  noIcon: PropTypes.bool,
  lightTheme: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  inputStyle: NativeText.propTypes.style,
  round: PropTypes.bool,
  showLoadingIcon: PropTypes.bool,
  loadingIcon: PropTypes.object,
  clearIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // Deprecated
  textInputRef: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  // Deprecated
  containerRef: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  underlineColorAndroid: PropTypes.string,
  onChangeText: PropTypes.func,
  onClearText: PropTypes.func,
};

Search.defaultProps = {
  placeholderTextColor: colors.grey3,
  lightTheme: false,
  noIcon: false,
  round: false,
  icon: {},
  showLoadingIcon: false,
  loadingIcon: {},
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderTopColor: '#000',
    backgroundColor: colors.grey0,
  },
  containerLight: {
    backgroundColor: colors.grey5,
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1',
  },
  icon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 15.5,
    ...Platform.select({
      android: {
        top: 20,
      },
    }),
  },
  loadingIcon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 16,
    top: 13,
    ...Platform.select({
      android: {
        top: 18,
      },
    }),
  },
  input: {
    paddingLeft: 26,
    paddingRight: 19,
    margin: 8,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: colors.searchBg,
    fontSize: normalize(14),
    color: colors.grey3,
    height: 40,
    ...Platform.select({
      ios: {
        height: 30,
      },
      android: {
        borderWidth: 0,
      },
    }),
  },
  inputLight: {
    backgroundColor: colors.grey4,
  },
  searchIcon: {
    left: 16,
  },
  clearIcon: {
    right: 16,
  },
});

export default Search;
