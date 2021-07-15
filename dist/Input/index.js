"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const config_1 = require("../config");
const Input_1 = require("./Input");
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return Input_1.Input; } });
exports.default = config_1.withTheme(Input_1.Input, 'Input');
