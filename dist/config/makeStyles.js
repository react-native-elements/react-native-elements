import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from './ThemeProvider';
export const makeStyles = (styles) => (props) => {
    const { theme } = useTheme();
    return useMemo(() => {
        const css = typeof styles === 'function'
            ? styles(theme, props !== null && props !== void 0 ? props : {})
            : styles;
        return StyleSheet.create(css);
    }, [props, theme]);
};
