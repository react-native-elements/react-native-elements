import React from 'react';
import { ActivityIndicator, StyleSheet, View, } from 'react-native';
import { renderNode } from '../helpers';
import Input from '../Input';
import Icon from '../Icon';
const defaultSearchIcon = (theme) => ({
    type: 'material',
    size: 18,
    name: 'search',
    color: theme?.colors?.grey3,
});
const defaultClearIcon = (theme) => ({
    type: 'material',
    size: 18,
    name: 'clear',
    color: theme?.colors?.grey3,
});
export class SearchBarDefault extends React.Component {
    input;
    static defaultProps = {
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
    constructor(props) {
        super(props);
        const { value } = props;
        this.state = {
            isEmpty: value ? value === '' : true,
        };
    }
    focus = () => {
        this.input.focus();
    };
    blur = () => {
        this.input.blur();
    };
    clear = () => {
        this.input.clear();
        this.onChangeText('');
        this.props.onClear();
    };
    onFocus = (event) => {
        this.props.onFocus(event);
        this.setState({ isEmpty: this.props.value === '' });
    };
    onBlur = (event) => {
        this.props.onBlur(event);
    };
    onChangeText = (text) => {
        this.props.onChangeText(text);
        this.setState({ isEmpty: text === '' });
    };
    render() {
        const { theme, ...rest } = this.props;
        const { lightTheme, round, clearIcon = defaultClearIcon(theme), containerStyle, searchIcon = defaultSearchIcon(theme), leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, showLoading, loadingProps, placeholderTextColor = theme?.colors?.grey3, ...attributes } = rest;
        const { isEmpty } = this.state;
        const { style: loadingStyle, ...otherLoadingProps } = loadingProps;
        return (<View testID="RNE__SearchBar-wrapper" style={StyleSheet.flatten([
                {
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderBottomColor: '#000',
                    borderTopColor: '#000',
                    padding: 8,
                    backgroundColor: theme?.colors?.grey0,
                },
                lightTheme && {
                    borderTopColor: '#e1e1e1',
                    borderBottomColor: '#e1e1e1',
                    backgroundColor: theme?.colors?.grey5,
                },
                containerStyle,
            ])}>
        <Input testID="RNE__SearchBar" renderErrorMessage={false} {...attributes} onFocus={this.onFocus} onBlur={this.onBlur} onChangeText={this.onChangeText} ref={(input) => {
                this.input = input;
            }} placeholderTextColor={placeholderTextColor} inputStyle={StyleSheet.flatten([
                {
                    color: theme?.colors?.grey3,
                    marginLeft: 10,
                },
                inputStyle,
            ])} inputContainerStyle={StyleSheet.flatten([
                {
                    borderBottomWidth: 0,
                    borderRadius: 3,
                    overflow: 'hidden',
                    minHeight: 30,
                    backgroundColor: theme?.colors?.searchBg,
                },
                lightTheme && {
                    backgroundColor: theme?.colors?.grey4,
                },
                round && styles.round,
                inputContainerStyle,
            ])} containerStyle={styles.inputContainer} leftIcon={renderNode(Icon, searchIcon, defaultSearchIcon(theme))} leftIconContainerStyle={StyleSheet.flatten([
                styles.leftIconContainerStyle,
                leftIconContainerStyle,
            ])} rightIcon={<View style={{ flexDirection: 'row' }}>
              {showLoading && (<ActivityIndicator key="loading" style={StyleSheet.flatten([{ marginRight: 5 }, loadingStyle])} {...otherLoadingProps}/>)}

              {!isEmpty &&
                    renderNode(Icon, clearIcon, {
                        ...defaultClearIcon(theme),
                        key: 'cancel',
                        onPress: this.clear,
                    })}
            </View>} rightIconContainerStyle={StyleSheet.flatten([
                styles.rightIconContainerStyle,
                rightIconContainerStyle,
            ])}/>
      </View>);
    }
}
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
