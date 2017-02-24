import React, { PropTypes } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Text from '../text/Text'
import normalize from '../helpers/normalizeText'

const Avatar = ({
  component,
  width,
  height,
  onPress,
  onLongPress,
  containerStyle,
  source,
  avatarStyle,
  roundAvatar,
  title,
  titleStyle,
  overlayContainerStyle,
  activeOpacity,
}) => {
  if (!width && !height) {
    width = 34
    height = 34
  } else if (!width) {
    width = height
  } else if (!height) {
    height = width
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      borderBottomColor: '#ededed',
      borderBottomWidth: 1,
      backgroundColor: 'transparent'
    },
    avatar: {
      width: width,
      height: height
    },
    overlayContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 45,
      paddingBottom: 40,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    title: {
      color: '#ffffff',
      fontSize: normalize(15),
      backgroundColor: 'rgba(0,0,0,0)',
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  let Component = onPress || onLongPress ? TouchableOpacity : View
  if (component) {
    Component = component
  }

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle && containerStyle]}>
      <Image
        style={[
          styles.avatar,
          roundAvatar && { borderRadius: width/2 },
          avatarStyle && avatarStyle]}
        source={source}>
        <View
          style={[
            styles.overlayContainer,
            overlayContainerStyle && overlayContainerStyle,
          ]}
        >
          {(title && (typeof title === 'string')) ? (
            <Text
              h4
              style={[
                styles.title,
                titleStyle && titleStyle
              ]}>{title}</Text>
          ) : (
            <View>
              {title}
            </View>
          )}
        </View>
      </Image>
    </Component>
  );
};

Avatar.propTypes = {
  component: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  containerStyle: PropTypes.any,
  source: PropTypes.object,
  avatarStyle: PropTypes.any,
  roundAvatar: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: PropTypes.any,
  overlayContainerStyle: PropTypes.any,
  activeOpacity: PropTypes.number,
};

export default Avatar;
