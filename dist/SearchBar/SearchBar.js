import React from 'react';
import { SearchBarIOS } from './SearchBar-ios';
import { SearchBarAndroid } from './SearchBar-android';
import { SearchBarDefault } from './SearchBar-default';
const SEARCH_BAR_COMPONENTS = {
    ios: SearchBarIOS,
    android: SearchBarAndroid,
    default: SearchBarDefault,
};
export class SearchBar extends React.Component {
    constructor() {
        super(...arguments);
        this.focus = () => {
            this.searchBar.focus();
        };
        this.blur = () => {
            this.searchBar.blur();
        };
        this.clear = () => {
            this.searchBar.clear();
        };
        this.cancel = () => {
            var _a;
            (_a = this.searchBar) === null || _a === void 0 ? void 0 : _a.cancel();
        };
    }
    render() {
        const Component = SEARCH_BAR_COMPONENTS[this.props.platform] || SearchBarDefault;
        return (React.createElement(Component, Object.assign({ ref: (ref) => {
                this.searchBar = ref;
            } }, this.props)));
    }
}
SearchBar.defaultProps = {
    platform: 'default',
};
