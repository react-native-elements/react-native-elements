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
exports.ThemedFeaturedTile = exports.FeaturedTile = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const config_1 = require("../../config");
const helpers_1 = require("../../helpers");
const Text_1 = __importDefault(require("../../Text"));
const Icon_1 = __importDefault(require("../../Icon"));
const renderText = (content, defaultProps, style) => helpers_1.renderNode(Text_1.default, content, Object.assign(Object.assign({}, defaultProps), { style: react_native_1.StyleSheet.flatten([style, defaultProps && defaultProps.style]) }));
const FeaturedTile = (props) => {
    const { title, icon, caption, imageSrc, containerStyle, imageContainerStyle, overlayContainerStyle, iconContainerStyle, titleStyle, captionStyle, ImageComponent = config_1.BackgroundImage, imageProps = {} } = props, attributes = __rest(props, ["title", "icon", "caption", "imageSrc", "containerStyle", "imageContainerStyle", "overlayContainerStyle", "iconContainerStyle", "titleStyle", "captionStyle", "ImageComponent", "imageProps"]);
    const { width = react_native_1.Dimensions.get('window').width, height = width * 0.8, } = props;
    const styles = react_native_1.StyleSheet.create({
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
    return (<react_native_1.TouchableOpacity {...attributes} style={react_native_1.StyleSheet.flatten([
        styles.container,
        containerStyle && containerStyle,
    ])}>
      <ImageComponent resizeMode="cover" {...imageProps} source={imageSrc} style={react_native_1.StyleSheet.flatten([
        styles.imageContainer,
        imageContainerStyle && imageContainerStyle,
    ])}>
        <react_native_1.View style={react_native_1.StyleSheet.flatten([
        styles.overlayContainer,
        overlayContainerStyle && overlayContainerStyle,
    ])}>
          <react_native_1.View style={react_native_1.StyleSheet.flatten([
        styles.iconContainer,
        iconContainerStyle && iconContainerStyle,
    ])}>
            {icon && <Icon_1.default {...icon}/>}
          </react_native_1.View>
          <Text_1.default testID="featuredTileTitle" h4={!titleStyle || !('fontSize' in titleStyle)} style={react_native_1.StyleSheet.flatten([styles.text, titleStyle && titleStyle])}>
            {title}
          </Text_1.default>
          {renderText(caption, { style: captionStyle }, styles.text)}
        </react_native_1.View>
      </ImageComponent>
    </react_native_1.TouchableOpacity>);
};
exports.FeaturedTile = FeaturedTile;
const ThemedFeaturedTile = config_1.withTheme(FeaturedTile, 'FeaturedTile');
exports.ThemedFeaturedTile = ThemedFeaturedTile;
