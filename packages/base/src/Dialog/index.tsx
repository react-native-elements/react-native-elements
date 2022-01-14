import { DialogLoading, DialogLoadingProps } from './Dialog.Loading';
import { DialogTitle, DialogTitleProps } from './Dialog.Title';
import { DialogButton, DialogButtonProps } from './Dialog.Button';
import { DialogActions, DialogActionsProps } from './Dialog.Actions';
import { DialogBase, DialogBaseProps } from './Dialog';

export const Dialog = Object.assign(DialogBase, {
  Loading: DialogLoading,
  Title: DialogTitle,
  Actions: DialogActions,
  Button: DialogButton,
});

export type {
  DialogBaseProps as DialogProps,
  DialogLoadingProps,
  DialogButtonProps,
  DialogTitleProps,
  DialogActionsProps,
};
