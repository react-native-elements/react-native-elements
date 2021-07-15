"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = exports.ThemedAccessory = exports.AvatarBase = void 0;
const Avatar_1 = require("./Avatar");
Object.defineProperty(exports, "AvatarBase", { enumerable: true, get: function () { return Avatar_1.AvatarBase; } });
const Avatar_Accessory_1 = require("./Avatar.Accessory");
const config_1 = require("../config");
const ThemedAccessory = config_1.withTheme(Avatar_Accessory_1.Accessory, 'Accessory');
exports.ThemedAccessory = ThemedAccessory;
exports.Avatar = Object.assign(Avatar_1.AvatarBase);
const ThemedAvatar = Object.assign(config_1.withTheme(exports.Avatar, 'Avatar'), {
    Accessory: ThemedAccessory,
});
exports.default = ThemedAvatar;
