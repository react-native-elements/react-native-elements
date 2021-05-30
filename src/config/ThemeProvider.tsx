import React from 'react';
import deepmerge from 'deepmerge';
import colors from './colors';
import darkColors from './colorsDark';
import { FullTheme, Theme } from './theme';
import isEqual from 'lodash.isequal';

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export interface ThemeProps<T> {
  theme: Theme<T>;
  updateTheme: (updates: RecursivePartial<FullTheme>) => void;
  replaceTheme: (updates: RecursivePartial<FullTheme>) => void;
}

export const ThemeContext: React.Context<ThemeProps<{}>> = React.createContext({
  theme: {
    colors,
  },
} as ThemeProps<{}>);

export type ThemeProviderProps = {
  useDark?: boolean;
  theme?: Partial<FullTheme>;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = {},
  children,
  useDark,
}) => {
  const defaultColors = useDark ? darkColors : colors;
  const [themeState, setThemeState] = React.useState<Partial<FullTheme>>(
    deepmerge(
      {
        colors: defaultColors,
      },
      theme
    )
  );

  React.useEffect(() => {
    if (!isEqual(themeState, theme)) {
      setThemeState((prevState) =>
        deepmerge(
          prevState,
          deepmerge(
            {
              colors: defaultColors,
            },
            theme
          )
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, useDark]);

  const updateTheme = (newTheme: RecursivePartial<FullTheme>) => {
    setThemeState(deepmerge(themeState, newTheme));
  };

  const replaceTheme = (newTheme: RecursivePartial<FullTheme>) => {
    setThemeState(
      deepmerge(
        deepmerge(
          {
            colors: defaultColors,
          },
          theme
        ),
        newTheme
      )
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themeState,
        updateTheme: updateTheme,
        replaceTheme: replaceTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeProvider;
