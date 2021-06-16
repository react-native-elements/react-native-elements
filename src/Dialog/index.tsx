import { withTheme } from '../config';
import DialogLoading, { DialogLoadingProps } from './DialogLoading';
import DialogTitle, { DialogTitleProps } from './DialogTitle';
import DialogButton from './DialogButton';
import DialogActions, { DialogActionsProps } from './DialogActions';
import { DialogBase, DialogBaseProps } from './DialogBase';
import { RneFunctionComponent } from '../helpers';

export type DialogProps = RneFunctionComponent<DialogBaseProps> & {
  Loading: typeof DialogLoading;
  Title: typeof DialogTitle;
  Actions: typeof DialogActions;
  Button: typeof DialogButton;
};

export const Dialog: DialogProps = Object.assign(DialogBase);

export type { DialogLoadingProps, DialogTitleProps, DialogActionsProps };

const ThemedDialog = Object.assign(withTheme(Dialog, 'Dialog'), {
  Loading: DialogLoading,
  Title: DialogTitle,
  Actions: DialogActions,
  Button: DialogButton,
});

export default ThemedDialog;
