import { IconType } from '../Icon';
type IconModule = any;
export declare const registerCustomIconType: (id: string, customIcon: IconModule) => void;
export default function getIcon(type: IconType): IconModule | null;
export {};
