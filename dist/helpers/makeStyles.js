import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
export const makeStyles = (styles) => (props) => {
    return useMemo(() => {
        return StyleSheet.create(typeof styles === 'function' ? styles(props) : styles);
    }, [props]);
};
