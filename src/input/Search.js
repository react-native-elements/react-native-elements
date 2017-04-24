import React, { PropTypes, Component } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  TextInput,
  Platform,
  Text as NativeText,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../config/colors';
import normalize from '../helpers/normalizeText';

class Search extends Component {
  focus() {
    const ref = this.props.textInputRef;
    this.refs[ref].focus();
  }

  clearText() {
    const ref = this.props.textInputRef;
    this.refs[ref].clear();
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
      selectionColor,
      underlineColorAndroid,
      ...attributes
    } = this.props;
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
          selectionColor={selectionColor || colors.grey3}
          underlineColorAndroid={
            underlineColorAndroid ? underlineColorAndroid : 'transparent'
          }
          style={[
            styles.input,
            lightTheme && styles.inputLight,
            noIcon && { paddingLeft: 9 },
            round && { borderRadius: Platform.OS === 'ios' ? 15 : 20 },
            inputStyle && inputStyle,
          ]}
          {...attributes}
        />
        {!noIcon &&
          <Icon
            size={16}
            style={[styles.icon, icon.style && icon.style]}
            name={icon.name || 'search'}
            color={icon.color || colors.grey3}
          />}
        {clearIcon &&
          <Icon
            size={16}
            style={[styles.clearIcon, clearIcon.style && clearIcon.style]}
            name={clearIcon.name || 'close'}
            onPress={this.clearText.bind(this)}
            color={clearIcon.color || colors.grey3}
          />}
        {showLoadingIcon &&
          <ActivityIndicator
            style={[styles.loadingIcon, loadingIcon.style && loadingIcon.style]}
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
  containerStyle: View.propTypes.style,
  inputStyle: NativeText.propTypes.style,
  round: PropTypes.bool,
  showLoadingIcon: PropTypes.bool,
  loadingIcon: PropTypes.object,
  clearIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  textInputRef: PropTypes.string,
  containerRef: PropTypes.string,
  selectionColor: PropTypes.string,
  underlineColorAndroid: PropTypes.string,
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
    left: 16,
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
        top: 17,
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
  clearIcon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 16,
    top: 15.5,
    ...Platform.select({
      android: {
        top: 17,
      },
    }),
  },
});

export default Search;
