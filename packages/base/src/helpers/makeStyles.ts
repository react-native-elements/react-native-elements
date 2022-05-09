import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const makeStyles =
  <P, T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
    styles: T | ((props: P) => T)
  ) =>
  (props?: P): T => {
    return useMemo(() => {
      return StyleSheet.create(
        typeof styles === 'function' ? styles(props) : styles
      );
    }, [props]);
  };
