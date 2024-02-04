import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from './ThemeProvider';
import { Colors } from './colors';
import { Theme } from './theme';

export const makeStyles =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(
    styles:
      | T
      | ((
          theme: {
            colors: Colors;
          } & Theme,
          props: V
        ) => T)
  ) =>
  (props?: V): T => {
    const { theme } = useTheme();

    return useMemo(() => {
      const css =
        typeof styles === 'function'
          ? styles(theme, props ?? ({} as any))
          : styles;
      return StyleSheet.create(css);
    }, [props, theme]);
  };
