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
import { View, Text, Image as RNImage, StyleSheet, TouchableOpacity, } from 'react-native';
import isEqual from 'lodash.isequal';
import { withTheme } from '../config';
import { renderNode } from '../helpers';
import Icon from '../icons/Icon';
import Image from '../image/Image';
import Accessory from './Accessory';
const avatarSizes = {
    small: 34,
    medium: 50,
    large: 75,
    xlarge: 150,
};
const AvatarComponent = (_a) => {
    var { onPress, onLongPress, Component = onPress || onLongPress ? TouchableOpacity : View, containerStyle, icon, iconStyle, source, size = 'small', avatarStyle, rounded, title, titleStyle, overlayContainerStyle, imageProps, placeholderStyle, renderPlaceholderContent, ImageComponent = RNImage, children } = _a, attributes = __rest(_a, ["onPress", "onLongPress", "Component", "containerStyle", "icon", "iconStyle", "source", "size", "avatarStyle", "rounded", "title", "titleStyle", "overlayContainerStyle", "imageProps", "placeholderStyle", "renderPlaceholderContent", "ImageComponent", "children"]);
    let width = avatarSizes.small;
    width = typeof size === 'number' ? size : avatarSizes[size];
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
        (icon && (<Icon style={StyleSheet.flatten([iconStyle && iconStyle])} color={icon.color || 'white'} name={icon.name || 'user'} size={icon.size || iconSize} type={icon.type && icon.type}/>));
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
    return (<Component onPress={onPress} onLongPress={onLongPress} style={StyleSheet.flatten([
        styles.container,
        { height, width },
        rounded && { borderRadius: width / 2 },
        containerStyle,
    ])} {...attributes}>
      <Image placeholderStyle={StyleSheet.flatten([
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
const Avatar = React.memo(AvatarComponent, isEqual);
export { Avatar };
const ThemedAvatar = Object.assign(withTheme(Avatar, 'Avatar'), {
    Accessory: Accessory,
});
export default ThemedAvatar;
