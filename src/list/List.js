import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'
let styles

const Component = ({children, containerStyle}) => (
  <View style={[styles.listContainer, containerStyle && containerStyle]}>
    {children}
  </View>
)

Component.propTypes = {}

styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.greyOutline
  }
})

export default Component
