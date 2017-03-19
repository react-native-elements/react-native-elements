import React, { PropTypes } from 'react'
import { View, StyleSheet, TouchableHighlight, Platform } from 'react-native'
import colors from '../config/colors'
import Text from '../text/Text'
import normalize from '../helpers/normalizeText'

let styles = {}

const ButtonGroup = ({
  component,
  buttons,
  onPress,
  selectedIndex,
  style,
  innerBorderStyle,
  buttonStyle,
  textStyle,
  selectedTextStyle,
  selectedBackgroundColor,
  underlayColor,
  activeOpacity,
  onHideUnderlay,
  onShowUnderlay,
  setOpacityTo
}) => {
  const Component = component || TouchableHighlight
  return (
    <View style={[styles.container, style && style]}>
      {
        buttons.map((button, i) => {
          return (
            <Component
              activeOpacity={activeOpacity}
              setOpacityTo={setOpacityTo}
              onHideUnderlay={onHideUnderlay}
              onShowUnderlay={onShowUnderlay}
              underlayColor={underlayColor || '#ffffff'}
              onPress={onPress? () => onPress(i) : () => {}}
              key={i}
              style={[
                styles.button,
                i < buttons.length - 1 && {
                  borderRightWidth: innerBorderStyle && innerBorderStyle.width || 1,
                  borderRightColor: innerBorderStyle && innerBorderStyle.color || colors.grey4
                },
                selectedIndex === i && {backgroundColor: selectedBackgroundColor || 'white'}
              ]}>
              <View style={[styles.textContainer, buttonStyle && buttonStyle]}>
              {
                button.element ? <button.element /> : (
                  <Text
                  style={[
                    styles.buttonText,
                    textStyle && textStyle,
                    selectedIndex === i && {color: colors.grey1},
                    selectedIndex === i && selectedTextStyle
                  ]}>{button}</Text> 
                )
              }
              </View>
            </Component>
          )
        })
      }
    </View>
  )
}

styles = StyleSheet.create({
  button: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    height: 40
  },
  buttonText: {
    fontSize: normalize(13),
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontWeight: '500'
      }
    })
  }
})

ButtonGroup.propTypes = {
  button: PropTypes.object
}

export default ButtonGroup
