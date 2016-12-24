import React, { PropTypes } from 'react'
import { View, StyleSheet, TouchableHighlight, Image, Platform } from 'react-native'
import Badge from '../badge/badge'
import Icon from '../icons/Icon'
import Text from '../text/Text'
import colors from '../config/colors'
import fonts from '../config/fonts'
import normalize from '../helpers/normalizeText'

let styles

const ListItem = ({
  onPress,
  title,
  leftIcon,
  rightIcon,
  avatar,
  avatarStyle,
  underlayColor,
  subtitle,
  subtitleStyle,
  containerStyle,
  wrapperStyle,
  titleStyle,
  hideChevron,
  chevronColor,
  roundAvatar,
  component,
  fontFamily,
  rightTitle,
  rightTitleContainerStyle,
  rightTitleStyle,
  subtitleContainerStyle,
  badge,
  badgeContainerStyle,
  badgeTextStyle,
  label,
  onLongPress,
}) => {
  let Component = onPress || onLongPress ? TouchableHighlight : View
  if (component) {
    Component = component
  }
  if (typeof avatar === 'string') {
    avatar = {uri: avatar}
  }
  return (
    <Component
      onLongPress={onLongPress}
      onPress={onPress}
      underlayColor={underlayColor}
      style={[styles.container, containerStyle && containerStyle]}>
      <View style={[styles.wrapper, wrapperStyle && wrapperStyle]}>
        {
          leftIcon && leftIcon.name && (
            <Icon
              type={leftIcon.type}
              iconStyle={[styles.icon, leftIcon.style && leftIcon.style]}
              name={leftIcon.name}
              color={leftIcon.color || colors.grey4}
            />
          )
        }
        {
          avatar && (
            <Image
              style={[
                styles.avatar,
                roundAvatar && {borderRadius: 17},
                avatarStyle && avatarStyle]}
              source={avatar}
              />
          )
        }
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.title,
              titleStyle && titleStyle,
              !leftIcon && {marginLeft: 10},
              fontFamily && {fontFamily}
            ]}>{title}</Text>
          {(subtitle && (typeof subtitle === 'string')) ? (
            <View style={subtitleContainerStyle}>
              <Text
                style={[
                  styles.subtitle,
                  !leftIcon && {marginLeft: 10},
                  subtitleStyle && subtitleStyle,
                  fontFamily && {fontFamily}
                ]}>{subtitle}</Text>
            </View>
          ) : (
            <View style={subtitleContainerStyle}>
              {subtitle}
            </View>
          )}
        </View>
        {
          !hideChevron && !rightTitle && (
            <View style={styles.chevronContainer}>
              <Icon
                type={rightIcon.type}
                style={styles.chevron}
                size={28}
                name={rightIcon.name}
                color={rightIcon.color || chevronColor}
              />
            </View>
          )
        }
        {
          badge && (
            <Badge
              badge={badge}
            />)
        }
        {
          label && label
        }
        {
          rightTitle && (rightTitle !== '') && (
            <View style={[styles.rightTitleContainer, rightTitleContainerStyle]}>
              <Text style={[styles.rightTitleStyle, rightTitleStyle]}>{rightTitle}</Text>
            </View>
          )
        }
      </View>
    </Component>
  )
}

ListItem.defaultProps = {
  underlayColor: 'white',
  chevronColor: colors.grey4,
  rightIcon: {name: 'chevron-right'},
  hideChevron: false,
  roundAvatar: false
}

ListItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  avatar: PropTypes.any,
  icon: PropTypes.any,
  onPress: PropTypes.func,
  rightIcon: PropTypes.object,
  underlayColor: PropTypes.string,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subtitleStyle: PropTypes.any,
  containerStyle: PropTypes.any,
  wrapperStyle: PropTypes.any,
  titleStyle: PropTypes.any,
  hideChevron: PropTypes.bool,
  chevronColor: PropTypes.string,
  roundAvatar: PropTypes.bool,
  badge: PropTypes.any,
}

styles = StyleSheet.create({
  avatar: {
    width: 34,
    height: 34
  },
  container: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    backgroundColor: 'transparent'
  },
  wrapper: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  icon: {
    marginRight: 8
  },
  title: {
    fontSize: normalize(14),
    color: colors.grey1
  },
  subtitle: {
    color: colors.grey3,
    fontSize: normalize(12),
    marginTop: 1,
    ...Platform.select({
      ios: {
        fontWeight: '600'
      },
      android: {
        fontFamily: fonts.android.bold
      }
    })
  },
  titleContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  chevronContainer: {
    flex: 0.15,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  rightTitleContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  rightTitleStyle: {
    marginRight: 5,
    color: colors.grey4
  },
  chevron: {
  }
})

export default ListItem
