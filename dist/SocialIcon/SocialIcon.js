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
exports.SocialIcon = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("../Icon"));
const Text_1 = __importDefault(require("../Text"));
const fonts_1 = __importDefault(require("../config/fonts"));
const colors = {
    'github-alt': '#000000',
    'google-plus-official': '#dd4b39',
    google: '#dd4b39',
    'reddit-alien': '#fc461e',
    'stack-overflow': '#f27f33',
    angellist: '#1c4082',
    codepen: '#000000',
    envelope: '#000000',
    etsy: '#f2581e',
    facebook: '#4267B2',
    'facebook-messenger': '#0084ff',
    flickr: '#ff0084',
    foursquare: '#0072b1',
    github: '#000000',
    gitlab: '#e14329',
    instagram: '#517fa4',
    linkedin: '#007bb6',
    medium: '#02b875',
    pinterest: '#cb2027',
    quora: '#a82400',
    soundcloud: '#f50',
    steam: '#c6c3c1',
    stumbleupon: '#EB4823',
    tumblr: '#32506d',
    twitch: '#6441A5',
    twitter: '#00aced',
    vimeo: '#aad450',
    vk: '#5181b8',
    wechat: '#7bb32e',
    weibo: '#e6162d',
    whatsapp: '#075e54',
    wordpress: '#21759b',
    youtube: '#bb0000',
    microsoft: '#46A4F2',
};
/** SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons. */
const SocialIcon = (_a) => {
    var { activityIndicatorStyle, button = false, disabled, fontFamily, fontStyle, fontWeight, iconType = 'font-awesome', iconColor = 'white', iconSize = 24, iconStyle, light, loading, onLongPress, onPress, Component = onPress || onLongPress ? react_native_1.TouchableHighlight : react_native_1.View, raised = true, small, style, title, type, underlayColor } = _a, attributes = __rest(_a, ["activityIndicatorStyle", "button", "disabled", "fontFamily", "fontStyle", "fontWeight", "iconType", "iconColor", "iconSize", "iconStyle", "light", "loading", "onLongPress", "onPress", "Component", "raised", "small", "style", "title", "type", "underlayColor"]);
    const shouldShowExpandedButton = button && title;
    return (<Component testID="RNE_SocialIcon" {...attributes} underlayColor={light ? 'white' : underlayColor || (type && colors[type])} onLongPress={disabled ? null : onLongPress} onPress={disabled ? null : onPress} disabled={disabled} style={react_native_1.StyleSheet.flatten([
        raised && styles.raised,
        styles.container,
        button && styles.button,
        !button && raised && styles.icon,
        !button &&
            !light &&
            !raised && {
            width: iconSize * 2 + 4,
            height: iconSize * 2 + 4,
            borderRadius: iconSize * 2,
        },
        { backgroundColor: type && colors[type] },
        light && { backgroundColor: 'white' },
        style && style,
    ])}>
      <react_native_1.View style={styles.wrapper}>
        {(shouldShowExpandedButton || !loading) && (<Icon_1.default testID="RNE_Icon" iconStyle={react_native_1.StyleSheet.flatten([iconStyle && iconStyle])} color={light ? type && colors[type] : iconColor} name={type} size={iconSize} type={iconType}/>)}
        {shouldShowExpandedButton && (<Text_1.default style={react_native_1.StyleSheet.flatten([
        styles.title,
        light && { color: type && colors[type] },
        fontFamily && { fontFamily },
        fontWeight && { fontWeight },
        fontStyle && fontStyle,
    ])}>
            {title}
          </Text_1.default>)}

        {loading && (<react_native_1.ActivityIndicator testID="RNE_ActivityIndicator" animating style={react_native_1.StyleSheet.flatten([
        styles.activityIndicatorStyle,
        activityIndicatorStyle,
    ])} color={light ? type && colors[type] : iconColor || 'white'} size={(small && 'small') || 'large'}/>)}
      </react_native_1.View>
    </Component>);
};
exports.SocialIcon = SocialIcon;
const styles = react_native_1.StyleSheet.create({
    container: {
        margin: 7,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingTop: 14,
        paddingBottom: 14,
    },
    raised: Object.assign({}, react_native_1.Platform.select({
        android: {
            elevation: 2,
        },
        default: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
    })),
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: Object.assign({ color: 'white', marginLeft: 15 }, react_native_1.Platform.select({
        android: Object.assign({}, fonts_1.default.android.black),
        default: {
            fontWeight: 'bold',
        },
    })),
    icon: {
        height: 52,
        width: 52,
    },
    activityIndicatorStyle: {
        marginHorizontal: 10,
        height: 0,
    },
});
exports.SocialIcon.displayName = 'SocialIcon';
