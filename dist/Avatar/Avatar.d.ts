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
export interface AvatarProps extends InlinePressableProps {
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
    icon?: AvatarIcon;
    iconStyle?: StyleProp<TextStyle>;
    size?: ('small' | 'medium' | 'large' | 'xlarge') | number;
    renderCustomContent?: React.ReactElement<{}>;
    imageProps?: Partial<ImageProps>;
    ImageComponent?: React.ComponentClass;
}
export declare const Avatar: RneFunctionComponent<AvatarProps>;
export {};
