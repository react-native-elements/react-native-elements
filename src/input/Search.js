import React, { PropTypes } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../config/colors'

const Search = ({
  containerStyle,
  inputStyle,
  icon,
  noIcon,
  lightTheme,
  round,
  /* inherited props */
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
  isFocused,
  clear,
  textInputRef,
  containerRef
}) => {
  return (
    <View
      ref={containerRef}
      style={[
      styles.container,
      lightTheme && styles.containerLight,
      containerStyle && containerStyle
    ]}>
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
        isFocused={isFocused}
        clear={clear}
        selectionColor={selectionColor || colors.grey3}
        value={value}
        style={[
          styles.input,
          lightTheme && styles.inputLight,
          noIcon && {paddingLeft: 9},
          round && {borderRadius: 15},
          inputStyle && inputStyle
        ]} />
      {
        !noIcon && (
          <Icon
            size={16}
            style={[
              styles.icon,
              icon.style && icon.style
            ]}
            name={icon.name || 'search'}
            color={icon.color || colors.grey3}
          />
        )
      }
    </View>
  )
}

Search.propTypes = {
  icon: PropTypes.object,
  noIcon: PropTypes.bool,
  lightTheme: PropTypes.bool,
  containerStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  round: PropTypes.bool
}

Search.defaultProps = {
  placeholderTextColor: colors.grey3,
  lightTheme: false,
  noIcon: false,
  round: false,
  icon: {}
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderTopColor: '#000',
    backgroundColor: colors.grey0
  },
  containerLight: {
    backgroundColor: colors.grey5,
    borderTopColor: '#e1e1e1',
    borderBottomColor: '#e1e1e1'
  },
  icon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 16,
    top: 15.5
  },
  input: {
    paddingLeft: 26,
    paddingRight: 19,
    margin: 8,
    borderRadius: 3,
    height: 30,
    backgroundColor: colors.searchBg,
    fontSize: 14,
    color: colors.grey3
  },
  inputLight: {
    backgroundColor: colors.grey4
  }
})

export default Search
