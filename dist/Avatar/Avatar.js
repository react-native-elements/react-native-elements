"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarBase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../helpers");
const Icon_1 = __importDefault(require("../Icon"));
const Image_1 = __importDefault(require("../Image"));
const avatarSizes = {
    small: 34,
    medium: 50,
    large: 75,
    xlarge: 150,
};
/** Avatars are found all over ui design from lists to profile screens.
 * They are commonly used to represent a user and can contain photos, icons, or even text. */
const AvatarBase = (_a) => {
    var { onPress, onLongPress, Component = onPress || onLongPress ? react_native_1.TouchableOpacity : react_native_1.View, containerStyle, icon, iconStyle, source, size = 'small', avatarStyle, rounded, title, titleStyle, overlayContainerStyle, imageProps, placeholderStyle, renderPlaceholderContent, ImageComponent = react_native_1.Image, children } = _a, attributes = __rest(_a, ["onPress", "onLongPress", "Component", "containerStyle", "icon", "iconStyle", "source", "size", "avatarStyle", "rounded", "title", "titleStyle", "overlayContainerStyle", "imageProps", "placeholderStyle", "renderPlaceholderContent", "ImageComponent", "children"]);
    let width = avatarSizes.small;
    width = typeof size === 'number' ? size : avatarSizes[size];
    const height = width;
    const titleSize = width / 2;
    const iconSize = width / 2;
    const PlaceholderContent = (renderPlaceholderContent &&
        helpers_1.renderNode(undefined, renderPlaceholderContent)) ||
        (title && (<react_native_1.Text style={react_native_1.StyleSheet.flatten([
            styles.title,
            { fontSize: titleSize },
            titleStyle,
        ])}>
        {title}
      </react_native_1.Text>)) ||
        (icon && (<Icon_1.default style={react_native_1.StyleSheet.flatten([iconStyle && iconStyle])} color={icon.color || 'white'} name={icon.name || 'user'} size={icon.size || iconSize} type={icon.type && icon.type}/>));
    const hidePlaceholder = !(source && source.uri);
    const imageContainerStyle = react_native_1.StyleSheet.flatten([
        styles.overlayContainer,
        rounded && { borderRadius: width / 2, overflow: 'hidden' },
        overlayContainerStyle,
        imageProps && imageProps.containerStyle,
    ]);
    if (imageProps && imageProps.containerStyle) {
        delete imageProps.containerStyle;
    }
    return (<Component onPress={onPress} onLongPress={onLongPress} style={react_native_1.StyleSheet.flatten([
        styles.container,
        { height, width },
        rounded && { borderRadius: width / 2 },
        containerStyle,
    ])} {...attributes}>
      <Image_1.default placeholderStyle={react_native_1.StyleSheet.flatten([
        placeholderStyle,
        hidePlaceholder && styles.hiddenPlaceholderStyle,
    ])} PlaceholderContent={PlaceholderContent} containerStyle={imageContainerStyle} source={source} borderRadius={rounded ? width / 2 : undefined} {...imageProps} style={react_native_1.StyleSheet.flatten([
        styles.avatar,
        imageProps && imageProps.style,
        avatarStyle,
    ])} ImageComponent={ImageComponent}/>
      {children}
    </Component>);
};
exports.AvatarBase = AvatarBase;
const styles = react_native_1.StyleSheet.create({
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
exports.AvatarBase.displayName = 'Avatar';
