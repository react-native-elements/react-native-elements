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
import { TouchableOpacity, View, StyleSheet, Dimensions, } from 'react-native';
import { BackgroundImage, withTheme } from '../config';
import { renderNode } from '../helpers';
import Text from '../text/Text';
import Icon from '../icons/Icon';
const renderText = (content, defaultProps, style) => renderNode(Text, content, Object.assign(Object.assign({}, defaultProps), { style: StyleSheet.flatten([style, defaultProps && defaultProps.style]) }));
const FeaturedTile = (props) => {
    const { title, icon, caption, imageSrc, containerStyle, imageContainerStyle, overlayContainerStyle, iconContainerStyle, titleStyle, captionStyle, ImageComponent = BackgroundImage, imageProps = {} } = props, attributes = __rest(props, ["title", "icon", "caption", "imageSrc", "containerStyle", "imageContainerStyle", "overlayContainerStyle", "iconContainerStyle", "titleStyle", "captionStyle", "ImageComponent", "imageProps"]);
    const { width = Dimensions.get('window').width, height = width * 0.8, } = props;
    const styles = StyleSheet.create({
        container: {
            width,
            height,
        },
        imageContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            width,
            height,
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
    return (<TouchableOpacity {...attributes} style={StyleSheet.flatten([
        styles.container,
        containerStyle && containerStyle,
    ])}>
      <ImageComponent resizeMode="cover" {...imageProps} source={imageSrc} style={StyleSheet.flatten([
        styles.imageContainer,
        imageContainerStyle && imageContainerStyle,
    ])}>
        <View style={StyleSheet.flatten([
        styles.overlayContainer,
        overlayContainerStyle && overlayContainerStyle,
    ])}>
          <View style={StyleSheet.flatten([
        styles.iconContainer,
        iconContainerStyle && iconContainerStyle,
    ])}>
            {icon && <Icon {...icon}/>}
          </View>
          <Text testID="featuredTileTitle" h4={!titleStyle || !('fontSize' in titleStyle)} style={StyleSheet.flatten([styles.text, titleStyle && titleStyle])}>
            {title}
          </Text>
          {renderText(caption, { style: captionStyle }, styles.text)}
        </View>
      </ImageComponent>
    </TouchableOpacity>);
};
export { FeaturedTile };
export default withTheme(FeaturedTile, 'FeaturedTile');
