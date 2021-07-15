"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBox = void 0;
const config_1 = require("../config");
const CheckBox_1 = require("./CheckBox");
Object.defineProperty(exports, "CheckBox", { enumerable: true, get: function () { return CheckBox_1.CheckBox; } });
exports.default = config_1.withTheme(CheckBox_1.CheckBox, 'Checkbox');
