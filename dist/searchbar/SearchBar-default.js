var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { ActivityIndicator, StyleSheet, View, } from 'react-native';
import { renderNode } from '../helpers';
import Input from '../input/Input';
import Icon from '../icons/Icon';
const defaultSearchIcon = (theme) => ({
    type: 'material',
    size: 18,
    name: 'search',
    color: theme.colors.grey3,
});
const defaultClearIcon = (theme) => ({
    type: 'material',
    size: 18,
    name: 'clear',
    color: theme.colors.grey3,
});
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.focus = () => {
            this.input.focus();
        };
        this.blur = () => {
            this.input.blur();
        };
        this.clear = () => {
            this.input.clear();
            this.onChangeText('');
            this.props.onClear();
        };
        this.onFocus = (event) => {
            this.props.onFocus(event);
            this.setState({ isEmpty: this.props.value === '' });
        };
        this.onBlur = (event) => {
            this.props.onBlur(event);
        };
        this.onChangeText = (text) => {
            this.props.onChangeText(text);
            this.setState({ isEmpty: text === '' });
        };
        const { value } = props;
        this.state = {
            isEmpty: value ? value === '' : true,
        };
    }
    render() {
        const _a = this.props, { theme } = _a, rest = __rest(_a, ["theme"]);
        const { lightTheme, round, clearIcon = defaultClearIcon(theme), containerStyle, searchIcon = defaultSearchIcon(theme), leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, showLoading, loadingProps, placeholderTextColor = theme.colors.grey3 } = rest, attributes = __rest(rest, ["lightTheme", "round", "clearIcon", "containerStyle", "searchIcon", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "showLoading", "loadingProps", "placeholderTextColor"]);
        const { isEmpty } = this.state;
        const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest(loadingProps, ["style"]);
        return (<View style={StyleSheet.flatten([
            {
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderBottomColor: '#000',
                borderTopColor: '#000',
                padding: 8,
                backgroundColor: theme.colors.grey0,
            },
            lightTheme && {
                borderTopColor: '#e1e1e1',
                borderBottomColor: '#e1e1e1',
                backgroundColor: theme.colors.grey5,
            },
            containerStyle,
        ])}>
        <Input testID="searchInput" renderErrorMessage={false} {...attributes} onFocus={this.onFocus} onBlur={this.onBlur} onChangeText={this.onChangeText} 
        //@ts-ignore
        ref={(input) => {
            this.input = input;
        }} placeholderTextColor={placeholderTextColor} inputStyle={StyleSheet.flatten([
            {
                color: theme.colors.grey3,
                marginLeft: 10,
            },
            inputStyle,
        ])} inputContainerStyle={StyleSheet.flatten([
            {
                borderBottomWidth: 0,
                borderRadius: 3,
                overflow: 'hidden',
                minHeight: 30,
                backgroundColor: theme.colors.searchBg,
            },
            lightTheme && {
                backgroundColor: theme.colors.grey4,
            },
            round && styles.round,
            inputContainerStyle,
        ])} containerStyle={styles.inputContainer} leftIcon={renderNode(Icon, searchIcon, defaultSearchIcon(theme))} leftIconContainerStyle={StyleSheet.flatten([
            styles.leftIconContainerStyle,
            leftIconContainerStyle,
        ])} rightIcon={<View style={{ flexDirection: 'row' }}>
              {showLoading && (<ActivityIndicator key="loading" style={StyleSheet.flatten([{ marginRight: 5 }, loadingStyle])} {...otherLoadingProps}/>)}

              {!isEmpty &&
            renderNode(Icon, clearIcon, Object.assign(Object.assign({}, defaultClearIcon(theme)), { key: 'cancel', onPress: this.clear }))}
            </View>} rightIconContainerStyle={StyleSheet.flatten([
            styles.rightIconContainerStyle,
            rightIconContainerStyle,
        ])}/>
      </View>);
    }
}
SearchBar.defaultProps = {
    value: '',
    loadingProps: {},
    showLoading: false,
    lightTheme: false,
    round: false,
    onClear: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onChangeText: () => null,
};
const styles = StyleSheet.create({
    rightIconContainerStyle: {
        marginRight: 8,
    },
    leftIconContainerStyle: {
        marginLeft: 8,
    },
    inputContainer: {
        paddingHorizontal: 0,
    },
    round: {
        borderRadius: 15,
    },
});
export default SearchBar;
