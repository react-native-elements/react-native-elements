import React, { PropTypes } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Text from '../text/Text'
import fonts from '../config/fonts'
import colors from '../config/colors'
import Button from '../buttons/Button'
import normalize from '../helpers/normalizeText'

let styles = {}

const PricingCard = ({
  containerStyle,
  wrapperStyle,
  title,
  price,
  info,
  button,
  color,
  titleFont,
  pricingFont,
  infoFont,
  buttonFont,
  onButtonPress
}) => (
  <View style={[styles.container, containerStyle && containerStyle]}>
    <View style={[styles.wrapper, wrapperStyle && wrapperStyle]}>
      <Text style={[
        styles.pricingTitle,
        {color},
        titleFont && {fontFamily: titleFont}
      ]}>{title}</Text>
      <Text style={[
        styles.pricingPrice,
        pricingFont && {fontFamily: pricingFont}
      ]}>{price}</Text>
      {
        info.map((item, i) => {
          return <Text key={i} style={[
            styles.pricingInfo,
            infoFont && {fontFamily: infoFont}
          ]}>{item}</Text>
        })
      }
      <Button
        icon={{name: button.icon}}
        buttonStyle={[
          styles.button,
          button.buttonStyle,
          {backgroundColor: color},
          buttonFont && {fontFamily: buttonFont}
        ]}
        title={button.title}
        onPress={onButtonPress}
         />
    </View>
  </View>
)

PricingCard.propTypes = {
  containerStyle: PropTypes.any,
  wrapperStyle: PropTypes.any,
  title: PropTypes.string,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  info: PropTypes.array,
  button: PropTypes.object,
  color: PropTypes.string,
  onButtonPress: PropTypes.any,
}

PricingCard.defaultProps = {
  color: colors.primary
}

styles = StyleSheet.create({
  container: {
    margin: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    borderColor: colors.grey5,
    borderWidth: 1,
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: {height: 1, width: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5
      },
      android: {
        elevation: 1
      }
    })
  },
  wrapper: {
    backgroundColor: 'transparent'
  },
  pricingTitle: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: normalize(30),
    ...Platform.select({
      ios: {
        fontWeight: '800'
      },
      android: {
        fontFamily: fonts.android.black
      }
    })
  },
  pricingPrice: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: normalize(40),
    ...Platform.select({
      ios: {
        fontWeight: '700'
      },
      android: {
        fontFamily: fonts.android.bold
      }
    })
  },
  pricingInfo: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: colors.grey3,
    ...Platform.select({
      ios: {
        fontWeight: '600'
      },
      android: {
        fontFamily: fonts.android.bold
      }
    })
  },
  button: {
    marginTop: 15,
    marginBottom: 10
  }
})

export default PricingCard
