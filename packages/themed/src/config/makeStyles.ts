import { useContext, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeColor } from './theme';
import { ThemeContext } from './ThemeProvider';

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const makeStyles =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(
    styles: T | ((theme: Partial<ThemeColor>, props: V) => T)
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
