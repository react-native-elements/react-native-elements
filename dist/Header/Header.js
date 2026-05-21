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
import { Platform, StatusBar, StyleSheet, View, ImageBackground, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultTheme } from '../helpers';
import { Children } from './components/HeaderChildren';
export const Header = (_a) => {
    var _b, _c;
    var { hideStatusBar = false, statusBarProps, leftComponent, centerComponent, rightComponent, leftContainerStyle, centerContainerStyle, rightContainerStyle, backgroundColor, backgroundImage, backgroundImageStyle, containerStyle, placement = 'center', barStyle, children = [], linearGradientProps, ViewComponent = linearGradientProps || !backgroundImage
        ? View
        : ImageBackground, theme = defaultTheme, elevated, edges = ['left', 'top', 'right'] } = _a, rest = __rest(_a, ["hideStatusBar", "statusBarProps", "leftComponent", "centerComponent", "rightComponent", "leftContainerStyle", "centerContainerStyle", "rightContainerStyle", "backgroundColor", "backgroundImage", "backgroundImageStyle", "containerStyle", "placement", "barStyle", "children", "linearGradientProps", "ViewComponent", "theme", "elevated", "edges"]);
    React.useEffect(() => {
        if (linearGradientProps && !ViewComponent) {
            console.warn("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
        }
    });
    return (React.createElement(React.Fragment, null,
        !hideStatusBar && (React.createElement(StatusBar, Object.assign({ barStyle: barStyle, translucent: true, backgroundColor: backgroundColor || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary) }, statusBarProps))),
        React.createElement(ViewComponent, Object.assign({ testID: "headerContainer" }, rest, { style: StyleSheet.flatten([
                {
                    borderBottomColor: '#f2f2f2',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.primary,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
                backgroundColor && { backgroundColor },
                elevated && styles.elevatedHeader,
                containerStyle,
            ]), source: backgroundImage, imageStyle: backgroundImageStyle }, linearGradientProps),
            React.createElement(SafeAreaView, { edges: edges, style: styles.headerSafeView },
                React.createElement(Children, { style: StyleSheet.flatten([
                        placement === 'center' && styles.rightLeftContainer,
                        leftContainerStyle,
                    ]), placement: "left" }, (React.isValidElement(children) && children) ||
                    children[0] ||
                    leftComponent),
                React.createElement(Children, { style: StyleSheet.flatten([
                        styles.centerContainer,
                        placement !== 'center' && {
                            paddingHorizontal: Platform.select({
                                android: 16,
                                default: 15,
                            }),
                        },
                        centerContainerStyle,
                    ]), placement: placement }, children[1] || centerComponent),
                React.createElement(Children, { style: StyleSheet.flatten([
                        placement === 'center' && styles.rightLeftContainer,
                        rightContainerStyle,
                    ]), placement: "right" }, children[2] || rightComponent)))));
};
const styles = StyleSheet.create({
    headerSafeView: {
        width: '100%',
        flexDirection: 'row',
    },
    centerContainer: {
        flex: 3,
    },
    rightLeftContainer: {
        flex: 1,
    },
    elevatedHeader: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 8.0,
        elevation: 24,
    },
});
Header.displayName = 'Header';
