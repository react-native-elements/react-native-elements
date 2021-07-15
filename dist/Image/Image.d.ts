import React from 'react';
import { Animated, Image as ImageNative, ImageProps as RNImageProps, ViewStyle, StyleProp } from 'react-native';
import { ThemeProps } from '../config';
export declare type ImageProps = RNImageProps & {
    Component?: typeof React.Component;
    onPress?(): void;
    onLongPress?(): void;
    ImageComponent?: React.ComponentType<any>;
    PlaceholderContent?: React.ReactElement<any>;
    containerStyle?: StyleProp<ViewStyle>;
    childrenContainerStyle?: StyleProp<ViewStyle>;
    placeholderStyle?: StyleProp<ViewStyle>;
    transition?: boolean;
    transitionDuration?: number;
};
declare type ImageState = {
    placeholderOpacity: Animated.Value;
};
export declare class Image extends React.Component<ImageProps & Partial<ThemeProps<ImageProps>>, ImageState> {
    static displayName: string;
    static getSize: typeof ImageNative.getSize;
    static getSizeWithHeaders: typeof ImageNative.getSizeWithHeaders;
    static prefetch: typeof ImageNative.prefetch;
    static abortPrefetch: typeof ImageNative.abortPrefetch;
    static queryCache: typeof ImageNative.queryCache;
    static resolveAssetSource: typeof ImageNative.resolveAssetSource;
    state: {
        placeholderOpacity: Animated.Value;
    };
    onLoad: (e: any) => void;
    render(): JSX.Element;
}
export {};
