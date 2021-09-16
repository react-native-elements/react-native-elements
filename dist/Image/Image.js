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
import React, { useCallback } from 'react';
import { Animated, Image as ImageNative, StyleSheet, View, Pressable, Text, } from 'react-native';
/** Drop-in replacement for the standard React Native Image component that displays
images with a placeholder and smooth image load transitioning. */
export const Image = (_a) => {
    var { onPress, onLongPress, onPressIn, onPressOut, Component = onPress || onLongPress || onPressIn || onPressOut
        ? Pressable
        : View, placeholderStyle, PlaceholderContent, containerStyle, childrenContainerStyle = null, style = {}, ImageComponent = ImageNative, onLoad, children, transition, transitionDuration = 360, pressableProps } = _a, props = __rest(_a, ["onPress", "onLongPress", "onPressIn", "onPressOut", "Component", "placeholderStyle", "PlaceholderContent", "containerStyle", "childrenContainerStyle", "style", "ImageComponent", "onLoad", "children", "transition", "transitionDuration", "pressableProps"]);
    const placeholderOpacity = React.useRef(new Animated.Value(1));
    const onLoadHandler = useCallback((event) => {
        if (transition) {
            Animated.timing(placeholderOpacity.current, {
                toValue: 0,
                duration: transitionDuration,
                useNativeDriver: true,
            }).start();
        }
        else {
            placeholderOpacity.current.setValue(0);
        }
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(event);
    }, [transition, transitionDuration, onLoad]);
    const hasImage = Boolean(props.source);
    return (<Component {...pressableProps} {...{ onPress, onPressIn, onPressOut, onLongPress }} accessibilityIgnoresInvertColors={true} style={StyleSheet.flatten([styles.container, containerStyle])}>
      <ImageComponent testID="RNE__Image" {...props} {...{ transition, transitionDuration }} onLoad={onLoadHandler} style={StyleSheet.flatten([StyleSheet.absoluteFill, style])}/>
      {/* Transition placeholder */}
      <Animated.View pointerEvents={hasImage ? 'none' : 'auto'} accessibilityElementsHidden={hasImage} importantForAccessibility={hasImage ? 'no-hide-descendants' : 'yes'} style={[
            StyleSheet.absoluteFillObject,
            {
                opacity: hasImage ? placeholderOpacity.current : 1,
            },
        ]}>
        <View testID="RNE__Image__placeholder" style={StyleSheet.flatten([
            style,
            styles.placeholder,
            placeholderStyle,
        ])}>
          {React.isValidElement(PlaceholderContent)
            ? PlaceholderContent
            : PlaceholderContent && (<Text testID="RNE__Image__Placeholder__Content">
                  {PlaceholderContent}
                </Text>)}
        </View>
      </Animated.View>
      {/* Children for Image */}
      <View testID="RNE__Image__children__container" style={childrenContainerStyle !== null && childrenContainerStyle !== void 0 ? childrenContainerStyle : style}>
        {children}
      </View>
    </Component>);
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
    },
    placeholder: {
        backgroundColor: '#bdbdbd',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
Image.displayName = 'Image';
