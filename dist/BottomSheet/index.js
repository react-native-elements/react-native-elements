"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomSheet = void 0;
const BottomSheet_1 = require("./BottomSheet");
Object.defineProperty(exports, "BottomSheet", { enumerable: true, get: function () { return BottomSheet_1.BottomSheet; } });
const config_1 = require("../config");
exports.default = config_1.withTheme(BottomSheet_1.BottomSheet, 'BottomSheet');
