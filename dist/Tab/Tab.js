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
import React, { useEffect } from 'react';
import { Animated, Easing, ScrollView, StyleSheet, View, } from 'react-native';
import { defaultTheme } from '../helpers';
export const TabBase = (_a) => {
    var _b, _c, _d;
    var { theme = defaultTheme, children, scrollable = false, onChange = () => { }, indicatorStyle, disableIndicator, variant = 'primary', style, dense, iconPosition, buttonStyle, titleStyle, containerStyle, value: activeIndex = 0, animationType = 'spring', animationConfig = {} } = _a, rest = __rest(_a, ["theme", "children", "scrollable", "onChange", "indicatorStyle", "disableIndicator", "variant", "style", "dense", "iconPosition", "buttonStyle", "titleStyle", "containerStyle", "value", "animationType", "animationConfig"]);
    const translateX = React.useRef(new Animated.Value(0));
    const currentIndex = React.useRef(0);
    const onIndexChangeRef = React.useRef((value) => value);
    const setIndicatorRerenderKey = React.useState(0)[1];
    const animate = React.useCallback((toValue, onDone = () => { }) => {
        var _a;
        currentIndex.current = toValue;
        (_a = onIndexChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onIndexChangeRef, toValue);
        Animated[animationType](translateX.current, Object.assign({ toValue: toValue, useNativeDriver: true, easing: Easing.inOut(Easing.ease), duration: 150 }, animationConfig)).start(() => {
            onDone === null || onDone === void 0 ? void 0 : onDone(toValue);
        });
    }, [animationConfig, animationType]);
    const scrollViewRef = React.useRef(null);
    const scrollViewPosition = React.useRef(0);
    const validChildren = React.useMemo(() => React.Children.toArray(children), [children]);
    const tabItemPositions = React.useRef([]);
    const [tabContainerWidth, setTabContainerWidth] = React.useState(0);
    const scrollHandler = React.useCallback((currValue) => {
        var _a;
        if (tabItemPositions.current.length > currValue) {
            const tab = tabItemPositions.current[currValue];
            const { position, width } = tab;
            const scrollViewWidth = tabContainerWidth;
            const tabCenter = position + width / 2;
            let scrollX = tabCenter - scrollViewWidth / 2;
            const maxScroll = tabItemPositions.current.reduce((acc, item) => acc + item.width, 0) -
                scrollViewWidth;
            scrollX = Math.max(0, Math.min(scrollX, maxScroll));
            (_a = scrollViewRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                x: currValue === 0 ? 0 : scrollX,
                y: 0,
                animated: true,
            });
        }
    }, [tabContainerWidth]);
    useEffect(() => {
        if (activeIndex !== currentIndex.current &&
            tabContainerWidth > 0 &&
            tabItemPositions.current.length > 0) {
            setIndicatorRerenderKey((prev) => prev + 1);
            animate(activeIndex);
        }
    }, [
        activeIndex,
        animate,
        scrollHandler,
        tabContainerWidth,
        setIndicatorRerenderKey,
    ]);
    React.useEffect(() => {
        if (onIndexChangeRef) {
            onIndexChangeRef.current = (changedIndex) => {
                scrollHandler(changedIndex);
                onChange(changedIndex);
                return changedIndex;
            };
        }
    }, [onIndexChangeRef, scrollHandler, onChange]);
    const onScrollHandler = React.useCallback((event) => {
        scrollViewPosition.current = event.nativeEvent.contentOffset.x;
    }, []);
    const indicatorWidth = (_b = tabItemPositions.current[activeIndex]) === null || _b === void 0 ? void 0 : _b.width;
    const indicatorTranslateX = () => {
        const countItems = validChildren.length;
        if (countItems < 2 || tabItemPositions.current.length !== countItems) {
            return 0;
        }
        const { inputRange, outputRange } = tabItemPositions.current.reduce((prev, curr, index) => {
            prev.inputRange.push(index);
            prev.outputRange.push(curr.position + curr.width / 2 - indicatorWidth / 2);
            return prev;
        }, { inputRange: [], outputRange: [] });
        return translateX.current.interpolate({
            inputRange,
            outputRange,
            extrapolate: 'clamp',
        });
    };
    const indicatorScaleX = () => {
        const countItems = validChildren.length;
        if (countItems < 2 || tabItemPositions.current.length !== countItems) {
            return 0;
        }
        const inputRange = [];
        const outputRange = [];
        tabItemPositions.current.reduce((prev, curr, index) => {
            inputRange.push(index);
            outputRange.push(curr.width / prev.width);
            return prev;
        }, tabItemPositions.current[activeIndex]);
        return translateX.current.interpolate({
            inputRange,
            outputRange,
            extrapolate: 'extend',
        });
    };
    return (React.createElement(View, Object.assign({}, rest, { accessible: true, accessibilityRole: "tablist", style: [
            variant === 'primary' && {
                backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.primary,
            },
            styles.viewStyle,
            style,
        ], onLayout: ({ nativeEvent: { layout } }) => {
            setTabContainerWidth(layout.width);
        } }), React.createElement(scrollable ? ScrollView : React.Fragment, Object.assign(Object.assign({}, (scrollable && {
        horizontal: true,
        ref: scrollViewRef,
        onScroll: onScrollHandler,
        showsHorizontalScrollIndicator: false,
    })), { children: (React.createElement(React.Fragment, null,
            validChildren.map((child, index) => {
                return React.cloneElement(child, {
                    onPress: () => onChange(index),
                    onLayout: (event) => {
                        const { width } = event.nativeEvent.layout;
                        tabItemPositions.current[index] = {
                            position: 0,
                            width,
                        };
                        if (tabItemPositions.current.filter(Boolean).length ===
                            validChildren.length) {
                            let cumulativePosition = 0;
                            for (let i = 0; i < validChildren.length; i++) {
                                const item = tabItemPositions.current[i];
                                if (!item) {
                                    continue;
                                }
                                item.position = cumulativePosition;
                                cumulativePosition += item.width;
                            }
                        }
                    },
                    active: index === activeIndex,
                    variant,
                    _parentProps: {
                        dense,
                        iconPosition,
                        buttonStyle,
                        containerStyle,
                        titleStyle,
                    },
                });
            }),
            !disableIndicator && (React.createElement(Animated.View, { style: [
                    styles.indicator,
                    {
                        backgroundColor: (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.secondary,
                        transform: [
                            { translateX: indicatorTranslateX() },
                            { scaleX: indicatorScaleX() },
                        ],
                        width: indicatorWidth,
                    },
                    indicatorStyle,
                ] })))) }))));
};
const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        position: 'relative',
    },
    indicator: {
        display: 'flex',
        position: 'absolute',
        height: 2,
        bottom: 0,
    },
});
TabBase.displayName = 'Tab';
