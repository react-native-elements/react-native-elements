import { withTheme } from '../config';
import { DialogLoading, DialogLoadingProps } from './Dialog.Loading';
import { DialogTitle, DialogTitleProps } from './Dialog.Title';
import { DialogButton } from './Dialog.Button';
import { DialogActions, DialogActionsProps } from './Dialog.Actions';
import { DialogBase, DialogBaseProps } from './Dialog';

const ThemedDialogLoading = withTheme(DialogLoading, 'DialogLoading');
const ThemedDialogTitle = withTheme(DialogTitle, 'DialogTitle');
const ThemedDialogButton = withTheme(DialogButton, 'DialogButton');
const ThemedDialogActions = withTheme(DialogActions, 'DialogActions');

export type {
  DialogBaseProps as DialogProps,
  DialogLoadingProps,
  DialogTitleProps,
  DialogActionsProps,
};

const ThemedDialog = Object.assign(withTheme(DialogBase, 'Dialog'), {
  Loading: ThemedDialogLoading,
  Title: ThemedDialogTitle,
  Actions: ThemedDialogActions,
  Button: ThemedDialogButton,
});

export default ThemedDialog;
