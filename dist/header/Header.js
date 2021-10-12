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
import { withTheme } from '../config';
import { renderNode } from '../helpers';
import Text from '../text/Text';
import Icon from '../icons/Icon';
const ALIGN_STYLE = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
};
const Children = ({ style, placement, children }) => (<View style={StyleSheet.flatten([{ alignItems: ALIGN_STYLE[placement] }, style])}>
    {children == null || children === false
    ? null
    : children.text
        ? renderNode(Text, children.text, Object.assign({ numberOfLines: 1 }, children))
        : children.icon
            ? renderNode(Icon, Object.assign(Object.assign({}, children), { name: children.icon, containerStyle: StyleSheet.flatten([
                    { alignItems: ALIGN_STYLE[placement] },
                    children.containerStyle,
                ]) }))
            : renderNode(Text, children)}
  </View>);
const Header = (props) => {
    var _a, _b;
    React.useEffect(() => {
        const { linearGradientProps, ViewComponent } = props;
        if (linearGradientProps && !ViewComponent) {
            console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
        }
    });
    const { statusBarProps, leftComponent, centerComponent, rightComponent, leftContainerStyle, centerContainerStyle, rightContainerStyle, backgroundColor, backgroundImage, backgroundImageStyle, containerStyle, placement = 'center', barStyle, children = [], linearGradientProps, ViewComponent = linearGradientProps || !backgroundImage
        ? View
        : ImageBackground, theme, elevated } = props, attributes = __rest(props, ["statusBarProps", "leftComponent", "centerComponent", "rightComponent", "leftContainerStyle", "centerContainerStyle", "rightContainerStyle", "backgroundColor", "backgroundImage", "backgroundImageStyle", "containerStyle", "placement", "barStyle", "children", "linearGradientProps", "ViewComponent", "theme", "elevated"]);
    return (<>
      <StatusBar barStyle={barStyle} translucent={true} backgroundColor={backgroundColor || ((_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.primary)} {...statusBarProps}/>
      <ViewComponent testID="headerContainer" {...attributes} style={StyleSheet.flatten([
        {
            borderBottomColor: '#f2f2f2',
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        backgroundColor && { backgroundColor },
        elevated && styles.elevatedHeader,
        containerStyle,
    ])} source={backgroundImage} imageStyle={backgroundImageStyle} {...linearGradientProps}>
        <SafeAreaView edges={['left', 'top', 'right']} style={styles.headerSafeView}>
          <Children style={StyleSheet.flatten([
        placement === 'center' && styles.rightLeftContainer,
        leftContainerStyle,
    ])} placement="left">
            {(React.isValidElement(children) && children) ||
        children[0] ||
        leftComponent}
          </Children>
          <Children style={StyleSheet.flatten([
        styles.centerContainer,
        placement !== 'center' && {
            paddingHorizontal: Platform.select({
                android: 16,
                default: 15,
            }),
        },
        centerContainerStyle,
    ])} placement={placement}>
            {children[1] || centerComponent}
          </Children>

          <Children style={StyleSheet.flatten([
        placement === 'center' && styles.rightLeftContainer,
        rightContainerStyle,
    ])} placement="right">
            {children[2] || rightComponent}
          </Children>
        </SafeAreaView>
      </ViewComponent>
    </>);
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
export { Header };
export default withTheme(Header, 'Header');
