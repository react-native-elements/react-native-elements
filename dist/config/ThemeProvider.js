"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeConsumer = exports.ThemeContext = void 0;
const react_1 = __importDefault(require("react"));
const deepmerge_1 = __importDefault(require("deepmerge"));
const colors_1 = __importDefault(require("./colors"));
const colorsDark_1 = __importDefault(require("./colorsDark"));
exports.ThemeContext = react_1.default.createContext({
    theme: {
        colors: colors_1.default,
    },
});
class ThemeProvider extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.updateTheme = (updates) => {
            this.setState(({ theme }) => ({
                theme: deepmerge_1.default(theme, updates),
            }));
        };
        this.replaceTheme = (theme) => {
            this.setState(() => ({
                theme: deepmerge_1.default(this.defaultTheme, theme),
            }));
        };
        this.getTheme = () => this.state.theme;
        const defaultColors = props.useDark ? colorsDark_1.default : colors_1.default;
        this.defaultTheme = deepmerge_1.default({
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
            const defaultColors = useDark ? colorsDark_1.default : colors_1.default;
            return {
                theme: deepmerge_1.default(state.theme, deepmerge_1.default({
                    colors: defaultColors,
                }, props.theme)),
                useDark,
            };
        }
        return null;
    }
    render() {
        return (<exports.ThemeContext.Provider value={{
            theme: this.state.theme,
            updateTheme: this.updateTheme,
            replaceTheme: this.replaceTheme,
        }}>
        {this.props.children}
      </exports.ThemeContext.Provider>);
    }
}
exports.default = ThemeProvider;
ThemeProvider.defaultProps = {
    theme: {},
    useDark: false,
};
exports.ThemeConsumer = exports.ThemeContext.Consumer;
