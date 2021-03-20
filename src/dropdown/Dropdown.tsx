import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Dimensions,
  TouchableOpacityProps,
  TouchableOpacity,
  Animated,
  TextStyle,
  Easing,
  ScrollViewProps
} from 'react-native';
import Icon, { IconNode } from '../icons/Icon';
const {width,height} = Dimensions.get('screen')

export type ItemProps = {
    element:string |React.ReactElement<{}>;
    value:string|number|boolean;
    onPress?:Function;
    icon?:IconNode;
}
export type DividerStyle = {
    width?:number;
    endRaius?:number;
    color?:string;
}

export type DropdownProps = TouchableOpacityProps & ScrollViewProps & {
    title?: string |React.ReactElement<{}> ;
    titleStyle?:StyleProp<TextStyle>;
    titleContainerStyle?:StyleProp<ViewStyle>;
    chevron?:boolean;
    containerStyle?:StyleProp<ViewStyle>;
    chevronColor?:string;
    textStyle?: StyleProp<TextStyle>;
    items:Array<ItemProps>;
    maxHeight?:number;
    animationDuration?:number;
    onChange?:(value)=>void;
    icon?:IconNode;
    iconOpen?:IconNode;
    iconClose?:IconNode;
    textContainerStyle?:StyleProp<ViewStyle>;
    chevronSize?:number;
    disabled?:boolean;
    divider?:boolean;
    dividerStyle?:DividerStyle;
    theme?:'default'|'dark';
}
const Dropdown:React.FunctionComponent<DropdownProps> = (props: DropdownProps)=>{
    const {
        title,
        titleStyle,
        containerStyle,
        textContainerStyle,
        chevron=true,
        chevronColor,
        textStyle,
        items,
        onChange=(value)=>console.log('Please attach a method to this component'),
        maxHeight=height/10,
        animationDuration=200,
        icon,
        iconOpen,
        iconClose,
        chevronSize=20,
        disabled=false,
        dividerStyle={width:1},
        divider=true,
        theme='default',
        titleContainerStyle,
        ...attributes
    }=props;
    const slider = React.useRef<Animated.Value>(new Animated.Value(0)).current;
    const [sliderState,setSliderState] = React.useState<boolean>(false);
    const [currentPtr,setCurrentPtr] = React.useState<number>(-1);
    const extract = () => {
        slider.setValue(0);
        Animated.timing(slider, {
            toValue: 1,
            duration: animationDuration,
            easing:Easing.cubic,
            useNativeDriver:false,
        }).start();
    };
    const retreact = () => {
        slider.setValue(1);
        Animated.timing(slider, {
          toValue: 0,
          duration: animationDuration,
          easing:Easing.cubic,
          useNativeDriver:false,
        }).start(()=>setSliderState(false));
    };
    const sliderInterpolate = slider.interpolate({
        inputRange:[0,0.2,0.4,0.6,0.8,1],
        outputRange:[0*maxHeight/5,1*maxHeight/5,2*maxHeight/5,3*maxHeight/5,4*maxHeight/5,5*maxHeight/5]
    })
    return(
        <View style={
            StyleSheet.flatten([
                {
                    opacity:disabled?0.5:1,
                    zIndex:1,
                    borderWidth:1,
                    borderColor:theme==='default'?'black':"white"
                },
                containerStyle
            ])
            }>
            <TouchableOpacity {...attributes} 
                disabled={disabled}
                onPress={()=>{
                    if(sliderState){
                        retreact();
                    }
                    else{
                        extract();
                        setSliderState(true)
                    }
                }}
                style={StyleSheet.flatten([
                    {
                        justifyContent:"space-between",
                        flexDirection:'row',
                        overflow:"hidden",
                        borderWidth:0,
                        borderBottomWidth:sliderState?dividerStyle.width?dividerStyle.width:1:0,
                        borderColor:dividerStyle.color?dividerStyle.color:theme==='default'?'black':'white',
                        borderRadius:dividerStyle.endRaius?dividerStyle.endRaius:0,
                    },
                    titleContainerStyle
                ])}>
                <View  style={{alignSelf:'center'}}>
                    {currentPtr===-1?
                        typeof title==='string'?
                            <Text style={StyleSheet.flatten([
                                styles.defaultText,
                                {
                                    color:theme==='default'?'black':'white',
                                },
                                titleStyle,
                            ])}>{title}</Text>
                            :
                            title
                        :
                        typeof items[currentPtr].element==='string'?
                            <Text  style={StyleSheet.flatten([
                                styles.defaultText,
                                {
                                    color:theme==='default'?'black':'white'
                                },
                                titleStyle,
                                textStyle,
                            ])}>{items[currentPtr].element}</Text>
                            :
                            items[currentPtr].element
                    }
                </View>
                <View  style={{alignSelf:'center'}}>
                    {chevron?
                        icon?
                            icon
                            :
                            iconOpen?
                                sliderState?
                                    iconClose?iconClose:iconOpen:iconOpen
                                :
                                <Icon color={chevronColor?chevronColor:theme==='default'?'black':'white'} size={chevronSize} name={sliderState?"chevron-up":"chevron-down"} type="feather" />
                        :
                        null
                    }
                 </View>
            </TouchableOpacity>
            <Animated.ScrollView style={StyleSheet.flatten([
                    {
                        overflow:'hidden',
                        height:sliderInterpolate,
                    },

                ])}
                {...attributes}
                >
                {items.map((data,index)=>{
                    return(
                        <TouchableOpacity 
                            key={index} 
                            style={StyleSheet.flatten([
                                {
                                    flexDirection:'row',
                                    justifyContent:'space-between'
                                },
                                textContainerStyle
                            ])}
                            onPress={()=>{
                                retreact();
                                data.onPress?data.onPress():null;
                                onChange(data.value);
                                setCurrentPtr(index);
                            }}>
                            <Text  style={StyleSheet.flatten([
                                styles.defaultText,
                                {
                                    color:theme==='default'?'black':'white'
                                },
                                textStyle,
                            ])}>{data.element}</Text>
                            {data.icon?data.icon:null}
                        </TouchableOpacity>
                    )
                })}
            </Animated.ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    defaultText:{
        color:'black',
        fontSize:15,
        paddingVertical:2,
        paddingHorizontal:2,
    }
})
export {Dropdown};
