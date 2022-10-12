import React, { useCallback, useContext, useMemo } from 'react';
import deepmerge from 'deepmerge';
import { Colors, lightColors, darkColors } from './colors';
import {
  ThemeMode,
  RecursivePartial,
  Theme,
  ThemeSpacing,
  defaultSpacing,
} from './theme';
import { ComponentTheme } from './theme.component';

export type { RecursivePartial };

type ComponentFunctionProps<Components = ComponentTheme> = {
  [Key in keyof Components]?:
    | Components[Key]
    | ((
        props: Components[Key],
        theme: Theme & { colors: Colors }
      ) => Components[Key]);
};

export interface CreateThemeOptions extends RecursivePartial<Theme> {
  lightColors?: RecursivePartial<Colors>;
  darkColors?: RecursivePartial<Colors>;
  components?: ComponentFunctionProps;
}

export interface ThemeOptions extends Theme {
  colors: Colors;
  components?: ComponentFunctionProps;
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

export type ThemeProviderContext<T = {}> = ThemeProps<ThemeOptions & T>;

export const ThemeContext = React.createContext<ThemeProviderContext>(
  {} as ThemeProviderContext
);

export const createTheme = (
  theme: CreateThemeOptions = {}
): CreateThemeOptions => {
  return {
    ...theme,
    ...deepmerge<CreateThemeOptions>(
      { lightColors, darkColors, spacing: defaultSpacing },
      {
        lightColors: theme.lightColors || ({} as Colors),
        darkColors: theme.darkColors || ({} as Colors),
        mode: theme.mode || 'light',
        spacing: theme.spacing || {},
        components: theme.components || {},
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
    spacing = {},
    mode = themeMode,
    ...restTheme
  } = theme;

  const themeColors = mode === 'dark' ? themeDarkColors : themeLightColors;
  return {
    colors: themeColors as Colors,
    mode,
    spacing: spacing as ThemeSpacing,
    components: theme.components || {},
    ...restTheme,
  };
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
  } & Theme;
}

export const useTheme = (): UseTheme => {
  return useContext(ThemeContext);
};

export const useThemeMode = () => {
  const themeContext = useContext(ThemeContext);

  const setMode = useCallback(
    (colorMode: ThemeMode) => {
      themeContext?.updateTheme({ mode: colorMode });
    },
    [themeContext]
  );

  return useMemo(
    () => ({
      mode: themeContext?.theme?.mode,
      setMode,
    }),
    [setMode, themeContext?.theme?.mode]
  );
};
