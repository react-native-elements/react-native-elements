import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Platform,
  ActivityIndicator,
} from 'react-native';

import colors from '../config/colors';
import Text from '../text/Text';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import getIconType from '../helpers/getIconType';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';

class Button extends Component {
  log() {
    console.log('Please attach a method to this component');
  }

  renderContent() {
    let {
      type,
      loading,
      loadingStyle,
      loadingProps,
      text,
      textStyle,
      textProps,
    } = this.props;

    let buttonDefaultStyle = null;

    if (type === 'login') {
      text = 'LOG IN';
    } else if (type === 'login_android') {
      text = 'Log in';
      buttonDefaultStyle = { fontWeight: 'bold', fontSize: 23 };
    } else if (type === 'default') {
      text = 'Welcome to\nReact Native Elements';
      buttonDefaultStyle = { textAlign: 'center' };
    }

    if (loading) {
      return (
        <ActivityIndicator
          animating={true}
          style={[styles.loading, loadingStyle]}
          color={(loadingProps && loadingProps.color) || 'white'}
          size={(loadingProps && loadingProps.size) || 'small'}
        />
      );
    } else {
      return (
        <Text
          style={[styles.text, buttonDefaultStyle, textStyle]}
          {...textProps}
        >
          {text}
        </Text>
      );
    }
  }

  render() {
    let {
      type,
      disabled,
      buttonStyle,
      onPress,
      icon,
      iconComponent,
      underlayColor,
      large,
      iconRight,
      containerStyle,
      ...attributes
    } = this.props;

    let buttonDefaultStyle = null;

    if (type === 'login') {
      buttonDefaultStyle = {
        height: 50,
        width: 250,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
      };
    } else if (type === 'login_android') {
      buttonDefaultStyle = {
        height: 50,
        width: 230,
        backgroundColor: 'rgba(111, 202, 186, 1)',
        borderRadius: 5,
      };
    } else if (type === 'default') {
      icon = { name: 'home', size: 32 };
      containerStyle = { borderRadius: 10 };
      buttonDefaultStyle = { backgroundColor: '#ff4f00', borderRadius: 10 };
    } else {
      containerStyle = { borderRadius: 10 };
      buttonDefaultStyle = {
        height: 40,
        width: 230,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 20,
      };
    }

    let iconElement;
    if (icon) {
      let Icon;
      if (iconComponent) {
        Icon = iconComponent;
      } else if (!icon.type) {
        Icon = MaterialIcon;
      } else {
        Icon = getIconType(icon.type);
      }
      iconElement = (
        <Icon
          {...icon}
          color={icon.color || 'white'}
          size={icon.size || (large ? 26 : 18)}
          style={[
            iconRight ? styles.iconRight : styles.icon,
            icon.style && icon.style,
          ]}
        />
      );
    }

    return (
      <View style={[styles.container, containerStyle]}>
        <TouchableHighlight
          underlayColor={underlayColor || 'transparent'}
          onPress={onPress || this.log.bind(this)}
          disabled={disabled || false}
          {...attributes}
        >
          <View
            style={[
              styles.button,
              buttonDefaultStyle && buttonDefaultStyle,
              buttonStyle,
            ]}
          >
            {icon && !iconRight && iconElement}
            {this.renderContent()}
            {icon && iconRight && iconElement}
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,

  text: PropTypes.string,
  textStyle: ViewPropTypes.style,
  textProps: PropTypes.object,

  buttonStyle: ViewPropTypes.style,

  loading: PropTypes.bool,
  loadingStyle: ViewPropTypes.style,
  loadingProps: PropTypes.object,

  containerStyle: ViewPropTypes.style,
  onPress: PropTypes.any,

  icon: PropTypes.object,
  iconComponent: PropTypes.any,
  secondary: PropTypes.bool,
  secondary2: PropTypes.bool,
  secondary3: PropTypes.bool,
  primary1: PropTypes.bool,
  primary2: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
  underlayColor: PropTypes.string,
  raised: PropTypes.bool,
  disabled: PropTypes.bool,
  borderRadius: PropTypes.number,
  large: PropTypes.bool,
  iconRight: PropTypes.bool,
  fontWeight: PropTypes.string,
  disabledStyle: ViewPropTypes.style,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
  transparent: PropTypes.bool,
  allowFontScaling: PropTypes.bool,
  textNumberOfLines: PropTypes.number,
  textEllipsizeMode: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: normalize(16),
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  small: {
    padding: 12,
  },
  smallFont: {
    fontSize: normalize(14),
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});

export default Button;
