"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Button = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const color_1 = __importDefault(require("color"));
const helpers_1 = require("../helpers");
const Icon_1 = __importDefault(require("../Icon"));
const defaultLoadingProps = (type, theme) => {
    var _a;
    return ({
        color: type === 'solid' ? 'white' : (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.primary,
        size: 'small',
    });
};
/** Buttons are touchable elements used to interact with the screen and to perform and operation.
 * They may display text, icons, or both. Buttons can be styled with several props to look a specific way.
 * Also receives all [TouchableNativeFeedback](http://reactnative.dev/docs/touchablenativefeedback.html#props) (Android) or [TouchableOpacity](http://reactnative.dev/docs/touchableopacity.html#props) (iOS) props. */
const Button = (_a) => {
    var _b, _c, _d, _e, _f, _g, _h;
    var { TouchableComponent, containerStyle, onPress = () => console.log('Please attach a method to this component'), buttonStyle, type = 'solid', loading = false, loadingStyle, loadingProps: passedLoadingProps, title = '', titleProps, titleStyle: passedTitleStyle, icon, iconContainerStyle, iconRight = false, disabled = false, disabledStyle, disabledTitleStyle, raised = false, linearGradientProps, ViewComponent = react_native_1.View, theme, iconPosition = 'left' } = _a, attributes = __rest(_a, ["TouchableComponent", "containerStyle", "onPress", "buttonStyle", "type", "loading", "loadingStyle", "loadingProps", "title", "titleProps", "titleStyle", "icon", "iconContainerStyle", "iconRight", "disabled", "disabledStyle", "disabledTitleStyle", "raised", "linearGradientProps", "ViewComponent", "theme", "iconPosition"]);
    react_1.useEffect(() => {
        if (linearGradientProps && !ViewComponent) {
            console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
        }
    });
    const handleOnPress = react_1.useCallback((evt) => {
        if (!loading) {
            onPress(evt);
        }
    }, [loading, onPress]);
    // Refactor to Pressable
    const TouchableComponentInternal = TouchableComponent ||
        react_native_1.Platform.select({
            android: linearGradientProps ? react_native_1.TouchableOpacity : react_native_1.TouchableNativeFeedback,
            default: react_native_1.TouchableOpacity,
        });
    const titleStyle = react_native_1.StyleSheet.flatten([
        {
            color: type === 'solid' ? 'white' : (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary,
        },
        styles.title,
        passedTitleStyle,
        disabled && {
            color: helpers_1.color((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.disabled).darken(0.3).string(),
        },
        disabled && disabledTitleStyle,
    ]);
    const background = react_native_1.Platform.OS === 'android' && react_native_1.Platform.Version >= 21
        ? react_native_1.TouchableNativeFeedback.Ripple(color_1.default((_d = titleStyle === null || titleStyle === void 0 ? void 0 : titleStyle.color) === null || _d === void 0 ? void 0 : _d.toString()).alpha(0.32).rgb().string(), true)
        : undefined;
    const loadingProps = Object.assign(Object.assign({}, defaultLoadingProps(type, theme)), passedLoadingProps);
    const accessibilityState = {
        disabled: !!disabled,
        busy: !!loading,
    };
    const positionStyle = {
        top: 'column',
        bottom: 'column-reverse',
        left: 'row',
        right: 'row-reverse',
    };
    return (<react_native_1.View style={[
        styles.container,
        {
            borderRadius: 3 || styles.container.borderRadius,
        },
        containerStyle,
        raised && !disabled && type !== 'clear' && styles.raised,
    ]}>
      <TouchableComponentInternal onPress={handleOnPress} delayPressIn={0} activeOpacity={0.3} accessibilityRole="button" accessibilityState={accessibilityState} disabled={disabled} background={background} {...attributes}>
        <ViewComponent {...linearGradientProps} style={react_native_1.StyleSheet.flatten([
        styles.button,
        styles.buttonOrientation,
        {
            flexDirection: positionStyle[iconRight ? 'right' : iconPosition] || 'row',
        },
        {
            backgroundColor: type === 'solid' ? (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.primary : 'transparent',
            borderColor: (_f = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _f === void 0 ? void 0 : _f.primary,
            borderWidth: type === 'outline' ? react_native_1.StyleSheet.hairlineWidth : 0,
        },
        buttonStyle,
        disabled &&
            type === 'solid' && {
            backgroundColor: (_g = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _g === void 0 ? void 0 : _g.disabled,
        },
        disabled &&
            type === 'outline' && {
            borderColor: helpers_1.color((_h = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _h === void 0 ? void 0 : _h.disabled)
                .darken(0.3)
                .string(),
        },
        disabled && disabledStyle,
    ])}>
          {loading && (<react_native_1.ActivityIndicator style={react_native_1.StyleSheet.flatten([styles.loading, loadingStyle])} color={loadingProps.color} size={loadingProps.size} {...loadingProps}/>)}
          {!loading &&
        icon &&
        helpers_1.renderNode(Icon_1.default, icon, {
            containerStyle: react_native_1.StyleSheet.flatten([
                styles.iconContainer,
                iconContainerStyle,
            ]),
        })}

          {!loading &&
        !!title &&
        helpers_1.renderNode(react_native_1.Text, title, Object.assign({ style: titleStyle }, titleProps))}
        </ViewComponent>
      </TouchableComponentInternal>
    </react_native_1.View>);
};
exports.Button = Button;
const styles = react_native_1.StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        padding: 8,
    },
    buttonOrientation: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        padding: 8,
    },
    container: {
        overflow: 'hidden',
        borderRadius: 3,
    },
    title: Object.assign({ fontSize: 16, textAlign: 'center', paddingVertical: 1 }, react_native_1.Platform.select({
        android: {
            fontFamily: 'sans-serif-medium',
        },
        default: {
            fontSize: 18,
        },
    })),
    iconContainer: {
        marginHorizontal: 5,
    },
    raised: Object.assign({ backgroundColor: '#fff', overflow: 'visible' }, react_native_1.Platform.select({
        android: {
            elevation: 4,
        },
        default: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
    })),
    loading: {
        marginVertical: 2,
    },
});
exports.Button.displayName = 'Button';
