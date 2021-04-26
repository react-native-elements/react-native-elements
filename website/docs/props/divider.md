## Props

> Also receives all
> [View](https://reactnative.dev/docs/view#props) props

- [`inset`](#inset)
- [`insetType`](#insettype)
- [`style`](#style)
- [`subHeader`](#subheader)
- [`subHeaderStyle`](#subheaderstyle)
- [`orientation`](#orientation)
- [`width`](#width)

---

## Reference

### `inset`

Adds inset to the divider

|  Type   | Default |
| :-----: | :-----: |
| boolean |  left   |

---

### `insetType`

Allows inset to be applied to a specific direction. `middle` applies inset in both directions. The `inset` prop must be true for this to apply.

|        Type         | Default |
| :-----------------: | :-----: |
| left, right, middle |  left   |

---

### `style`

Style of the divider

|        Type         |                      Default                       |
| :-----------------: | :------------------------------------------------: |
| View style (object) | {borderBottomWidth: 1, borderBottomColor: #e1e8ee} |

---

### `subHeader`

Displays sub-header text with the divider.

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `subHeaderStyle`

Adds styles to the subHeader text of the divider.

|        Type         | Default |
| :-----------------: | :-----: |
| Text style (object) |  none   |

---

### `orientation`

Allows changing the divider orientation. Values are `horizontal` or `vertical`

|          Type          |  Default   |
| :--------------------: | :--------: |
| horizontal or vertical | horizontal |

---

### `width`

Applies width to the divider. Width is supported to both `horizontal` and `vertical` divider

|  Type  |         Default          |
| :----: | :----------------------: |
| number | StyleSheet.hairlineWidth |
