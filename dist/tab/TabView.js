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
import { Animated, PanResponder, View, StyleSheet, } from 'react-native';
import { withTheme } from '../config';
import { ScreenWidth } from '../helpers';
// TabView.Item
const TabViewItem = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return <View {...props}>{React.isValidElement(children) && children}</View>;
};
const TabView = ({ children, onChange, value = 0, animationType = 'spring', animationConfig = {}, }) => {
    const { current: translateX } = React.useRef(new Animated.Value(0));
    const currentIndex = React.useRef(value);
    const length = React.Children.count(children);
    const onPanResponderRelease = (_, { dx, dy }) => {
        if ((dx > 0 && currentIndex.current <= 0) ||
            (dx < 0 && currentIndex.current >= length - 1)) {
            return;
        }
        if (Math.abs(dy) > Math.abs(dx)) {
            return;
        }
        const position = dx / -ScreenWidth;
        const next = position > value ? Math.ceil(position) : Math.floor(position);
        onChange === null || onChange === void 0 ? void 0 : onChange(currentIndex.current + next);
    };
    const { current: panResponder } = React.useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => true,
        onPanResponderRelease,
    }));
    const animate = React.useCallback(() => {
        Animated[animationType](translateX, Object.assign({ toValue: value, useNativeDriver: true }, animationConfig)).start();
    }, [translateX, value, animationType, animationConfig]);
    React.useEffect(() => {
        animate();
        currentIndex.current = value;
    }, [animate, value]);
    return (<Animated.View testID="tabView-test" style={[
        styles.container,
        {
            width: ScreenWidth * length,
            transform: [
                {
                    translateX: translateX.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -ScreenWidth],
                    }),
                },
            ],
        },
    ]} {...panResponder.panHandlers}>
      {React.Children.map(children, (child) => (<View style={styles.container}>{child}</View>))}
    </Animated.View>);
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        width: ScreenWidth,
    },
});
const TabViewComponent = Object.assign(withTheme(TabView, 'TabView'), {
    Item: withTheme(TabViewItem, 'TabViewItem'),
});
export default TabViewComponent;
