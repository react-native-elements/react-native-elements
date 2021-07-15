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
exports.Image = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
class Image extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            placeholderOpacity: new react_native_1.Animated.Value(1),
        };
        this.onLoad = (e) => {
            const { transition, onLoad, transitionDuration } = this.props;
            if (!transition) {
                this.state.placeholderOpacity.setValue(0);
                return;
            }
            react_native_1.Animated.timing(this.state.placeholderOpacity, {
                toValue: 0,
                duration: transitionDuration,
                useNativeDriver: true,
            }).start();
            onLoad && onLoad(e);
        };
    }
    render() {
        const _a = this.props, { onPress, onLongPress, Component = onPress || onLongPress ? react_native_1.TouchableOpacity : react_native_1.View, placeholderStyle, PlaceholderContent, containerStyle, childrenContainerStyle = null, style = {}, ImageComponent = react_native_1.Image, children } = _a, attributes = __rest(_a, ["onPress", "onLongPress", "Component", "placeholderStyle", "PlaceholderContent", "containerStyle", "childrenContainerStyle", "style", "ImageComponent", "children"]);
        const hasImage = Boolean(attributes.source);
        const _b = react_native_1.StyleSheet.flatten(style), { width, height } = _b, styleProps = __rest(_b, ["width", "height"]);
        return (<Component onPress={onPress} onLongPress={onLongPress} accessibilityIgnoresInvertColors={true} style={react_native_1.StyleSheet.flatten([styles.container, containerStyle])}>
        <ImageComponent testID="RNE__Image" transition={true} transitionDuration={360} {...attributes} onLoad={this.onLoad} style={react_native_1.StyleSheet.flatten([
            react_native_1.StyleSheet.absoluteFill,
            {
                width: width,
                height: height,
            },
            styleProps,
        ])}/>

        <react_native_1.Animated.View pointerEvents={hasImage ? 'none' : 'auto'} accessibilityElementsHidden={hasImage} importantForAccessibility={hasImage ? 'no-hide-descendants' : 'yes'} style={[
            styles.placeholderContainer,
            {
                opacity: hasImage ? this.state.placeholderOpacity : 1,
            },
        ]}>
          <react_native_1.View testID="RNE__Image__placeholder" style={react_native_1.StyleSheet.flatten([
            style,
            styles.placeholder,
            placeholderStyle,
        ])}>
            {PlaceholderContent}
          </react_native_1.View>
        </react_native_1.Animated.View>

        <react_native_1.View testID="RNE__Image__children__container" style={childrenContainerStyle !== null && childrenContainerStyle !== void 0 ? childrenContainerStyle : style}>
          {children}
        </react_native_1.View>
      </Component>);
    }
}
exports.Image = Image;
Image.displayName = 'Image';
Image.getSize = react_native_1.Image.getSize;
Image.getSizeWithHeaders = react_native_1.Image.getSizeWithHeaders;
Image.prefetch = react_native_1.Image.prefetch;
Image.abortPrefetch = react_native_1.Image.abortPrefetch;
Image.queryCache = react_native_1.Image.queryCache;
Image.resolveAssetSource = react_native_1.Image.resolveAssetSource;
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
    },
    placeholderContainer: Object.assign({}, react_native_1.StyleSheet.absoluteFillObject),
    placeholder: {
        backgroundColor: '#bdbdbd',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
