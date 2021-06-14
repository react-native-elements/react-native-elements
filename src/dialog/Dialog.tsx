import { withTheme } from '../config';
import DialogLoading from './DialogLoading';
import DialogTitle from './DialogTitle';
import DialogButton from './DialogButton';
import DialogActions from './DialogActions';
import { DialogBase, DialogProps } from './DialogBase';
import { RneFunctionComponent } from '../helpers';

interface Dialog extends RneFunctionComponent<DialogProps> {
  Loading: typeof DialogLoading;
  Title: typeof DialogTitle;
  Actions: typeof DialogActions;
  Button: typeof DialogButton;
}

const Dialog: Dialog = Object.assign(DialogBase);

export { Dialog };

const ThemedDialog = Object.assign(withTheme(Dialog, 'Dialog'), {
  Loading: DialogLoading,
  Title: DialogTitle,
  Actions: DialogActions,
  Button: DialogButton,
});

export default ThemedDialog;
