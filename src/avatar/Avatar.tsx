import React from 'react';
import {
  View,
  Text,
  Image as RNImage,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import isEqual from 'lodash.isequal';
import { withTheme } from '../config';
import { renderNode } from '../helpers';
import Icon from '../icons/Icon';
import Image from '../image/Image';
import Accessory from './Accessory';

const avatarSizes = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
};

export type AvatarProps = {
  Component?: any;
  onPress?: (...args: any[]) => any;
  onLongPress?: (...args: any[]) => any;
  containerStyle?: object | any[];
  source?: any;
  avatarStyle?: object | any[];
  rounded?: boolean;
  title?: string;
  titleStyle?: object | any[];
  overlayContainerStyle?: object | any[];
  activeOpacity?: number;
  icon?: object;
  iconStyle?: object | any[];
  size?: ('small' | 'medium' | 'large' | 'xlarge') | number;
  placeholderStyle?: object | any[];
  renderPlaceholderContent?: any;
  imageProps?: object;
  ImageComponent?: JSX.Element;
};

const AvatarComponent: React.FunctionComponent<AvatarProps> = ({
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
  imageProps,
  placeholderStyle,
  renderPlaceholderContent,
  ImageComponent,
  children,
  ...attributes
}) => {
  const width =
    typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
  const height = width;
  const titleSize = width / 2;
  const iconSize = width / 2;
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
  const hidePlaceholder = !(source && source.uri);
  // Merge image container style
  const imageContainerStyle = StyleSheet.flatten([
    styles.overlayContainer,
    rounded && { borderRadius: width / 2, overflow: 'hidden' },
    overlayContainerStyle,
    imageProps && imageProps.containerStyle,
  ]);
  if (imageProps && imageProps.containerStyle) {
    delete imageProps.containerStyle;
  }
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
          hidePlaceholder && styles.hiddenPlaceholderStyle,
        ])}
        PlaceholderContent={PlaceholderContent}
        containerStyle={imageContainerStyle}
        source={source}
        borderRadius={rounded ? width / 2 : undefined}
        {...imageProps}
        style={StyleSheet.flatten([
          styles.avatar,
          imageProps && imageProps.style,
          avatarStyle,
        ])}
        ImageComponent={ImageComponent}
      />
      {children}
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
  hiddenPlaceholderStyle: {
    backgroundColor: 'transparent',
  },
});

AvatarComponent.defaultProps = {
  size: 'small',
  ImageComponent: RNImage,
};

const Avatar = React.memo(AvatarComponent, isEqual);
export { Avatar };
const ThemedAvatar = withTheme(Avatar, 'Avatar');

ThemedAvatar.Accessory = Accessory;
export default ThemedAvatar;
