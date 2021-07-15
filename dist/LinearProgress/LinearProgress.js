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
exports.LinearProgress = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const color_1 = __importDefault(require("color"));
/** Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.
 * They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen.
 * Also receives all [View](https://reactnative.dev/docs/view#props) props */
const LinearProgress = (_a) => {
    var _b, _c;
    var { value = 0, variant = 'indeterminate', color = 'secondary', style, theme, trackColor } = _a, props = __rest(_a, ["value", "variant", "color", "style", "theme", "trackColor"]);
    const [width, setWidth] = react_1.default.useState(0);
    const { current: animation } = react_1.default.useRef(new react_native_1.Animated.Value(0));
    const intermediate = react_1.default.useRef();
    const startAnimation = react_1.default.useCallback(() => {
        if (variant === 'indeterminate') {
            intermediate.current = react_native_1.Animated.timing(animation, {
                duration: 2000,
                toValue: 1,
                useNativeDriver: true,
                isInteraction: false,
            });
            animation.setValue(0);
            react_native_1.Animated.loop(intermediate.current).start();
        }
        else {
            react_native_1.Animated.timing(animation, {
                duration: 1000,
                toValue: value || 0,
                useNativeDriver: react_native_1.Platform.OS !== 'web',
                isInteraction: false,
            }).start();
        }
    }, [animation, variant, value]);
    const tintColor = color === 'secondary' || color === 'primary'
        ? (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b[color] : color_1.default(color).rgb().string() || ((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.secondary);
    const trackTintColor = trackColor || color_1.default(tintColor).alpha(0.4).rgb().string();
    react_1.default.useEffect(() => {
        startAnimation();
    }, [startAnimation, value]);
    return (<react_native_1.View accessible accessibilityRole="progressbar" accessibilityValue={{
        now: value,
        min: 0,
        max: 1,
    }} {...props} onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
    }} style={[
        {
            height: 4,
            overflow: 'hidden',
            width: '100%',
            backgroundColor: trackTintColor,
        },
        style,
    ]}>
      <react_native_1.Animated.View style={{
        transform: [
            {
                translateX: animation.interpolate(variant === 'indeterminate'
                    ? {
                        inputRange: [0, 1],
                        outputRange: [-width, 0.5 * width],
                    }
                    : {
                        inputRange: [0, 1],
                        outputRange: [-0.5 * width, 0],
                    }),
            },
            {
                scaleX: animation.interpolate(variant === 'indeterminate'
                    ? {
                        inputRange: [0, 0.5, 1],
                        outputRange: [0.0001, 1, 0.001],
                    }
                    : {
                        inputRange: [0, 1],
                        outputRange: [0.0001, 1],
                    }),
            },
        ],
        backgroundColor: tintColor,
        flex: 1,
    }}/>
    </react_native_1.View>);
};
exports.LinearProgress = LinearProgress;
exports.LinearProgress.displayName = 'LinearProgress';
