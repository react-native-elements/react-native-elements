## Props

- [`ViewComponent`](#viewcomponent)
- [`backgroundColor`](#backgroundcolor)
- [`skeletonColor`](#skeletoncolor)
- [`duration`](#duration)
- [`fluid`](#fluid)
- [`rounded`](#rounded)
- [`height`](#height)
- [`width`](#width)
- [`containerStyle`](#containerstyle)
- [`easingType`](#easingtype)
- [`linearGradientProps`](#linearGradientProps)

---

## Reference

### `ViewComponent`

LinearComponent element for correct work of Skeleton.
[See](https://github.com/react-native-linear-gradient/react-native-linear-gradient) related library for better understanding.

|      Type       | Default |
| :-------------: | :-----: |
| LinearComponent |  none   |

---

### `backgroundColor`

Skeleton background color.

|  Type  |           Default            |
| :----: | :--------------------------: |
| string | 'secondary' color from theme |

---

### `skeletonColor`

Skeleton progress color.

|  Type  |          Default           |
| :----: | :------------------------: |
| string | 'primary' color from theme |

---

### `duration`

Duration of animation.

|  Type  | Default |
| :----: | :-----: |
| number |  1000   |

---

### `fluid`

Stretch width and height to sizes of parent container.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `fluid`

Stretch width and height to sizes of parent container.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `rounded`

Set borderRadius style of container to max value.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `height`

Height of container.

|      Type      | Default |
| :------------: | :-----: |
| number, string |   30    |

---

### `width`

Width of container.

|      Type      | Default |
| :------------: | :-----: |
| number, string | '100%'  |

---

### `containerStyle`

Style of container.

|   Type    | Default |
| :-------: | :-----: |
| ViewStyle |   {}    |

---

### `easingType`

Style of container.

|          Type           | Default |
| :---------------------: | :-----: |
| keyof typeof easingType | 'ease'  |

---

### `easingType`

Style of container.

|                  Type                   | Default |
| :-------------------------------------: | :-----: |
| keyof typeof [easingType](#easingtypes) | 'ease'  |

---

### `linearGradientProps`

Props for LinearGradient component.

|                                                   Type                                                    | Default |
| :-------------------------------------------------------------------------------------------------------: | :-----: |
| [linearGradientProps](https://github.com/react-native-linear-gradient/react-native-linear-gradient#props) |   {}    |

---

## EasingTypes

- `linear`
- `ease`
- `quad`
- `cubic`
- `bounce`
- `bezier`
- `in`
- `out`
- `inOut`

- `easeIn`
- `easeOut`
- `easeInOut`

- `easeInCubic`
- `easeOutCubic`
- `easeInOutCubic`

- `easeInCirc`
- `easeOutCirc`
- `easeInOutCirc`

- `easeInExpo`
- `easeOutExpo`
- `easeInOutExpo`

- `easeInQuad`
- `easeOutQuad`
- `easeInOutQuad`

- `easeInQuart`
- `easeOutQuart`
- `easeInOutQuart`

- `easeInQuint`
- `easeOutQuint`
- `easeInOutQuint`

- `easeInSine`
- `easeOutSine`
- `easeInOutSine`

- `easeInBack`
- `easeOutBack`
- `easeInOutBack`
