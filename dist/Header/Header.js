"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const HeaderChildren_1 = require("./components/HeaderChildren");
/** Headers are navigation components that display information and actions relating to the current screen.
 * **Note:**
 * Make sure that you have completed [Step 3](getting_started.md#step-3-setup-react-native-safe-area-context) in the setup guide before using `Header`.
 */
const Header = (_a) => {
    var _b, _c;
    var { statusBarProps, leftComponent, centerComponent, rightComponent, leftContainerStyle, centerContainerStyle, rightContainerStyle, backgroundColor, backgroundImage, backgroundImageStyle, containerStyle, placement = 'center', barStyle, children = [], linearGradientProps, ViewComponent = linearGradientProps || !backgroundImage
        ? react_native_1.View
        : react_native_1.ImageBackground, theme, elevated } = _a, attributes = __rest(_a, ["statusBarProps", "leftComponent", "centerComponent", "rightComponent", "leftContainerStyle", "centerContainerStyle", "rightContainerStyle", "backgroundColor", "backgroundImage", "backgroundImageStyle", "containerStyle", "placement", "barStyle", "children", "linearGradientProps", "ViewComponent", "theme", "elevated"]);
    react_1.default.useEffect(() => {
        if (linearGradientProps && !ViewComponent) {
            console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
        }
    });
    return (<>
      <react_native_1.StatusBar barStyle={barStyle} translucent={true} backgroundColor={backgroundColor || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary)} {...statusBarProps}/>
      <ViewComponent testID="headerContainer" {...attributes} style={react_native_1.StyleSheet.flatten([
        {
            borderBottomColor: '#f2f2f2',
            borderBottomWidth: react_native_1.StyleSheet.hairlineWidth,
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
    ])} source={backgroundImage} imageStyle={backgroundImageStyle} {...linearGradientProps}>
        <react_native_safe_area_context_1.SafeAreaView edges={['left', 'top', 'right']} style={styles.headerSafeView}>
          <HeaderChildren_1.Children style={react_native_1.StyleSheet.flatten([
        placement === 'center' && styles.rightLeftContainer,
        leftContainerStyle,
    ])} placement="left">
            {(react_1.default.isValidElement(children) && children) ||
        children[0] ||
        leftComponent}
          </HeaderChildren_1.Children>
          <HeaderChildren_1.Children style={react_native_1.StyleSheet.flatten([
        styles.centerContainer,
        placement !== 'center' && {
            paddingHorizontal: react_native_1.Platform.select({
                android: 16,
                default: 15,
            }),
        },
        centerContainerStyle,
    ])} placement={placement}>
            {children[1] || centerComponent}
          </HeaderChildren_1.Children>

          <HeaderChildren_1.Children style={react_native_1.StyleSheet.flatten([
        placement === 'center' && styles.rightLeftContainer,
        rightContainerStyle,
    ])} placement="right">
            {children[2] || rightComponent}
          </HeaderChildren_1.Children>
        </react_native_safe_area_context_1.SafeAreaView>
      </ViewComponent>
    </>);
};
exports.Header = Header;
const styles = react_native_1.StyleSheet.create({
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
exports.Header.displayName = 'Header';
