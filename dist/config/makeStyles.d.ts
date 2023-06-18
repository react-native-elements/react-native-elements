import { StyleSheet } from 'react-native';
import { Colors } from './colors';
import { Theme } from './theme';
export declare const makeStyles: <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>, V>(styles: T | ((theme: {
    colors: Colors;
} & Theme, props: V) => T)) => (props?: V) => T;
