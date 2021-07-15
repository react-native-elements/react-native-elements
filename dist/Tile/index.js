"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
const config_1 = require("../config");
const Tile_1 = require("./Tile");
Object.defineProperty(exports, "Tile", { enumerable: true, get: function () { return Tile_1.Tile; } });
exports.default = config_1.withTheme(Tile_1.Tile, 'Tile');
