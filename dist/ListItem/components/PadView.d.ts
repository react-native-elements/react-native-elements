import React from 'react';
export interface PadViewProps {
    children: React.ReactNode;
    Component: React.ComponentClass;
    pad: number;
}
export declare const PadView: React.FC<PadViewProps>;
