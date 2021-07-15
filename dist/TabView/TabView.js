"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabViewBase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../helpers");
/** Tabs organize content across different screens, data sets, and other interactions.
 * TabView enables swipeable tabs. */
const TabViewBase = ({ children, onChange, value = 0, animationType = 'spring', animationConfig = {}, }) => {
    const { current: translateX } = react_1.default.useRef(new react_native_1.Animated.Value(0));
    const currentIndex = react_1.default.useRef(value);
    const length = react_1.default.Children.count(children);
    const onPanResponderRelease = (_, { dx, dy }) => {
        if ((dx > 0 && currentIndex.current <= 0) ||
            (dx < 0 && currentIndex.current >= length - 1)) {
            return;
        }
        if (Math.abs(dy) > Math.abs(dx)) {
            return;
        }
        const position = dx / -helpers_1.ScreenWidth;
        const next = position > value ? Math.ceil(position) : Math.floor(position);
        onChange === null || onChange === void 0 ? void 0 : onChange(currentIndex.current + next);
    };
    const { current: panResponder } = react_1.default.useRef(react_native_1.PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => true,
        onPanResponderRelease,
    }));
    const animate = react_1.default.useCallback(() => {
        react_native_1.Animated[animationType](translateX, Object.assign({ toValue: value, useNativeDriver: true }, animationConfig)).start();
    }, [translateX, value, animationType, animationConfig]);
    react_1.default.useEffect(() => {
        animate();
        currentIndex.current = value;
    }, [animate, value]);
    return (<react_native_1.Animated.View testID="tabView-test" style={[
        styles.container,
        {
            width: helpers_1.ScreenWidth * length,
            transform: [
                {
                    translateX: translateX.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -helpers_1.ScreenWidth],
                    }),
                },
            ],
        },
    ]} {...panResponder.panHandlers}>
      {react_1.default.Children.map(children, (child) => (<react_native_1.View style={styles.container}>{child}</react_native_1.View>))}
    </react_native_1.Animated.View>);
};
exports.TabViewBase = TabViewBase;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        width: helpers_1.ScreenWidth,
    },
});
exports.TabViewBase.displayName = 'TabView';
