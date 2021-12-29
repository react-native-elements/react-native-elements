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
    searchbar;
    static defaultProps = {
        platform: 'default',
    };
    focus = () => {
        this.searchbar.focus();
    };
    blur = () => {
        this.searchbar.blur();
    };
    clear = () => {
        this.searchbar.clear();
    };
    cancel = () => {
        this.searchbar.cancel && this.searchbar.cancel();
    };
    render() {
        const Component = SEARCHBAR_COMPONENTS[this.props.platform] || SearchBarDefault;
        return (<Component ref={(ref) => {
                this.searchbar = ref;
            }} {...this.props}/>);
    }
}
