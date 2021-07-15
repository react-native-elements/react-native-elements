"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
const config_1 = require("../config");
const Dialog_Loading_1 = require("./Dialog.Loading");
const Dialog_Title_1 = require("./Dialog.Title");
const Dialog_Button_1 = require("./Dialog.Button");
const Dialog_Actions_1 = require("./Dialog.Actions");
const Dialog_1 = require("./Dialog");
const ThemedDialogLoading = config_1.withTheme(Dialog_Loading_1.DialogLoading, 'DialogLoading');
const ThemedDialogTitle = config_1.withTheme(Dialog_Title_1.DialogTitle, 'DialogTitle');
const ThemedDialogButton = config_1.withTheme(Dialog_Button_1.DialogButton, 'DialogButton');
const ThemedDialogActions = config_1.withTheme(Dialog_Actions_1.DialogActions, 'DialogActions');
exports.Dialog = Object.assign(Dialog_1.DialogBase);
const ThemedDialog = Object.assign(config_1.withTheme(exports.Dialog, 'Dialog'), {
    Loading: ThemedDialogLoading,
    Title: ThemedDialogTitle,
    Actions: ThemedDialogActions,
    Button: ThemedDialogButton,
});
exports.default = ThemedDialog;
