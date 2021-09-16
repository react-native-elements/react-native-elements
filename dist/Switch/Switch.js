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
import { Switch as NativeSwitch, Platform, } from 'react-native';
/**
 * Switch represents user's decision of a process and indicates whether a state is on/off.
 * Switch is a controlled component that requires an `onValueChange` to update the `value` prop.
 * This renders a `boolean` value. React native elements provide you with additional `theme` and `color` support in the Switch Button.
 * This component inherits [all native Switch props that come with a standard React Native Switch element](https://reactnative.dev/docs/switch.html).
 */
export const Switch = (_a) => {
    var _b, _c, _d;
    var { value = false, disabled = false, onValueChange, color = 'primary', style, theme } = _a, rest = __rest(_a, ["value", "disabled", "onValueChange", "color", "style", "theme"]);
    // switchedOnColor deals with picking up a color provided as props by user or picks up default theme
    const switchedOnColor = color === 'primary'
        ? ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary)
            ? theme.colors.primary
            : ''
        : color;
    const onTintColor = Platform.OS === 'ios' || !disabled
        ? switchedOnColor
        : ((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.disabled)
            ? theme.colors.disabled
            : '';
    const thumbTintColor = Platform.OS === 'ios'
        ? undefined
        : disabled || !value
            ? (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.disabled
            : switchedOnColor;
    const props = Platform.OS === 'web'
        ? {
            activeTrackColor: onTintColor,
            thumbColor: thumbTintColor,
            activeThumbColor: switchedOnColor,
        }
        : {
            thumbColor: thumbTintColor,
            trackColor: {
                true: onTintColor,
                false: '',
            },
        };
    return (<NativeSwitch testID="RNE__SWITCH" value={value} accessibilityState={{
            checked: value,
            disabled,
        }} disabled={disabled} onValueChange={disabled ? undefined : onValueChange} style={style} {...props} {...rest}/>);
};
Switch.displayName = 'Switch';
