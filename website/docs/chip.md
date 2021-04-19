---
id: chip
title: Chip
---

import Props from './props/chip.md'

Chips are compact elements that represent an input, attribute, or action. They may
display text, icons, or both.

<div className="component-preview component-preview--grid component-preview--grid-3">
  <figure>
    <img src="/img/chip/chip--solid.jpg" alt="Solid Chip" />
    <figcaption>Solid</figcaption>
  </figure>
  <figure>
  <img src="/img/chip/chip--outline.jpg" alt="Outline Chip" />
    <figcaption>Outline</figcaption>
  </figure>
</div>

## Usage

```js
import { Chip } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

<Chip
	title="Solid Chip"
/>

<Chip
	title="Disabled Chip"
	disabled
/>

<Chip
	title="Outlined Chip"
	type="outline"
/>

<Chip
	title="Outlined & Disabled"
	type="outline"
	disabled
/>

<Chip
	title="Left Icon Chip"
	icon={{
	name: "bluetooth",
	type: "font-awesome",
	size: 20,
	color: 'white',
	}}
/>

<Chip
	title="Right Icon Chip"
	icon={{
	name: "close",
	type: "font-awesome",
	size: 20,
	color: "white",
	}}
	iconRight
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
import { Chip } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

...

<Chip
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
/>
```
