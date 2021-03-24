---
id: button
title: Button
---

import Props from './props/button.md'

Buttons are touchable elements used to interact with the screen. They may
display text, icons, or both. Buttons can be styled with several props to look a
specific way.

<div className="component-preview component-preview--grid component-preview--grid-3">
  <figure>
    <img src="/img/button/button--solid.jpg" alt="Solid Button" />
    <figcaption>Solid</figcaption>
  </figure>
  <figure>
  <img src="/img/button/button--clear.jpg" alt="Clear Button" />
    <figcaption>Clear</figcaption>
  </figure>
  <figure>
  <img src="/img/button/button--outline.jpg" alt="Outline Button" />
    <figcaption>Outline</figcaption>
  </figure>
</div>

## Usage

```js
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

<Button
  title="Solid Button"
/>

<Button
  title="Outline button"
  type="outline"
/>

<Button
  title="Clear button"
  type="clear"
/>

<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>

<Button
  icon={{
    name: "arrow-right",
    size: 15,
    color: "white"
  }}
  title="Button with icon object"
/>

<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  iconRight
  title="Button with right icon"
/>

<Button
  title="Loading button"
  loading
/>
```

---

<Props />

---

## LinearGradient Usage

Using LinearGradient in React Native Elements is supported through the
[react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
package. If you're using expo or create-react-native-app then you can use
`linearGradientProps` prop right out the box with no additional setup.

For react-native-cli users, make sure to follow the
[installation instructions](https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project)
and use it like this:

```jsx
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

...

<Button
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
/>
```

## Also See

[Floating Action Button](https://reactnative.dev/docs/fab)
