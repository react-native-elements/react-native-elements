---
id: button
title: Button
---

Buttons can be used to interact with the screen. It takes the following props.

<img src="https://i.imgur.com/ptrwAVW.png" width="300" />

```js
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

<Button
  title='BUTTON'
/>

<Button
  icon={
    <Icon
      name='arrow-right'
      size={15}
      color='white'
    />
  }
  title='BUTTON WITH ICON'
/>

<Button
  icon={
    <Icon
      name='arrow-right'
      size={15}
      color='white'
    />
  }
  iconRight
  title='BUTTON WITH RIGHT ICON'
/>

<Button
  title="LOADING BUTTON"
  loading
  loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
  titleStyle={{ fontWeight: "700" }}
  buttonStyle={{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{ marginTop: 20 }}
/>
```

#### Button props

> Also receives all [TouchableNativeFeedback](http://facebook.github.io/react-native/docs/touchablenativefeedback.html#props) (Android) or [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html#props) (iOS) props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| title | none | string | button title (optional) |
| titleStyle | none | Text style (object) | add additional styling for title component (optional) |
| titleProps | none | object (style) | add additional props for Text component (optional) |
| buttonStyle | none | object (style) | add additional styling for button component (optional) |
| clear | none | boolean | makes the button transparent (optional) |
| loading | none | boolean | prop to display a loading spinner (optional) |
| loadingStyle | none | View style (object) | add additional styling for loading component (optional) |
| loadingProps | none | object (style) | add additional props for ActivityIndicator component (optional) |
| onPress | none | function | onPress method (optional) |
| containerStyle | none | View style (object) | styling for Component container |
| icon | none | React Native Component | displays a centered icon (when no title) or to the left (with text). (can be used along with iconRight as well) |
| iconContainerStyle | none | View style (object) | styling for Icon Component container |
| iconRight | none | boolean | displays Icon to the right of title. Needs to be used along with icon prop |
| linearGradientProps | none | object | displays a linear gradient (supports Expo only) |
| TouchableComponent | TouchableOpacity (ios) or TouchableNativeFeedback (android) | Touchable Component | component for user interaction |
| ViewComponent | View | React Native Component | container for linear gradient |
