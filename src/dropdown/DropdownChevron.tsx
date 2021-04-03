import React from 'react';
import { StyleSheet, Platform, StyleProp, ViewStyle } from 'react-native';
import { withTheme } from '../config';
import Icon, { IconProps } from '../icons/Icon';
type DropdownChevron = IconProps & {
    dropState?:boolean
    containreStyle?: StyleProp<ViewStyle>;
    openedName?:string;
    collapsedName?:string;
    openType?:string;
    collapseType?:string;
}
const DropdownChevron:React.FunctionComponent<DropdownChevron>=(props) =>{
    const { 
        dropState,
        containerStyle,
        openedName,
        collapsedName,
        openType,
        collapseType,
    } = props
    return (
    <Icon
      color="#D1D1D6"
      type={
        dropState?
        collapseType?collapseType:
            Platform.OS === 'ios' ? 'ionicon' : 'material'
        :
        openType?
            openType:
            Platform.OS === 'ios' ? 'ionicon' : 'material'
      }
      name={
        dropState?
        collapsedName?collapsedName:
            Platform.OS === 'ios'
            ? 'chevron-down-outline'
            : 'keyboard-arrow-down'
        :
        openedName?
            openedName:
            Platform.OS === 'ios'
            ? 'chevron-up-outline'
            : 'keyboard-arrow-up'
      }
      size={16}
      containerStyle={StyleSheet.flatten([
        { alignSelf: 'center' },
        containerStyle,
      ])}
      {...props}
    />
  );
}
export default withTheme(DropdownChevron, 'DropdownChevron');