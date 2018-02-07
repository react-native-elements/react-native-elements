Buttons can be used to interact with the screen. It takes the following props.

<img src="https://i.imgur.com/ptrwAVW.png" width="300" />

```js
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

<Button
  text='BUTTON'
/>

<Button
  icon={
    <Icon
      name='arrow-right'
      size={15}
      color='white'
    />
  }
  text='BUTTON WITH ICON'
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
  text='BUTTON WITH RIGHT ICON'
/>

<Button
  text="LOADING BUTTON"
  loading
  loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
  textStyle={{ fontWeight: "700" }}
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

> Also receives all TouchableNativeFeedback (Android) or TouchableOpacity (iOS) props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| text | none | string | button text (optional) |
| textStyle | none | Text style (object) | add additional styling for text component (optional) |
| textProps | none | object (style) | add additional props for Text component (optional) |
| buttonStyle | none | object (style) | add additional styling for button component (optional) |
| clear | none | boolean | makes the button transparent (optional) |
| loading | none | boolean | prop to display a loading spinner (optional) |
| loadingStyle | none | View style (object) | add additional styling for loading component (optional) |
| loadingProps | none | object (style) | add additional props for ActivityIndicator component (optional) |
| onPress | none | function | onPress method (optional) |
| containerStyle | none | View style (object) | styling for Component container |
| icon | none | React Native Component | displays a centered icon (when no text) or to the left (with text). (can be used along with iconRight as well) |
| iconContainerStyle | none | View style (object) | styling for Icon Component container |
| iconRight | none | boolean | displays Icon to the right of Text. Needs to be used along with icon prop |
| linearGradientProps | none | object | displays a linear gradient (supports Expo only) |
| TouchableComponent | TouchableOpacity (ios) or TouchableNativeFeedback (android) | Touchable Component | component for user interaction |
| ViewComponent | View | React Native Component | container for linear gradient |
