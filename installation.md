# Installation instructions

#### Step 1

Install react-native-vector-icons (if you do not already have it)

`npm i react-native-vector-icons --save && react-native link react-native-vector-icons`

*If you have any issues with icons not working or installation of React Native Vector Icons, check out their installation guide [here](https://github.com/oblador/react-native-vector-icons#installation)*

#### Step 2

Install React Native Elements

`npm i react-native-elements --save`

or

`yarn add react-native-elements`

#### Step 3

Start using components

```js
import {
  Button
} from 'react-native-elements'

<Button
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON' />

```
