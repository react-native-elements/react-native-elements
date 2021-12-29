import { withTheme } from '../config';
import { DialogLoading } from './Dialog.Loading';
import { DialogTitle } from './Dialog.Title';
import { DialogButton } from './Dialog.Button';
import { DialogActions } from './Dialog.Actions';
import { DialogBase } from './Dialog';
const ThemedDialogLoading = withTheme(DialogLoading, 'DialogLoading');
const ThemedDialogTitle = withTheme(DialogTitle, 'DialogTitle');
const ThemedDialogButton = withTheme(DialogButton, 'DialogButton');
const ThemedDialogActions = withTheme(DialogActions, 'DialogActions');
const ThemedDialog = Object.assign(withTheme(DialogBase, 'Dialog'), {
    Loading: ThemedDialogLoading,
    Title: ThemedDialogTitle,
    Actions: ThemedDialogActions,
    Button: ThemedDialogButton,
});
export default ThemedDialog;
