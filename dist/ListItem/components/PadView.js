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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PadView = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const PadView = (_a) => {
    var { children, pad, Component } = _a, props = __rest(_a, ["children", "pad", "Component"]);
    const _root = react_1.useRef(null);
    const childrens = react_1.default.Children.toArray(children);
    const { length } = childrens;
    const Container = Component || react_native_1.View;
    return (<Container {...props} ref={_root} testID="padView">
      {react_1.default.Children.map(childrens, (child, index) => child && [
        child,
        index !== length - 1 && <react_native_1.View style={{ paddingLeft: pad }}/>,
    ])}
    </Container>);
};
exports.PadView = PadView;
