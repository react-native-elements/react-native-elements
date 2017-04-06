import React, { Component, PropTypes } from 'react';
import { TextInput, StyleSheet, View, Platform, Dimensions } from 'react-native';
import colors from '../config/colors';
import normalize from '../helpers/normalizeText';

let styles = {};
const {width} = Dimensions.get('window');

class FormInput extends Component {
  focus() {
    const ref = this.props.textInputRef;
    this.refs[ref].focus();
  }
  blur() {
    const ref = this.props.textInputRef;
    this.refs[ref].blur();
  }
  render () {
  const {
    containerStyle,
    inputStyle,
    value,
    autoCapitalize,
    autoCorrect,
    autoFocus,
    blurOnSubmit,
    defaultValue,
    editable,
    keyboardType,
    maxLength,
    multiline,
    onBlur,
    onChange,
    onChangeText,
    onContentSizeChange,
    onEndEditing,
    onFocus,
    onLayout,
    onSelectionChange,
    onSubmitEditing,
    placeholder,
    placeholderTextColor,
    returnKeyType,
    secureTextEntry,
    selectTextOnFocus,
    selectionColor,
    inlineImageLeft,
    inlineImagePadding,
    numberOfLines,
    returnKeyLabel,
    underlineColorAndroid,
    clearButtonMode,
    clearTextOnFocus,
    dataDetectorTypes,
    enablesReturnKeyAutomatically,
    keyboardAppearance,
    onKeyPress,
    selectionState,
    textInputRef,
    containerRef,
  } = this.props;
  return (
    <View ref={containerRef} style={[styles.container, containerStyle && containerStyle]}>
      <TextInput
        ref={textInputRef}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        blurOnSubmit={blurOnSubmit}
        defaultValue={defaultValue}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={multiline}
        onBlur={onBlur}
        onChange={onChange}
        onChangeText={onChangeText}
        onContentSizeChange={onContentSizeChange}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        onLayout={onLayout}
        onSelectionChange={onSelectionChange}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        selectTextOnFocus={selectTextOnFocus}
        inlineImageLeft={inlineImageLeft}
        inlineImagePadding={inlineImagePadding}
        numberOfLines={numberOfLines}
        returnKeyLabel={returnKeyLabel}
        underlineColorAndroid={underlineColorAndroid}
        clearButtonMode={clearButtonMode}
        clearTextOnFocus={clearTextOnFocus}
        dataDetectorTypes={dataDetectorTypes}
        enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
        keyboardAppearance={keyboardAppearance}
        onKeyPress={onKeyPress}
        selectionState={selectionState}
        editable={editable}
        selectionColor={selectionColor || colors.grey3}
        value={value}
        style={[styles.input, inputStyle && inputStyle]} />
    </View>);
  }
}

FormInput.propTypes = {
  containerStyle: View.propTypes.style,
  inputStyle: View.propTypes.style,
  value: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  autoFocus: PropTypes.bool,
  blurOnSubmit: PropTypes.bool,
  defaultValue: PropTypes.string,
  editable: PropTypes.bool,
  keyboardType: PropTypes.string,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onChangeText: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  onEndEditing: PropTypes.func,
  onFocus: PropTypes.func,
  onLayout: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  returnKeyType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  selectTextOnFocus: PropTypes.bool,
  selectionColor: PropTypes.string,
  inlineImageLeft: PropTypes.string,
  inlineImagePadding: PropTypes.number,
  numberOfLines: PropTypes.number,
  returnKeyLabel: PropTypes.string,
  underlineColorAndroid: PropTypes.string,
  clearButtonMode: PropTypes.string,
  clearTextOnFocus: PropTypes.bool,
  dataDetectorTypes: PropTypes.bool,
  enablesReturnKeyAutomatically: PropTypes.bool,
  keyboardAppearance: PropTypes.string,
  onKeyPress: PropTypes.func,
  selectionState: PropTypes.any,
  textInputRef: PropTypes.string,
  containerRef: PropTypes.string,
};

styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    ...Platform.select({
      ios: {
        borderBottomColor: colors.grey4,
        borderBottomWidth: 1,
        marginLeft: 20,
        marginRight: 20
      }
    })
  },
  input: {
    ...Platform.select({
      android: {
        height: 46,
      },
      ios: {
        height: 36,
      }
    }),
    width: width,
    color: colors.grey3,
    fontSize: normalize(14)
  }
});

export default FormInput;
