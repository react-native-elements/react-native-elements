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
exports.SpeedDial = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FAB_1 = __importDefault(require("../FAB"));
const color_1 = __importDefault(require("color"));
/** When pressed, a floating action button can display three to six related actions in the form of a speed dial.
 * If more than six actions are needed, something other than a FAB should be used to present them.
 * Upon press, the FAB remains visible and emits a stack of related actions.
 * If the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions. */
const SpeedDial = (_a) => {
    var _b;
    var { isOpen, onOpen = () => { }, onClose = () => { }, icon, openIcon, children, transitionDuration = 150, style, overlayColor, theme } = _a, props = __rest(_a, ["isOpen", "onOpen", "onClose", "icon", "openIcon", "children", "transitionDuration", "style", "overlayColor", "theme"]);
    const animations = react_1.default.useRef([...new Array(react_1.default.Children.count(children))].map(() => new react_native_1.Animated.Value(Number(isOpen))));
    react_1.default.useEffect(() => {
        react_native_1.Animated.stagger(50, animations.current
            .map((animation) => react_native_1.Animated.timing(animation, {
            toValue: Number(isOpen),
            duration: transitionDuration,
            useNativeDriver: true,
        }))[isOpen ? 'reverse' : 'sort']()).start();
    }, [isOpen, animations, children, transitionDuration]);
    return (<react_native_1.View style={[styles.container, style]} pointerEvents="box-none">
      <react_native_1.TouchableWithoutFeedback onPress={onClose}>
        <react_native_1.Animated.View style={[
        react_native_1.StyleSheet.absoluteFillObject,
        {
            opacity: animations.current[0],
            backgroundColor: overlayColor ||
                color_1.default((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.black).alpha(0.6).rgb().toString(),
        },
    ]} pointerEvents={isOpen ? 'auto' : 'none'}/>
      </react_native_1.TouchableWithoutFeedback>

      <react_native_1.SafeAreaView pointerEvents="box-none" style={styles.safeArea}>
        {react_1.default.Children.toArray(children).map((ChildAction, i) => (<react_native_1.Animated.View pointerEvents={isOpen ? 'auto' : 'none'} key={i} style={{
        transform: [{ scale: animations.current[i] }],
        opacity: animations.current[i],
    }}>
            {ChildAction}
          </react_native_1.Animated.View>))}
        <FAB_1.default style={[styles.fab]} icon={isOpen ? openIcon : icon} {...props} onPress={isOpen ? onClose : onOpen}/>
      </react_native_1.SafeAreaView>
    </react_native_1.View>);
};
exports.SpeedDial = SpeedDial;
const styles = react_native_1.StyleSheet.create({
    safeArea: {
        alignItems: 'flex-end',
    },
    container: Object.assign(Object.assign({}, react_native_1.StyleSheet.absoluteFillObject), { justifyContent: 'flex-end' }),
    fab: {
        margin: 16,
        marginTop: 0,
    },
});
exports.SpeedDial.displayName = 'SpeedDial';
