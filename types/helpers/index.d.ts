import color from 'color';
import renderNode from './renderNode';
import getIconType from './getIconType';
import normalizeText from './normalizeText';
import nodeType from './nodeType';
declare const ScreenWidth: number;
declare const ScreenHeight: number;
declare const isIOS: boolean;
declare const conditionalStyle: (condition: any, style: any) => any;
export declare const patchWebProps: ({ ...rest }: {
    [x: string]: any;
}) => {
    [x: string]: any;
};
export { renderNode, getIconType, normalizeText, nodeType, ScreenWidth, ScreenHeight, isIOS, conditionalStyle, color, };
