import { DialogLoading, DialogLoadingProps } from './Dialog.Loading';
import { DialogTitle, DialogTitleProps } from './Dialog.Title';
import { DialogButton, DialogButtonProps } from './Dialog.Button';
import { DialogActions, DialogActionsProps } from './Dialog.Actions';
import { DialogBase, DialogProps } from './Dialog';

export const Dialog = Object.assign(DialogBase, {
  Loading: DialogLoading,
  Title: DialogTitle,
  Actions: DialogActions,
  Button: DialogButton,
});

export type {
  DialogProps,
  DialogLoadingProps,
  DialogButtonProps,
  DialogTitleProps,
  DialogActionsProps,
};
