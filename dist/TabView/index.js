"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemedTabView = exports.TabView = void 0;
const config_1 = require("../config");
const TabView_1 = require("./TabView");
const TabView_Item_1 = require("./TabView.Item");
const ThemedTabViewItem = config_1.withTheme(TabView_Item_1.TabViewItem, 'TabViewItem');
exports.TabView = Object.assign(TabView_1.TabViewBase);
exports.ThemedTabView = Object.assign(config_1.withTheme(exports.TabView, 'TabView'), {
    Item: ThemedTabViewItem,
});
exports.default = exports.ThemedTabView;
