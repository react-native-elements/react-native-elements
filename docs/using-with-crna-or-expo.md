# Installation with create-react-native-app or Expo

## Step 1: install the package

*Create React Native App* and *Expo* projects include react-native-vector-icons out of the box, so all you need to do
is install react-native-elements.

```
yarn add react-native-elements
```
or

```
npm install react-native-elements
```

## Step 2: use it

Start using the components

```js
import { Button } from 'react-native-elements';

<Button
  raised
  icon={{name: 'home', size: 32}}
  buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
  textStyle={{textAlign: 'center'}}
  title={`Welcome to\nReact Native Elements`} />
```
