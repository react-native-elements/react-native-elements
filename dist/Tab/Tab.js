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
exports.TabBase = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
/** Tabs organize content across different screens, data sets, and other interactions. */
const TabBase = (_a) => {
    var _b, _c;
    var { theme, children, value, onChange = () => { }, indicatorStyle, disableIndicator, variant } = _a, props = __rest(_a, ["theme", "children", "value", "onChange", "indicatorStyle", "disableIndicator", "variant"]);
    const [dim, setDim] = react_1.default.useState({ width: 0 });
    const { current: animation } = react_1.default.useRef(new react_native_1.Animated.Value(0));
    react_1.default.useEffect(() => {
        react_native_1.Animated.timing(animation, {
            toValue: value,
            useNativeDriver: true,
            duration: 170,
        }).start();
    }, [animation, value]);
    const WIDTH = dim.width / react_1.default.Children.count(children);
    return (<>
      <react_native_1.View {...props} accessibilityRole="tablist" style={[
        styles.viewStyle,
        variant === 'primary' && {
            backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary,
        },
    ]} onLayout={({ nativeEvent: { layout } }) => setDim(Object(layout))}>
        {react_1.default.Children.map(children, (child, index) => {
        return react_1.default.cloneElement(child, {
            onPress: () => onChange(index),
            active: index === value,
            variant,
        });
    })}
        {!disableIndicator && (<react_native_1.Animated.View style={[
        styles.indicator,
        {
            backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.secondary,
            transform: [
                {
                    translateX: animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, WIDTH],
                    }),
                },
            ],
        },
        indicatorStyle,
    ]}>
            <react_native_1.View style={{ width: WIDTH }}/>
          </react_native_1.Animated.View>)}
      </react_native_1.View>
    </>);
};
exports.TabBase = TabBase;
const styles = react_native_1.StyleSheet.create({
    buttonStyle: {
        borderRadius: 0,
        backgroundColor: 'transparent',
    },
    titleStyle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        textTransform: 'uppercase',
    },
    containerStyle: {
        flex: 1,
        borderRadius: 0,
    },
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
exports.TabBase.displayName = 'Tab';
