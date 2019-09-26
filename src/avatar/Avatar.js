import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image as RNImage,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

import { withTheme, ViewPropTypes } from '../config';
import { renderNode, nodeType } from '../helpers';

import Icon from '../icons/Icon';
import Image from '../image/Image';

const avatarSizes = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
};

const defaultEditButton = {
  name: 'mode-edit',
  type: 'material',
  color: '#fff',
  underlayColor: '#000',
};

const Avatar = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  containerStyle,
  icon,
  iconStyle,
  source,
  size,
  avatarStyle,
  rounded,
  title,
  titleStyle,
  overlayContainerStyle,
  showEditButton,
  editButton: passedEditButton,
  onEditPress,
  imageProps,
  placeholderStyle,
  renderPlaceholderContent,
  ImageComponent,
  ...attributes
}) => {
  const width =
    typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
  const height = width;
  const titleSize = width / 2;
  const iconSize = width / 2;

  const editButton = {
    ...defaultEditButton,
    ...passedEditButton,
  };
  const editButtonSize = editButton.size || (width + height) / 2 / 3;

  const Utils = showEditButton && (
    <TouchableHighlight
      style={StyleSheet.flatten([
        styles.editButton,
        {
          width: editButtonSize,
          height: editButtonSize,
          borderRadius: editButtonSize / 2,
        },
        editButton.style,
      ])}
      underlayColor={editButton.underlayColor}
      onPress={onEditPress}
    >
      <View>
        <Icon size={editButtonSize * 0.8} {...editButton} />
      </View>
    </TouchableHighlight>
  );

  const PlaceholderContent =
    (renderPlaceholderContent &&
      renderNode(undefined, renderPlaceholderContent)) ||
    (title && (
      <Text
        style={StyleSheet.flatten([
          styles.title,
          { fontSize: titleSize },
          titleStyle,
        ])}
      >
        {title}
      </Text>
    )) ||
    (icon && (
      <Icon
        style={iconStyle && iconStyle}
        color={icon.color || 'white'}
        name={icon.name || 'user'}
        size={icon.size || iconSize}
        type={icon.type && icon.type}
      />
    ));

  // Remove placeholder styling if we're not using image
  const hidePlaceholder = !source;

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      style={StyleSheet.flatten([
        styles.container,
        { height, width },
        rounded && { borderRadius: width / 2 },
        containerStyle,
      ])}
      {...attributes}
    >
      <Image
        placeholderStyle={StyleSheet.flatten([
          placeholderStyle,
          hidePlaceholder && { backgroundColor: 'transparent' },
        ])}
        PlaceholderContent={PlaceholderContent}
        containerStyle={StyleSheet.flatten([
          styles.overlayContainer,
          overlayContainerStyle,
          rounded && { borderRadius: width / 2, overflow: 'hidden' },
        ])}
        source={source}
        {...imageProps}
        style={StyleSheet.flatten([
          styles.avatar,
          imageProps && imageProps.style,
          avatarStyle,
        ])}
        ImageComponent={ImageComponent}
      />
      {Utils}
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
    backgroundColor: '#bdbdbd',
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
    backgroundColor: '#aaa',
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.5,
      },
    }),
  },
});

Avatar.propTypes = {
  Component: PropTypes.oneOf([
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
  ]),
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  source: RNImage.propTypes.source,
  avatarStyle: ViewPropTypes.style,
  rounded: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
  overlayContainerStyle: ViewPropTypes.style,
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
    name: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    underlayColor: PropTypes.string,
    style: ViewPropTypes.style,
  }),
  placeholderStyle: ViewPropTypes.style,
  renderPlaceholderContent: nodeType,
  imageProps: PropTypes.object,
  ImageComponent: PropTypes.elementType,
};

Avatar.defaultProps = {
  showEditButton: false,
  onEditPress: null,
  size: 'small',
  editButton: defaultEditButton,
  ImageComponent: RNImage,
};

export { Avatar };
export default withTheme(Avatar, 'Avatar');
