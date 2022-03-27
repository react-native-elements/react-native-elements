import { useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { FullTheme } from './theme';
import { ThemeContext } from './ThemeProvider';

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeMode = () => {
  return useContext(ThemeContext).theme.mode;
};

export const makeStyles =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(
    styles: T | ((theme: Partial<FullTheme>, props: V) => T)
  ) =>
  (props: V = {} as any): T => {
    const { theme } = useTheme();

    return useMemo(() => {
      const css =
        typeof styles === 'function'
          ? styles({ colors: theme.colors, mode: theme.mode }, props)
          : styles;
      return StyleSheet.create(css);
    }, [props, theme.colors, theme.mode]);
  };
