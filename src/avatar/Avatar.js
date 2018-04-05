import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import FadeIn from 'react-native-fade-in-image';

import Icon from '../icons/Icon';
import ViewPropTypes from '../config/ViewPropTypes';

const DEFAULT_COLORS = ['#000', '#333', '#555', '#888', '#aaa', '#ddd'];

const Avatar = ({
  component,
  onPress,
  onLongPress,
  containerStyle,
  icon,
  iconStyle,
  source,
  small,
  medium,
  large,
  xlarge,
  avatarStyle,
  rounded,
  title,
  titleStyle,
  overlayContainerStyle,
  activeOpacity,
  showEditButton,
  editButton,
  onEditPress,
  placeholderStyle,
  ...attributes
}) => {
  const Component = onPress || onLongPress ? TouchableOpacity : View
  let { width, height } = attributes
  if (small) {
    width = 34;
    height = 34;
  } else if (medium) {
    width = 50;
    height = 50;
  } else if (large) {
    width = 75;
    height = 75;
  } else if (xlarge) {
    width = 150;
    height = 150;
  } else if (!width && !height) {
    width = 34;
    height = 34;
  } else if (!width) {
    width = height;
  } else if (!height) {
    height = width;
  }
  const titleSize = width / 2;
  const iconSize = width / 2;
  const renderUtils = () => {
    if (showEditButton) {
      const editButtonProps = { ...editButton };

      const defaultEditButtonSize = (width + height) / 2 / 3;
      const editButtonSize = editButton.size || defaultEditButtonSize;
      const editButtonSizeStyle = {
        width: editButtonSize,
        height: editButtonSize,
        borderRadius: editButtonSize / 2,
      };
      const editButtonIconSize = editButtonSize * 0.8;

      return (
        <TouchableHighlight
          style={[
            styles.editButton,
            editButtonSizeStyle,
            editButtonProps.style,
          ]}
          underlayColor={editButtonProps.underlayColor}
          onPress={onEditPress}
        >
          <View>
            <Icon
              size={editButtonIconSize}
              name={editButtonProps.iconName}
              type={editButtonProps.iconType}
              color={editButtonProps.iconColor}
            />
          </View>
        </TouchableHighlight>
      );
    }
    return null
  };

  const Content = title ?
    <Text style={[styles.title, {fontSize: titleSize}, titleStyle]}>
      {title}
    </Text>
      : icon ?
        <Icon
          style={iconStyle && iconStyle}
          color={icon.color || 'white'}
          name={icon.name || 'user'}
          size={icon.size || iconSize}
          type={icon.type && icon.type}
        />
        : null 

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        { height, width },
        rounded && { borderRadius: width / 2 },
        containerStyle,
      ]}
      {...attributes}
    >
      <FadeIn
        renderPlaceholderContent={Content}
        style={[
          styles.overlayContainer,
          rounded && { borderRadius: width / 2 },
          overlayContainerStyle,
        ]}
        placeholderStyle={[styles.placeholderContainer, placeholderStyle]}
      >
        <Image
          style={[
            styles.avatar,
            { height, width },
            rounded && { borderRadius: width / 2 },
            avatarStyle,
          ]}
          source={source}
        />
      </FadeIn>
      {renderUtils()}
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  avatar: {
    flex: 1,
    width: null,
    height: null,
  },
  overlayContainer: {
    flex: 1,
  },
  title: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DEFAULT_COLORS[4],
    ...Platform.select({
      ios: {
        shadowColor: DEFAULT_COLORS[0],
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BDBDBD',
  }
});

Avatar.propTypes = {
  component: PropTypes.oneOf([
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  containerStyle: PropTypes.any,
  source: Image.propTypes.source,
  avatarStyle: PropTypes.any,
  rounded: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
  overlayContainerStyle: PropTypes.any,
  activeOpacity: PropTypes.number,
  icon: PropTypes.object,
  iconStyle: Text.propTypes.style,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  showEditButton: PropTypes.bool,
  onEditPress: PropTypes.func,
  editButton: PropTypes.shape({
    size: PropTypes.number,
    iconName: PropTypes.string,
    iconType: PropTypes.string,
    iconColor: PropTypes.string,
    underlayColor: PropTypes.string,
    style: ViewPropTypes.style,
  }),
  placeholderStyle: ViewPropTypes.style,
};

Avatar.defaultProps = {
  showEditButton: false,
  onEditPress: null,
  editButton: {
    size: null,
    iconName: 'mode-edit',
    iconType: 'material',
    iconColor: '#fff',
    underlayColor: DEFAULT_COLORS[0],
    style: null,
  },
};

export default Avatar;
