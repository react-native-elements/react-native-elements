"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overlay = void 0;
const config_1 = require("../config");
const Overlay_1 = require("./Overlay");
Object.defineProperty(exports, "Overlay", { enumerable: true, get: function () { return Overlay_1.Overlay; } });
exports.default = config_1.withTheme(Overlay_1.Overlay, 'Overlay');
