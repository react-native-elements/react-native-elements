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

import Utils from './Utils';
import PlaceholderContent from './PlaceholderContent';

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
  multiAvatarProps,
  ...attributes
}) => {
  const width = multiAvatarProps ? multiAvatarProps.width :
    typeof size === 'number'
        ? size : avatarSizes[size] || avatarSizes.small;
  const height = multiAvatarProps ? multiAvatarProps.height : width;
  const titleSize = width / 2;
  const iconSize = width / 2;

  const placeholderContent = (
    <PlaceholderContent
      renderPlaceholderContent={renderPlaceholderContent}
      title={title}
      titleSize={titleSize}
      titleStyle={titleStyle}
      icon={icon}
      iconSize={iconSize}
      iconStyle={iconStyle}
    />
  );
  
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
        PlaceholderContent={placeholderContent}
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
        onLoadEnd={multiAvatarProps && multiAvatarProps.onAvatarLoadEnd}
      />
      {showEditButton && (
        <Utils
          width={width}
          height={height}
          editButton={passedEditButton}
          onEditPress={onEditPress}
        />
      )}
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
  overlayContainerStyle: ViewPropTypes.style,
  activeOpacity: PropTypes.number,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    PropTypes.number,
  ]),
  showEditButton: PropTypes.bool,
  placeholderStyle: ViewPropTypes.style,
  imageProps: PropTypes.object,
  ImageComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

Avatar.defaultProps = {
  showEditButton: false,
  size: 'small',
  ImageComponent: RNImage,
};

export { Avatar };
export default withTheme(Avatar, 'Avatar');
