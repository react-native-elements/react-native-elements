export function patchWebProps({ updateTheme, replaceTheme, onClear, ...rest }: {
    [x: string]: any;
    updateTheme: any;
    replaceTheme: any;
    onClear: any;
}): {
    [x: string]: any;
};
import renderNode from "./renderNode";
import getIconType from "./getIconType";
import normalizeText from "./normalizeText";
import nodeType from "./nodeType";
export const ScreenWidth: number;
export const ScreenHeight: number;
export const isIOS: boolean;
export function conditionalStyle(condition: any, style: any): any;
export { renderNode, getIconType, normalizeText, nodeType, color };
