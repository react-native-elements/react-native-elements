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
exports.Tile = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Image_1 = __importDefault(require("../Image"));
const Text_1 = __importDefault(require("../Text"));
const Icon_1 = __importDefault(require("../Icon"));
const FeaturedTile_1 = require("./components/FeaturedTile");
/** Tiles like Cards, are a convenient way to display related content about a single subject.
 * Also receives all [TouchableNativeFeedback](http://reactnative.dev/docs/touchablenativefeedback.html#props) (Android) or [TouchableOpacity](http://reactnative.dev/docs/touchableopacity.html#props) (iOS) props. */
const Tile = (_a) => {
    var { featured, imageSrc, icon, title, children, caption, titleStyle, onPress, activeOpacity, overlayContainerStyle, captionStyle, iconContainerStyle, imageContainerStyle, containerStyle, contentContainerStyle, titleNumberOfLines, ImageComponent = Image_1.default, imageProps = {}, width = react_native_1.Dimensions.get('window').width, height = width * 0.8 } = _a, attributes = __rest(_a, ["featured", "imageSrc", "icon", "title", "children", "caption", "titleStyle", "onPress", "activeOpacity", "overlayContainerStyle", "captionStyle", "iconContainerStyle", "imageContainerStyle", "containerStyle", "contentContainerStyle", "titleNumberOfLines", "ImageComponent", "imageProps", "width", "height"]);
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
        return <FeaturedTile_1.ThemedFeaturedTile {...featuredProps}/>;
    }
    return (<react_native_1.TouchableOpacity {...attributes} onPress={onPress} activeOpacity={activeOpacity} style={react_native_1.StyleSheet.flatten([
        {
            width,
            height,
        },
        containerStyle && containerStyle,
    ])}>
      <ImageComponent resizeMode="cover" source={imageSrc} containerStyle={react_native_1.StyleSheet.flatten([
        styles.imageContainer,
        imageContainerStyle && imageContainerStyle,
    ])} style={Object.assign(Object.assign({}, react_native_1.StyleSheet.absoluteFillObject), { alignItems: 'center', justifyContent: 'center' })} {...imageProps}>
        <react_native_1.View style={react_native_1.StyleSheet.flatten([
        styles.iconContainer,
        iconContainerStyle && iconContainerStyle,
    ])}>
          {icon && <Icon_1.default {...icon}/>}
        </react_native_1.View>
      </ImageComponent>

      <react_native_1.View style={react_native_1.StyleSheet.flatten([
        styles.contentContainer,
        contentContainerStyle && contentContainerStyle,
    ])}>
        <Text_1.default testID="tileTitle" h4={!titleStyle || !('fontSize' in titleStyle)} style={react_native_1.StyleSheet.flatten([styles.text, titleStyle && titleStyle])} numberOfLines={titleNumberOfLines}>
          {title}
        </Text_1.default>
        {children}
      </react_native_1.View>
    </react_native_1.TouchableOpacity>);
};
exports.Tile = Tile;
const styles = react_native_1.StyleSheet.create({
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
exports.Tile.displayName = 'Tile';
