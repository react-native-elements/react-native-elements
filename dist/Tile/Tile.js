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
import { View, StyleSheet, Dimensions, Pressable, } from 'react-native';
import Image from '../Image';
import Text from '../Text';
import Icon from '../Icon';
import { ThemedFeaturedTile } from './components/FeaturedTile';
import { androidRipple } from '../helpers';
import Color from 'color';
/** Tiles like Cards, are a convenient way to display related content about a single subject.
 * Also receives all [TouchableNativeFeedback](http://reactnative.dev/docs/touchablenativefeedback.html#props) (Android) or [TouchableOpacity](http://reactnative.dev/docs/touchableopacity.html#props) (iOS) props. */
export const Tile = (_a) => {
    var _b;
    var { featured, imageSrc, icon, title, children, caption, titleStyle, onPress, activeOpacity, overlayContainerStyle, captionStyle, iconContainerStyle, imageContainerStyle, containerStyle, contentContainerStyle, titleNumberOfLines, ImageComponent = Image, imageProps = {}, width = Dimensions.get('window').width, height = width * 0.8, theme } = _a, attributes = __rest(_a, ["featured", "imageSrc", "icon", "title", "children", "caption", "titleStyle", "onPress", "activeOpacity", "overlayContainerStyle", "captionStyle", "iconContainerStyle", "imageContainerStyle", "containerStyle", "contentContainerStyle", "titleNumberOfLines", "ImageComponent", "imageProps", "width", "height", "theme"]);
    if (featured) {
        const featuredProps = {
            title,
            icon,
            caption,
            imageSrc,
            onPress,
            activeOpacity,
            containerStyle,
            imageContainerStyle,
            overlayContainerStyle,
            titleStyle,
            captionStyle,
            width,
            height,
            imageProps,
            ImageComponent,
        };
        return <ThemedFeaturedTile {...featuredProps}/>;
    }
    return (<Pressable {...Object.assign({ onPress, android_ripple: androidRipple(Color((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary).alpha(activeOpacity).rgb().toString()) }, attributes)} style={StyleSheet.flatten([
            {
                width,
                height,
            },
            containerStyle && containerStyle,
        ])}>
      <ImageComponent resizeMode="cover" source={imageSrc} containerStyle={StyleSheet.flatten([
            styles.imageContainer,
            imageContainerStyle && imageContainerStyle,
        ])} style={Object.assign(Object.assign({}, StyleSheet.absoluteFillObject), { alignItems: 'center', justifyContent: 'center' })} {...imageProps}>
        <View style={StyleSheet.flatten([
            styles.iconContainer,
            iconContainerStyle && iconContainerStyle,
        ])}>
          {icon && <Icon {...icon}/>}
        </View>
      </ImageComponent>

      <View style={StyleSheet.flatten([
            styles.contentContainer,
            contentContainerStyle && contentContainerStyle,
        ])}>
        <Text testID="tileTitle" h4={!titleStyle || !('fontSize' in titleStyle)} style={StyleSheet.flatten([styles.text, titleStyle && titleStyle])} numberOfLines={titleNumberOfLines}>
          {title}
        </Text>
        {children}
      </View>
    </Pressable>);
};
const styles = StyleSheet.create({
    imageContainer: {
        flex: 2,
    },
    text: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginBottom: 5,
    },
    contentContainer: {
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
});
Tile.displayName = 'Tile';
