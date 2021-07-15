"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const config_1 = require("../config");
const Image_1 = require("./Image");
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return Image_1.Image; } });
exports.default = config_1.withTheme(Image_1.Image, 'Image');
