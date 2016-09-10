import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import fonts from '../config/fonts'
import colors from '../config/colors'
import Text from '../text/Text'
import Divider from '../Divider'
let styles = {}

const Card = ({children, flexDirection, containerStyle, wrapperStyle, title, titleStyle, dividerStyle, fontFamily}) => (
  <View style={[styles.container, containerStyle && containerStyle]}>
    <View style={[styles.wrapper, wrapperStyle && wrapperStyle, flexDirection && {flexDirection}]}>
      {
        title && (
          <View>
            <Text style={[
              styles.cardTitle,
              titleStyle && titleStyle,
              fontFamily && {fontFamily}
            ]}>{title}</Text>
            <Divider style={[styles.divider, dividerStyle && dividerStyle]} />
          </View>
        )
      }
      {children}
    </View>
  </View>
)

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: colors.grey5,
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 1,
        shadowRadius: 1
      },
      android: {
        elevation: 1
      }
    })
  },
  wrapper: {
    backgroundColor: 'transparent'
  },
  divider: {
    marginBottom: 15
  },
  cardTitle: {
    fontFamily: fonts.ios.bold,
    textAlign: 'center',
    marginBottom: 15
  }
})

export default Card
