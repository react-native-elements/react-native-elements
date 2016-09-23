import React, { PropTypes } from 'react'
import { View, StyleSheet, TouchableHighlight, Image, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Text from '../text/Text'
import colors from '../config/colors'
import fonts from '../config/fonts'
let styles

const ListItem = ({
  onPress,
  title,
  icon,
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
  fontFamily
}) => {
  let Component = onPress ? TouchableHighlight : View
  if (component) {
    Component = component
  }
  if (typeof avatar === 'string') {
    avatar = {uri: avatar}
  }
  return (
    <Component
      onPress={onPress}
      underlayColor={underlayColor}
      style={[styles.container, containerStyle && containerStyle]}>
      <View style={[styles.wrapper, wrapperStyle && wrapperStyle]}>
        {
          icon && icon.name && (
            <Icon
              size={28}
              style={[styles.icon, icon.style && icon.style]}
              name={icon.name}
              color={icon.color || colors.grey4}
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
              !icon && {marginLeft: 10},
              fontFamily && {fontFamily}
            ]}>{title}</Text>
          {subtitle && (
            <Text
              style={[
                styles.subtitle,
                !icon && {marginLeft: 10},
                subtitleStyle && subtitleStyle,
                fontFamily && {fontFamily}
              ]}>{subtitle}</Text>
          )}
        </View>
        {
          onPress && !hideChevron && (
            <View style={styles.chevronContainer}>
              <Icon
                style={styles.chevron}
                size={28}
                name={rightIcon}
                color={chevronColor} />
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
  rightIcon: 'chevron-right',
  hideChevron: false,
  roundAvatar: false
}

ListItem.propTypes = {
  title: PropTypes.string,
  avatar: PropTypes.any,
  icon: PropTypes.any,
  onPress: PropTypes.func,
  rightIcon: PropTypes.string,
  underlayColor: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleStyle: PropTypes.any,
  containerStyle: PropTypes.any,
  wrapperStyle: PropTypes.any,
  titleStyle: PropTypes.any,
  hideChevron: PropTypes.bool,
  chevronColor: PropTypes.string,
  roundAvatar: PropTypes.bool
}

styles = StyleSheet.create({
  avatar: {
    width: 34,
    height: 34
  },
  container: {
    padding: 10,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  },
  wrapper: {
    flexDirection: 'row'
  },
  icon: {
    marginRight: 10
  },
  title: {
    fontSize: 15,
    color: colors.grey1,
    marginTop: -2
  },
  subtitle: {
    color: colors.grey3,
    fontSize: 12,
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
    justifyContent: 'center'
  },
  chevronContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  chevron: {
  }
})

export default ListItem
