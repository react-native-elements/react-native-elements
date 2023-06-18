import { DialogLoading } from './Dialog.Loading';
import { DialogTitle } from './Dialog.Title';
import { DialogButton } from './Dialog.Button';
import { DialogActions } from './Dialog.Actions';
import { DialogBase } from './Dialog';
export const Dialog = Object.assign(DialogBase, {
    Loading: DialogLoading,
    Title: DialogTitle,
    Actions: DialogActions,
    Button: DialogButton,
});
