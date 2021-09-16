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
/** We offer a special kind of ListItem which is swipeable from both ends and allows users select an event. */
export const ListItemSwipeable = (_a) => {
    var { children, leftStyle, rightStyle, leftContent, rightContent, leftWidth = ScreenWidth / 3, rightWidth = ScreenWidth / 3, onLeftSwipe, onRightSwipe } = _a, rest = __rest(_a, ["children", "leftStyle", "rightStyle", "leftContent", "rightContent", "leftWidth", "rightWidth", "onLeftSwipe", "onRightSwipe"]);
    const { current: panX } = React.useRef(new Animated.Value(0));
    const currValue = React.useRef(0);
    const prevValue = React.useRef(0);
    React.useEffect(() => {
        let subs = panX.addListener(({ value }) => {
            currValue.current = value;
        });
        return () => {
            panX.removeListener(subs);
        };
    }, [panX]);
    const slideAnimation = React.useCallback((toValue) => {
        Animated.spring(panX, {
            toValue,
            useNativeDriver: true,
        }).start();
        prevValue.current = toValue;
    }, [panX]);
    const onPanResponderMove = (_, { dx }) => {
        if (!prevValue.current) {
            prevValue.current = currValue.current;
        }
        let newDX = prevValue.current + dx;
        if (Math.abs(newDX) > ScreenWidth / 2) {
            return;
        }
        panX.setValue(newDX);
    };
    const onPanResponderRelease = (_, { dx }) => {
        prevValue.current = currValue.current;
        if (Math.sign(dx) > 0) {
            onLeftSwipe === null || onLeftSwipe === void 0 ? void 0 : onLeftSwipe();
        }
        else if (Math.sign(dx) < 0) {
            onRightSwipe === null || onRightSwipe === void 0 ? void 0 : onRightSwipe();
        }
        if ((Math.sign(dx) > 0 && !leftContent) ||
            (Math.sign(dx) < 0 && !rightContent)) {
            return slideAnimation(0);
        }
        if (Math.abs(currValue.current) >= ScreenWidth / 3) {
            slideAnimation(currValue.current > 0 ? rightWidth : -leftWidth);
        }
        else {
            slideAnimation(0);
        }
    };
    const { current: _panResponder } = React.useRef(PanResponder.create({
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: () => false,
        onPanResponderMove,
        onPanResponderRelease,
    }));
    return (<View style={{
            justifyContent: 'center',
        }}>
        <View style={[
            styles.hidden,
            {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            },
        ]}>
          <View style={[
            {
                width: leftWidth,
                zIndex: 1,
            },
            leftStyle,
        ]}>
            {leftContent}
          </View>
          <View style={{ flex: 0 }}/>
          <View style={[
            {
                width: rightWidth,
                zIndex: 1,
            },
            rightStyle,
        ]}>
            {rightContent}
          </View>
        </View>
        <Animated.View style={{
            transform: [
                {
                    translateX: panX,
                },
            ],
            zIndex: 2,
        }} {..._panResponder.panHandlers}>
          <ListItemBase {...rest}>{children}</ListItemBase>
        </Animated.View>
      </View>);
};
const styles = StyleSheet.create({
    hidden: {
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: 0,
    },
});
ListItemSwipeable.displayName = 'ListItem.Swipeable';
