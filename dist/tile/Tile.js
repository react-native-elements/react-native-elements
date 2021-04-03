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
import { View, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native';
import { withTheme } from '../config';
import Image from '../image/Image';
import Text from '../text/Text';
import Icon from '../icons/Icon';
import FeaturedTile from './FeaturedTile';
const Tile = (props) => {
    const { featured, imageSrc, icon, title, children, caption, titleStyle, onPress, activeOpacity, overlayContainerStyle, captionStyle, iconContainerStyle, imageContainerStyle, containerStyle, contentContainerStyle, titleNumberOfLines, ImageComponent = Image, imageProps = {} } = props, attributes = __rest(props, ["featured", "imageSrc", "icon", "title", "children", "caption", "titleStyle", "onPress", "activeOpacity", "overlayContainerStyle", "captionStyle", "iconContainerStyle", "imageContainerStyle", "containerStyle", "contentContainerStyle", "titleNumberOfLines", "ImageComponent", "imageProps"]);
    const { width = Dimensions.get('window').width, height = width * 0.8, } = props;
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
        return <FeaturedTile {...featuredProps}/>;
    }
    return (<TouchableOpacity {...attributes} onPress={onPress} activeOpacity={activeOpacity} style={StyleSheet.flatten([
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
    </TouchableOpacity>);
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
export { Tile };
export default withTheme(Tile, 'Tile');
