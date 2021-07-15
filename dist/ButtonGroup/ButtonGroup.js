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
exports.ButtonGroup = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../helpers");
const Text_1 = __importDefault(require("../Text"));
/** ButtonGroup is a linear set of segments, each of which function as a button that can display a different view/or perform a different action.
 * Use a ButtonGroup to offer choices that are closely related but mutually exclusive.
 * This component inherits [all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements](https://reactnative.dev/docs/touchablehighlight.html). */
const ButtonGroup = (_a) => {
    var _b;
    var { Component = react_native_1.Platform.select({
        android: react_native_1.TouchableNativeFeedback,
        default: react_native_1.TouchableOpacity,
    }), buttons, onPress = () => null, selectedIndex = null, selectedIndexes = [], selectMultiple = false, containerStyle, innerBorderStyle, buttonStyle, buttonContainerStyle, textStyle, selectedTextStyle, selectedButtonStyle, activeOpacity, onHideUnderlay, onShowUnderlay, setOpacityTo, disabled = false, disabledStyle, disabledTextStyle, disabledSelectedStyle, disabledSelectedTextStyle, vertical = false, theme, underlayColor = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary } = _a, rest = __rest(_a, ["Component", "buttons", "onPress", "selectedIndex", "selectedIndexes", "selectMultiple", "containerStyle", "innerBorderStyle", "buttonStyle", "buttonContainerStyle", "textStyle", "selectedTextStyle", "selectedButtonStyle", "activeOpacity", "onHideUnderlay", "onShowUnderlay", "setOpacityTo", "disabled", "disabledStyle", "disabledTextStyle", "disabledSelectedStyle", "disabledSelectedTextStyle", "vertical", "theme", "underlayColor"]);
    let innerBorderWidth = 1;
    if (innerBorderStyle &&
        Object.prototype.hasOwnProperty.call(innerBorderStyle, 'width')) {
        innerBorderWidth = innerBorderStyle.width;
    }
    return (<react_native_1.View {...rest} style={react_native_1.StyleSheet.flatten([
        styles.container,
        vertical && styles.verticalContainer,
        containerStyle && containerStyle,
    ])}>
      {buttons === null || buttons === void 0 ? void 0 : buttons.map((button, i) => {
        var _a, _b, _c, _d, _e, _f;
        const isSelected = selectedIndex === i || selectedIndexes.includes(i);
        const isDisabled = disabled === true ||
            (Array.isArray(disabled) && disabled.includes(i));
        return (<react_native_1.View key={i} style={react_native_1.StyleSheet.flatten([
            styles.button,
            vertical && styles.verticalComponent,
            i !== buttons.length - 1 &&
                (vertical
                    ? {
                        borderBottomWidth: innerBorderWidth,
                        borderBottomColor: (innerBorderStyle && innerBorderStyle.color) || ((_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey4),
                    }
                    : {
                        borderRightWidth: innerBorderWidth,
                        borderRightColor: (innerBorderStyle && innerBorderStyle.color) || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey4),
                    }),
            buttonContainerStyle,
        ])}>
            <Component testID="buttonGroupItem" activeOpacity={activeOpacity} setOpacityTo={setOpacityTo} onHideUnderlay={onHideUnderlay} onShowUnderlay={onShowUnderlay} underlayColor={underlayColor} disabled={isDisabled} onPress={() => {
            if (selectMultiple) {
                if (selectedIndexes.includes(i)) {
                    onPress(selectedIndexes.filter((index) => index !== i));
                }
                else {
                    onPress([...selectedIndexes, i]);
                }
            }
            else {
                onPress(i);
            }
        }} style={styles.button}>
              <react_native_1.View style={react_native_1.StyleSheet.flatten([
            styles.textContainer,
            buttonStyle && buttonStyle,
            isSelected && {
                backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.primary,
            },
            isSelected && selectedButtonStyle && selectedButtonStyle,
            isDisabled && styles.disabled,
            isDisabled && disabledStyle,
            isDisabled &&
                isSelected && {
                backgroundColor: (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.disabled,
            },
            isDisabled && isSelected && disabledSelectedStyle,
        ])}>
                {button.element ? (<button.element isSelected={isSelected}/>) : (<Text_1.default testID="buttonGroupItemText" style={react_native_1.StyleSheet.flatten([
            Object.assign({ fontSize: helpers_1.normalizeText(13), color: (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.grey2 }, react_native_1.Platform.select({
                android: {},
                default: {
                    fontWeight: '500',
                },
            })),
            textStyle && textStyle,
            isSelected && { color: '#fff' },
            isSelected && selectedTextStyle,
            isDisabled && {
                color: helpers_1.color((_f = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _f === void 0 ? void 0 : _f.disabled)
                    .darken(0.3)
                    .toString(),
            },
            isDisabled && disabledTextStyle,
            isDisabled && isSelected && disabledSelectedTextStyle,
        ])}>
                    {button}
                  </Text_1.default>)}
              </react_native_1.View>
            </Component>
          </react_native_1.View>);
    })}
    </react_native_1.View>);
};
exports.ButtonGroup = ButtonGroup;
const styles = react_native_1.StyleSheet.create({
    button: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: '#e3e3e3',
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: '#fff',
        height: 40,
    },
    verticalContainer: {
        flexDirection: 'column',
        height: null,
    },
    verticalComponent: {
        height: 40,
    },
    disabled: {
        backgroundColor: 'transparent',
    },
});
exports.ButtonGroup.displayName = 'ButtonGroup';
