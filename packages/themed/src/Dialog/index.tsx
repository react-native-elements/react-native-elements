import { withTheme } from '../config';
import {
  DialogLoading,
  DialogLoadingProps,
} from '@react-native-elements/base/dist/Dialog/Dialog.Loading';
import {
  DialogTitle,
  DialogTitleProps,
} from '@react-native-elements/base/dist/Dialog/Dialog.Title';
import { DialogButton } from '@react-native-elements/base/dist/Dialog/Dialog.Button';
import {
  DialogActions,
  DialogActionsProps,
} from '@react-native-elements/base/dist/Dialog/Dialog.Actions';
import {
  DialogBase,
  DialogBaseProps,
} from '@react-native-elements/base/dist/Dialog/Dialog';

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
