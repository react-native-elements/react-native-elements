import React, { PropTypes } from 'react'
import { View, StyleSheet, TouchableHighlight, Platform } from 'react-native'
import colors from '../config/colors'
import Text from '../text/Text'
import normalize from '../helpers/normalizeText'

let styles = {}

const ButtonGroup = ({
  component,
  onPress,
  buttons,
  containerStyle,
  selectedBackgroundColor,
  textStyle,
  selectedTextStyle,
  underlayColor,
  selectedIndex,
  activeOpacity,
  onHideUnderlay,
  onShowUnderlay,
  setOpacityTo,
  borderStyle
}) => {
  const Component = component || TouchableHighlight
  return (
    <View style={[styles.container, containerStyle && containerStyle]}>
      {
        buttons.map((button, i) => {
          return (
            <Component
              activeOpacity={activeOpacity}
              onHideUnderlay={onHideUnderlay}
              onShowUnderlay={onShowUnderlay}
              underlayColor={underlayColor || '#ffffff'}
              onPress={() => onPress(i)}
              setOpacityTo={setOpacityTo}
              key={i}
              style={[
                styles.button,
                i < buttons.length - 1 && styles.borderRight,
                i < buttons.length - 1 && borderStyle,
                selectedIndex === i && {backgroundColor: selectedBackgroundColor || 'white'}
              ]}>
              <View style={{flex: 1}}>
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
  borderRight: {
    borderRightColor: colors.grey4,
    borderRightWidth: 1
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
    backgroundColor: '#f5f5f5'
  },
  buttonText: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
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
