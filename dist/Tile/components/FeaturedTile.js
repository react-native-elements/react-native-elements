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
import { Pressable, View, StyleSheet, Dimensions, } from 'react-native';
import { BackgroundImage } from '../../helpers';
import { renderNode } from '../../helpers';
import { Text } from '../../Text';
import { Icon } from '../../Icon';
const renderText = (content, defaultProps, style) => renderNode(Text, content, Object.assign(Object.assign({}, defaultProps), { style: StyleSheet.flatten([style, defaultProps && defaultProps.style]) }));
const FeaturedTile = (_a) => {
    var { title, icon, caption, imageSrc, containerStyle, imageContainerStyle, overlayContainerStyle, iconContainerStyle, titleStyle, captionStyle, ImageComponent = BackgroundImage, imageProps = {}, width = Dimensions.get('window').width, height = width * 0.8 } = _a, attributes = __rest(_a, ["title", "icon", "caption", "imageSrc", "containerStyle", "imageContainerStyle", "overlayContainerStyle", "iconContainerStyle", "titleStyle", "captionStyle", "ImageComponent", "imageProps", "width", "height"]);
    return (React.createElement(Pressable, Object.assign({}, attributes, { style: StyleSheet.flatten([
            { width, height },
            containerStyle && containerStyle,
        ]) }),
        React.createElement(ImageComponent, Object.assign({ resizeMode: "cover" }, imageProps, { source: imageSrc, style: StyleSheet.flatten([
                { width, height },
                styles.imageContainer,
                imageContainerStyle && imageContainerStyle,
            ]) }),
            React.createElement(View, { style: StyleSheet.flatten([
                    styles.overlayContainer,
                    overlayContainerStyle && overlayContainerStyle,
                ]) },
                React.createElement(View, { style: StyleSheet.flatten([
                        styles.iconContainer,
                        iconContainerStyle && iconContainerStyle,
                    ]) }, icon && React.createElement(Icon, Object.assign({}, icon))),
                React.createElement(Text, { testID: "featuredTileTitle", h4: !titleStyle || !('fontSize' in titleStyle), style: StyleSheet.flatten([styles.text, titleStyle && titleStyle]) }, title),
                renderText(caption, { style: captionStyle }, styles.text)))));
};
export { FeaturedTile };
const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlayContainer: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 45,
        paddingBottom: 40,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    text: {
        color: '#ffffff',
        backgroundColor: 'rgba(0,0,0,0)',
        marginBottom: 15,
        textAlign: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
});
