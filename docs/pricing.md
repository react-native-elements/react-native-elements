---
id: pricing
title: Pricing
---

Pricing is a convenience component used to display features and pricing tables
in a beautiful and engaging way.

![Pricing Component](/react-native-elements/img/pricing.png)

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

- [`containerStyle`](#containerstyle)
- [`buttonFont`](#buttonfont)
- [`infoFont`](#infofont)
- [`pricingFont`](#pricingfont)
- [`titleFont`](#titlefont)
- [`wrapperStyle`](#wrapperstyle)
- [`price`](#price)
- [`onButtonPress`](#onbuttonpress)
- [`button`](#button)
- [`info`](#info)
- [`color`](#color)
- [`title`](#title)

---

## Reference

### `containerStyle`

outer component styling (optional)

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `infoStyle`

specify pricing information style

|      Type      | Default |
| :------------: | :-----: |
| style (object) |  none   |

---

### `pricingStyle`

specify pricing text style

|      Type      | Default |
| :------------: | :-----: |
| style (object) |  none   |

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

---

### `price`

price (required)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `onButtonPress`

function to be run when button is pressed

| Type | Default |
| :--: | :-----: |
| any  |  none   |

---

### `button`

button information (required)

|               Type                | Default |
| :-------------------------------: | :-----: |
| object {title, icon, buttonStyle} |  none   |

---

### `info`

pricing information (optional)

|       Type       | Default |
| :--------------: | :-----: |
| array of strings |  none   |

---

### `color`

color scheme for button & title

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `title`

title (required)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |
