"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearProgress = void 0;
const config_1 = require("../config");
const LinearProgress_1 = require("./LinearProgress");
Object.defineProperty(exports, "LinearProgress", { enumerable: true, get: function () { return LinearProgress_1.LinearProgress; } });
exports.default = config_1.withTheme(LinearProgress_1.LinearProgress, 'LinearProgress');
