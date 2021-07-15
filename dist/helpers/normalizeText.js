"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_size_matters_1 = require("react-native-size-matters");
function normalize(number, factor = 0.25) {
    return react_native_size_matters_1.moderateScale(number, factor);
}
exports.default = normalize;
