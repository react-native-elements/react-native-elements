"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
const Divider_1 = require("./Divider");
Object.defineProperty(exports, "Divider", { enumerable: true, get: function () { return Divider_1.Divider; } });
const config_1 = require("../config");
exports.default = config_1.withTheme(Divider_1.Divider, 'Divider');
