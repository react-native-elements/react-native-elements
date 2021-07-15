"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirbnbRating = void 0;
const config_1 = require("../config");
const AirbnbRating_1 = require("./AirbnbRating");
Object.defineProperty(exports, "AirbnbRating", { enumerable: true, get: function () { return AirbnbRating_1.AirbnbRating; } });
exports.default = config_1.withTheme(AirbnbRating_1.AirbnbRating, 'AirbnbRating');
