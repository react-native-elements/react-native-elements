import React from 'react';
import { StyleProp, ViewStyle, TextStyle, ImageSourcePropType, ImageStyle } from 'react-native';
import { InlinePressableProps, RneFunctionComponent } from '../helpers';
import { IconObject } from '../Icon';
import { ImageProps } from '../Image';
export declare const avatarSizes: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
};
declare type AvatarIcon = IconObject & {
    iconStyle?: StyleProp<TextStyle>;
};
export declare type AvatarProps = {
    /** Component for enclosing element (eg: TouchableHighlight, View, etc).
     *
     *  @default `Press handlers present then Pressable else View`
     */
    Component?: typeof React.Component;
    /** Callback function when pressing component. */
    onPress?(): void;
    /** Callback function when long pressing component. */
    onLongPress?(): void;
    /** Styling for outer container. */
    containerStyle?: StyleProp<ViewStyle>;
    /** Image source to be displayed on avatar. */
    source?: ImageSourcePropType;
    /** Style for avatar image. */
    avatarStyle?: ImageStyle;
    /** Makes the avatar circular. */
    rounded?: boolean;
    /** Renders title in the placeholder. */
    title?: string;
    /** Style for the title. */
    titleStyle?: StyleProp<TextStyle>;
    /** Style for the view outside image or icon. */
    overlayContainerStyle?: StyleProp<TextStyle>;
    /** Opacity when pressed. */
    activeOpacity?: number;
    /** Displays an icon as the main content of the Avatar. **Cannot be used alongside title**. When used with the `source` prop it will be used as the placeholder. */
    icon?: AvatarIcon;
    /** Extra styling for icon component. */
    iconStyle?: StyleProp<TextStyle>;
    /** Size of the avatar. */
    size?: ('small' | 'medium' | 'large' | 'xlarge') | number;
    /** Adds style to the placeholder wrapper. */
    placeholderStyle?: StyleProp<ViewStyle>;
    /** Custom placeholder element (by default, it's the title). */
    renderPlaceholderContent?: React.ReactElement<{}>;
    /** Optional properties to pass to the avatar e.g "resizeMode". */
    imageProps?: Partial<ImageProps>;
    /** Custom ImageComponent for Avatar. */
    ImageComponent?: React.ComponentClass;
} & InlinePressableProps;
/**
 * Avatars are found all over ui design from lists to profile screens.
 * They are commonly used to represent a user and can contain photos, icons, or even text.
 * %live <Avatar size="medium" rounded  containerStyle={{ backgroundColor: '#6733b9' }} title="R" />
 * @tabName Variants
 * @tabLabel ['Basic','Title','Icon']
 * @tabItem
 * <Avatar size="medium" rounded source={{ uri: 'https://randomuser.me/api/portraits/' }} />
 * <Avatar size="medium" rounded source={{ uri: 'https://randomuser.me/api/portraits/' }} title="R" />
 * <Avatar size="medium" rounded source={{ uri: 'https://randomuser.me/api/portraits/' }} icon={{ name: 'home' }} />
 * @usage
 * ### Avatar with title and icon
 * %live <Avatar size="medium" rounded source={{ uri: 'https://randomuser.me/api/portraits/' }} title="R" />
 * ### Avatar with icon
 * %live <Avatar size="medium" rounded source={{ uri: 'https://randomuser.me/api/portraits/' }} icon={{ name: 'home' }} />
 * ### Avatar with image
 * %live <Avatar size="medium" rounded source={{ uri: 'https://randomuser.me/api/portraits/' }} />
 * */
export declare const Avatar: RneFunctionComponent<AvatarProps>;
export {};
