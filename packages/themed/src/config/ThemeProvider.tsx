import React from 'react';
import deepmerge from 'deepmerge';
import { Colors, lightColors, darkColors } from './colors';
import { ThemeMode, RecursivePartial, FullTheme } from './theme';

export type { RecursivePartial };

/**
 * Text: TextProps
 * to
 * Text: TextProps | (props: TextProps) => TextProps
 */
type FunctionProps<Components = Omit<FullTheme, 'colors' | 'mode'>> = {
  [Key in keyof Components]?:
    | Components[Key]
    | ((props: Components[Key]) => Components[Key]);
};

/**
 * Input type for createTheme function
 */
export interface CreateThemeOptions extends FunctionProps {
  mode?: ThemeMode;
  lightColors?: RecursivePartial<Colors>;
  darkColors?: RecursivePartial<Colors>;
}

export interface ThemeOptions extends FunctionProps {
  colors?: RecursivePartial<Colors>;
  mode?: ThemeMode;
}

export type UpdateTheme = (
  myNewTheme:
    | CreateThemeOptions
    | ((myTheme: CreateThemeOptions) => CreateThemeOptions)
) => void;

export type ReplaceTheme = (
  updates:
    | CreateThemeOptions
    | ((myTheme: CreateThemeOptions) => CreateThemeOptions)
) => void;

export type ThemeProps<T = {}> = {
  theme: ThemeOptions & T;
  updateTheme: UpdateTheme;
  replaceTheme: ReplaceTheme;
};

export const ThemeContext = React.createContext<ThemeProps>({
  theme: { colors: lightColors, mode: 'light' },
} as ThemeProps);

export const createTheme = (theme: CreateThemeOptions): CreateThemeOptions => {
  return {
    ...theme,
    ...deepmerge<CreateThemeOptions>(
      { lightColors, darkColors },
      {
        lightColors: theme.lightColors || {},
        darkColors: theme.darkColors || {},
        mode: theme.mode || 'light',
      }
    ),
  };
};

const separateColors = (
  theme: CreateThemeOptions,
  themeMode?: ThemeMode
): ThemeOptions => {
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
  theme?: CreateThemeOptions;
}> = ({ theme = createTheme({}), children }) => {
  const [themeState, setThemeState] = React.useState<CreateThemeOptions>(theme);

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
