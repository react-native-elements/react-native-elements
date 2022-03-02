import React from 'react';
import deepmerge from 'deepmerge';
import { lightColors, darkColors } from './colors';
import {
  // FullTheme,
  // Theme,
  ThemeColor,
  ThemeModeColor,
  ComponentTheme,
  ThemeMode,
  RecursivePartial,
} from './theme';

export type { RecursivePartial };

/**
 * Text: TextProps
 * to
 * Text: TextProps | (props: TextProps) => TextProps
 */
type FunctionProps<Components> = {
  [Key in keyof Components]?:
    | Components[Key]
    | ((props: Components[Key]) => Components[Key]);
};

export interface ThemeOptions
  extends FunctionProps<ComponentTheme>,
    ThemeModeColor {}

export interface ThemeProviderThemeOptions
  extends FunctionProps<ComponentTheme>,
    ThemeColor {}

export type UpdateTheme = (
  myNewTheme: ThemeOptions | ((myTheme: ThemeOptions) => ThemeOptions)
) => void;

export type ReplaceTheme = (
  updates: ThemeOptions | ((myTheme: ThemeOptions) => ThemeOptions)
) => void;

export type ThemeProviderProps<T = {}> = {
  theme: ThemeProviderThemeOptions & T;
  updateTheme: UpdateTheme;
  replaceTheme: ReplaceTheme;
};

export const ThemeContext: React.Context<ThemeProviderProps> =
  React.createContext({
    theme: {},
  } as ThemeProviderProps);

export const createTheme = (theme: ThemeOptions): ThemeOptions => {
  return {
    ...theme,
    ...deepmerge({ lightColors, darkColors } as ThemeOptions, {
      lightColors: theme.lightColors || {},
      darkColors: theme.darkColors || {},
      mode: theme.mode || 'light',
    }),
  };
};

const separateColors = (
  theme: ThemeOptions,
  themeMode?: ThemeMode
): ThemeProviderThemeOptions => {
  const {
    darkColors: themeDarkColors = {},
    lightColors: themeLightColors = {},
    mode = themeMode,
    ...restTheme
  } = theme;

  const themeColors = mode === 'dark' ? themeDarkColors : themeLightColors;
  return { colors: themeColors, mode, ...restTheme };
};

export const ThemeProvider: React.FC<{
  theme?: ThemeOptions;
}> = ({ theme = createTheme({}), children }) => {
  const [themeState, setThemeState] = React.useState<ThemeOptions>(theme);

  const updateTheme: UpdateTheme = React.useCallback((updatedTheme) => {
    setThemeState((oldTheme) => {
      const newTheme =
        typeof updatedTheme === 'function'
          ? updatedTheme(oldTheme)
          : updatedTheme;
      return deepmerge({ ...oldTheme }, newTheme);
    });
  }, []);

  const replaceTheme: ReplaceTheme = React.useCallback((replacedTheme) => {
    setThemeState((oldTheme) => {
      const newTheme =
        typeof replacedTheme === 'function'
          ? replacedTheme(oldTheme)
          : replacedTheme;
      return deepmerge(createTheme({}), newTheme);
    });
  }, []);

  const ThemeContextValue = React.useMemo(
    () => ({
      theme: separateColors(themeState, themeState.mode),
      updateTheme,
      replaceTheme,
    }),
    [themeState, updateTheme, replaceTheme]
  );

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeConsumer = ThemeContext.Consumer;
