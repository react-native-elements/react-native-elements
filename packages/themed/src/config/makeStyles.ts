import { useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from './colors';
import { FullTheme, Theme, ThemeMode } from './theme';
import { ReplaceTheme, ThemeContext, UpdateTheme } from './ThemeProvider';

interface useThemeI {
  replaceTheme: ReplaceTheme;
  updateTheme: UpdateTheme;
  theme: {
    colors: Colors;
    mode: ThemeMode;
  } & Theme;
}

export const useTheme = (): useThemeI => {
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
