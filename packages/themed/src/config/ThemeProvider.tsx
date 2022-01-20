import React, { useEffect } from 'react';
import deepmerge from 'deepmerge';
import { colors, darkColors, Colors } from './colors';
import { Theme, ThemeMode, RecursivePartial } from './theme';

export type { RecursivePartial };

export type CreateTheme = Theme<{
  darkColors?: RecursivePartial<Colors>;
}>;

export type UpdateTheme = (
  myNewTheme: CreateTheme | ((myTheme: Theme) => CreateTheme)
) => void;

export type ReplaceTheme = (
  updates: CreateTheme | ((myTheme: Theme) => CreateTheme)
) => void;

export type ThemeProps<T = {}> = {
  theme: Theme<T>;
  updateTheme: UpdateTheme;
  replaceTheme: ReplaceTheme;
};

type ProviderProps = {
  theme?: CreateTheme;
};

export const ThemeContext: React.Context<ThemeProps> = React.createContext({
  theme: {
    colors,
  },
} as ThemeProps);

export const createTheme = (theme: CreateTheme): CreateTheme => {
  return deepmerge({ colors, darkColors, mode: 'light' } as CreateTheme, theme);
};

const separateColors = (theme: CreateTheme, themeMode?: ThemeMode): Theme => {
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
 * const myTheme = createTheme({
 *  mode: 'light'|'dark',
 *  colors: {},
 *  darkColors: {},
 * });
 *
 * <ThemeProvider theme={myTheme}>
 *   <MyComponent />
 * </ThemeProvider>
 *
 */
export const ThemeProvider: React.FC<ProviderProps> = ({
  theme = {},
  children,
}) => {
  const [themeState, setThemeState] = React.useState<CreateTheme>(theme);
  const isMounted = React.useRef<boolean>(false);

  useEffect(() => {
    if (isMounted.current) {
      setThemeState(theme);
    } else {
      isMounted.current = true;
    }
  }, [theme.mode, theme.colors, theme.darkColors, theme]);

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
