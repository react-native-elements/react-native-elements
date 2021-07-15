"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBar = void 0;
const react_1 = __importDefault(require("react"));
const SearchBar_ios_1 = require("./SearchBar-ios");
const SearchBar_android_1 = require("./SearchBar-android");
const SearchBar_default_1 = require("./SearchBar-default");
const SEARCHBAR_COMPONENTS = {
    ios: SearchBar_ios_1.SearchBarIOS,
    android: SearchBar_android_1.SearchBarAndroid,
    default: SearchBar_default_1.SearchBarDefault,
};
class SearchBar extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.focus = () => {
            this.searchbar.focus();
        };
        this.blur = () => {
            this.searchbar.blur();
        };
        this.clear = () => {
            this.searchbar.clear();
        };
        this.cancel = () => {
            this.searchbar.cancel && this.searchbar.cancel();
        };
    }
    render() {
        const Component = SEARCHBAR_COMPONENTS[this.props.platform] || SearchBar_default_1.SearchBarDefault;
        return (<Component ref={(ref) => {
            this.searchbar = ref;
        }} {...this.props}/>);
    }
}
exports.SearchBar = SearchBar;
SearchBar.defaultProps = {
    platform: 'default',
};
