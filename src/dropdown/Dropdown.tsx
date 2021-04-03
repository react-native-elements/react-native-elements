import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Animated,
  Easing,
  ScrollViewProps,
} from 'react-native';
import DropdownContent from './DropdownContent';
import  DropdownTitle  from './DropdownTitle';
import DropdownSubtitle from './DropdownSubtitle';
import DropdownItem from './DropdownItem';
import DropdownHead from './DropdownHead';
import DropdownChevron from './DropdownChevron';
import { withTheme } from '../config';

export type DropdownProps = ScrollViewProps & {
    children:React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    initalNumberOfelement:number;
    animationDuration?:number;

}
interface Dropdown extends React.FunctionComponent<DropdownProps> {}

const Dropdown:Dropdown= ((props) => {
    const {
        children,
        containerStyle,
        initalNumberOfelement,
        animationDuration=200,
        ...attributes
    } = props
    if(!initalNumberOfelement){
      console.error(
        "You need to define an inital number i.e number of elements to render and rest in scrollable."
      );
    }
    const childrens = React.Children.toArray(children);
    if(childrens.length<1){
      console.error(
        "You need to define Dropdown head."
      );
    }
    const [heightOfContainer,setHeightofContainer ] = React.useState<number>(0.1)
    
    const [flag,setflag]=React.useState(true);
    
    const slider = React.useRef<Animated.Value>(new Animated.Value(0)).current;
    const extract = () => {
      slider.setValue(0);
      Animated.timing(slider, {
          toValue: 1,
          duration: animationDuration,
          easing:Easing.cubic,
          useNativeDriver:false,
      }).start(()=>{setflag(false)});
    };
    const retreact = () => {
      slider.setValue(1);
      Animated.timing(slider, {
        toValue: 0,
        duration: animationDuration,
        easing:Easing.cubic,
        useNativeDriver:false,
      }).start(()=>{setflag(true)});
    };
    const sliderInterpolate = slider.interpolate({
      inputRange:[0,0.2,0.4,0.6,0.8,1],
      outputRange:[0*heightOfContainer/5,1*heightOfContainer/5,2*heightOfContainer/5,3*heightOfContainer/5,4*heightOfContainer/5,5*heightOfContainer/5]
    })


   
    return(
        <View style={containerStyle}>
          {React.cloneElement(children[0] as React.ReactElement, { dropDownPress:()=>{
            if(flag){
              extract();
            }
            else{
              retreact();
            }
          },dropState:flag})}
          <Animated.ScrollView {...attributes} 
            style={StyleSheet.flatten([{
              maxHeight:sliderInterpolate,
              overflow: 'hidden',
              },
              containerStyle
              ])}>
              {React.Children.map(childrens,(child,i)=>{
                  if(i===0){
                    return null;
                  }
                  return(
                    <View onLayout={(event)=>{
                      const {height} = event.nativeEvent.layout
                      if(i-1<initalNumberOfelement){
                        const newHeight = heightOfContainer+height
                        setHeightofContainer(newHeight)
                      }
                    }}>
                      {React.cloneElement(child as React.ReactElement, { dropDownPress:()=>{
                        
                        if(flag){
                          return extract();
                        }
                        else{
                          return retreact();
                        }
                      }})}
                    </View>
                  )
              })}
          </Animated.ScrollView>
        </View>
    )
});

export { Dropdown };
const ThemedDropdown = Object.assign(withTheme(Dropdown, 'Dropdown'), {
    Title: DropdownTitle,
    Content: DropdownContent,
    Subtitle:DropdownSubtitle,
    Item:DropdownItem,
    Head: DropdownHead,
    Chevron: DropdownChevron,
  });
export default ThemedDropdown;
