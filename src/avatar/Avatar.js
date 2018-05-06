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

import Icon from '../icons/Icon';
import ViewPropTypes from '../config/ViewPropTypes';

const DEFAULT_COLORS = ['#000', '#333', '#555', '#888', '#aaa', '#ddd'];
const DEFAULT_SIZES = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
};

const Avatar = props => {
  const {
    component,
    onPress,
    onLongPress,
    containerStyle,
    icon,
    iconStyle,
    source,
    avatarStyle,
    rounded,
    title,
    titleStyle,
    overlayContainerStyle,
    activeOpacity,
    showEditButton,
    editButton,
    onEditPress,
    imageProps,
    ...attributes
  } = props;
  let { size } = props;

  const iconDimension =
    typeof size === 'number'
      ? size
      : DEFAULT_SIZES[size] || DEFAULT_SIZES.small;

  let height;
  let width = (height = iconDimension);

  let titleSize = width / 2;
  let iconSize = width / 2;

  let Component = onPress || onLongPress ? TouchableOpacity : View;
  if (component) {
    Component = component;
  }

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
  };

  const renderContent = () => {
    if (source) {
      return (
        <Image
          style={[
            styles.avatar,
            rounded && { borderRadius: width / 2 },
            avatarStyle && avatarStyle,
          ]}
          source={source}
          {...imageProps}
        />
      );
    } else if (title) {
      return (
        <Text style={[styles.title, titleStyle && titleStyle]}>{title}</Text>
      );
    } else if (icon) {
      return (
        <Icon
          style={iconStyle && iconStyle}
          color={icon.color || 'white'}
          name={icon.name || 'user'}
          size={icon.size || iconSize}
          type={icon.type && icon.type}
        />
      );
    }
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      width: width,
      height: height,
    },
    avatar: {
      width: width,
      height: height,
    },
    overlayContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      alignSelf: 'stretch',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    title: {
      color: '#ffffff',
      fontSize: titleSize,
      backgroundColor: 'rgba(0,0,0,0)',
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
  });

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        rounded && { borderRadius: width / 2 },
        containerStyle && containerStyle,
      ]}
      {...attributes}
    >
      <View
        style={[
          styles.overlayContainer,
          rounded && { borderRadius: width / 2 },
          overlayContainerStyle && overlayContainerStyle,
        ]}
      >
        {renderContent()}
      </View>
      {renderUtils()}
    </Component>
  );
};

Avatar.propTypes = {
  component: PropTypes.oneOf([
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
  ]),
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
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    PropTypes.number,
  ]),
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
  imageProps: PropTypes.object,
};

Avatar.defaultProps = {
  showEditButton: false,
  onEditPress: null,
  size: 'small',
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
