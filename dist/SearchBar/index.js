"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBar = void 0;
const config_1 = require("../config");
const SearchBar_1 = require("./SearchBar");
Object.defineProperty(exports, "SearchBar", { enumerable: true, get: function () { return SearchBar_1.SearchBar; } });
exports.default = config_1.withTheme(SearchBar_1.SearchBar, 'SearchBar');
