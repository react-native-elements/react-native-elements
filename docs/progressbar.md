---
id: progressbar
title: ProgressBar
---

Progress bar is an indicator used to present progress of some activity or task.

<div class="component-preview">
  <figure>
    <img style="height:200px" src="/react-native-elements/img/progressbar.png" alt="Progress Bar" />
  </figure>
</div>

## Usage

```js
import { ProgressBar } from 'react-native-elements';

<ProgressBar progress={0.5} borderRadius={16} />

<ProgressBar progress={0.8} color="red" />

<ProgressBar indeterminate />

<ProgressBar
  indeterminate
  unfilledColor="black"
/>
```

---

## Props

- [`animated`](#animated)
- [`animationConfig`](#animationConfig)
- [`animationType`](#animationType)
- [`borderColor`](#borderColor)
- [`borderRadius`](#borderRadius)
- [`borderWidth`](#borderWidth)
- [`color`](#color)
- [`height`](#height)
- [`indeterminate`](#indeterminate)
- [`indeterminateAnimationDuration`](#indeterminateAnimationDuration)
- [`progress`](#progress)
- [`style`](#style)
- [`unfilledColor`](#unfilledColor)
- [`width`](#width)

---

## Reference

### `animated`

prop to indicate if progress will be animated.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

---

### `animationConfig`

animation config object

|  Type  |      Default      |
| :----: | :---------------: |
| object | { bounciness: 0 } |

---

### `animationType`

animation behaviour type.

|  Type  | Default |           Values            |
| :----: | :-----: | :-------------------------: |
| string | spring  | 'decay', 'timing', 'spring' |

---

### `borderColor`

Progress bar border color.

|      Type      | Default |
| :------------: | :-----: |
| Color (string) | primary |

---

### `borderRadius`

radius border.

|  Type  | Default |
| :----: | :-----: |
| Number |    0    |

---

### `borderWidth`

width of the border.

|  Type  | Default |
| :----: | :-----: |
| Number |    1    |

---

### `color`

Progress bar color.

|      Type      | Default |
| :------------: | :-----: |
| Color (string) | primary |

---

### `height`

bar height.

|  Type  | Default |
| :----: | :-----: |
| Number |    8    |

---

### `indeterminate`

prop to indicate if progress will be indeterminate. if true, ignore `progress` prop.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `indeterminateAnimationDuration`

indeterminate animation duration time (in miliseconds).

|  Type  | Default |
| :----: | :-----: |
| Number |  1000   |

---

### `progress`

progress value between 0 and 1.

|  Type  | Default |
| :----: | :-----: |
| Number |    0    |

---

### `unfilledColor`

set color for unfilled zone.

|      Type      | Default |
| :------------: | :-----: |
| Color (string) |  none   |

---

### `style`

add additional styling for progressbar component (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| View style (object) | Internal Style |

---

### `width`

width of the progressbar.

|  Type  |  Default   |
| :----: | :--------: |
| Number | takes 100% |
