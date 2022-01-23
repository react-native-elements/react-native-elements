import React from 'react';
import deepmerge from 'deepmerge';
import { colors, darkColors, Colors } from './colors';
import { Theme, ThemeMode, RecursivePartial } from './theme';

export type { RecursivePartial };

export type ThemeOptions = Theme<{
  darkColors?: RecursivePartial<Colors>;
}>;

export type UpdateTheme = (
  myNewTheme: ThemeOptions | ((myTheme: Theme) => ThemeOptions)
) => void;

export type ReplaceTheme = (
  updates: ThemeOptions | ((myTheme: Theme) => ThemeOptions)
) => void;

export type ThemeProps<T = {}> = {
  theme: Theme<T>;
  updateTheme: UpdateTheme;
  replaceTheme: ReplaceTheme;
};

export const ThemeContext: React.Context<ThemeProps> = React.createContext({
  theme: {
    colors,
  },
} as ThemeProps);

export const createTheme = (theme: ThemeOptions): ThemeOptions => {
  return deepmerge(
    { colors, darkColors, mode: 'light' } as ThemeOptions,
    theme
  );
};

const separateColors = (theme: ThemeOptions, themeMode?: ThemeMode): Theme => {
  const {
    darkColors: themeDarkColors = {},
    colors: themeLightColors = {},
    mode = themeMode,
    ...restTheme
  } = theme;

  const themeColors = mode === 'dark' ? themeDarkColors : themeLightColors;
  return { colors: themeColors, mode, ...restTheme };
};

/**
 * <ThemeProvider theme={myTheme}>
 *   <MyComponent />
 * </ThemeProvider>
 */
export const ThemeProvider: React.FC<{
  theme?: ThemeOptions;
}> = ({ theme = {}, children }) => {
  const [themeState, setThemeState] = React.useState<ThemeOptions>(
    createTheme(theme)
  );

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

  return (
    <ThemeContext.Provider
      value={{
        theme: separateColors(themeState),
        updateTheme,
        replaceTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeConsumer = ThemeContext.Consumer;
