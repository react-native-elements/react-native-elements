import React from 'react';
import { withTheme } from '../config';
import IOSSearchBar from './SearchBar-ios';
import AndroidSearchBar from './SearchBar-android';
import DefaultSearchBar from './SearchBar-default';
const SEARCHBAR_COMPONENTS = {
    ios: IOSSearchBar,
    android: AndroidSearchBar,
    default: DefaultSearchBar,
};
class SearchBar extends React.Component {
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
        const Component = SEARCHBAR_COMPONENTS[this.props.platform] || DefaultSearchBar;
        return (<Component ref={(ref) => {
            this.searchbar = ref;
        }} {...this.props}/>);
    }
}
SearchBar.defaultProps = {
    platform: 'default',
};
export { SearchBar };
export default withTheme(SearchBar, 'SearchBar');
