import React, { PropTypes, Component } from 'react'
import { ActivityIndicator, View, StyleSheet, TextInput, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../config/colors'
import normalize from '../helpers/normalizeText'

class Search extends Component {
  focus() {
    const ref = this.props.textInputRef
    this.refs[ref].focus()
  }

  clearText() {
    const ref = this.props.textInputRef
    this.refs[ref].clear();
  }

  render () {
    const {
    containerStyle,
    inputStyle,
    icon,
    noIcon,
    lightTheme,
    round,
    showLoadingIcon,
    loadingIcon,
    clearIcon,
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
    containerRef,
    underlineColorAndroid
  } = this.props
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
          underlineColorAndroid={underlineColorAndroid ? underlineColorAndroid : 'transparent'}
          style={[
            styles.input,
            lightTheme && styles.inputLight,
            noIcon && {paddingLeft: 9},
            round && {borderRadius: Platform.OS === 'ios' ? 15 : 20},
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
        {
          clearIcon && (
            <Icon
              size={16}
              style={[
                styles.clearIcon,
                clearIcon.style && clearIcon.style
              ]}
              name={clearIcon.name || 'close'}
              onPress={this.clearText.bind(this)}
              color={clearIcon.color || colors.grey3}
            />
          )
        }
        {
          showLoadingIcon && (
            <ActivityIndicator
              style={[
                styles.loadingIcon,
                loadingIcon.style && loadingIcon.style
              ]}
              color={icon.color || colors.grey3}
            />
          )
        }
      </View>
    )
  }
}

Search.propTypes = {
  icon: PropTypes.object,
  noIcon: PropTypes.bool,
  lightTheme: PropTypes.bool,
  containerStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  round: PropTypes.bool,
  showLoadingIcon: PropTypes.bool,
  loadingIcon: PropTypes.object,
  clearIcon: PropTypes.object,
  value: PropTypes.string,
  autoCapitalize: PropTypes.bool,
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
  isFocused: PropTypes.bool,
  clear: PropTypes.func,
  textInputRef: PropTypes.string,
  containerRef: PropTypes.string,
}

Search.defaultProps = {
  placeholderTextColor: colors.grey3,
  lightTheme: false,
  noIcon: false,
  round: false,
  icon: {},
  showLoadingIcon: false,
  loadingIcon: {}
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
    top: 15.5,
    ...Platform.select({
      android: {
        top: 20
      }
    })
  },
  loadingIcon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 16,
    top: 13,
    ...Platform.select({
      android: {
        top: 17
      }
    })
  },  
  input: {
    paddingLeft: 26,
    paddingRight: 19,
    margin: 8,
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: colors.searchBg,
    fontSize: normalize(14),
    color: colors.grey3,
    height: 40,
    ...Platform.select({
      ios: {
        height: 30
      },
      android: {
        borderWidth: 0
      }
    })
  },
  inputLight: {
    backgroundColor: colors.grey4
  },
  clearIcon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 16,
    top: 15.5,
    ...Platform.select({
      android: {
        top: 17
      }
    })
  }
})

export default Search
