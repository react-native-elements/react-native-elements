# Using react-native-elements with create-react-native-app

#### Step 1
Since you cannot use *react-native link* in create-react-native-app we cannot use react-native-vector-icons repo. Instead we will be using a modified version which is supported. Instead use [@expo/vector-icons](https://github.com/exponent/vector-icons)

```
yarn add @expo/vector-icons react-native-elements
```
or

```
npm install @expo/vector-icons react-native-elements
```

**Note: As of right now there is an issue with create-react-native-app which doesn't recognize .ttf fonts. To fix this do the following. This is only required until [react-community/create-react-native-app#53](https://github.com/react-community/create-react-native-app/issues/53) is fixed**

In app.json add the following

```js
{
  "expo": {
    "sdkVersion": "14.0.0",
    "packagerOpts": {
      "assetExts": ["ttf"]
    }
  }
}
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

