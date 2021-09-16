import React from 'react';
import deepmerge from 'deepmerge';
import colors from './colors';
import darkColors from './colorsDark';
export const ThemeContext = React.createContext({
    theme: {
        colors,
    },
});
export default class ThemeProvider extends React.Component {
    constructor(props) {
        super(props);
        this.updateTheme = (updates) => {
            this.setState(({ theme }) => ({
                theme: deepmerge(theme, updates),
            }));
        };
        this.replaceTheme = (theme) => {
            this.setState(() => ({
                theme: deepmerge(this.defaultTheme, theme),
            }));
        };
        this.getTheme = () => this.state.theme;
        const defaultColors = props.useDark ? darkColors : colors;
        this.defaultTheme = deepmerge({
            colors: defaultColors,
        }, props.theme);
        this.state = {
            theme: this.defaultTheme,
            useDark: Boolean(props.useDark),
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { useDark } = props;
        const isTheme = (theme) => {
            return !(Object.keys(theme).length === 0 && theme.constructor === Object);
        };
        //isTheme will check if the theme is provided by user and will update the theme only if its provided by user
        //Not checking if the theme exist or not will always result in if statement getting executed as props.theme !== state.theme if theme is not provided
        if (useDark !== state.useDark ||
            (isTheme(props.theme) && props.theme !== state.theme)) {
            const defaultColors = useDark ? darkColors : colors;
            return {
                theme: deepmerge(state.theme, deepmerge({
                    colors: defaultColors,
                }, props.theme)),
                useDark,
            };
        }
        return null;
    }
    render() {
        return (<ThemeContext.Provider value={{
                theme: this.state.theme,
                updateTheme: this.updateTheme,
                replaceTheme: this.replaceTheme,
            }}>
        {this.props.children}
      </ThemeContext.Provider>);
    }
}
ThemeProvider.defaultProps = {
    theme: {},
    useDark: false,
};
export const ThemeConsumer = ThemeContext.Consumer;
