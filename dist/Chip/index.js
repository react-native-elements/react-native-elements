"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chip = void 0;
const Chip_1 = require("./Chip");
Object.defineProperty(exports, "Chip", { enumerable: true, get: function () { return Chip_1.Chip; } });
const config_1 = require("../config");
exports.default = config_1.withTheme(Chip_1.Chip, 'Chip');
