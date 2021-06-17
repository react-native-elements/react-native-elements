import { withTheme } from '../config';
import { DialogLoading, DialogLoadingProps } from './DialogLoading';
import { DialogTitle, DialogTitleProps } from './DialogTitle';
import { DialogButton } from './DialogButton';
import { DialogActions, DialogActionsProps } from './DialogActions';
import { DialogBase, DialogBaseProps } from './DialogBase';
import { RneFunctionComponent } from '../helpers';

const ThemedDialogLoading = withTheme(DialogLoading, 'DialogLoading');
const ThemedDialogTitle = withTheme(DialogTitle, 'DialogTitle');
const ThemedDialogButton = withTheme(DialogButton, 'DialogButton');
const ThemedDialogActions = withTheme(DialogActions, 'DialogActions');

export type DialogProps = RneFunctionComponent<DialogBaseProps> & {
  Loading: typeof ThemedDialogLoading;
  Title: typeof ThemedDialogTitle;
  Actions: typeof ThemedDialogActions;
  Button: typeof ThemedDialogButton;
};

export const Dialog: DialogProps = Object.assign(DialogBase);

export type { DialogLoadingProps, DialogTitleProps, DialogActionsProps };

const ThemedDialog = Object.assign(withTheme(Dialog, 'Dialog'), {
  Loading: ThemedDialogLoading,
  Title: ThemedDialogTitle,
  Actions: ThemedDialogActions,
  Button: ThemedDialogButton,
});

export default ThemedDialog;
