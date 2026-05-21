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
import { PanResponder, Animated, View, StyleSheet, } from 'react-native';
import { ListItemBase } from './ListItem';
import { ScreenWidth } from '../helpers';
export const ListItemSwipeable = (_a) => {
    var { children, leftStyle, rightStyle, leftContent, rightContent, leftWidth = ScreenWidth / 3, rightWidth = ScreenWidth / 3, minSlideWidth = ScreenWidth / 3, onSwipeBegin, onSwipeEnd, animation = { type: 'spring', duration: 200 } } = _a, rest = __rest(_a, ["children", "leftStyle", "rightStyle", "leftContent", "rightContent", "leftWidth", "rightWidth", "minSlideWidth", "onSwipeBegin", "onSwipeEnd", "animation"]);
    const translateX = React.useRef(new Animated.Value(0));
    const panX = React.useRef(0);
    const slideAnimation = React.useCallback((toValue) => {
        panX.current = toValue;
        Animated[animation.type || 'spring'](translateX.current, {
            toValue,
            useNativeDriver: true,
            duration: animation.duration || 200,
        }).start();
    }, [animation.duration, animation.type]);
    const resetCallBack = React.useCallback(() => {
        slideAnimation(0);
    }, [slideAnimation]);
    const onMove = React.useCallback((_, { dx }) => {
        translateX.current.setValue(panX.current + dx);
    }, []);
    const onRelease = React.useCallback((_, { dx }) => {
        if (Math.abs(panX.current + dx) >= minSlideWidth) {
            slideAnimation(panX.current + dx > 0 ? leftWidth : -rightWidth);
        }
        else {
            slideAnimation(0);
        }
    }, [leftWidth, rightWidth, slideAnimation, minSlideWidth]);
    const shouldSlide = React.useCallback((_, { dx, dy, vx, vy }) => {
        if (dx > 0 && !leftContent && !panX.current) {
            return false;
        }
        if (dx < 0 && !rightContent && !panX.current) {
            return false;
        }
        return (Math.abs(dx) > Math.abs(dy) * 2 && Math.abs(vx) > Math.abs(vy) * 2.5);
    }, [leftContent, rightContent]);
    const _panResponder = React.useMemo(() => PanResponder.create({
        onMoveShouldSetPanResponder: shouldSlide,
        onPanResponderGrant: (_event, { vx }) => {
            onSwipeBegin === null || onSwipeBegin === void 0 ? void 0 : onSwipeBegin(vx > 0 ? 'left' : 'right');
        },
        onPanResponderMove: onMove,
        onPanResponderRelease: onRelease,
        onPanResponderReject: onRelease,
        onPanResponderTerminate: onRelease,
        onPanResponderEnd: () => {
            onSwipeEnd === null || onSwipeEnd === void 0 ? void 0 : onSwipeEnd();
        },
    }), [onMove, onRelease, onSwipeBegin, onSwipeEnd, shouldSlide]);
    return (React.createElement(View, { style: styles.container },
        React.createElement(View, { style: styles.actions },
            React.createElement(View, { style: [
                    {
                        width: leftWidth,
                        zIndex: 1,
                    },
                    leftStyle,
                ] }, typeof leftContent === 'function'
                ? leftContent(resetCallBack)
                : leftContent),
            React.createElement(View, { style: styles.empty }),
            React.createElement(View, { style: [
                    {
                        width: rightWidth,
                        zIndex: 1,
                    },
                    rightStyle,
                ] }, typeof rightContent === 'function'
                ? rightContent(resetCallBack)
                : rightContent)),
        React.createElement(Animated.View, Object.assign({ style: {
                transform: [
                    {
                        translateX: translateX.current,
                    },
                ],
            } }, _panResponder.panHandlers),
            React.createElement(ListItemBase, Object.assign({}, rest), children))));
};
const styles = StyleSheet.create({
    actions: {
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        justifyContent: 'center',
    },
    empty: {
        flex: 0,
    },
});
ListItemSwipeable.displayName = 'ListItem.Swipeable';
