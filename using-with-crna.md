# Using react-native-elements with create-react-native-app

#### Step 1
Since you cannot use *react-native link* in create-react-native-app we cannot use react-native-vector-icons repo. Instead we will be using a modified version which is supported. Instead use [@expo/vector-icons](https://github.com/exponent/vector-icons)

```
yarn add @expo/vector-icons react-native-elements
```
or

```
npm install @expo/vector-icons react-native-elements --save
```

#### Step 2

Start using the components

```js
import {Button} from 'react-native-elements';

<Button
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON' />
```

