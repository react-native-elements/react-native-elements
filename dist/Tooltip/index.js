"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const config_1 = require("../config");
const Tooltip_1 = require("./Tooltip");
Object.defineProperty(exports, "Tooltip", { enumerable: true, get: function () { return Tooltip_1.Tooltip; } });
exports.default = config_1.withTheme(Tooltip_1.Tooltip, 'Tooltip');
