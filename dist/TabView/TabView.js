import React from 'react';
import { Animated, PanResponder, View, StyleSheet, Easing, } from 'react-native';
export const TabViewBase = ({ value: activeIndex = 0, children, onChange = () => { }, onSwipeStart = () => { }, containerStyle, tabItemContainerStyle, disableSwipe = false, disableTransition = false, minSwipeRatio = 0.4, minSwipeSpeed = 1, animationType = 'spring', animationConfig = {}, }) => {
    const [containerWidth, setContainerWidth] = React.useState(1);
    const childCount = React.useMemo(() => React.Children.toArray(children).length, [children]);
    const translateX = React.useRef(new Animated.Value(0));
    const currentIndex = React.useRef(0);
    const onIndexChangeRef = React.useRef((value) => value);
    const animate = React.useCallback((toValue, onDone = () => { }) => {
        var _a;
        currentIndex.current = toValue;
        (_a = onIndexChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onIndexChangeRef, toValue);
        Animated[animationType](translateX.current, Object.assign({ toValue: toValue, useNativeDriver: true, easing: Easing.inOut(Easing.ease), duration: 150 }, animationConfig)).start();
        onDone === null || onDone === void 0 ? void 0 : onDone(toValue);
    }, [animationConfig, animationType]);
    const releaseResponder = React.useCallback((_, { dx, vx }) => {
        const position = dx / -containerWidth;
        const shouldSwipe = Math.abs(position) > minSwipeRatio || Math.abs(vx) > minSwipeSpeed;
        currentIndex.current += shouldSwipe ? Math.sign(position) : 0;
        animate(currentIndex.current);
        onChange(currentIndex.current);
    }, [
        animate,
        containerWidth,
        currentIndex,
        minSwipeRatio,
        minSwipeSpeed,
        onChange,
    ]);
    const panResponder = React.useMemo(() => PanResponder.create({
        onPanResponderGrant: (_, { vx }) => {
            onSwipeStart(vx > 0 ? 'left' : 'right');
        },
        onMoveShouldSetPanResponder: (_, { dx, dy, vx, vy }) => {
            const panXInt = Math.floor(currentIndex.current);
            return (!((dx > 0 && panXInt <= 0) ||
                (dx < 0 && panXInt >= childCount - 1)) &&
                Math.abs(dx) > Math.abs(dy) * 2 &&
                Math.abs(vx) > Math.abs(vy) * 2.5);
        },
        onPanResponderMove: (_, { dx }) => {
            const position = dx / -containerWidth;
            translateX.current.setValue(Math.floor(currentIndex.current) + position);
        },
        onPanResponderRelease: releaseResponder,
        onPanResponderTerminate: releaseResponder,
    }), [
        childCount,
        containerWidth,
        onSwipeStart,
        releaseResponder,
        translateX,
        currentIndex,
    ]);
    React.useEffect(() => {
        if (Number.isInteger(activeIndex) && activeIndex !== currentIndex.current) {
            animate(activeIndex);
            currentIndex.current = activeIndex;
        }
    }, [animate, activeIndex, currentIndex]);
    return (React.createElement(View, { style: [styles.container, containerStyle], onLayout: ({ nativeEvent: { layout } }) => {
            setContainerWidth(layout.width);
        } },
        React.createElement(Animated.View, Object.assign({ testID: "RNE__TabView", style: StyleSheet.flatten([
                StyleSheet.absoluteFillObject,
                styles.container,
                {
                    width: containerWidth * childCount,
                    transform: [
                        {
                            translateX: disableTransition
                                ? -activeIndex * containerWidth
                                : translateX.current.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -containerWidth],
                                }),
                        },
                    ],
                },
            ]) }, (!disableSwipe && panResponder.panHandlers)), React.Children.toArray(children).map((child, index) => (React.createElement(View, { key: index, style: StyleSheet.flatten([
                styles.container,
                tabItemContainerStyle,
                { width: containerWidth },
            ]) }, child))))));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
});
TabViewBase.displayName = 'TabView';
