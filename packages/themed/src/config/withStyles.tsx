import React from 'react';
import { StyleSheet } from 'react-native';
import { RNETheme } from './theme';
import { useTheme } from './ThemeProvider';

type Styles =
  | StyleSheet.NamedStyles<any>
  | StyleSheet.NamedStyles<Record<(string & {}) | 'root', any>>;

export const withStyles = <Props,>(
  component: React.FunctionComponent<{}> | React.ComponentClass<{}, any>,
  styles: Styles | ((theme: RNETheme, props: Props) => Styles)
) => {
  return (props: Props) => {
    const themeHook = useTheme();
    const themedStyles =
      typeof styles === 'function' ? styles(themeHook.theme, props) : styles;
    const { root, ...restStyles } = StyleSheet.create(themedStyles);

    return React.createElement(component, {
      style: root,
      ...props,
      ...restStyles,
    });
  };
};
