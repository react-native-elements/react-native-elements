import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  StyleSheet,
  ViewPropTypes,
  TextInput,
  AppState,
} from 'react-native';
import Color from 'color';

import { withTheme } from '../config';
import { renderNode, nodeType, conditionalStyle, color } from '../helpers';
import Icon from '../icons/Icon';
import Input from '../../'
import { abs } from 'react-native-reanimated';

const defaultLoadingProps = (type, theme) => ({
  color: type === 'solid' ? 'white' : theme.colors.primary,
  size: 'small',
});

const Dropdown = ({ data, onItemSelected, itemSelected, containerStyle, innerStyle, containerListStyle, listStyle }) => {
  let { indexSelected } = props
  const defaultSelected = data[0]
  const label = defaultSelected.label ? defaultSelected.label : defaultSelected.value
  const [isListShown, setIsListShown] = React.useState(false)
  const [dataDropdown, setDataDropdown] = React.useState([])
  const tmpItemSelected = itemSelected ? null : itemSelected
  const [selectedItem, setSelectedItem] = React.useState(tmpItemSelected)
  const input = React.useRef(null)
  const [inputHeight, setInputHeight] = React.useState(0)
  const [index, setIndex] = React.useState(indexSelected)

  const _onFocus = () => {
    console.log("_onFocus")

    setIsListShown(!isListShown)
  }

  React.useEffect(() => {
    setDataDropdown(data)
  }, [])

  React.useEffect(() => {
    console.log("item selected")
    // setSelectedItem(itemSelected)
    if (typeof itemSelected !== 'undefined') {
      dataDropdown.map((item, index) => {
        if (itemSelected.value === item.value) {
          setSelectedItem(item)
          indexSelected = index
        }
      })
    }
  }, [itemSelected])

  React.useEffect(() => {
    console.log("index selected")
    // setSelectedItem(itemSelected)
    if (typeof indexSelected !== 'undefined') {
      dataDropdown.map((item, index) => {
        if (indexSelected === index) {
          setSelectedItem(item)
        }
      })
    }
  }, [indexSelected])

  const _selectThisItem = (selected) => {
    console.log("selected: ", selected)
    setIsListShown(false)
    setSelectedItem(selected)
    input.current.blur()
    onItemSelected(selected)
  }

  return (
    <View style={[{
      width: '90%',
      margin: 4,
      zIndex: 1000,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,.2)'
    }, containerStyle]}
      onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
        setInputHeigh(height)
      }}
    >
      <TextInput
        style={[{
            fontSize: 17,
            padding: 8
          }, innerStyle]}
        ref={input}
        value={selectedItem !== null ? (selectedItem.label ? selectedItem.label : selectedItem.value) : label}
        rightIcon={{ type: 'font-awesome', name: 'chevron-down' }}
        editable={false}
        onTouchStart={() => {
          console.log("onFocus");
          _onFocus()
        }}
        onBlur={() => {
          console.log("onBlur")
        }}

      />
      {isListShown ? (
        <ListDropDown isListShown data={dataDropdown} selectThisItem={_selectThisItem}
          inputHeigh={inputHeigh} selectedItem={selectedItem} containerListStyle listStyle />
      ) : (
          <View />
        )}
    </View>

  )
}

const ListDropDown = ({ data, selectThisItem, inputHeigh, containerListStyle, listStyle }) => {
  const { data, selectThisItem, inputHeigh, containerListStyle, listStyle } = props

  return (
    <View style={[{
      paddingHorizontal: 4,
      paddingVertical: 4,
      borderColor: 'rgba(0,0,0,.2)',
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      position: 'absolute',
      top: inputHeigh,
      left: 0,
      width: '100%',
      backgroundColor: 'white'
    }, containerListStyle]}>
      {
        data.map((item, index) => {
          const label = item.label ? item.label : item.value

          return (
            <TouchableOpacity
              selected={item}
              onPress={() => selectThisItem(item)}
              key={item.value + index}
              style={{
                borderBottomColor: 'rgba(0,0,0,.2)',
                borderBottomWidth: index == (data.length - 1) ? 0 : 1,
              }}>
              <Text style={[{
                fontSize: 17,
                paddingLeft: 8,
                paddingVertical: 8
              }, listStyle]}>{label}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  dropdownStyle: ViewPropTypes.style,
  buttonStyle: PropTypes.oneOfType([ViewPropTypes.style, PropTypes.arrayOf(ViewPropTypes.style)]),
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })),
  onItemSelected: PropTypes.func,
  itemSelected: PropTypes.object
};

export { Dropdown };
export default withTheme(Dropdown, 'Dropdown');
