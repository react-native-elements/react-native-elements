"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const config_1 = require("../config");
const Icon_1 = require("./Icon");
Object.defineProperty(exports, "Icon", { enumerable: true, get: function () { return Icon_1.Icon; } });
exports.default = config_1.withTheme(Icon_1.Icon, 'Icon');
