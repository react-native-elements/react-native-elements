import React from 'react';
import {
  View,
  Text,
  Image as RNImage,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  ImageURISource,
  ImageStyle,
} from 'react-native';
import isEqual from 'lodash.isequal';
import { withTheme } from '../config';
import { renderNode, RneFunctionComponent } from '../helpers';
import Icon, { IconObject } from '../icons/Icon';
import Image, { ImageProps } from '../image/Image';
import Accessory from './Accessory';

const avatarSizes = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
};

interface AvatarIcon extends IconObject {
  iconStyle?: StyleProp<TextStyle>;
}

export type AvatarProps = {
  Component?: typeof React.Component;
  onPress?(): void;
  onLongPress?(): void;
  containerStyle?: StyleProp<ViewStyle>;
  source?: ImageSourcePropType;
  avatarStyle?: ImageStyle;
  rounded?: boolean;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  overlayContainerStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
  icon?: AvatarIcon;
  iconStyle?: StyleProp<TextStyle>;
  size?: ('small' | 'medium' | 'large' | 'xlarge') | number;
  placeholderStyle?: StyleProp<ViewStyle>;
  renderPlaceholderContent?: React.ReactElement<{}>;
  imageProps?: Partial<ImageProps>;
  ImageComponent?: React.ComponentClass;
};

interface Avatar extends RneFunctionComponent<AvatarProps> {}

const AvatarComponent: Avatar = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  containerStyle,
  icon,
  iconStyle,
  source,
  size = 'small',
  avatarStyle,
  rounded,
  title,
  titleStyle,
  overlayContainerStyle,
  imageProps,
  placeholderStyle,
  renderPlaceholderContent,
  ImageComponent = RNImage,
  children,
  ...attributes
}: React.PropsWithChildren<AvatarProps>) => {
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
        style={StyleSheet.flatten([iconStyle && iconStyle])}
        color={icon.color || 'white'}
        name={icon.name || 'user'}
        size={icon.size || iconSize}
        type={icon.type && icon.type}
      />
    ));

  const hidePlaceholder = !(source && (source as ImageURISource).uri);

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
        containerStyle={imageContainerStyle as StyleProp<TextStyle>}
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
    width: undefined,
    height: undefined,
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

const Avatar = React.memo(AvatarComponent, isEqual);
export { Avatar };
const ThemedAvatar = Object.assign(withTheme(Avatar, 'Avatar'), {
  Accessory: Accessory,
});
export default ThemedAvatar;
