import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import SearchBarIOS from './SearchBar-ios';
import SearchBarAndroid from './SearchBar-android';
import SearchBarDefault from './SearchBar-default';
const SEARCH_BAR_COMPONENTS = {
    ios: SearchBarIOS,
    android: SearchBarAndroid,
    default: SearchBarDefault,
};
export const SearchBar = forwardRef((props, ref) => {
    const { platform = 'default' } = props;
    const searchBarRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus: () => { var _a; return (_a = searchBarRef.current) === null || _a === void 0 ? void 0 : _a.focus(); },
        blur: () => { var _a; return (_a = searchBarRef.current) === null || _a === void 0 ? void 0 : _a.blur(); },
        clear: () => { var _a; return (_a = searchBarRef.current) === null || _a === void 0 ? void 0 : _a.clear(); },
        cancel: () => { var _a; return (_a = searchBarRef.current) === null || _a === void 0 ? void 0 : _a.cancel(); },
    }));
    const Component = SEARCH_BAR_COMPONENTS[platform] || SearchBarDefault;
    return React.createElement(Component, Object.assign({ ref: searchBarRef }, props));
});
