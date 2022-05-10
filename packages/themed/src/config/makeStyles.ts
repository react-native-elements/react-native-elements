import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from './colors';
import { ThemeMode } from './theme';
import { useTheme } from './ThemeProvider';

export const makeStyles =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(
    styles:
      | T
      | ((
          theme: {
            colors: Colors;
            mode: ThemeMode;
          },
          props: V
        ) => T)
  ) =>
  (props: V = {} as any): T => {
    const { theme } = useTheme();

    return useMemo(() => {
      const css = typeof styles === 'function' ? styles(theme, props) : styles;
      return StyleSheet.create(css);
    }, [props, theme]);
  };
