import deepmerge from 'deepmerge';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Theme } from './theme';
import { useTheme } from './ThemeProvider';

type Styles =
  | StyleSheet.NamedStyles<any>
  | StyleSheet.NamedStyles<Record<(string & {}) | 'root', any>>;

export const styled =
  <T extends {}>(
    component: React.FunctionComponent<T> | React.ComponentType<T>
  ) =>
  <Props extends {}>(
    styles: Styles | ((theme: Theme, props: Props) => Styles)
  ): React.FC<Props & T> =>
  (props: Props & T) => {
    const themeHook = useTheme();
    const newProps = React.useMemo<Props & T>(() => {
      const themedStyles =
        typeof styles === 'function' ? styles(themeHook.theme, props) : styles;
      const { root, ...restStyles } = StyleSheet.create(themedStyles);
      return deepmerge(props, {
        style: root,
        ...restStyles,
      });
    }, [themeHook.theme, props]);
    return React.createElement(component, newProps);
  };
