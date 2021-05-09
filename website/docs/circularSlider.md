---
id: circularslider
title: Circular Slider
---

> This is a `react-native-elements-universe` component

import Props from './props/circularslider.md'

Sliders allow users to make selections from a range of values.

<div className="component-preview component-preview--grid component-preview--grid-10">
  <figure>
    <img src="/img/circularSlider1.gif" alt="Circular Slider" />
    <figcaption>With Thumb (as a slider)</figcaption>
  </figure>
  <figure>
    <img src="/img/circularSlider2.gif" alt="Circular Slider" />
    <figcaption>Without Thumb (as a Progress Indicator)</figcaption>
  </figure>
  <figure>
    <img src="/img/arcSlider.png" alt="Arc Slider" />
  </figure>
</div>

## Usage

```js
import { CircularSlider } from 'react-native-elements-universe';

<CircularSlider value={value} onChange={setValue} />;

<CircularSlider value={value} noThumb />;

// 90 deg Arc
<CircularSlider maxAngle={90} />;
```

> Either use percentage (0 to 100) in `value` or specify `maximumValue` & `minimumValue`

---

<Props />

---
