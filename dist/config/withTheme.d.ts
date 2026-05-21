import React from 'react';
import { UpdateTheme, ReplaceTheme } from './ThemeProvider';
import { ThemeMode } from './theme';
import { Colors } from './colors';
export interface ThemedComponent {
    displayName: string;
}
interface ThemeProps<T = {}> {
    theme?: {
        colors: Colors;
        mode?: ThemeMode;
    } & T;
    updateTheme?: UpdateTheme;
    replaceTheme?: ReplaceTheme;
}
declare function withTheme<P = {}, T = {}>(WrappedComponent: React.ComponentType<P & ThemeProps<T>>, themeKey?: string): React.FunctionComponent<React.PropsWithChildren<P>> | React.ForwardRefExoticComponent<React.RefAttributes<React.PropsWithChildren<P>>>;
export default withTheme;
