import React from 'react';
import type { Dispatch, FC, SetStateAction } from 'react';
export declare const ToastContext: React.Context<{
    messages: string[];
    setMessage: Dispatch<SetStateAction<string[]>>;
}>;
declare const ToastProvider: FC;
export default ToastProvider;
