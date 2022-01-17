import { withTheme } from '../config';
import {
  DialogLoading,
  DialogLoadingProps,
} from '@react-native-elements/base/dist/Dialog/Dialog.Loading';
import {
  DialogTitle,
  DialogTitleProps,
} from '@react-native-elements/base/dist/Dialog/Dialog.Title';
import {
  DialogButton,
  DialogButtonProps,
} from '@react-native-elements/base/dist/Dialog/Dialog.Button';
import {
  DialogActions,
  DialogActionsProps,
} from '@react-native-elements/base/dist/Dialog/Dialog.Actions';
import {
  DialogBase,
  DialogBaseProps,
} from '@react-native-elements/base/dist/Dialog/Dialog';

const ThemedDialogLoading = withTheme<DialogLoadingProps>(
  DialogLoading,
  'DialogLoading'
);
const ThemedDialogTitle = withTheme<DialogTitleProps>(
  DialogTitle,
  'DialogTitle'
);
const ThemedDialogButton = withTheme<DialogButtonProps>(
  DialogButton,
  'DialogButton'
);
const ThemedDialogActions = withTheme<DialogActionsProps>(
  DialogActions,
  'DialogActions'
);

export type {
  DialogBaseProps as DialogProps,
  DialogLoadingProps,
  DialogTitleProps,
  DialogActionsProps,
};

export default Object.assign(withTheme<DialogBaseProps>(DialogBase, 'Dialog'), {
  Loading: ThemedDialogLoading,
  Title: ThemedDialogTitle,
  Actions: ThemedDialogActions,
  Button: ThemedDialogButton,
});
