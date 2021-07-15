"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialIcon = void 0;
const config_1 = require("../config");
const SocialIcon_1 = require("./SocialIcon");
Object.defineProperty(exports, "SocialIcon", { enumerable: true, get: function () { return SocialIcon_1.SocialIcon; } });
exports.default = config_1.withTheme(SocialIcon_1.SocialIcon, 'SocialIcon');
