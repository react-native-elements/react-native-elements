## Props

> Also receives all
> [Overlay](https://reactnativeelements.com/docs/overlay#props) props except `fullscreen`

- [`isVisible`](#isvisible)
- [`loadingStyle`](#loadingStyle)
- [`loadingProps`](#loadingProps)
- [`onBackdropPress`](#onBackdropPress)
- [`overlayStyle`](#overlayStyle)
- [`theme`](#theme)
- [`children`](#children)

---

## Child Components

### Dialog.Title

- [`title`](#title)
- [`titleStyle`](#titleStyle)
- [`titleProps`](#titleProps)

### Dialog.Loading

- [`loadingStyle`](#loadingStyle)
- [`loadingProps`](#loadingProps)

### Dialog.Actions

- [`children`](#children)

### Dialog.Button

> Receives all [Button](button.md#props) props.

---

## Reference

### `isVisible`

If true, the dialog is visible

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `loadingStyle`

Add additional styling for loading component (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| View style (object) | Internal Style |

---

### `loadingProps`

Add additional props for ActivityIndicator component (optional)

|                                         Type                                         |     Default     |
| :----------------------------------------------------------------------------------: | :-------------: |
| {[...ActivityIndicator props](https://reactnative.dev/docs/activityindicator#props)} | Internal object |

---

### `title`

Dialog title (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `titleStyle`

Add additional styling for title component (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| Text style (object) |  none   |

---

### `titleProps`

Add additional props for Text component (optional)

|                            Type                            | Default |
| :--------------------------------------------------------: | :-----: |
| {[...Text props](https://reactnative.dev/docs/text#props)} |  none   |

---

### `onBackdropPress`

Handler for backdrop press

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `overlayStyle`

Add dditional styling to the internal Overlay component (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| View Style (object) | Internal Style |

---

### `theme`

Provides a theme to the dialog. (optional)

|  Type  |    Default     |
| :----: | :------------: |
| string | Theme(Primary) |

---

### `children`

Enclosed components. (optional)

|     Type      | Default |
| :-----------: | :-----: |
| React Element |  none   |

---
