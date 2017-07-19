import PropTypes from 'prop-types';
import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  StyleSheet,
  View,
  Platform,
  ActivityIndicator,
  Text as NativeText,
} from 'react-native';
import colors from '../config/colors';
import Text from '../text/Text';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import getIconType from '../helpers/getIconType';
import normalize from '../helpers/normalizeText';
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
    textStyle,
    large,
    iconRight,
    fontWeight,
    disabledStyle,
    fontFamily,
    containerViewStyle,
    rounded,
    outline,
    transparent,
    textNumberOfLines,
    textEllipsizeMode,
    allowFontScaling,
    ...attributes
  } = props;
  let { Component } = props;

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
    attributes.background = TouchableNativeFeedback.Ripple(
      'ThemeAttrAndroid',
      true
    );
  }

  const baseFont = {
    color: (textStyle && textStyle.color) || color || stylesObject.text.color,
    size: (textStyle && textStyle.fontSize) ||
      fontSize ||
      (!large && stylesObject.smallFont.fontSize) ||
      stylesObject.text.fontSize,
  };

  let textOptions = {};
  if (textNumberOfLines) {
    textOptions.numberOfLines = textNumberOfLines;
    if (textEllipsizeMode) {
      textOptions.ellipsizeMode = textEllipsizeMode;
    }
  }

  return (
    <View
      style={[styles.container, raised && styles.raised, containerViewStyle]}
    >
      <Component
        underlayColor={underlayColor || 'transparent'}
        onPress={onPress || log}
        disabled={disabled || false}
        {...attributes}
      >
        <View
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
              borderRadius: baseFont.size * 3.8,
              paddingHorizontal: !large
                ? stylesObject.small.padding * 1.5
                : stylesObject.button.padding * 1.5,
            },
            outline && {
              borderWidth: 1,
              backgroundColor: 'transparent',
              borderColor: baseFont.color,
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
          {icon && !iconRight && iconElement}
          {loading && !loadingRight && loadingElement}
          <Text
            style={[
              styles.text,
              color && { color },
              !large && styles.smallFont,
              fontSize && { fontSize },
              textStyle && textStyle,
              fontWeight && { fontWeight },
              fontFamily && { fontFamily },
            ]}
            {...textOptions}
            allowFontScaling={allowFontScaling}
          >
            {title}
          </Text>
          {loading && loadingRight && loadingElement}
          {icon && iconRight && iconElement}
        </View>
      </Component>
    </View>
  );
};

Button.propTypes = {
  buttonStyle: ViewPropTypes.style,
  title: PropTypes.string,
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
  textStyle: NativeText.propTypes.style,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  activityIndicatorStyle: ViewPropTypes.style,
  loadingRight: PropTypes.bool,
  Component: PropTypes.any,
  borderRadius: PropTypes.number,
  large: PropTypes.bool,
  iconRight: PropTypes.bool,
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

const stylesObject = {
  container: {
    backgroundColor: 'transparent',
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    padding: 19,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  activityIndicatorStyle: {
    marginHorizontal: 10,
    height: 0,
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
        backgroundColor: '#fff',
        elevation: 2,
      },
    }),
  },
};

const styles = StyleSheet.create(stylesObject);

export default Button;
