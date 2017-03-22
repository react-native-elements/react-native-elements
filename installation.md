# Installation instructions

## Step 1: install react-native-vector-icons

If you already have this installed, or are using create-react-native-app, this isn't necessary.

`npm i react-native-vector-icons --save && react-native link react-native-vector-icons`

*If you have any issues with icons not working or installation of React Native Vector Icons, check out their installation guide [here](https://github.com/oblador/react-native-vector-icons#installation)*

## Step 2: install react-native-elements

```
yarn add react-native-elements
```

or

```
npm i react-native-elements --save
```

## Step 3: use it

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
