import React from 'react'
import { View, StyleSheet, Platform, Image } from 'react-native'
import fonts from '../config/fonts'
import colors from '../config/colors'
import Text from '../text/Text'
import Divider from '../Divider'
import normalize from '../helpers/normalizeText'

let styles = {}

const Card = ({
  children,
  flexDirection,
  containerStyle,
  wrapperStyle,
  title,
  titleStyle,
  dividerStyle,
  image,
  imageStyle,
  fontFamily}) => (
  <View style={[
    styles.container,
    image && {padding: 0},
    containerStyle && containerStyle]}>
    <View style={[styles.wrapper, wrapperStyle && wrapperStyle, flexDirection && {flexDirection}]}>
      {
        title && !image && (
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
      {
        image && (
          <View style={{flex: 1}}>
            <Image
              resizeMode='cover'
              style={[{flex:1, width: null, height: 150}, imageStyle && imageStyle]}
              source={image}  />
            <View
              style={[{padding: 10}, wrapperStyle && wrapperStyle]}>
              {title && <Text style={[styles.imageTitle, titleStyle && titleStyle]}>{title}</Text>}
              {children}
            </View>
          </View>
        )
      }
      { !image && children}
    </View>
  </View>
)

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: colors.grey5,
    borderWidth: 1,
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
  imageTitle: {
    fontSize: normalize(14),
    marginBottom: 8,
    color: colors.grey1,
    ...Platform.select({
      ios: {
        fontWeight: '500'
      },
      android: {
        fontFamily: fonts.android.black
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
    fontSize: normalize(14),
    ...Platform.select({
      ios: {
        fontWeight: 'bold'
      },
      android: {
        fontFamily: fonts.android.black
      }
    }),
    textAlign: 'center',
    marginBottom: 15,
    color: colors.grey1
  }
})

export default Card
