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
import Icon from '../Icon';
import Image from '../Image';
export const avatarSizes = {
    small: 34,
    medium: 50,
    large: 75,
    xlarge: 150,
};
/** Avatars are found all over ui design from lists to profile screens.
 * They are commonly used to represent a user and can contain photos, icons, or even text. */
export const Avatar = (_a) => {
    var { onPress, onLongPress, onPressIn, onPressOut, Component = onPress || onLongPress || onPressIn || onPressOut
        ? Pressable
        : View, containerStyle, icon, iconStyle, source, size = 'small', avatarStyle, rounded, title, titleStyle, overlayContainerStyle, imageProps, placeholderStyle, renderPlaceholderContent, ImageComponent = RNImage, children, pressableProps } = _a, rest = __rest(_a, ["onPress", "onLongPress", "onPressIn", "onPressOut", "Component", "containerStyle", "icon", "iconStyle", "source", "size", "avatarStyle", "rounded", "title", "titleStyle", "overlayContainerStyle", "imageProps", "placeholderStyle", "renderPlaceholderContent", "ImageComponent", "children", "pressableProps"]);
    const width = typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
    const height = width;
    const titleSize = width / 2;
    const iconSize = width / 2;
    const PlaceholderContent = (renderPlaceholderContent &&
        renderNode(undefined, renderPlaceholderContent)) ||
        (title && (<Text style={StyleSheet.flatten([
                styles.title,
                { fontSize: titleSize },
                titleStyle,
            ])}>
        {title}
      </Text>)) ||
        (icon && (<Icon style={StyleSheet.flatten([iconStyle && iconStyle])} color={icon.color || 'white'} name={icon.name || 'account'} size={icon.size || iconSize} type={icon.type || 'material-community'}/>));
    const hidePlaceholder = !(source && source.uri);
    const imageContainerStyle = StyleSheet.flatten([
        styles.overlayContainer,
        rounded && { borderRadius: width / 2, overflow: 'hidden' },
        overlayContainerStyle,
        imageProps && imageProps.containerStyle,
    ]);
    if (imageProps && imageProps.containerStyle) {
        delete imageProps.containerStyle;
    }
    return (<Component style={StyleSheet.flatten([
            styles.container,
            { height, width },
            rounded && { borderRadius: width / 2 },
            containerStyle,
        ])} {...Object.assign(Object.assign({ onPress,
        onLongPress,
        onPressIn,
        onPressOut }, pressableProps), rest)}>
      <Image testID="RNE__Avatar__Image" placeholderStyle={StyleSheet.flatten([
            placeholderStyle,
            hidePlaceholder && styles.hiddenPlaceholderStyle,
        ])} PlaceholderContent={PlaceholderContent} containerStyle={imageContainerStyle} source={source} borderRadius={rounded ? width / 2 : undefined} {...imageProps} style={StyleSheet.flatten([
            styles.avatar,
            imageProps && imageProps.style,
            avatarStyle,
        ])} ImageComponent={ImageComponent}/>
      {children}
    </Component>);
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
Avatar.displayName = 'Avatar';
