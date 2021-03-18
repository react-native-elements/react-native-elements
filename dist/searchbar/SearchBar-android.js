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
import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Keyboard, } from 'react-native';
import { renderNode } from '../helpers';
import Input from '../input/Input';
import Icon from '../icons/Icon';
const defaultSearchIcon = (theme) => ({
    type: 'material',
    size: 25,
    color: theme.colors.platform.android.grey,
    name: 'search',
});
const defaultCancelIcon = (theme) => ({
    type: 'material',
    size: 25,
    color: theme.colors.platform.android.grey,
    name: 'arrow-back',
});
const defaultClearIcon = (theme) => ({
    type: 'material',
    size: 25,
    color: theme.colors.platform.android.grey,
    name: 'clear',
});
class SearchBar extends Component {
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
        this.cancel = () => {
            this.blur();
            this.props.onCancel();
        };
        this.onFocus = (event) => {
            this.props.onFocus(event);
            this.setState({
                hasFocus: true,
                isEmpty: this.props.value === '',
            });
        };
        this.onBlur = (event) => {
            this.props.onBlur(event);
            this.setState({ hasFocus: false });
        };
        this.onChangeText = (text) => {
            this.props.onChangeText(text);
            this.setState({ isEmpty: text === '' });
        };
        this._keyboardDidHide = () => {
            this.cancel();
        };
        const { value = '' } = props;
        this.state = {
            hasFocus: false,
            isEmpty: value ? value === '' : true,
        };
        Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    componentWillUnmount() {
        Keyboard.removeListener('keyboardDidHide', this._keyboardDidHide);
    }
    render() {
        const _a = this.props, { theme, clearIcon = { name: 'clear' }, containerStyle, leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, searchIcon = { name: 'search' }, cancelIcon = { name: 'arrow-back' }, showLoading = false, loadingProps = {} } = _a, attributes = __rest(_a, ["theme", "clearIcon", "containerStyle", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "searchIcon", "cancelIcon", "showLoading", "loadingProps"]);
        const { hasFocus, isEmpty } = this.state;
        const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest(loadingProps, ["style"]);
        return (<View style={StyleSheet.flatten([
            {
                backgroundColor: theme.colors.white,
                paddingTop: 8,
                paddingBottom: 8,
            },
            containerStyle,
        ])}>
        <Input testID="searchInput" renderErrorMessage={false} {...attributes} onFocus={this.onFocus} onBlur={this.onBlur} onChangeText={this.onChangeText} 
        //@ts-ignore
        ref={(input) => {
            this.input = input;
        }} containerStyle={{ paddingHorizontal: 0 }} inputStyle={StyleSheet.flatten([styles.input, inputStyle])} inputContainerStyle={StyleSheet.flatten([
            styles.inputContainer,
            inputContainerStyle,
        ])} leftIcon={hasFocus
            ? renderNode(Icon, cancelIcon, Object.assign(Object.assign({}, defaultCancelIcon(theme)), { onPress: this.cancel }))
            : renderNode(Icon, searchIcon, defaultSearchIcon(theme))} leftIconContainerStyle={StyleSheet.flatten([
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
    onClear: () => null,
    onCancel: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onChangeText: () => null,
};
const styles = StyleSheet.create({
    input: {
        marginLeft: 24,
        marginRight: 8,
    },
    inputContainer: {
        borderBottomWidth: 0,
        width: '100%',
    },
    rightIconContainerStyle: {
        marginRight: 8,
    },
    leftIconContainerStyle: {
        marginLeft: 8,
    },
});
export default SearchBar;
