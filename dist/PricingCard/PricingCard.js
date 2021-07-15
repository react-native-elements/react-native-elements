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
exports.PricingCard = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../helpers");
const config_1 = require("../config");
const Text_1 = __importDefault(require("../Text"));
const PricingButton_1 = require("./components/PricingButton");
/** Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way. */
const PricingCard = (_a) => {
    var _b, _c, _d;
    var { containerStyle, wrapperStyle, title, price, info = [], button, theme, color = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary, titleStyle, pricingStyle, infoStyle, onButtonPress } = _a, rest = __rest(_a, ["containerStyle", "wrapperStyle", "title", "price", "info", "button", "theme", "color", "titleStyle", "pricingStyle", "infoStyle", "onButtonPress"]);
    return (<react_native_1.View {...rest} style={react_native_1.StyleSheet.flatten([
        Object.assign({ margin: 15, marginBottom: 15, backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.white, borderWidth: 1, padding: 15, borderColor: (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.grey5 }, react_native_1.Platform.select({
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
    ])}>
      <react_native_1.View style={react_native_1.StyleSheet.flatten([
        styles.wrapper,
        wrapperStyle && wrapperStyle,
    ])}>
        <Text_1.default testID="pricingCardTitle" style={react_native_1.StyleSheet.flatten([
        styles.pricingTitle,
        titleStyle,
        { color },
    ])}>
          {title}
        </Text_1.default>

        <Text_1.default style={react_native_1.StyleSheet.flatten([styles.pricingPrice, pricingStyle])}>
          {price}
        </Text_1.default>

        {info === null || info === void 0 ? void 0 : info.map((item) => {
        var _a;
        return (<Text_1.default key={item} style={react_native_1.StyleSheet.flatten([
            Object.assign({ textAlign: 'center', marginTop: 5, marginBottom: 5, color: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3 }, react_native_1.Platform.select({
                android: Object.assign({}, config_1.fonts.android.bold),
                default: {
                    fontWeight: '600',
                },
            })),
            infoStyle,
        ])}>
            {item}
          </Text_1.default>);
    })}

        {react_1.default.isValidElement(button) ? (button) : (<PricingButton_1.PricingButton color={color} onButtonPress={onButtonPress} {...button}/>)}
      </react_native_1.View>
    </react_native_1.View>);
};
exports.PricingCard = PricingCard;
const styles = react_native_1.StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
    },
    pricingTitle: Object.assign({ textAlign: 'center', fontSize: helpers_1.normalizeText(30) }, react_native_1.Platform.select({
        android: Object.assign({}, config_1.fonts.android.black),
        default: {
            fontWeight: '800',
        },
    })),
    pricingPrice: Object.assign({ textAlign: 'center', marginTop: 10, marginBottom: 10, fontSize: helpers_1.normalizeText(40) }, react_native_1.Platform.select({
        android: Object.assign({}, config_1.fonts.android.bold),
        default: {
            fontWeight: '700',
        },
    })),
});
exports.PricingCard.displayName = 'PricingCard';
