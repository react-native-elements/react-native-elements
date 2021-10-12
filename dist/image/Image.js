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
import { Animated, Image as ImageNative, StyleSheet, View, TouchableOpacity, } from 'react-native';
import { withTheme } from '../config';
class Image extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            placeholderOpacity: new Animated.Value(1),
        };
        this.onLoad = (e) => {
            const { transition, onLoad, transitionDuration } = this.props;
            if (!transition) {
                this.state.placeholderOpacity.setValue(0);
                return;
            }
            Animated.timing(this.state.placeholderOpacity, {
                toValue: 0,
                duration: transitionDuration,
                useNativeDriver: true,
            }).start();
            onLoad && onLoad(e);
        };
    }
    render() {
        const _a = this.props, { onPress, onLongPress, Component = onPress || onLongPress ? TouchableOpacity : View, placeholderStyle, PlaceholderContent, containerStyle, childrenContainerStyle = null, style = {}, ImageComponent = ImageNative, children } = _a, attributes = __rest(_a, ["onPress", "onLongPress", "Component", "placeholderStyle", "PlaceholderContent", "containerStyle", "childrenContainerStyle", "style", "ImageComponent", "children"]);
        const hasImage = Boolean(attributes.source);
        const _b = StyleSheet.flatten(style), { width, height } = _b, styleProps = __rest(_b, ["width", "height"]);
        return (<Component onPress={onPress} onLongPress={onLongPress} accessibilityIgnoresInvertColors={true} style={StyleSheet.flatten([styles.container, containerStyle])}>
        <ImageComponent testID="RNE__Image" transition={true} transitionDuration={360} {...attributes} onLoad={this.onLoad} style={StyleSheet.flatten([
            StyleSheet.absoluteFill,
            {
                width: width,
                height: height,
            },
            styleProps,
        ])}/>

        <Animated.View pointerEvents={hasImage ? 'none' : 'auto'} accessibilityElementsHidden={hasImage} importantForAccessibility={hasImage ? 'no-hide-descendants' : 'yes'} style={[
            styles.placeholderContainer,
            {
                opacity: hasImage ? this.state.placeholderOpacity : 1,
            },
        ]}>
          <View testID="RNE__Image__placeholder" style={StyleSheet.flatten([
            style,
            styles.placeholder,
            placeholderStyle,
        ])}>
            {PlaceholderContent}
          </View>
        </Animated.View>

        <View testID="RNE__Image__children__container" style={childrenContainerStyle !== null && childrenContainerStyle !== void 0 ? childrenContainerStyle : style}>
          {children}
        </View>
      </Component>);
    }
}
Image.getSize = ImageNative.getSize;
Image.getSizeWithHeaders = ImageNative.getSizeWithHeaders;
Image.prefetch = ImageNative.prefetch;
Image.abortPrefetch = ImageNative.abortPrefetch;
Image.queryCache = ImageNative.queryCache;
Image.resolveAssetSource = ImageNative.resolveAssetSource;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
    },
    placeholderContainer: Object.assign({}, StyleSheet.absoluteFillObject),
    placeholder: {
        backgroundColor: '#bdbdbd',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export { Image };
export default withTheme(Image, 'Image');
