import React, { PropTypes } from 'react'
import { TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight, StyleSheet, View, Platform, ActivityIndicator } from 'react-native'
import colors from '../config/colors'
import Text from '../text/Text'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import getIconType from '../helpers/getIconType'
import normalize from '../helpers/normalizeText'

let styles = {}

const log = () => {
  console.log('please attach method to this component')
}

const Button = ({
  Component,
  disabled,
  loading,
  loadingRight,
  activityIndicatorStyle,
  buttonStyle,
  borderRadius,
  title,
  onPress,
  delayLongPress,
  delayPressIn,
  delayPressOut,
  onLayout,
  onLongPress,
  onPressIn,
  onPressOut,
  hitSlop,
  activeOpacity,
  onHideUnderlay,
  onShowUnderlay,
  background,
  SelectableBackground,
  SelectableBackgroundBorderless,
  Ripple,
  icon,
  secondary,
  secondary2,
  secondary3,
  primary1,
  primary2,
  primary3,
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
  fontFamily}) => {
  let iconElement
  if (icon) {
    let Icon
    if (!icon.type) {
      Icon = MaterialIcon
    } else {
      Icon = getIconType(icon.type)
    }
    iconElement = (
      <Icon
        color={icon.color || 'white'}
        size={icon.size || (large ? 26 : 18)}
        style={[
          iconRight ? styles.iconRight : styles.icon,
          icon.style && icon.style
        ]}
        name={icon.name} />
    )
  }
  let loadingElement;
  if(loading){
    loadingElement = (
      <ActivityIndicator
        animating={true}
        style={[styles.activityIndicatorStyle, activityIndicatorStyle]}
        color={color || "white"}
        size={large && "large" || "small"}
      />
    )
  }
  if (!Component && Platform.OS === 'ios') {
    Component = TouchableHighlight
  }
  if (!Component && Platform.OS === 'android') {
    Component = TouchableNativeFeedback
  }
  if (!Component) {
    Component = TouchableHighlight
  }
  return (
    <Component
      delayLongPress={delayLongPress}
      delayPressIn={delayPressIn}
      delayPressOut={delayPressOut}
      onLayout={onLayout}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={activeOpacity}
      onHideUnderlay={onHideUnderlay}
      onShowUnderlay={onShowUnderlay}
      background={background}
      SelectableBackground={SelectableBackground}
      SelectableBackgroundBorderless={SelectableBackgroundBorderless}
      Ripple={Ripple}
      hitSlop={hitSlop}
      underlayColor={underlayColor || 'transparent'}
      onPress={onPress || log}
      disabled={disabled || false}>
      <View
        style={[
          styles.button,
          secondary && {backgroundColor: colors.secondary},
          secondary2 && {backgroundColor: colors.secondary2},
          secondary3 && {backgroundColor: colors.secondary3},
          primary1 && {backgroundColor: colors.primary1},
          primary2 && {backgroundColor: colors.primary2},
          backgroundColor && {backgroundColor: backgroundColor},
          borderRadius && {borderRadius},
          raised && styles.raised,
          !large && styles.small,
          buttonStyle && buttonStyle,
          disabled && {backgroundColor: colors.disabled},
          disabled && disabledStyle && disabledStyle
        ]}
        >
        {
          icon && !iconRight && iconElement
        }
        {
          loading && !loadingRight && loadingElement
        }
        <Text
          style={[
            styles.text,
            color && {color},
            !large && styles.smallFont,
            fontSize && {fontSize},
            textStyle && textStyle,
            fontWeight && {fontWeight},
            fontFamily && {fontFamily}
          ]}>
          {title}
        </Text>
        {
          loading && loadingRight && loadingElement
        }
        {
          icon && iconRight && iconElement
        }
      </View>
    </Component>
  )
}

Button.propTypes = {
  buttonStyle: PropTypes.any,
  title: PropTypes.string,
  onPress: PropTypes.any,
  icon: PropTypes.object,
  secondary: PropTypes.bool,
  secondary2: PropTypes.bool,
  secondary3: PropTypes.bool,
  primary1: PropTypes.bool,
  primary2: PropTypes.bool,
  primary3: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
  underlayColor: PropTypes.string,
  raised: PropTypes.bool,
  textStyle: PropTypes.any,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  activityIndicatorStyle: PropTypes.any,
  loadingRight: PropTypes.bool
}

styles = StyleSheet.create({
  button: {
    padding: 19,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontSize: normalize(16)
  },
  icon: {
    marginRight: 10
  },
  iconRight: {
    marginLeft: 10
  },
  small: {
    padding: 12
  },
  smallFont: {
    fontSize: normalize(14)
  },
  activityIndicatorStyle: {
    marginHorizontal: 10,
    height: 0
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 1
      },
      android: {
        elevation: 2
      }
    })
  }
})

export default Button
