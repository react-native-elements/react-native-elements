import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeProvider';
export const useTheme = () => {
    return useContext(ThemeContext);
};
export const makeStyles = (styles) => (props = {}) => {
    const { theme } = useTheme();
    const css = typeof styles === 'function' ? styles(theme, props) : styles;
    return StyleSheet.create(css);
};
