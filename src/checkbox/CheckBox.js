import React, { PropTypes } from 'react'
import { StyleSheet, TouchableOpacity, View, Platform } from 'react-native'
import Text from '../text/Text'
import fonts from '../config/fonts'
import colors from '../config/colors'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import getIconType from '../helpers/getIconType'

let styles = {}

const CheckBox = ({component, checked, iconRight, title, center, right, containerStyle, textStyle, onPress, onLongPress, onIconPress, onLongIconPress, checkedIcon, uncheckedIcon, iconType, checkedColor, uncheckedColor, checkedTitle, fontFamily}) => {
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
      onLongPress={onLongPress}
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
              size={24}
              onLongPress={onLongIconPress}
              onPress={onIconPress} />
          )
        }
        <Text style={[
          styles.text,
          textStyle && textStyle,
          fontFamily && {fontFamily}
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

CheckBox.propTypes = {
  component: PropTypes.any,
  checked: PropTypes.bool,
  iconRight: PropTypes.bool,
  title: PropTypes.string,
  center: PropTypes.bool,
  right: PropTypes.bool,
  containerStyle: View.propTypes.style,
  textStyle: View.propTypes.style,
  onPress: PropTypes.func,
  checkedIcon: PropTypes.string,
  uncheckedIcon: PropTypes.string,
  iconType: PropTypes.object,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
  checkedTitle: PropTypes.string,
  onLongPress: PropTypes.func,
  onIconPress: PropTypes.func,
  onLongIconPress: PropTypes.func,
  fontFamily: PropTypes.string,
}

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
        fontWeight: 'bold'
      },
      android: {
        ...fonts.android.bold,
      }
    })
  }
})

export default CheckBox
