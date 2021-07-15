"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const Text_1 = require("./Text");
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return Text_1.Text; } });
const config_1 = require("../config");
exports.default = config_1.withTheme(Text_1.Text, 'Text');
