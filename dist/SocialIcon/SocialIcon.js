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
import { View, StyleSheet, Platform, Pressable, ActivityIndicator, } from 'react-native';
import Icon from '../Icon';
import Text from '../Text';
import fonts from '../config/fonts';
import { androidRipple, } from '../helpers';
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
    reddit: '#ed452f',
};
/** SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons. */
export const SocialIcon = (_a) => {
    var { activityIndicatorStyle, button = false, disabled, fontFamily, fontStyle, fontWeight, iconType = 'font-awesome', iconColor = 'white', iconSize = 24, iconStyle, light, loading, onLongPress, onPress, onPressOut, onPressIn, Component = onPress || onLongPress || onPressIn || onPressOut
        ? Pressable
        : View, raised = true, small, style, title, type, underlayColor, pressableProps } = _a, attributes = __rest(_a, ["activityIndicatorStyle", "button", "disabled", "fontFamily", "fontStyle", "fontWeight", "iconType", "iconColor", "iconSize", "iconStyle", "light", "loading", "onLongPress", "onPress", "onPressOut", "onPressIn", "Component", "raised", "small", "style", "title", "type", "underlayColor", "pressableProps"]);
    const shouldShowExpandedButton = button && title;
    return (<Component {...Object.assign(Object.assign({ onLongPress,
        onPress,
        onPressOut,
        onPressIn, android_ripple: androidRipple(light ? 'white' : underlayColor || (type && colors[type])) }, pressableProps), attributes)} testID="RNE_SocialIcon" underlayColor={light ? 'white' : underlayColor || (type && colors[type])} disabled={disabled} style={StyleSheet.flatten([
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
            {
                width: iconSize * 2 + 4,
                height: iconSize * 2 + 4,
                borderRadius: iconSize * 2,
            },
            light && { backgroundColor: 'white' },
            style && style,
        ])}>
      <View style={styles.wrapper}>
        {(shouldShowExpandedButton || !loading) && (<Icon testID="RNE_Icon" iconStyle={StyleSheet.flatten([iconStyle && iconStyle])} color={light ? type && colors[type] : iconColor} name={type} size={iconSize} type={iconType}/>)}
        {shouldShowExpandedButton && (<Text style={StyleSheet.flatten([
                styles.title,
                light && { color: type && colors[type] },
                fontFamily && { fontFamily },
                fontWeight && { fontWeight },
                fontStyle && fontStyle,
            ])}>
            {title}
          </Text>)}

        {loading && (<ActivityIndicator testID="RNE_ActivityIndicator" animating style={StyleSheet.flatten([
                styles.activityIndicatorStyle,
                activityIndicatorStyle,
            ])} color={light ? type && colors[type] : iconColor || 'white'} size={(small && 'small') || 'large'}/>)}
      </View>
    </Component>);
};
const styles = StyleSheet.create({
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
    raised: Object.assign({}, Platform.select({
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
    title: Object.assign({ color: 'white', marginLeft: 15 }, Platform.select({
        android: Object.assign({}, fonts.android.black),
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
SocialIcon.displayName = 'SocialIcon';
