export declare const getElementVisibleWidth: (elementWidth: number, xOffset: number, ScreenWidth: number) => number;
declare const getTooltipCoordinate: (x: number, y: number, width: number, height: number, ScreenWidth: number, ScreenHeight: number, tooltipWidth: number, tooltipHeight: number, withPointer: boolean) => {
    x: number;
    y: number;
};
export default getTooltipCoordinate;
