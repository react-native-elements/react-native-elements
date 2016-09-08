import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import colors from '../config/colors'

let styles = {}

const FormInput = ({
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
  selectionState
}) => (
  <View style={[styles.container, containerStyle && containerStyle]}>
    <TextInput
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
  </View>
)

styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.grey4,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    height: 40,
    color: colors.grey3
  }
})

export default FormInput
