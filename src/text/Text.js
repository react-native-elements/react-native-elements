import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import fonts from '../config/fonts'

let styles = {}

const TextElement = ({style, children, h1, h2, h3, h4, h5, h6, fontFamily}) => (
  <Text
    style={[
      styles.text,
      h1 && {fontSize: 40},
      h2 && {fontSize: 34},
      h3 && {fontSize: 28},
      h4 && {fontSize: 22},
      h1 && styles.bold,
      h2 && styles.bold,
      h3 && styles.bold,
      h4 && styles.bold,
      fontFamily && {fontFamily},
      style && style
    ]}>{children}</Text>
)

styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.regular
      },
      android: {
        fontFamily: fonts.android.regular
      }
    })
  },
  bold: {
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

export default TextElement
