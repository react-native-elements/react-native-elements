"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAB = void 0;
const config_1 = require("../config");
const FAB_1 = require("./FAB");
Object.defineProperty(exports, "FAB", { enumerable: true, get: function () { return FAB_1.FAB; } });
exports.default = config_1.withTheme(FAB_1.FAB, 'FAB');
