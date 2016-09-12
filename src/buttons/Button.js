import React, { PropTypes } from 'react'
import { TouchableHighlight, StyleSheet, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../config/colors'
import Text from '../text/Text'

let styles = {}

const log = () => {
  console.log('please attach method to this component')
}

const Button = ({buttonStyle, title, onPress, icon, secondary, secondary2, secondary3, primary1, primary2, primary3, backgroundColor, color, fontSize, underlayColor, raised, textStyle, small, iconRight, fontFamily}) => {
  let iconElement
  if (icon) {
    iconElement = (
      <Icon color={icon.color || 'white'} size={icon.size || small ? 18 : 26} style={iconRight ? styles.iconRight : styles.icon} name={icon.name} />
    )
  }
  return (
    <TouchableHighlight
      underlayColor={underlayColor || 'transparent'}
      onPress={onPress || log}>
      <View
        style={[
          styles.button,
          secondary && {backgroundColor: colors.secondary},
          secondary2 && {backgroundColor: colors.secondary2},
          secondary3 && {backgroundColor: colors.secondary3},
          primary1 && {backgroundColor: colors.primary1},
          primary2 && {backgroundColor: colors.primary2},
          backgroundColor && {backgroundColor},
          buttonStyle && buttonStyle,
          raised && styles.raised,
          small && styles.small
        ]}
        >
        {
          icon && !iconRight && iconElement
        }
        <Text
          style={[
            styles.text,
            color && {color},
            fontSize && {fontSize},
            small && styles.smallFont,
            textStyle && textStyle,
            fontFamily && {fontFamily}
          ]}>
          {title}
        </Text>
        {
          icon && iconRight && iconElement
        }
      </View>
    </TouchableHighlight>
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
  fontSize: PropTypes.number,
  underlayColor: PropTypes.string,
  raised: PropTypes.bool,
  textStyle: PropTypes.any
}

styles = StyleSheet.create({
  button: {
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 7.5,
    marginBottom: 7.5
  },
  text: {
    color: 'white',
    fontSize: 18
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
    fontSize: 14
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
