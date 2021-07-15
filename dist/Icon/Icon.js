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
exports.Icon = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const color_1 = __importDefault(require("color"));
const getIconType_1 = __importDefault(require("../helpers/getIconType"));
const getIconStyle_1 = __importDefault(require("../helpers/getIconStyle"));
/** Icons are visual indicators usually used to describe action or intent.
 * They are also used for displaying information. */
const Icon = (_a) => {
    var _b, _c;
    var { type = 'material', name, size = 24, color: colorProp, iconStyle, iconProps, underlayColor = 'transparent', reverse = false, raised = false, containerStyle, reverseColor: reverseColorProp, disabled = false, disabledStyle, onPress, Component = onPress
        ? react_native_1.Platform.select({
            android: react_native_1.TouchableNativeFeedback,
            default: react_native_1.TouchableHighlight,
        })
        : react_native_1.View, solid = false, brand = false, theme } = _a, attributes = __rest(_a, ["type", "name", "size", "color", "iconStyle", "iconProps", "underlayColor", "reverse", "raised", "containerStyle", "reverseColor", "disabled", "disabledStyle", "onPress", "Component", "solid", "brand", "theme"]);
    const color = colorProp || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.black);
    const reverseColor = reverseColorProp || ((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.white);
    const IconComponent = getIconType_1.default(type);
    const iconSpecificStyle = getIconStyle_1.default(type, { solid, brand });
    const getBackgroundColor = () => {
        var _a;
        if (reverse) {
            return color;
        }
        return raised ? (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.white : 'transparent';
    };
    const buttonStyles = {
        borderRadius: size + 4,
        height: size * 2 + 4,
        width: size * 2 + 4,
    };
    if (react_native_1.Platform.OS === 'android' && !attributes.background) {
        if (react_native_1.Platform.Version >= 21) {
            attributes.background = react_native_1.TouchableNativeFeedback.Ripple(color_1.default(color).alpha(0.2).rgb().string(), true);
        }
    }
    return (<react_native_1.View style={react_native_1.StyleSheet.flatten([
        styles.container,
        (reverse || raised) && styles.button,
        (reverse || raised) && buttonStyles,
        raised && styles.raised,
        iconStyle && iconStyle.borderRadius
            ? {
                borderRadius: iconStyle.borderRadius,
            }
            : {},
        containerStyle && containerStyle,
    ])}>
      <Component {...attributes} {...(onPress && {
        onPress,
        disabled,
        underlayColor: reverse ? color : underlayColor,
        activeOpacity: 0.3,
    })}>
        <react_native_1.View style={react_native_1.StyleSheet.flatten([
        (reverse || raised) && buttonStyles,
        {
            backgroundColor: getBackgroundColor(),
            alignItems: 'center',
            justifyContent: 'center',
        },
        disabled && styles.disabled,
        disabled && disabledStyle,
    ])}>
          <IconComponent testID="iconIcon" style={react_native_1.StyleSheet.flatten([
        { backgroundColor: 'transparent' },
        iconStyle && iconStyle,
    ])} size={size} name={name} color={reverse ? reverseColor : color} {...iconSpecificStyle} {...iconProps}/>
        </react_native_1.View>
      </Component>
    </react_native_1.View>);
};
exports.Icon = Icon;
const styles = react_native_1.StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    button: {
        margin: 7,
    },
    raised: Object.assign({}, react_native_1.Platform.select({
        android: {
            elevation: 2,
        },
        default: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
    })),
    disabled: {
        backgroundColor: '#D1D5D8',
    },
});
exports.Icon.displayName = 'Icon';
