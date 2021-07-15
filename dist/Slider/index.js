"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const config_1 = require("../config");
const Slider_1 = require("./Slider");
Object.defineProperty(exports, "Slider", { enumerable: true, get: function () { return Slider_1.Slider; } });
exports.default = config_1.withTheme(Slider_1.Slider, 'Slider');
