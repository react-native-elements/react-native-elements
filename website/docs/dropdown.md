---
id: dropdown
title: Dropdown
---

import Props from './props/dropdown.md'

A dropdown picker/selector component, it offers lists of options and the title of dropdown is set on the basis of selected option.

<div className="component-preview component-preview--grid component-preview--grid-10">
  <figure>
    <img src="/img/dropdown.gif" alt="Dropdown" />
    <figcaption>Dropdown</figcaption>
  </figure>
</div>

## Usage

```js
import { Dropdown } from 'react-native-elements';
```

```js

const version = [
        {element:"Version 0.0.1",value:0,onPress:()=>{}},
        {element:"Version 0.1.2",value:1,onPress:()=>{}},
        {element:"Version 3.0.1 Beta",value:2,onPress:()=>{}},
        {element:"Version 4 Alpha",value:3,onPress:()=>{}},
]
const Gender = [
    {element:"Male",value:"Male",onPress:()=>{}},
    {element:"Female",value:"Female",onPress:()=>{}},
    {element:"Prefer not to say",value:"Prefer not to say",onPress:()=>{}},
    {element:"Other",value:"Other",onPress:()=>{}},
]


//Default theme
<Dropdown 
    onChange={(value)=>{this.setState({selected:value})}} 
    title="--Select Version--" 
    items={version}/> 

// Customized
<Dropdown 
    titleStyle={{color:'#1d55d9'}}
    icon={<Icon name="feather" type="feather" color="#1d55d9" />}
    containerStyle={{borderRadius:10,paddingHorizontal:5,borderColor:"#1d55d9"}}
    onChange={(value)=>{this.setState({selected:value})}} 
    dividerStyle={{width:2,color:"grey"}}
    textStyle={{color:"#1D55D9"}}
    animationDuration={100}
    title="--versions--" 
    items={version}/>

// Dark theme
<Dropdown 
    theme="dark"
    onChange={(value)=>{this.setState({selected:value})}} 
    title="--Gender--" 
    items={Gender}/> 

// With icons
<Dropdown 
    icon={<Icon name="share-2" type="feather" />}
    titleContainerStyle={{paddingHorizontal:5}}
    containerStyle={{borderRadius:10}}
    onChange={(value)=>{this.setState({selected:value})}} 
    animationDuration={100}
    title="--Share--" 
    textContainerStyle={{paddingHorizontal:5}}
    items={[
        {element:'Facebook',value:'Facebook',icon:<Icon name="facebook" type="feather" />},
        {element:'Twitch',value:'Twitch',icon:<Icon name="twitch" type="feather" />},
        {element:'Twitter',value:'Twitter',icon:<Icon name="twitter" type="feather" />},
    ]}/> 

// With react native elements
const renderElement = (iconName,detailText)=>{
    return(
      <View style={{flexDirection:'row'}}>
          <Icon  name={iconName} size={18} type="feather" />
          <Text style={{paddingLeft:5}}>{detailText}</Text>
      </View>
    )
}
<Dropdown 
    titleContainerStyle={{padding:5}}
    containerStyle={{borderRadius:10}}
    onChange={(value)=>{this.setState({selected:value})}} 
    animationDuration={100}
    title={renderElement('feather',"Feather Icon")}
    textContainerStyle={{padding:5}}
    items={[
        {element:renderElement('activity','Activity'),value:"activity"},
        {element:renderElement('aperture','Aperture'),value:"aperture"},
        {element:renderElement('anchor','Anchor'),value:"anchor"},
        {element:renderElement('alert-Triangle','Alert'),value:"alert"},
        {element:renderElement('archive','Archive'),value:"archive"},
        {element:renderElement('at-sign','At-sign'),value:"at-sign"},
        {element:renderElement('battery-charging','Battery-charging'),value:"battery-charging"},
        {element:renderElement('battery','battery'),value:"Battery"},
        {element:renderElement('bell','Bell'),value:"bell"},
    ]}/> 


```

---

<Props />

---
