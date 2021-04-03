import React from 'react';
import { StyleSheet,TouchableOpacity, Platform, View, StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';
import { withTheme } from '../config';
type DropdownHeadProps = TouchableOpacityProps & {
    containerStyle?:StyleProp<ViewStyle>;
    children?:React.ReactNode
    disabled?:boolean
    pad: number;
    disabledStyle?: StyleProp<ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    onPress?:()=>{};
    dropDownPress:()=>{};
    dropState:boolean;
}
type PadViewProps = {
    Component: React.ComponentClass;
    pad: number;
    style?:any;
};
class PadView extends React.Component<PadViewProps> {
    _root!: React.RefObject<PadView>;
    constructor(props: PadViewProps) {
      super(props);
      this._root = React.createRef();
    }
    setNativeProps = (nativeProps: any) => {
      this._root.current!.setNativeProps(nativeProps);
    };
    render() {
        const { children, pad, Component, ...props } = this.props;
        const childrens = React.Children.toArray(children);
        const { length } = childrens;
        const Container = Component || View;
        return (
        <Container {...props} ref={this._root} testID="padView">
            {React.Children.map(
            childrens,
            (child, index) =>
                child && [
                child,
                index !== length - 1 && <View style={{ paddingLeft: pad }} />,
                ]
            )}
        </Container>
        );
    }
}
const DropdownHead: React.FunctionComponent<DropdownHeadProps> = (props)=>{
    const {
        containerStyle,
        disabled=false,
        disabledStyle,
        topDivider=false,
        bottomDivider=false,
        pad=16,
        dropState,
        dropDownPress,
        onPress=()=>{},
        children,
        ...attributes
    } = props;
    return(
        <TouchableOpacity  
        {...attributes} 
        onPress={()=>{
            dropDownPress();
            onPress();
        }}
        disabled={disabled} >
            <PadView
                Component={View}
                style={StyleSheet.flatten([
                {
                    ...Platform.select({
                    ios: {
                        padding: 14,
                    },
                    default: {
                        padding: 16,
                    },
                    }),
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                topDivider && { borderTopWidth: StyleSheet.hairlineWidth },
                bottomDivider && { borderBottomWidth: StyleSheet.hairlineWidth },
                containerStyle,
                disabled && disabledStyle,
                ])}
                pad={pad}
            >
            {React.Children.map(children,(child,i)=>{
              return  React.cloneElement(child as React.ReactElement, {dropState:dropState})
            })}
      </PadView>
        </TouchableOpacity>
    )
}
export default withTheme(DropdownHead, 'DropdownHead');