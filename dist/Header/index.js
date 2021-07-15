"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const config_1 = require("../config");
const Header_1 = require("./Header");
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return Header_1.Header; } });
exports.default = config_1.withTheme(Header_1.Header, 'Header');
