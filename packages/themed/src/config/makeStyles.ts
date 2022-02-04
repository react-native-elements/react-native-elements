import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { FullTheme } from './theme';
import { ThemeContext } from './ThemeProvider';

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const makeStyles =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(
    styles: T | ((theme: Partial<FullTheme>, props: V) => T)
  ) =>
  (props: V = {} as any): T => {
    const { theme } = useTheme();
    const css = typeof styles === 'function' ? styles(theme, props) : styles;

    return StyleSheet.create(css);
  };
