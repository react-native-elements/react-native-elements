---
id: progressbar
title: ProgressBar
---

Progress bars are indicators used to present the progress of some activity or task.

<div class="component-preview">
  <figure>
    <img style="height:200px" src="/react-native-elements/img/progressbar.png" alt="Progress Bar" />
  </figure>
</div>

## Usage

```js
import { ProgressBar } from 'react-native-elements';

<ProgressBar progress={0.5} containerStyle={{ borderRadius: 16 }} />

<ProgressBar progress={0.8} color="red" />

<ProgressBar indeterminate />

<ProgressBar
  indeterminate
  unfilledColor="black"
/>
```

---

## Props

- [`color`](#color)
- [`indeterminate`](#indeterminate)
- [`progress`](#progress)
- [`style`](#style)
- [`constainerStyle`](#constainerStyle)
- [`unfilledColor`](#unfilledColor)

---

## Reference

### `color`

Fill color of the bar.

|      Type      | Default |
| :------------: | :-----: |
|  string | primary (theme) |

---

### `indeterminate`

Toggles if progress will be indeterminate (infinite) or determinate. If true, the `progress` prop is not used.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `progress`

progress value between 0 and 1.

|  Type  | Default |
| :----: | :-----: |
| number |    0    |

---

### `style`

add additional styling for progressbar component (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| View style (object) | Internal Style |

---

### `containerStyle`

add additional styling for progressbar component (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| View style (object) | Internal Style |

---

### `unfilledColor`

Color of the unfilled area.

|      Type      | Default |
| :------------: | :-----: |
| string |  none   |
