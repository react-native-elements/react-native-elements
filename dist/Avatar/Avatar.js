var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { View, Text, Image as RNImage, StyleSheet, Pressable, } from 'react-native';
import { renderNode, } from '../helpers';
import { Icon } from '../Icon';
import { Image } from '../Image';
export const avatarSizes = {
    small: 34,
    medium: 50,
    large: 75,
    xlarge: 150,
};
const AvatarTitle = ({ size, title, titleStyle, }) => {
    const width = typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
    const titleSize = width / 2;
    return (React.createElement(Text, { style: StyleSheet.flatten([
            styles.title,
            { fontSize: titleSize },
            titleStyle,
        ]) }, title));
};
const AvatarIcon = ({ icon, iconStyle, size, }) => {
    const width = typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
    const iconSize = width / 2;
    return (React.createElement(Icon, { style: StyleSheet.flatten([iconStyle]), color: icon.color || 'white', name: icon.name || 'account', size: icon.size || iconSize, type: icon.type || 'material-design' }));
};
export const Avatar = (_a) => {
    var { onPress, onLongPress, onPressIn, onPressOut, Component = onPress || onLongPress || onPressIn || onPressOut
        ? Pressable
        : View, containerStyle, icon, iconStyle, source, size = 'small', avatarStyle, rounded, title, titleStyle, overlayContainerStyle, imageProps, renderCustomContent, ImageComponent = RNImage, children, pressableProps } = _a, rest = __rest(_a, ["onPress", "onLongPress", "onPressIn", "onPressOut", "Component", "containerStyle", "icon", "iconStyle", "source", "size", "avatarStyle", "rounded", "title", "titleStyle", "overlayContainerStyle", "imageProps", "renderCustomContent", "ImageComponent", "children", "pressableProps"]);
    const width = typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
    const height = width;
    const imageContainerStyle = StyleSheet.flatten([
        styles.overlayContainer,
        rounded && { borderRadius: width / 2, overflow: 'hidden' },
        overlayContainerStyle,
        imageProps && imageProps.containerStyle,
    ]);
    if (imageProps && imageProps.containerStyle) {
        delete imageProps.containerStyle;
    }
    let componentToRender;
    if (source) {
        componentToRender = (React.createElement(Image, Object.assign({ testID: "RNE__Avatar__Image", containerStyle: imageContainerStyle, source: source, PlaceholderContent: (title && (React.createElement(AvatarTitle, { title: title, titleStyle: titleStyle, size: size }))) ||
                (icon && React.createElement(AvatarIcon, { icon: icon, iconStyle: iconStyle, size: size })), placeholderStyle: StyleSheet.flatten([
                styles.placeholderStyle,
                imageProps && imageProps.placeholderStyle,
            ]), borderRadius: rounded ? width / 2 : undefined }, imageProps, { style: StyleSheet.flatten([
                styles.avatar,
                imageProps && imageProps.style,
                avatarStyle,
            ]), ImageComponent: ImageComponent })));
    }
    else if (title) {
        componentToRender = (React.createElement(AvatarTitle, { title: title, titleStyle: titleStyle, size: size }));
    }
    else if (icon) {
        componentToRender = (React.createElement(AvatarIcon, { icon: icon, iconStyle: iconStyle, size: size }));
    }
    else if (renderCustomContent) {
        componentToRender = renderNode(undefined, renderCustomContent);
    }
    return (React.createElement(Component, Object.assign({ style: StyleSheet.flatten([
            styles.container,
            { height, width },
            rounded && { borderRadius: width / 2 },
            containerStyle,
        ]), onPress,
        onLongPress,
        onPressIn,
        onPressOut }, pressableProps, rest),
        componentToRender,
        children));
};
const styles = StyleSheet.create({
    container: {
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
    placeholderStyle: {
        backgroundColor: 'transparent',
    },
});
Avatar.displayName = 'Avatar';
