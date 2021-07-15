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
exports.color = exports.isIOS = exports.ScreenHeight = exports.ScreenWidth = exports.normalizeText = exports.getIconType = exports.renderNode = exports.patchWebProps = void 0;
const react_native_1 = require("react-native");
const color_1 = __importDefault(require("color"));
exports.color = color_1.default;
const renderNode_1 = __importDefault(require("./renderNode"));
exports.renderNode = renderNode_1.default;
const getIconType_1 = __importDefault(require("./getIconType"));
exports.getIconType = getIconType_1.default;
const normalizeText_1 = __importDefault(require("./normalizeText"));
exports.normalizeText = normalizeText_1.default;
const Screen = react_native_1.Dimensions.get('window');
const ScreenWidth = Screen.width;
exports.ScreenWidth = ScreenWidth;
const ScreenHeight = Screen.height;
exports.ScreenHeight = ScreenHeight;
const isIOS = react_native_1.Platform.OS === 'ios';
exports.isIOS = isIOS;
const patchWebProps = (_a) => {
    var { updateTheme, replaceTheme, onClear } = _a, rest = __rest(_a, ["updateTheme", "replaceTheme", "onClear"]);
    return rest;
};
exports.patchWebProps = patchWebProps;
