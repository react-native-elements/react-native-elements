import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Platform,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import Icon from '../icons/Icon';
import Text from '../text/Text';
import fonts from '../config/fonts';

import { withTheme } from '../config';

const colors = {
  'github-alt': '#000000',
  'google-plus-official': '#dd4b39',
  google: '#dd4b39',
  'reddit-alien': '#fc461e',
  'stack-overflow': '#f27f33',
  angellist: '#1c4082',
  codepen: '#000000',
  envelope: '#000000',
  etsy: '#f2581e',
  facebook: '#4267B2',
  flickr: '#ff0084',
  foursquare: '#0072b1',
  github: '#000000',
  gitlab: '#e14329',
  instagram: '#517fa4',
  linkedin: '#007bb6',
  medium: '#02b875',
  pinterest: '#cb2027',
  quora: '#a82400',
  soundcloud: '#f50',
  steam: '#c6c3c1',
  stumbleupon: '#EB4823',
  tumblr: '#32506d',
  twitch: '#6441A5',
  twitter: '#00aced',
  vimeo: '#aad450',
  vk: '#5181b8',
  wechat: '#7bb32e',
  weibo: '#e6162d',
  wordpress: '#21759b',
  youtube: '#bb0000',
};

const SocialIcon = (props) => {
  const {
    activityIndicatorStyle,
    button,
    disabled,
    fontFamily,
    fontStyle,
    fontWeight,
    iconType,
    iconColor,
    iconSize,
    iconStyle,
    light,
    loading,
    onLongPress,
    onPress,
    Component = onPress || onLongPress ? TouchableHighlight : View,
    raised,
    small,
    style,
    title,
    type,
    underlayColor,
    ...attributes
  } = props;

  return (
    <Component
      {...attributes}
      underlayColor={light ? 'white' : underlayColor || colors[type]}
      onLongPress={disabled ? null : onLongPress}
      onPress={disabled ? null : onPress}
      disabled={disabled}
      style={StyleSheet.flatten([
        raised && styles.raised,
        styles.container,
        button && styles.button,
        !button && raised && styles.icon,
        !button &&
          !light &&
          !raised && {
            width: iconSize * 2 + 4,
            height: iconSize * 2 + 4,
            borderRadius: iconSize * 2,
          },
        { backgroundColor: colors[type] },
        light && { backgroundColor: 'white' },
        style && style,
      ])}
    >
      <View style={styles.wrapper}>
        <Icon
          iconStyle={StyleSheet.flatten([iconStyle && iconStyle])}
          color={light ? colors[type] : iconColor}
          name={type}
          size={iconSize}
          type={iconType}
        />
        {button && title && (
          <Text
            style={StyleSheet.flatten([
              styles.title,
              light && { color: colors[type] },
              fontFamily && { fontFamily },
              fontWeight && { fontWeight },
              fontStyle && fontStyle,
            ])}
          >
            {title}
          </Text>
        )}

        {loading && (
          <ActivityIndicator
            animating
            style={StyleSheet.flatten([
              styles.activityIndicatorStyle,
              activityIndicatorStyle,
            ])}
            color={iconColor || 'white'}
            size={(small && 'small') || 'large'}
          />
        )}
      </View>
    </Component>
  );
};

SocialIcon.propTypes = {
  Component: PropTypes.elementType,
  type: PropTypes.string,
  button: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  iconType: PropTypes.string,
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconColor: PropTypes.string,
  underlayColor: PropTypes.string,
  title: PropTypes.string,
  raised: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  activityIndicatorStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  small: PropTypes.string,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  light: PropTypes.bool,
  fontWeight: PropTypes.string,
  fontStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  fontFamily: PropTypes.string,
};

SocialIcon.defaultProps = {
  raised: true,
  iconType: 'font-awesome',
  iconColor: 'white',
  iconSize: 24,
  button: false,
};

const styles = StyleSheet.create({
  container: {
    margin: 7,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingTop: 14,
    paddingBottom: 14,
  },
  raised: {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    marginLeft: 15,
    ...Platform.select({
      android: {
        ...fonts.android.black,
      },
      default: {
        fontWeight: 'bold',
      },
    }),
  },
  icon: {
    height: 52,
    width: 52,
  },
  activityIndicatorStyle: {
    marginHorizontal: 10,
    height: 0,
  },
});

export { SocialIcon };
export default withTheme(SocialIcon, 'SocialIcon');
