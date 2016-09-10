import React from 'react'
import { StyleSheet, TouchableOpacity, View, Platform } from 'react-native'
import Text from '../text/Text'
import fonts from '../config/fonts'
import colors from '../config/colors'

import FAIcon from 'react-native-vector-icons/FontAwesome'
import ZocialIcon from 'react-native-vector-icons/Zocial'
import OcticonIcon from 'react-native-vector-icons/Octicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FoundationIcon from 'react-native-vector-icons/Foundation'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import EntypoIcon from 'react-native-vector-icons/Entypo'

let styles = {}

const getIconType = (type) => {
  switch (type) {
    case 'zocial':
      return ZocialIcon
    case 'octicon':
      return OcticonIcon
    case 'material':
      return MaterialIcon
    case 'ionicon':
      return Ionicon
    case 'foundation':
      return FoundationIcon
    case 'evilicon':
      return EvilIcon
    case 'entypo':
      return EntypoIcon
  }
}

const CheckBox = ({component, checked, iconRight, title, center, right, containerStyle, textStyle, onPress, checkedIcon, uncheckedIcon, iconType, checkedColor, uncheckedColor, checkedTitle}) => {
  let Icon = FAIcon
  if (iconType) {
    Icon = getIconType(iconType)
  }
  const Component = component || TouchableOpacity
  let iconName = uncheckedIcon
  if (checked) {
    iconName = checkedIcon
  }
  return (
    <Component
      onPress={onPress}
      style={[
        styles.container,
        containerStyle && containerStyle
      ]}>
      <View style={[
        styles.wrapper,
        right && {justifyContent: 'flex-end'},
        center && {justifyContent: 'center'}
      ]}>
        {
          !iconRight && (
            <Icon
              color={checked ? checkedColor : uncheckedColor}
              name={iconName}
              size={24} />
          )
        }
        <Text style={[
          styles.text,
          textStyle && textStyle
        ]}>
          {checked ? checkedTitle || title : title}
        </Text>
        {
          iconRight && (
            <Icon
              color={checked ? checkedColor : uncheckedColor}
              name={iconName}
              size={24} />
          )
        }
      </View>
    </Component>
  )
}

CheckBox.defaultProps = {
  checked: false,
  iconRight: false,
  right: false,
  center: false,
  checkedColor: 'green',
  uncheckedColor: '#bfbfbf',
  checkedIcon: 'check-square-o',
  uncheckedIcon: 'square-o'
}

// CheckBox.propTypes = {
//   component, checked, iconRight, title, center, containerStyle, textStyle, onPress, checkedIcon, uncheckedIcon, iconType, checkedColor, uncheckedColor, checkedTitle
// }

styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fafafa',
    borderColor: '#ededed',
    borderWidth: 1,
    padding: 10,
    borderRadius: 3
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
    color: colors.grey1,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.bold
      },
      android: {
        fontFamily: fonts.android.bold
      }
    })
  }
})

export default CheckBox
