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
exports.ListItemSwipeable = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ListItem_1 = require("./ListItem");
const helpers_1 = require("../helpers");
/** We offer a special kind of ListItem which is swipeable from both ends and allows users select an event. */
const ListItemSwipeable = (_a) => {
    var { children, leftStyle, rightStyle, leftContent, rightContent, leftWidth = helpers_1.ScreenWidth / 3, rightWidth = helpers_1.ScreenWidth / 3, onLeftSwipe, onRightSwipe } = _a, props = __rest(_a, ["children", "leftStyle", "rightStyle", "leftContent", "rightContent", "leftWidth", "rightWidth", "onLeftSwipe", "onRightSwipe"]);
    const { current: panX } = react_1.default.useRef(new react_native_1.Animated.Value(0));
    const currValue = react_1.default.useRef(0);
    const prevValue = react_1.default.useRef(0);
    react_1.default.useEffect(() => {
        let subs = panX.addListener(({ value }) => {
            currValue.current = value;
        });
        return () => {
            panX.removeListener(subs);
        };
    }, [panX]);
    const slideAnimation = react_1.default.useCallback((toValue) => {
        react_native_1.Animated.spring(panX, {
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
        if (Math.abs(newDX) > helpers_1.ScreenWidth / 2) {
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
        if (Math.abs(currValue.current) >= helpers_1.ScreenWidth / 3) {
            slideAnimation(currValue.current > 0 ? rightWidth : -leftWidth);
        }
        else {
            slideAnimation(0);
        }
    };
    const { current: _panResponder } = react_1.default.useRef(react_native_1.PanResponder.create({
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: () => false,
        onPanResponderMove,
        onPanResponderRelease,
    }));
    return (<react_native_1.View style={{
        justifyContent: 'center',
    }}>
      <react_native_1.View style={[
        styles.hidden,
        {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    ]}>
        <react_native_1.View style={[
        {
            width: leftWidth,
            zIndex: 1,
        },
        leftStyle,
    ]}>
          {leftContent}
        </react_native_1.View>
        <react_native_1.View style={{ flex: 0 }}/>
        <react_native_1.View style={[
        {
            width: rightWidth,
            zIndex: 1,
        },
        rightStyle,
    ]}>
          {rightContent}
        </react_native_1.View>
      </react_native_1.View>
      <react_native_1.Animated.View style={{
        transform: [
            {
                translateX: panX,
            },
        ],
        zIndex: 2,
    }} {..._panResponder.panHandlers}>
        <ListItem_1.ListItemBase {...props}>{children}</ListItem_1.ListItemBase>
      </react_native_1.Animated.View>
    </react_native_1.View>);
};
exports.ListItemSwipeable = ListItemSwipeable;
const styles = react_native_1.StyleSheet.create({
    hidden: {
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: 0,
    },
});
exports.ListItemSwipeable.displayName = 'ListItem.Swipeable';
