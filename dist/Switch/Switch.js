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
import React, { useMemo } from 'react';
import { Switch as NativeSwitch, Platform, } from 'react-native';
import { defaultTheme } from '../helpers';
export const Switch = (_a) => {
    var _b;
    var { value = false, disabled = false, onValueChange, color = 'primary', style, theme = defaultTheme } = _a, rest = __rest(_a, ["value", "disabled", "onValueChange", "color", "style", "theme"]);
    const switchColor = useMemo(() => (theme === null || theme === void 0 ? void 0 : theme.colors[color]) || color || (theme === null || theme === void 0 ? void 0 : theme.colors.primary), [color, theme === null || theme === void 0 ? void 0 : theme.colors]);
    const trackColor = useMemo(() => Platform.select({
        ios: switchColor,
        default: disabled ? theme === null || theme === void 0 ? void 0 : theme.colors.disabled : switchColor,
    }), [disabled, switchColor, theme === null || theme === void 0 ? void 0 : theme.colors.disabled]);
    const thumbTintColor = useMemo(() => {
        var _a;
        return Platform.select({
            ios: undefined,
            default: disabled ? ((_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.disabled) || '#fff' : switchColor,
        });
    }, [disabled, switchColor, (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.disabled]);
    const props = useMemo(() => {
        var _a;
        return Platform.select({
            web: {
                activeTrackColor: trackColor,
                activeThumbColor: switchColor,
            },
            default: {
                trackColor: {
                    true: trackColor,
                    false: disabled ? (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.disabled : '',
                },
            },
        });
    }, [trackColor, switchColor, disabled, theme.colors.disabled]);
    return (React.createElement(NativeSwitch, Object.assign({ testID: "RNE__SWITCH", value: value, accessibilityState: {
            checked: value,
            disabled,
        }, disabled: disabled, thumbColor: thumbTintColor, onValueChange: disabled ? undefined : onValueChange, style: style }, props, rest)));
};
Switch.displayName = 'Switch';
