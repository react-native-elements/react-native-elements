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
import { TouchableHighlight, View, Platform, StyleSheet, } from 'react-native';
import { withTheme } from '../config';
import Image from '../image/Image';
import Icon from '../icons/Icon';
const Accessory = (_a) => {
    var { size = 10, style, underlayColor = '#000', onPress, onLongPress, source } = _a, props = __rest(_a, ["size", "style", "underlayColor", "onPress", "onLongPress", "source"]);
    return (<TouchableHighlight style={[
        styles.accessory,
        {
            width: size,
            height: size,
            borderRadius: size / 2,
        },
        style,
    ]} underlayColor={underlayColor} onPress={onPress} onLongPress={onLongPress}>
      <View>
        {source ? (<Image source={source} style={{
        width: size,
        height: size,
        borderRadius: size / 2,
    }} {...props}/>) : (<Icon name="mode-edit" type="material" color="#fff" size={size * 0.8} {...props}/>)}
      </View>
    </TouchableHighlight>);
};
const styles = StyleSheet.create({
    accessory: Object.assign({ position: 'absolute', bottom: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: '#aaa' }, Platform.select({
        android: {
            elevation: 1,
        },
        default: {
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowRadius: 2,
            shadowOpacity: 0.5,
        },
    })),
});
export default withTheme(Accessory, 'AvatarAccessory');
