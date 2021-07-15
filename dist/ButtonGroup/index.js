"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
const config_1 = require("../config");
const ButtonGroup_1 = require("./ButtonGroup");
Object.defineProperty(exports, "ButtonGroup", { enumerable: true, get: function () { return ButtonGroup_1.ButtonGroup; } });
exports.default = config_1.withTheme(ButtonGroup_1.ButtonGroup, 'ButtonGroup');
