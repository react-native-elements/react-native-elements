"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withBadge = exports.Badge = void 0;
const config_1 = require("../config");
const Badge_1 = require("./Badge");
Object.defineProperty(exports, "Badge", { enumerable: true, get: function () { return Badge_1.Badge; } });
const withBadge_1 = require("./withBadge");
Object.defineProperty(exports, "withBadge", { enumerable: true, get: function () { return withBadge_1.withBadge; } });
exports.default = config_1.withTheme(Badge_1.Badge, 'Badge');
