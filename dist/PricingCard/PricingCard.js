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
import { View, Platform, StyleSheet, } from 'react-native';
import { defaultTheme, normalizeText } from '../helpers';
import { fonts } from '../helpers';
import { Text } from '../Text';
import { PricingButton } from './components/PricingButton';
export const PricingCard = (_a) => {
    var _b, _c, _d;
    var { containerStyle, wrapperStyle, title, price, info = [], button, theme = defaultTheme, color = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary, titleStyle, pricingStyle, infoStyle, onButtonPress } = _a, rest = __rest(_a, ["containerStyle", "wrapperStyle", "title", "price", "info", "button", "theme", "color", "titleStyle", "pricingStyle", "infoStyle", "onButtonPress"]);
    return (React.createElement(View, Object.assign({}, rest, { style: StyleSheet.flatten([
            Object.assign({ margin: 15, marginBottom: 15, backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.background, borderWidth: 1, padding: 15, borderColor: (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.grey5 }, Platform.select({
                android: {
                    elevation: 1,
                },
                default: {
                    shadowColor: 'rgba(0,0,0, .2)',
                    shadowOffset: { height: 1, width: 0 },
                    shadowOpacity: 0.5,
                    shadowRadius: 0.5,
                },
            })),
            containerStyle && containerStyle,
        ]) }),
        React.createElement(View, { style: StyleSheet.flatten([
                styles.wrapper,
                wrapperStyle && wrapperStyle,
            ]) },
            React.createElement(Text, { testID: "pricingCardTitle", style: StyleSheet.flatten([
                    styles.pricingTitle,
                    titleStyle,
                    { color },
                ]) }, title),
            React.createElement(Text, { style: StyleSheet.flatten([styles.pricingPrice, pricingStyle]) }, price), info === null || info === void 0 ? void 0 :
            info.map((item) => {
                var _a;
                return (React.createElement(Text, { key: item, style: StyleSheet.flatten([
                        Object.assign({ textAlign: 'center', marginTop: 5, marginBottom: 5, color: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3 }, Platform.select({
                            android: Object.assign({}, fonts.android.bold),
                            default: {
                                fontWeight: '600',
                            },
                        })),
                        infoStyle,
                    ]) }, item));
            }),
            React.isValidElement(button) ? (button) : (React.createElement(PricingButton, Object.assign({ color: color, onButtonPress: onButtonPress }, button))))));
};
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
    },
    pricingTitle: Object.assign({ textAlign: 'center', fontSize: normalizeText(30) }, Platform.select({
        android: Object.assign({}, fonts.android.black),
        default: {
            fontWeight: '800',
        },
    })),
    pricingPrice: Object.assign({ textAlign: 'center', marginTop: 10, marginBottom: 10, fontSize: normalizeText(40) }, Platform.select({
        android: Object.assign({}, fonts.android.bold),
        default: {
            fontWeight: '700',
        },
    })),
});
PricingCard.displayName = 'PricingCard';
