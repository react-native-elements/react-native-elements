/// <reference types="react" />
import { DialogLoadingProps } from '@rneui/base/dist/Dialog/Dialog.Loading';
import { DialogTitleProps } from '@rneui/base/dist/Dialog/Dialog.Title';
import { DialogButtonProps } from '@rneui/base/dist/Dialog/Dialog.Button';
import { DialogActionsProps } from '@rneui/base/dist/Dialog/Dialog.Actions';
import { DialogProps } from '@rneui/base/dist/Dialog/Dialog';
export type { DialogProps, DialogLoadingProps, DialogTitleProps, DialogActionsProps, };
declare const _default: (import("react").FunctionComponent<import("react").PropsWithChildren<DialogProps>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<DialogProps>>>) & {
    Loading: import("react").FunctionComponent<import("react").PropsWithChildren<DialogLoadingProps>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<DialogLoadingProps>>>;
    Title: import("react").FunctionComponent<import("react").PropsWithChildren<DialogTitleProps>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<DialogTitleProps>>>;
    Actions: import("react").FunctionComponent<import("react").PropsWithChildren<DialogActionsProps>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<DialogActionsProps>>>;
    Button: import("react").FunctionComponent<import("react").PropsWithChildren<DialogButtonProps>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<DialogButtonProps>>>;
};
export default _default;
