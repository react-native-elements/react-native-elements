"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemedTab = exports.Tab = void 0;
const config_1 = require("../config");
const Tab_1 = require("./Tab");
const Tab_Item_1 = require("./Tab.Item");
const ThemedTabItem = config_1.withTheme(Tab_Item_1.TabItem, 'TabItem');
exports.Tab = Object.assign(Tab_1.TabBase);
exports.ThemedTab = Object.assign(config_1.withTheme(exports.Tab, 'Tab'), {
    Item: ThemedTabItem,
});
exports.default = exports.ThemedTab;
