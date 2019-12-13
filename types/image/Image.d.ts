import React from 'react';
import { Animated, Image as ImageNative, ImageStyle } from 'react-native';
declare type ImageProps = {
    ImageComponent?: JSX.Element;
    PlaceholderContent?: any;
    containerStyle?: any;
    placeholderStyle?: any;
    transition?: boolean;
    style: ImageStyle;
};
declare type ImageState = {
    placeholderOpacity: Animated.AnimatedValue;
};
declare class Image extends React.Component<ImageProps, ImageState> {
    state: {
        placeholderOpacity: Animated.Value;
    };
    static defaultProps: {
        ImageComponent: typeof ImageNative;
        style: {};
        transition: boolean;
    };
    onLoad: () => void;
    render(): JSX.Element;
}
export { Image };
declare const _default: any;
export default _default;
