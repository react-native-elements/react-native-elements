"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const config_1 = require("../config");
const Rating_1 = require("./Rating");
Object.defineProperty(exports, "Rating", { enumerable: true, get: function () { return Rating_1.Rating; } });
exports.default = config_1.withTheme(Rating_1.Rating, 'Rating');
