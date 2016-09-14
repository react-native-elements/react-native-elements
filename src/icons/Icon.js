import React, { PropTypes } from 'react'
import { Platform, TouchableHighlight, View, StyleSheet } from 'react-native'
import getIconType from '../helpers/getIconType'

let styles = {}

const Icon = ({
    type,
    name,
    size,
    color,
    iconStyle,
    component,
    onPress,
    underlayColor,
    reverse,
    raised,
    containerStyle,
    reverseColor
  }) => {
  let Component = View
  if (onPress) {
    Component = TouchableHighlight
  }
  if (component) {
    Component = component
  }
  let Icon
  if (!type) {
    Icon = getIconType('material')
  } else {
    Icon = getIconType(type)
  }
  return (
    <Component
      underlayColor={
        reverse ? color : underlayColor || color
      }
      style={[
        styles.button,
        raised && styles.raised, {
          borderRadius: size + 4,
          backgroundColor: reverse ? color : raised ? 'white' : 'transparent',
          height: size * 2 + 4,
          width: size * 2 + 4,
          alignItems: 'center',
          justifyContent: 'center'},
        containerStyle && containerStyle
      ]}
      onPress={onPress}>
      <Icon
        style={[
          {backgroundColor: 'transparent'},
          iconStyle && iconStyle
        ]}
        size={size}
        name={name}
        color={reverse ? reverseColor : color} />
    </Component>
  )
}

Icon.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  component: PropTypes.element,
  underlayColor: PropTypes.string,
  reverse: PropTypes.bool,
  raised: PropTypes.bool,
  containerStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  onPress: PropTypes.func,
  reverseColor: PropTypes.string
}

Icon.defaultProps = {
  underlayColor: 'white',
  reverse: false,
  raised: false,
  size: 24,
  color: 'black',
  reverseColor: 'white'
}

styles = StyleSheet.create({
  button: {
    margin: 7
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

export default Icon
