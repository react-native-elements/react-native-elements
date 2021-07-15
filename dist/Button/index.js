"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const config_1 = require("../config");
const Button_1 = require("./Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
exports.default = config_1.withTheme(Button_1.Button, 'Button');
