import PropTypes from 'prop-types';
import React from 'react';

import {
  StyleSheet,
  View,
  Text as NativeText,
  TouchableNativeFeedback,
  ActivityIndicator,
  TouchableHighlight,
  Platform,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import colors from '../config/colors';
import Text from '../text/Text';
import getIconType from '../helpers/getIconType';
import ViewPropTypes from '../config/ViewPropTypes';

const log = () => {
  console.log('please attach method to this component'); //eslint-disable-line no-console
};

const Button = props => {
  const {
    disabled,
    loading,
    loadingRight,
    activityIndicatorStyle,
    buttonStyle,
    borderRadius,
    clear,
    title,
    onPress,
    icon,
    iconComponent,
    secondary,
    secondary2,
    secondary3,
    primary1,
    primary2,
    backgroundColor,
    color,
    fontSize,
    underlayColor,
    raised,
    large,
    iconRight,
    disabledStyle,
    containerViewStyle,
    rounded,
    outline,
    transparent,
    stylesObject,
    ...attributes
  } = props;
  let { Component, rightIcon, leftIcon } = props;

  let leftIconElement;
  if (!leftIcon && icon) {
    leftIcon = icon;
  }
  if (leftIcon) {
    let Icon;
    if (iconComponent) {
      Icon = iconComponent;
    } else if (!leftIcon.type) {
      Icon = MaterialIcon;
    } else {
      Icon = getIconType(leftIcon.type);
    }
    leftIconElement = (
      <Icon
        {...leftIcon}
        color={leftIcon.color || 'white'}
        size={leftIcon.size || (large ? 26 : 18)}
        style={[styles.icon, leftIcon.style && leftIcon.style]}
      />
    );
  }
  let rightIconElement;
  if (iconRight || rightIcon) {
    if (!rightIcon) {
      rightIcon = iconRight;
    }
    let Icon;
    if (iconComponent) {
      Icon = iconComponent;
    } else if (!rightIcon.type) {
      Icon = MaterialIcon;
    } else {
      Icon = getIconType(rightIcon.type);
    }
    rightIconElement = (
      <Icon
        {...rightIcon}
        color={rightIcon.color || 'white'}
        size={rightIcon.size || (large ? 26 : 18)}
        style={[styles.iconRight, rightIcon.style && rightIcon.style]}
      />
    );
  }
  let loadingElement;
  if (loading) {
    loadingElement = (
      <ActivityIndicator
        animating={true}
        style={[styles.activityIndicatorStyle, activityIndicatorStyle]}
        color={color || 'white'}
        size={(large && 'large') || 'small'}
      />
    );
  }
  if (!Component && Platform.OS === 'ios') {
    Component = TouchableHighlight;
  }
  if (!Component && Platform.OS === 'android') {
    Component = TouchableNativeFeedback;
  }
  if (!Component) {
    Component = TouchableHighlight;
  }

  if (Platform.OS === 'android' && (borderRadius && !attributes.background)) {
    if (Platform.Version >= 21) {
      attributes.background = TouchableNativeFeedback.Ripple(
        'ThemeAttrAndroid',
        true
      );
    } else {
      attributes.background = TouchableNativeFeedback.SelectableBackground();
    }
  }

  return (
    <View
      style={[
        styles.container,
        raised && styles.raised,
        containerViewStyle,
        borderRadius && { borderRadius },
      ]}
    >
      <Component
        {...attributes}
        underlayColor={underlayColor || 'transparent'}
        onPress={onPress || log}
        disabled={disabled || false}
      >
        <View
          pointerEvents="box-only"
          style={[
            styles.button,
            secondary && { backgroundColor: colors.secondary },
            secondary2 && { backgroundColor: colors.secondary2 },
            secondary3 && { backgroundColor: colors.secondary3 },
            primary1 && { backgroundColor: colors.primary1 },
            primary2 && { backgroundColor: colors.primary2 },
            backgroundColor && { backgroundColor: backgroundColor },
            borderRadius && { borderRadius },
            !large && styles.small,
            rounded && {
              borderRadius: fontSize.size * 3.8,
              paddingHorizontal: !large
                ? stylesObject.small.padding * 1.5
                : stylesObject.button.padding * 1.5,
            },
            outline && {
              borderWidth: 1,
              backgroundColor: 'transparent',
              borderColor: fontSize.color,
            },
            transparent && {
              borderWidth: 0,
              backgroundColor: 'transparent',
            },
            buttonStyle && buttonStyle,
            disabled && { backgroundColor: colors.disabled },
            disabled && disabledStyle && disabledStyle,
          ]}
        >
          {(icon && !iconRight) || leftIconElement ? leftIconElement : null}
          {loading && !loadingRight && loadingElement}
          <Text
            style={[
              styles.button,
              clear && { backgroundColor: 'transparent', elevation: 0 },
              buttonStyle,
            ]}
          >
            {title}
          </Text>
          {loading && loadingRight && loadingElement}
          {(icon && iconRight) || rightIconElement ? rightIconElement : null}
        </View>
      </Component>
    </View>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  textStyle: NativeText.propTypes.style,
  textProps: PropTypes.object,

  buttonStyle: ViewPropTypes.style,

  clear: PropTypes.bool,

  loading: PropTypes.bool,
  loadingStyle: ViewPropTypes.style,
  loadingProps: PropTypes.object,
  loadingRight: PropTypes.bool,

  onPress: PropTypes.any,
  containerStyle: ViewPropTypes.style,

  icon: PropTypes.object,
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
  iconRight: PropTypes.object,
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
  activityIndicatorStyle: ViewPropTypes.style,
  stylesObject: ViewPropTypes.style,
  Component: PropTypes.any,
  borderRadius: PropTypes.number,
  large: PropTypes.bool,
  fontWeight: PropTypes.string,
  disabledStyle: ViewPropTypes.style,
  fontFamily: PropTypes.string,
  containerViewStyle: ViewPropTypes.style,
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
    borderRadius: 30,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    ...Platform.select({
      ios: {
        // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
        backgroundColor: '#007AFF',
      },
      android: {
        elevation: 4,
        // Material design blue from https://material.google.com/style/color.html#color-color-palette
        backgroundColor: '#2196F3',
        borderRadius: 2,
      },
    }),
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 8,
    ...Platform.select({
      ios: {
        fontSize: 18,
      },
      android: {
        backgroundColor: '#fff',
        elevation: 2,
      },
    }),
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default Button;
