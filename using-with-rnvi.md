# Using react-native-elements with react-native-vector-icons

### Custom Icons with Buttons

Any custom icons can we used with Buttons using CustomFonts feature in "react-native-vector-icons". Create custom Icon function following instructions [here](https://github.com/oblador/react-native-vector-icons#custom-fonts)

```js

// Icon function from 'react-native-vector-icons'
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

// Using the above create Icon function, with 'custom' type
<Button
  raised
  icon={{ name: 'name-of-icon', type: 'custom', iconFunction: Icon }}
  title="BUTTON WITH ICON"
/>

```
