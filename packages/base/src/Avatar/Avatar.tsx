import React from 'react';
import {
  View,
  Text,
  Image as RNImage,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import {
  InlinePressableProps,
  renderNode,
  RneFunctionComponent,
} from '../helpers';
import { IconObject, Icon } from '../Icon';
import { ImageProps, Image } from '../Image';

export const avatarSizes = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
};

type AvatarIcon = IconObject & {
  iconStyle?: StyleProp<TextStyle>;
};

export interface AvatarProps extends InlinePressableProps {
  /** Component for enclosing element (eg: TouchableHighlight, View, etc).
   *
   *  @default `Press handlers present then Pressable else View`
   */
  Component?: typeof React.Component;

  /** Callback function when pressing component. */
  onPress?(): void;

  /** Callback function when long pressing component. */
  onLongPress?(): void;

  /** Styling for outer container.
   *
   * @default undefined
   */
  containerStyle?: StyleProp<ViewStyle>;

  /** Image source to be displayed on avatar.
   *
   * @default undefined
   */
  source?: ImageSourcePropType;

  /** Style for avatar image.
   *
   * @default undefined
   */
  avatarStyle?: ImageStyle;

  /** Makes the avatar circular.
   *
   * @default false
   */
  rounded?: boolean;

  /** Renders title in the placeholder.
   *
   * @default undefined
   */
  title?: string;

  /** Style for the title.
   *
   * @default undefined
   */
  titleStyle?: StyleProp<TextStyle>;

  /** Style for the view outside image or icon.
   *
   * @default undefined
   */
  overlayContainerStyle?: StyleProp<TextStyle>;

  /** Displays an icon as the main content of the Avatar. **Cannot be used alongside title**. When used with the `source` prop it will be used as the placeholder.
   *
   * @default undefined
   */
  icon?: AvatarIcon;

  /** Extra styling for icon component.
   *
   * @default undefined
   */
  iconStyle?: StyleProp<TextStyle>;

  /** Size of the avatar.
   *
   * @default small
   */
  size?: ('small' | 'medium' | 'large' | 'xlarge') | number;

  /** Custom element inside the avatar (by default, it's the title).
   *
   * @default undefined
   */
  renderCustomContent?: React.ReactElement<{}>;

  /** Optional properties to pass to the avatar e.g "resizeMode".
   *
   * @default undefined
   */
  imageProps?: Partial<ImageProps>;

  /** Custom ImageComponent for Avatar.
   *
   * @default undefined
   */
  ImageComponent?: React.ComponentClass;
}

/**
 * Avatars are found all over ui design from lists to profile screens.
 * They are commonly used to represent a user and can contain photos, icons, or even text.
 * */
export const Avatar: RneFunctionComponent<AvatarProps> = ({
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
  Component = onPress || onLongPress || onPressIn || onPressOut
    ? Pressable
    : View,
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
  renderCustomContent,
  ImageComponent = RNImage,
  children,
  pressableProps,
  ...rest
}) => {
  const width =
    typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;

  const height = width;
  const titleSize = width / 2;
  const iconSize = width / 2;

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
      style={StyleSheet.flatten([
        styles.container,
        { height, width },
        rounded && { borderRadius: width / 2 },
        containerStyle,
      ])}
      {...{
        onPress,
        onLongPress,
        onPressIn,
        onPressOut,
        ...pressableProps,
        ...rest,
      }}
    >
      {renderCustomContent && renderNode(undefined, renderCustomContent)}
      {icon && (
        <Icon
          style={StyleSheet.flatten([iconStyle])}
          color={icon.color || 'white'}
          name={icon.name || 'account'}
          size={icon.size || iconSize}
          type={icon.type || 'material-community'}
        />
      )}
      {title && (
        <Text
          style={StyleSheet.flatten([
            styles.title,
            { fontSize: titleSize },
            titleStyle,
          ])}
        >
          {title}
        </Text>
      )}
      {source && (
        <Image
          testID="RNE__Avatar__Image"
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
      )}
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  avatar: {
    flex: 1,
  },
  overlayContainer: {
    flex: 1,
  },
  title: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    textAlign: 'center',
    zIndex: 1,
  },
});

Avatar.displayName = 'Avatar';
