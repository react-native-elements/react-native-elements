import { ToastTypes } from './ToastProvider';
declare type ReturnParams = {
    showMessage: (text: string, type?: keyof typeof ToastTypes) => void;
};
export declare const useToast: () => ReturnParams;
export default useToast;
