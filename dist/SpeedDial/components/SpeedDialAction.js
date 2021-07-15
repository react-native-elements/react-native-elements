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
exports.SpeedDialAction = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const config_1 = require("../../config");
const index_1 = require("../../FAB/index");
exports.SpeedDialAction = config_1.withTheme((_a) => {
    var { title, titleStyle } = _a, actionProps = __rest(_a, ["title", "titleStyle"]);
    return (<react_native_1.View style={styles.action}>
        {title && <react_native_1.Text style={[styles.title, titleStyle]}>{title}</react_native_1.Text>}
        <index_1.FAB {...actionProps} size="small" style={[actionProps.style]}/>
      </react_native_1.View>);
}, 'SpeedDialAction');
const styles = react_native_1.StyleSheet.create({
    title: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2,
    },
    action: {
        marginBottom: 16,
        marginRight: 24,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
