import React, { useContext } from 'react';
import deepmerge from 'deepmerge';
import {
  ThemeMode,
  RecursivePartial,
  Theme,
  ComponentTheme,
  Colors,
} from './theme';

export type { RecursivePartial };

type ComponentFunctionProps<Components = ComponentTheme> = {
  [Key in keyof Components]?:
    | Components[Key]
    | ((props: Components[Key]) => Components[Key]);
};

export interface CreateThemeOptions extends ComponentFunctionProps, Theme {
  mode?: ThemeMode;
  lightColors?: RecursivePartial<Colors>;
  darkColors?: RecursivePartial<Colors>;
}

export interface ThemeOptions extends ComponentFunctionProps, Theme {
  colors: Colors;
  mode: ThemeMode;
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

export type ThemeProviderProps<T = {}> = {
  theme: ThemeOptions & T;
  updateTheme: UpdateTheme;
  replaceTheme: ReplaceTheme;
};

export const ThemeContext = React.createContext<ThemeProviderProps>(
  {} as ThemeProviderProps
);

export const createTheme = (theme: CreateThemeOptions): CreateThemeOptions =>
  theme;

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
  return { colors: themeColors as Colors, mode, ...restTheme };
};

export const ThemeProvider: React.FC<{
  theme?: CreateThemeOptions;
  children?: React.ReactNode;
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

interface UseTheme {
  replaceTheme: ReplaceTheme;
  updateTheme: UpdateTheme;
  theme: {
    colors: Colors;
    mode: ThemeMode;
  } & Theme;
}

export const useTheme = (): UseTheme => {
  return useContext(ThemeContext);
};

export const useThemeMode = () => {
  return useContext(ThemeContext).theme.mode;
};
