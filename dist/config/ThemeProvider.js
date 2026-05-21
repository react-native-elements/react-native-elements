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
import React, { useCallback, useContext, useMemo } from 'react';
import deepmerge from 'deepmerge';
import { lightColors, darkColors } from './colors';
import { defaultSpacing, } from './theme';
export const ThemeContext = React.createContext({});
export const createTheme = (theme = {}) => {
    return Object.assign(Object.assign({}, theme), deepmerge({ lightColors, darkColors, spacing: defaultSpacing }, {
        lightColors: theme.lightColors || {},
        darkColors: theme.darkColors || {},
        mode: theme.mode || 'light',
        spacing: theme.spacing || {},
        components: theme.components || {},
    }));
};
const separateColors = (theme) => {
    const { darkColors: themeDarkColors = {}, lightColors: themeLightColors = {}, spacing = {}, mode } = theme, restTheme = __rest(theme, ["darkColors", "lightColors", "spacing", "mode"]);
    const themeColors = mode === 'dark' ? themeDarkColors : themeLightColors;
    return Object.assign({ colors: themeColors, mode, spacing: spacing, components: theme.components || {} }, restTheme);
};
export const ThemeProvider = ({ theme = createTheme({}), children }) => {
    const [themeState, setThemeState] = React.useState(theme);
    React.useEffect(() => {
        setThemeState(theme);
    }, [theme, theme.mode]);
    const updateTheme = React.useCallback((updatedTheme) => {
        setThemeState((oldTheme) => {
            const newTheme = typeof updatedTheme === 'function'
                ? updatedTheme(oldTheme)
                : updatedTheme;
            return deepmerge(Object.assign({}, oldTheme), newTheme);
        });
    }, []);
    const replaceTheme = React.useCallback((replacedTheme) => {
        setThemeState((oldTheme) => {
            const newTheme = typeof replacedTheme === 'function'
                ? replacedTheme(oldTheme)
                : replacedTheme;
            return deepmerge(createTheme({}), newTheme);
        });
    }, []);
    const ThemeContextValue = React.useMemo(() => ({
        theme: separateColors(themeState),
        updateTheme,
        replaceTheme,
    }), [themeState.mode, themeState, updateTheme, replaceTheme]);
    return (React.createElement(ThemeContext.Provider, { value: ThemeContextValue }, children));
};
export const ThemeConsumer = ThemeContext.Consumer;
export const useTheme = () => {
    return useContext(ThemeContext);
};
export const useThemeMode = () => {
    var _a;
    const themeContext = useContext(ThemeContext);
    const setMode = useCallback((colorMode) => {
        themeContext === null || themeContext === void 0 ? void 0 : themeContext.updateTheme({ mode: colorMode });
    }, [themeContext]);
    return useMemo(() => {
        var _a;
        return ({
            mode: (_a = themeContext === null || themeContext === void 0 ? void 0 : themeContext.theme) === null || _a === void 0 ? void 0 : _a.mode,
            setMode,
        });
    }, [setMode, (_a = themeContext === null || themeContext === void 0 ? void 0 : themeContext.theme) === null || _a === void 0 ? void 0 : _a.mode]);
};
