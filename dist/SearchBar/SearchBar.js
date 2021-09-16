import React from 'react';
import { SearchBarIOS } from './SearchBar-ios';
import { SearchBarAndroid } from './SearchBar-android';
import { SearchBarDefault } from './SearchBar-default';
const SEARCHBAR_COMPONENTS = {
    ios: SearchBarIOS,
    android: SearchBarAndroid,
    default: SearchBarDefault,
};
export class SearchBar extends React.Component {
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
        const Component = SEARCHBAR_COMPONENTS[this.props.platform] || SearchBarDefault;
        return (<Component ref={(ref) => {
                this.searchbar = ref;
            }} {...this.props}/>);
    }
}
SearchBar.defaultProps = {
    platform: 'default',
};
