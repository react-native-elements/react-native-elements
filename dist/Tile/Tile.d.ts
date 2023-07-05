import React from 'react';
import { PressableProps, ViewStyle, StyleProp, TextStyle, ImageProps, ImageSourcePropType } from 'react-native';
import { IconObject, IconProps } from '../Icon';
import { RneFunctionComponent } from '../helpers';
export interface TileProps extends PressableProps {
    title?: string;
    icon?: IconObject & IconProps;
    caption?: React.ReactNode;
    imageSrc?: ImageSourcePropType | string | number;
    activeOpacity?: number;
    containerStyle?: StyleProp<ViewStyle>;
    imageContainerStyle?: StyleProp<ViewStyle>;
    iconContainerStyle?: StyleProp<ViewStyle>;
    overlayContainerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    captionStyle?: StyleProp<TextStyle>;
    width?: number;
    height?: number;
    featured?: boolean;
    contentContainerStyle?: StyleProp<ViewStyle>;
    titleNumberOfLines?: number;
    imageProps?: Partial<ImageProps>;
    ImageComponent?: typeof React.Component;
}
export declare const Tile: RneFunctionComponent<TileProps>;
