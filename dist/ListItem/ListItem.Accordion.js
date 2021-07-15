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
exports.ListItemAccordion = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ListItem_1 = require("./ListItem");
const ListItem_Content_1 = require("./ListItem.Content");
const Icon_1 = require("../Icon");
/** This allows making a accordion list which can show/hide content. */
const ListItemAccordion = (_a) => {
    var { children, isExpanded, icon, expandIcon, content, noRotation, noIcon, animation = {
        duration: 350,
        type: 'timing',
    } } = _a, props = __rest(_a, ["children", "isExpanded", "icon", "expandIcon", "content", "noRotation", "noIcon", "animation"]);
    const { current: transition } = react_1.default.useRef(new react_native_1.Animated.Value(0));
    const startAnimation = react_1.default.useCallback(() => {
        if (typeof animation !== 'boolean') {
            react_native_1.Animated[animation.type || 'timing'](transition, {
                toValue: Number(isExpanded),
                useNativeDriver: false,
                duration: animation.duration || 350,
            }).start();
        }
    }, [isExpanded, transition, animation]);
    react_1.default.useEffect(() => {
        startAnimation();
    }, [isExpanded, startAnimation]);
    const rotate = noRotation || (typeof animation === 'boolean' && animation)
        ? '0deg'
        : transition.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-180deg'],
        });
    return (<>
      <ListItem_1.ListItemBase {...props}>
        {react_1.default.isValidElement(content) ? content : <ListItem_Content_1.ListItemContent />}
        {!noIcon && (<react_native_1.Animated.View style={{
        transform: [
            {
                rotate,
            },
        ],
    }}>
            {icon ? (<Icon_1.Icon {...(expandIcon
        ? isExpanded
            ? expandIcon
            : icon
        : icon)}/>) : (<Icon_1.Icon name={'chevron-down'} type="material-community"/>)}
          </react_native_1.Animated.View>)}
      </ListItem_1.ListItemBase>
      <react_native_1.Animated.View style={[
        Boolean(animation) && {
            maxHeight: transition.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
            }),
            opacity: transition,
        },
    ]}>
        {children}
      </react_native_1.Animated.View>
    </>);
};
exports.ListItemAccordion = ListItemAccordion;
exports.ListItemAccordion.displayName = 'ListItem.Accordion';
