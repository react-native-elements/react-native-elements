import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import colors from '../config/colors'
import fonts from '../config/fonts'
import Text from '../text/Text'

let styles = {}

const FormLabel = ({containerStyle, labelStyle, children, fontFamily}) => (
  <View style={[styles.container, containerStyle && containerStyle]}>
    <Text style={[
      styles.label,
      labelStyle && labelStyle,
      fontFamily && {fontFamily}
    ]}>{children.toUpperCase()}</Text>
  </View>
)

styles = StyleSheet.create({
  container: {},
  label: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 1,
    color: colors.grey3,
    fontSize: 12,
    ...Platform.select({
      ios: {
        fontWeight: 'bold'
      },
      android: {
        fontFamily: fonts.android.bold
      }
    })
  }
})

export default FormLabel
