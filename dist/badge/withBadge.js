var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Badge from './Badge';
const withBadge = (value, options = {}) => (WrappedComponent) => {
    const WithBadge = (props) => {
        const { bottom, hidden = false, left, containerStyle } = options, badgeProps = __rest(options, ["bottom", "hidden", "left", "containerStyle"]);
        let { right = -16, top = -1 } = options;
        if (!value) {
            right = -3;
            top = 3;
        }
        const badgeValue = typeof value === 'function' ? value(props) : value;
        return (<View style={StyleSheet.flatten([styles.container, containerStyle])}>
        <WrappedComponent {...props}/>

        {!hidden && (<Badge value={badgeValue} status="error" containerStyle={StyleSheet.flatten([
            styles.badgeContainer,
            { bottom, left, right, top },
        ])} {...badgeProps}/>)}
      </View>);
    };
    WithBadge.displayName = `WithBadge(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return WithBadge;
};
const styles = StyleSheet.create({
    badgeContainer: {
        position: 'absolute',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
});
export default withBadge;
