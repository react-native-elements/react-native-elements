"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeedDial = void 0;
const config_1 = require("../config");
const SpeedDial_1 = require("./SpeedDial");
Object.defineProperty(exports, "SpeedDial", { enumerable: true, get: function () { return SpeedDial_1.SpeedDial; } });
const SpeedDialAction_1 = require("./components/SpeedDialAction");
exports.default = Object.assign(config_1.withTheme(SpeedDial_1.SpeedDial, 'SpeedDial'), {
    Action: SpeedDialAction_1.SpeedDialAction,
});
