import React, { useCallback, useContext } from 'react';
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
    | ((props: Components[Key]) => Components[Key]);
};

export interface CreateThemeOptions
  extends ComponentFunctionProps,
    RecursivePartial<Theme> {
  lightColors?: RecursivePartial<Colors>;
  darkColors?: RecursivePartial<Colors>;
}

export interface ThemeOptions extends ComponentFunctionProps, Theme {
  colors: Colors;
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
  const {
    updateTheme,
    theme: { mode },
  } = useTheme();

  const setMode = useCallback(
    (colorMode: ThemeMode) => {
      updateTheme({ mode: colorMode });
    },
    [updateTheme]
  );

  return { mode, setMode };
};
