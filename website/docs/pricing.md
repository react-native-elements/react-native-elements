---
id: pricing
title: Pricing
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Pricing is a convenience component used to display features and pricing tables
in a beautiful and engaging way.

<img alt="Pricing Component" src={useBaseUrl('img/pricing.png')} />

## Usage

```js
import { PricingCard } from 'react-native-elements';

<PricingCard
  color="#4f9deb"
  title="Free"
  price="$0"
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>;
```

---

## Props

- [`button`](#button)
- [`buttonFont`](#buttonfont)
- [`color`](#color)
- [`containerStyle`](#containerstyle)
- [`info`](#info)
- [`infoFont`](#infofont)
- [`onButtonPress`](#onbuttonpress)
- [`price`](#price)
- [`pricingFont`](#pricingfont)
- [`title`](#title)
- [`titleFont`](#titlefont)
- [`wrapperStyle`](#wrapperstyle)

---

## Reference

### `button`

button information (required)

|                              Type                              | Default |
| :------------------------------------------------------------: | :-----: |
| {[...Button props](button.md#props)}<br/>**OR**<br/> component |  none   |

---

### `color`

color scheme for button & title

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `containerStyle`

outer component styling (optional)

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `info`

pricing information (optional)

|       Type       | Default |
| :--------------: | :-----: |
| array of strings |  none   |

---

### `infoStyle`

specify pricing information style

|      Type      | Default |
| :------------: | :-----: |
| style (object) |  none   |

---

### `onButtonPress`

function to be run when button is pressed

| Type | Default |
| :--: | :-----: |
| any  |  none   |

---

### `price`

price (required)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `pricingStyle`

specify pricing text style

|      Type      | Default |
| :------------: | :-----: |
| style (object) |  none   |

---

### `title`

title (required)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `titleStyle`

specify title text style

|      Type      | Default |
| :------------: | :-----: |
| style (object) |  none   |

---

### `wrapperStyle`

inner wrapper component styling (optional)

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |
