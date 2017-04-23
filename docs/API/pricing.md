![Pricing Component](http://i.imgur.com/EMMDZwo.png)

```js
import { PricingCard } from 'react-native-elements'

<PricingCard
  color='#4f9deb'
  title='Free'
  price='$0'
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>

```

#### PricingCard props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| title | none | string | title (required) |
| price | none | string | price (required) |
| color | none | string | color scheme for button & title (required) |
| info | none | array of strings | pricing information (optional) |
| button | none | object {title, icon, buttonStyle} | button information (required) |
| onButtonPress | none | any | function to be run when button is pressed |
| containerStyle | inherited styling | object (style) | outer component styling (optional) |
| wrapperStyle | inherited styling | object (style) | inner wrapper component styling (optional) |
| titleFont | System font (font weight 800) (iOS), Sans Serif Black (android) | string | specify title font family |
| pricingFont | System font (font weight 700) (iOS), Sans Serif Bold (android) | string | specify pricing font family |
| infoFont | System font bold (iOS), Sans Serif Bold (android) | string | specify pricing information font family |
| buttonFont | System font (iOS), Sans Serif (android) | string | specify button font family |
