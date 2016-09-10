import React, { PropTypes } from 'react'
import { View, StyleSheet, Platform, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Text from '../text/Text'
import fonts from '../config/fonts'
let styles

const colors = {
  facebook: '#3b5998',
  twitter: '#00aced',
  ['google-plus-official']: '#dd4b39',
  pinterest: '#cb2027',
  linkedin: '#007bb6',
  youtube: '#bb0000',
  vimeo: '#aad450',
  tumblr: '#32506d',
  instagram: '#517fa4',
  quora: '#a82400',
  foursquare: '#0072b1',
  wordpress: '#21759b',
  stumbleupon: '#EB4823',
  github: '#000000',
  ['github-alt']: '#000000',
  twitch: '#6441A5',
  medium: '#02b875',
  soundcloud: '#f50',
  gitlab: '#e14329',
  angellist: '#1c4082',
  codepen: '#000000'
}

const SocialIcon = ({component, type, button, onPress, iconStyle, style, iconColor, title, raised, light}) => {
  const Component = !onPress ? View : component || TouchableHighlight
  return (
    <Component
      underlayColor={light ? 'white' : colors[type]}
      onPress={onPress}
      style={[
        raised && styles.raised,
        styles.container,
        button ? styles.button : styles.icon,
        {backgroundColor: colors[type]},
        light && {backgroundColor: 'white'},
        light && !raised && {marginLeft: 2, marginRight: 2},
        style && style
      ]}>
      <View style={styles.wrapper}>
        <Icon
          style={[iconStyle && iconStyle]}
          color={light ? colors[type] : iconColor}
          name={type}
          size={24} />
        {
          button && title && (
            <Text style={[styles.title, light && {color: colors[type]}]}>{title}</Text>
          )
        }
      </View>
    </Component>
  )
}

SocialIcon.propTypes = {
  component: PropTypes.element,
  type: PropTypes.string,
  button: PropTypes.bool,
  onPress: PropTypes.func,
  iconStyle: PropTypes.any,
  style: PropTypes.any,
  iconColor: PropTypes.string,
  title: PropTypes.string,
  raised: PropTypes.bool
}

SocialIcon.defaultProps = {
  raised: true,
  iconColor: 'white'
}

styles = StyleSheet.create({
  container: {
    margin: 7,
    padding: 15,
    borderRadius: 30
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
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    marginLeft: 15,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      },
      android: {
        fontFamily: fonts.android.black
      }
    })
  },
  icon: {
    height: 52,
    width: 52
  }
})

export default SocialIcon
