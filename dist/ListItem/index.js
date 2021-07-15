"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = void 0;
const config_1 = require("../config");
const ListItem_1 = require("./ListItem");
const ListItem_Content_1 = require("./ListItem.Content");
const ListItem_Chevron_1 = require("./ListItem.Chevron");
const ListItem_Input_1 = require("./ListItem.Input");
const ListItem_CheckBox_1 = require("./ListItem.CheckBox");
const ListItem_ButtonGroup_1 = require("./ListItem.ButtonGroup");
const ListItem_Title_1 = require("./ListItem.Title");
const ListItem_Subtitle_1 = require("./ListItem.Subtitle");
const ListItem_Swipeable_1 = require("./ListItem.Swipeable");
const ListItem_Accordion_1 = require("./ListItem.Accordion");
const ThemedListItemContent = config_1.withTheme(ListItem_Content_1.ListItemContent, 'ListItemContent');
const ThemedListItemChevron = config_1.withTheme(ListItem_Chevron_1.ListItemChevron, 'ListItemChevron');
const ThemedListItemInput = config_1.withTheme(ListItem_Input_1.ListItemInput, 'ListItemInput');
const ThemedListItemCheckBox = config_1.withTheme(ListItem_CheckBox_1.ListItemCheckBox, 'ListItemCheckBox');
const ThemedListItemButtonGroup = config_1.withTheme(ListItem_ButtonGroup_1.ListItemButtonGroup, 'ListItemButtonGroup');
const ThemedListItemTitle = config_1.withTheme(ListItem_Title_1.ListItemTitle, 'ListItemTitle');
const ThemedListItemSubtitle = config_1.withTheme(ListItem_Subtitle_1.ListItemSubtitle, 'ListItemSubtitle');
const ThemedListItemSwipeable = config_1.withTheme(ListItem_Swipeable_1.ListItemSwipeable, 'ListItemSwipeable');
const ThemedListItemAccordion = config_1.withTheme(ListItem_Accordion_1.ListItemAccordion, 'ListItemAccordion');
exports.ListItem = Object.assign(ListItem_1.ListItemBase);
const ThemedListItem = Object.assign(config_1.withTheme(exports.ListItem, 'ListItem'), {
    Accordion: ThemedListItemAccordion,
    Chevron: ThemedListItemChevron,
    Content: ThemedListItemContent,
    Input: ThemedListItemInput,
    Title: ThemedListItemTitle,
    Subtitle: ThemedListItemSubtitle,
    Swipeable: ThemedListItemSwipeable,
    CheckBox: ThemedListItemCheckBox,
    ButtonGroup: ThemedListItemButtonGroup,
});
exports.default = ThemedListItem;
