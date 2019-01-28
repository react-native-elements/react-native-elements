---
id: version-0.19.1-pricing
title: Pricing
original_id: pricing
---

![Pricing Component](/react-native-elements/img/pricing.png)

## Usage

```jsx
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

### `buttonFont`

specify button font family

|  Type  |                 Default                 |
| :----: | :-------------------------------------: |
| string | System font (iOS), Sans Serif (android) |

---

### `infoFont`

specify pricing information font family

|  Type  |                      Default                      |
| :----: | :-----------------------------------------------: |
| string | System font bold (iOS), Sans Serif Bold (android) |

---

### `pricingFont`

specify pricing font family

|  Type  |                            Default                             |
| :----: | :------------------------------------------------------------: |
| string | System font (font weight 700) (iOS), Sans Serif Bold (android) |

---

### `titleFont`

specify title font family

|  Type  |                             Default                             |
| :----: | :-------------------------------------------------------------: |
| string | System font (font weight 800) (iOS), Sans Serif Black (android) |

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

color scheme for button & title (required)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `title`

title (required)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |
