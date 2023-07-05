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
import React, { forwardRef, useImperativeHandle } from 'react';
import { Animated, Easing, ScrollView, StyleSheet, View, } from 'react-native';
import { defaultTheme } from '../helpers';
const TabContext = React.createContext({});
export const Tabs = forwardRef(({ children, animationType = 'spring', animationConfig = {} }, ref) => {
    const translateX = React.useRef(new Animated.Value(0));
    const currentIndex = React.useRef(0);
    const onIndexChangeRef = React.useRef((value) => value);
    useImperativeHandle(ref, () => ({
        changeIndex: (toValue) => {
            animate(toValue);
        },
    }));
    const animate = React.useCallback((toValue, onDone = () => { }) => {
        var _a;
        currentIndex.current = toValue;
        (_a = onIndexChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onIndexChangeRef, toValue);
        Animated[animationType](translateX.current, Object.assign({ toValue, useNativeDriver: true, easing: Easing.inOut(Easing.ease), duration: 150 }, animationConfig)).start();
        onDone === null || onDone === void 0 ? void 0 : onDone(toValue);
    }, [animationConfig, animationType]);
    return (React.createElement(TabContext.Provider, { value: {
            changeIndex: animate,
            __translateX: translateX,
            __currentIndex: currentIndex,
            __onIndexChangeRef: onIndexChangeRef,
        } }, children));
});
export const useTabsInternal = () => React.useContext(TabContext);
export const TabBase = (_a) => {
    var _b, _c, _d;
    var { theme = defaultTheme, children, value = 0, scrollable = false, onChange = () => { }, indicatorStyle, disableIndicator, variant = 'primary', style, dense, iconPosition, buttonStyle, titleStyle, containerStyle, defaultActive = 0 } = _a, rest = __rest(_a, ["theme", "children", "value", "scrollable", "onChange", "indicatorStyle", "disableIndicator", "variant", "style", "dense", "iconPosition", "buttonStyle", "titleStyle", "containerStyle", "defaultActive"]);
    const { changeIndex: animate, __translateX: translateX, __currentIndex: currentIndex, __onIndexChangeRef, } = useTabsInternal();
    const scrollViewRef = React.useRef(null);
    const scrollViewPosition = React.useRef(0);
    const validChildren = React.useMemo(() => React.Children.toArray(children), [children]);
    React.useEffect(() => {
        if (__onIndexChangeRef) {
            __onIndexChangeRef.current = (value) => {
                scrollHandler(value);
                setActiveIndex(value);
            };
        }
    }, [__onIndexChangeRef, scrollHandler]);
    const tabItemPositions = React.useRef([]);
    const [tabContainerWidth, setTabContainerWidth] = React.useState(0);
    const scrollHandler = React.useCallback((currValue) => {
        var _a;
        if (tabItemPositions.current.length > currValue) {
            let itemStartPosition = currValue === 0
                ? 0
                : tabItemPositions.current[currValue - 1].position;
            let itemEndPosition = tabItemPositions.current[currValue].position;
            const scrollCurrentPosition = scrollViewPosition.current;
            const tabContainerCurrentWidth = tabContainerWidth;
            let scrollX = scrollCurrentPosition;
            if (itemStartPosition < scrollCurrentPosition) {
                scrollX += itemStartPosition - scrollCurrentPosition;
            }
            else if (scrollCurrentPosition + tabContainerCurrentWidth <
                itemEndPosition) {
                scrollX +=
                    itemEndPosition -
                        (scrollCurrentPosition + tabContainerCurrentWidth);
            }
            (_a = scrollViewRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                x: scrollX,
                y: 0,
                animated: true,
            });
        }
    }, [tabContainerWidth]);
    const onScrollHandler = React.useCallback((event) => {
        scrollViewPosition.current = event.nativeEvent.contentOffset.x;
    }, []);
    const indicatorWidth = (_b = tabItemPositions.current[defaultActive]) === null || _b === void 0 ? void 0 : _b.width;
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
        }, tabItemPositions.current[defaultActive]);
        return translateX.current.interpolate({
            inputRange,
            outputRange,
            extrapolate: 'extend',
        });
    };
    const [activeIndex, setActiveIndex] = React.useState(currentIndex.current);
    return (React.createElement(View, Object.assign({}, rest, { accessibilityRole: "tablist", style: [
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
            validChildren.map((child, index) => (React.createElement(View, { key: index, style: {
                    flex: 1,
                    flexDirection: 'column',
                }, onLayout: ({ nativeEvent: { layout } }) => {
                    tabItemPositions.current[index] = {
                        position: layout.x,
                        width: layout.width,
                    };
                } }, React.cloneElement(child, {
                onPress: () => {
                    animate(index, setActiveIndex);
                    onChange === null || onChange === void 0 ? void 0 : onChange(index);
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
            })))),
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
