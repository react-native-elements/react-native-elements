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

// @ts-ignore
export const ThemeContext: React.Context<ThemeProps<{}>> = React.createContext({
  theme: {
    colors,
  },
});

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

  constructor(props) {
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
      useDark: props.useDark,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { useDark } = props;
    if (useDark !== state.useDark) {
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
