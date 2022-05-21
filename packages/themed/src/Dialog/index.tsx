import { withTheme } from '../config';
import {
  DialogLoading,
  DialogLoadingProps,
} from '@rneui/base/dist/Dialog/Dialog.Loading';
import {
  DialogTitle,
  DialogTitleProps,
} from '@rneui/base/dist/Dialog/Dialog.Title';
import {
  DialogButton,
  DialogButtonProps,
} from '@rneui/base/dist/Dialog/Dialog.Button';
import {
  DialogActions,
  DialogActionsProps,
} from '@rneui/base/dist/Dialog/Dialog.Actions';
import { DialogBase, DialogProps } from '@rneui/base/dist/Dialog/Dialog';

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
  DialogProps,
  DialogLoadingProps,
  DialogTitleProps,
  DialogActionsProps,
};

export default Object.assign(withTheme<DialogProps>(DialogBase, 'Dialog'), {
  Loading: ThemedDialogLoading,
  Title: ThemedDialogTitle,
  Actions: ThemedDialogActions,
  Button: ThemedDialogButton,
});
