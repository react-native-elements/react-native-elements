import React from 'react';
import { ThemeProps } from './ThemeProvider';
export interface ThemedComponent {
    displayName: string;
}
declare function withTheme<P = {}, T = {}>(WrappedComponent: React.ComponentType<P & Partial<ThemeProps<T>>>, themeKey?: string): React.FunctionComponent<Omit<P, keyof ThemeProps<T>>> | React.ForwardRefExoticComponent<P>;
export default withTheme;
