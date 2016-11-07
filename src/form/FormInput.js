import React, { Component } from 'react'
import { TextInput, StyleSheet, View, Platform } from 'react-native'
import colors from '../config/colors'
import normalize from '../helpers/normalizeText'

let styles = {}

class FormInput extends Component {
  focus() {
    const ref = this.props.textInputRef
    this.refs[ref].focus()
  }
  blur() {
    const ref = this.props.textInputRef
    this.refs[ref].blur()
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
  } = this.props
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
    </View>)
  }
}

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
    height: 36,
    color: colors.grey3,
    fontSize: normalize(14)
  }
})

export default FormInput
