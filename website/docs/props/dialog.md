## Props

> Also receives all
> [Overlay](https://reactnativeelements.com/docs/overlay#props) props except `fullscreen`

- [`isVisible`](#isvisible)
- [`loading`](#loading)
- [`loadingStyle`](#loadingStyle)
- [`loadingProps`](#loadingProps)
- [`title`](#title)
- [`titleStyle`](#titleStyle)
- [`titleProps`](#titleProps)
- [`noButtons`](#noButtons)
- [`primary`](#primary)
- [`primaryOnPress`](#primaryOnPress)
- [`primaryButtonProps`](#primaryButtonProps)
- [`secondary`](#secondary)
- [`secondaryOnPress`](#secondaryOnPress)
- [`secondaryButtonProps`](#secondaryButtonProps)
- [`onBackdropPress`](#onBackdropPress)
- [`overlayStyle`](#overlayStyle)

---

## Reference

### `isVisible`

If true, the dialog is visible

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `loading`

If true, loading dialog is rendered (optional)

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

### `noButtons`

If true, Dialog is rendered without action buttons (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `primary`

Title for the primary action button

|  Type  | Default |
| :----: | :-----: |
| string |  CLOSE  |

---

### `primaryOnPress`

Handler for the primary button press

|   Type   |     Default     |
| :------: | :-------------: |
| function | onBackdropPress |

---

### `primaryButtonProps`

Add additional props for the primary Button component (optional)

|                                  Type                                  | Default |
| :--------------------------------------------------------------------: | :-----: |
| {[...Button props](https://reactnativeelements.com/docs/button#props)} |  none   |

---

### `secondary`

Title for the secondary action button

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `secondaryOnPress`

Handler for the secondary button press

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `secondaryButtonProps`

Add additional props for the secondary Button component (optional)

|                                  Type                                  | Default |
| :--------------------------------------------------------------------: | :-----: |
| {[...Button props](https://reactnativeelements.com/docs/button#props)} |  none   |

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
