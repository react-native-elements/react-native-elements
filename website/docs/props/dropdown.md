## Props

- [`animationDuration`](#animationDuration)
- [`chevron`](#chevron)
- [`chevronColor`](#chevronColor)
- [`chevronSize`](#chevronSize)
- [`containerStyle`](#containerStyle)
- [`disabled`](#disabled)
- [`divider`](#divider)
- [`dividerStyle`](#dividerStyle)
- [`icon`](#icon)
- [`iconClose`](#iconClose)
- [`iconOpen`](#iconOpen)
- [`items`](#items)
- [`maxHeight`](#maxHeight)
- [`onChange`](#onChange)
- [`textContainerStyle`](#textContainerStyle)
- [`textStyle`](#textStyle)
- [`theme`](#theme)
- [`title`](#title)
- [`titleContainerStyle`](#titleContainerStyle)
- [`titleStyle`](#titleStyle)


---

## Reference

### `animationDuration`

The animation duration of list slider(optional).

|  Type  |  Default  |
| :----: | :-------: |
| number |    200    |

---

### `chevron`

Boolean weather to show chevron or not(optional).

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

---

### `chevronColor`

Add color to chevron(optional).

|  Type  |   Default   |
| :----: | :--------:  |
| string |   "black"   |

---

### `chevronSize`

Size of chevron(optional).

|  Type  |  Default  |
| :----: | :-------: |
| number |    20     |

---

### `containerStyle`

Add styling to container(optional).

|        Type         |      Default      |
| :-----------------: | :---------------: |
| View style (object) |       none        |

---

### `disabled`

Disable dropdown(optional).

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `divider`

Show divider or not(optional).

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

---

### `dividerStyle`

Divider styling(optional).

|                     Type                    | Default |
| :-----------------------------------------: | :-----: |
| {width:number,endRaius:number,color:string} |  none   |

---

### `icon`

Icon to display in place of chevron(same on open dropdown and closed dropdown)(optional).

|                            Type                 | Default |
| :---------------------------------------------: | :-----: |
|        {[...Icon props](icon.md#props)}         |  none   |

---

### `iconClose`

Icon to display in place of chevron when dropdown is opened, it will only show when iconOpen is defined(optional).

|                            Type                 | Default |
| :---------------------------------------------: | :-----: |
|        {[...Icon props](icon.md#props)}         |  none   |

---

### `iconOpen`

Icon to display in place of chevron when dropdown is closed(optional).

|                            Type                 | Default |
| :---------------------------------------------: | :-----: |
|        {[...Icon props](icon.md#props)}         |  none   |

---

### `items`

Array of options to render when dropdown is opened, it must be an object with { element:string | react native component (required), value:string | number | boolean (required), onPress: Function (optional), icon: Icon (optional) }   (required).

|  Type    | Default |
| :-----:  | :-----: |
|  Array   |  true   |

---

### `maxHeight`

Maximum height of dropdown(optional).

|  Type    |   Default    |
| :------: | :----------: |
|  number  |  height/10   |

---

### `onChange`

Callback function, called when a option from dropdown is selected with value as parameter(required).

|    Type    |  Default |
| :--------: | :------: |
|  function  |   none   |

---

### `textContainerStyle`

Add styling to text container, container that containing options(optional).

|        Type         |      Default      |
| :-----------------: | :---------------: |
| View style (object) |       none        |

---

### `textStyle`

Add styling to text, i.e options(optional).

|        Type         |      Default      |
| :-----------------: | :---------------: |
| Text style (object) |       none        |

---

### `theme`

Set theme of dropdown(optional).

|        Type         |      Default      |
| :-----------------: | :---------------: |
|  'default','dark'   |       default     |

---

### `title`

Set theme of dropdown(required).

|              Type                  |     Default    |
| :--------------------------------: | :------------: |
|  string | react native component   |       none     |

---

### `titleContainerStyle`

Add styling to title container, container that containing title(optional).

|        Type         |      Default      |
| :-----------------: | :---------------: |
| View style (object) |       none        |

---

### `titleStyle`

Add styling to title, i.e options(optional).

|        Type         |      Default      |
| :-----------------: | :---------------: |
| Text style (object) |       none        |
