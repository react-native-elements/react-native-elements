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
import { Animated } from 'react-native';
import { ListItemBase } from './ListItem';
import { ListItemContent } from './ListItem.Content';
import { Icon } from '../Icon';
import { renderNode } from '../helpers';
export const ListItemAccordion = (_a) => {
    var { children, isExpanded = false, icon = React.createElement(Icon, { name: 'chevron-down', type: "material-community" }), expandIcon, content, leftRotate = false, noRotation, noIcon, animation = {
        duration: 350,
        type: 'timing',
    } } = _a, rest = __rest(_a, ["children", "isExpanded", "icon", "expandIcon", "content", "leftRotate", "noRotation", "noIcon", "animation"]);
    const transition = React.useRef(new Animated.Value(0));
    const startAnimation = React.useCallback(() => {
        if (typeof animation !== 'boolean') {
            Animated[animation.type || 'timing'](transition.current, {
                toValue: Number(isExpanded),
                useNativeDriver: true,
                duration: animation.duration || 350,
            }).start();
        }
    }, [isExpanded, animation]);
    React.useEffect(() => {
        startAnimation();
    }, [isExpanded, startAnimation]);
    const iconAnimation = React.useMemo(() => ({
        transform: [
            {
                rotate: noRotation
                    ? '0deg'
                    : transition.current.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', leftRotate ? '180deg' : '-180deg'],
                    }),
            },
        ],
    }), [leftRotate, noRotation]);
    return (React.createElement(React.Fragment, null,
        React.createElement(ListItemBase, Object.assign({}, rest),
            React.isValidElement(content) ? content : React.createElement(ListItemContent, null),
            !noIcon && (React.createElement(Animated.View, { testID: "RNE__ListItem__Accordion__Icon", style: iconAnimation }, renderNode(Icon, isExpanded ? expandIcon !== null && expandIcon !== void 0 ? expandIcon : icon : icon)))),
        isExpanded && (React.createElement(Animated.View, { testID: "RNE__ListItem__Accordion__Children", style: {
                opacity: transition.current,
            } }, children))));
};
ListItemAccordion.displayName = 'ListItem.Accordion';
