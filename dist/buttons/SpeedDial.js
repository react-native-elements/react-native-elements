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
import { Text, View, Animated, StyleSheet, SafeAreaView, TouchableWithoutFeedback, } from 'react-native';
import FAB from './FAB';
import { withTheme } from '../config';
import Color from 'color';
const SpeedDialAction = withTheme((_a) => {
    var { title, titleStyle } = _a, actionProps = __rest(_a, ["title", "titleStyle"]);
    return (<View style={styles.action}>
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        <FAB {...actionProps} size="small" style={[actionProps.style]}/>
      </View>);
}, 'SpeedDialAction');
const SpeedDial = (_a) => {
    var _b;
    var { theme, isOpen, onOpen = () => { }, onClose = () => { }, icon, openIcon, children, transitionDuration = 150, style, overlayColor } = _a, props = __rest(_a, ["theme", "isOpen", "onOpen", "onClose", "icon", "openIcon", "children", "transitionDuration", "style", "overlayColor"]);
    const animations = React.useRef([...new Array(React.Children.count(children))].map(() => new Animated.Value(Number(isOpen))));
    React.useEffect(() => {
        Animated.stagger(50, animations.current
            .map((animation) => Animated.timing(animation, {
            toValue: Number(isOpen),
            duration: transitionDuration,
            useNativeDriver: true,
        }))[isOpen ? 'reverse' : 'sort']()).start();
    }, [isOpen, animations, children, transitionDuration]);
    return (<View style={[styles.container, style]} pointerEvents="box-none">
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[
        StyleSheet.absoluteFillObject,
        {
            opacity: animations.current[0],
            backgroundColor: overlayColor ||
                Color((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.black).alpha(0.6).rgb().toString(),
        },
    ]} pointerEvents={isOpen ? 'auto' : 'none'}/>
      </TouchableWithoutFeedback>

      <SafeAreaView pointerEvents="box-none" style={styles.safeArea}>
        {React.Children.toArray(children).map((ChildAction, i) => (<Animated.View pointerEvents={isOpen ? 'auto' : 'none'} key={i} style={{
        transform: [{ scale: animations.current[i] }],
        opacity: animations.current[i],
    }}>
            {ChildAction}
          </Animated.View>))}
        <FAB style={[styles.fab]} icon={isOpen ? openIcon : icon} {...props} onPress={isOpen ? onClose : onOpen}/>
      </SafeAreaView>
    </View>);
};
const styles = StyleSheet.create({
    safeArea: {
        alignItems: 'flex-end',
    },
    container: Object.assign(Object.assign({}, StyleSheet.absoluteFillObject), { justifyContent: 'flex-end' }),
    fab: {
        margin: 16,
        marginTop: 0,
    },
    title: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2,
    },
    action: {
        marginBottom: 16,
        marginRight: 24,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
export { SpeedDial };
export default Object.assign(withTheme(SpeedDial, 'SpeedDial'), {
    Action: SpeedDialAction,
});
