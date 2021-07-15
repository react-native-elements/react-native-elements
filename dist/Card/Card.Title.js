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
exports.CardTitle = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const normalizeText_1 = __importDefault(require("../helpers/normalizeText"));
const config_1 = require("../config");
const Text_1 = __importDefault(require("../Text"));
/** Add a general title to the Card.
 * This, Receives all [Text](text.md#props) props. */
const CardTitle = (_a) => {
    var _b;
    var { style, theme } = _a, props = __rest(_a, ["style", "theme"]);
    return (<Text_1.default testID="cardTitle" style={react_native_1.StyleSheet.flatten([
        Object.assign(Object.assign({ fontSize: normalizeText_1.default(14), color: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey1 }, react_native_1.Platform.select({
            android: Object.assign({}, config_1.fonts.android.black),
            default: {
                fontWeight: 'bold',
            },
        })), { textAlign: 'center', marginBottom: 15 }),
        style,
    ])} {...props}/>);
};
exports.CardTitle = CardTitle;
exports.CardTitle.displayName = 'Card.Title';
