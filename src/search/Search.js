import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  TextInput,
  Platform,
  Text as NativeText,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewPropTypes from '../config/ViewPropTypes';

class Search extends Component {
  focus() {
    const ref = this.props.textInputRef;
    this.refs[ref].focus();
  }

  clearText() {
    if (this.props.onChangeText) {
      this.props.onChangeText('');
    }
    try {
      const ref = this.props.textInputRef;
      this.refs[ref].clear();
    } catch (e) {
      if (__DEV__)
        console.warn(
          'Could not access textInput reference, make sure you supplied the textInputRef'
        );
    }
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
      textInputRef,
      underlineColorAndroid,
      placeholderTextColor,
      ...attributes
    } = this.props;

    const styles = this.context.theme.search;
    const colors = this.context.theme.colors;
    const cplaceholderTextColor = placeholderTextColor || colors.grey3;

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
          ref={textInputRef}
          placeholderTextColor={cplaceholderTextColor}
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
          {...attributes}
        />
        {!noIcon &&
          <Icon
            size={16}
            style={[styles.icon, styles.searchIcon, icon.style && icon.style]}
            name={icon.name || 'search'}
            color={icon.color || colors.grey3}
          />}
        {clearIcon &&
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
          />}
        {showLoadingIcon &&
          <ActivityIndicator
            style={[
              styles.loadingIcon,
              loadingIcon.style && loadingIcon.style,
              clearIcon && { right: 35 },
            ]}
            color={icon.color || colors.grey3}
          />}
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
  textInputRef: PropTypes.string,
  containerRef: PropTypes.string,
  underlineColorAndroid: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholderTextColor: PropTypes.string,
};

Search.defaultProps = {
  // placeholderTextColor: colors.grey3,
  lightTheme: false,
  noIcon: false,
  round: false,
  icon: {},
  showLoadingIcon: false,
  loadingIcon: {},
};

Search.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default Search;
