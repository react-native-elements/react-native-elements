declare var _default: any;
export default _default;
export function Avatar({ onPress, onLongPress, Component, containerStyle, icon, iconStyle, source, size, avatarStyle, rounded, title, titleStyle, overlayContainerStyle, showEditButton, editButton: passedEditButton, onEditPress, imageProps, placeholderStyle, renderPlaceholderContent, ImageComponent, ...attributes }: {
    [x: string]: any;
    onPress: any;
    onLongPress: any;
    Component?: typeof View | typeof TouchableOpacity;
    containerStyle: any;
    icon: any;
    iconStyle: any;
    source: any;
    size: any;
    avatarStyle: any;
    rounded: any;
    title: any;
    titleStyle: any;
    overlayContainerStyle: any;
    showEditButton: any;
    editButton: any;
    onEditPress: any;
    imageProps: any;
    placeholderStyle: any;
    renderPlaceholderContent: any;
    ImageComponent: any;
}): JSX.Element;
export namespace Avatar {
    export namespace propTypes {
        export const Component: PropTypes.Requireable<typeof View | typeof TouchableNativeFeedback | typeof TouchableWithoutFeedback>;
        export const onPress: PropTypes.Requireable<(...args: any[]) => any>;
        export const onLongPress: PropTypes.Requireable<(...args: any[]) => any>;
        export const containerStyle: any;
        export const source: any;
        export const avatarStyle: any;
        export const rounded: PropTypes.Requireable<boolean>;
        export const title: PropTypes.Requireable<string>;
        export const titleStyle: any;
        export const overlayContainerStyle: any;
        export const activeOpacity: PropTypes.Requireable<number>;
        export const icon: PropTypes.Requireable<object>;
        export const iconStyle: any;
        export const size: PropTypes.Requireable<React.ReactText>;
        export const showEditButton: PropTypes.Requireable<boolean>;
        export const onEditPress: PropTypes.Requireable<(...args: any[]) => any>;
        export const editButton: PropTypes.Requireable<PropTypes.InferProps<{
            size: PropTypes.Requireable<number>;
            name: PropTypes.Requireable<string>;
            type: PropTypes.Requireable<string>;
            color: PropTypes.Requireable<string>;
            underlayColor: PropTypes.Requireable<string>;
            style: any;
        }>>;
        export const placeholderStyle: any;
        export { nodeType as renderPlaceholderContent };
        export const imageProps: PropTypes.Requireable<object>;
        export const ImageComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    }
    export namespace defaultProps {
        const showEditButton_1: boolean;
        export { showEditButton_1 as showEditButton };
        const onEditPress_1: any;
        export { onEditPress_1 as onEditPress };
        const size_1: string;
        export { size_1 as size };
        export { defaultEditButton as editButton };
        export { RNImage as ImageComponent };
    }
}
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { TouchableNativeFeedback } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import React from "react";
import { nodeType } from "../helpers";
declare const defaultEditButton: {
    name: string;
    type: string;
    color: string;
    underlayColor: string;
};
import { Image as RNImage } from "react-native";
