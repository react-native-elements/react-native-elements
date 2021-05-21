import React from 'react';
import deepmerge from 'deepmerge';
import colors from './colors';
import darkColors from './colorsDark';
import { FullTheme, Theme } from './theme';

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
};

type ThemeProviderState = {
  theme: Theme;
  useDark: boolean;
};

export default class ThemeProvider extends React.Component<
  ThemeProviderProps,
  ThemeProviderState
> {
  static defaultProps = {
    theme: {},
    useDark: false,
  };
  defaultTheme: Partial<FullTheme>;

  constructor(props: { theme: Theme; useDark?: boolean }) {
    super(props);
    const defaultColors = props.useDark ? darkColors : colors;
    this.defaultTheme = deepmerge(
      {
        colors: defaultColors,
      },
      props.theme
    );
    this.state = {
      theme: this.defaultTheme,
      useDark: Boolean(props.useDark),
    };
  }

  static getDerivedStateFromProps(
    props: {
      theme: Theme;
      useDark?: boolean;
    },
    state: ThemeProviderState
  ) {
    const { useDark } = props;
    const isTheme = (theme: Partial<FullTheme>) => {
      return !(Object.keys(theme).length === 0 && theme.constructor === Object);
    };
    //isTheme will check if the theme is provided by user and will update the theme only if its provided by user
    //Not checking if the theme exist or not will always result in if statement getting executed as props.theme !== state.theme if theme is not provided
    if (
      useDark !== state.useDark ||
      (isTheme(props.theme) && props.theme !== state.theme)
    ) {
      const defaultColors = useDark ? darkColors : colors;
      return {
        theme: deepmerge(
          state.theme,
          deepmerge(
            {
              colors: defaultColors,
            },
            props.theme
          )
        ),
        useDark,
      };
    }
    return null;
  }

  updateTheme = (updates: RecursivePartial<FullTheme>) => {
    this.setState(({ theme }) => ({
      theme: deepmerge(theme, updates),
    }));
  };

  replaceTheme = (theme: RecursivePartial<FullTheme>) => {
    this.setState(() => ({
      theme: deepmerge(this.defaultTheme, theme),
    }));
  };

  getTheme = () => this.state.theme;

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          updateTheme: this.updateTheme,
          replaceTheme: this.replaceTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
