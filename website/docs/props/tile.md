## Props

> Also receives all
> [TouchableNativeFeedback](http://reactnative.dev/docs/touchablenativefeedback.html#props)
> (Android) or
> [TouchableOpacity](http://reactnative.dev/docs/touchableopacity.html#props)
> (iOS) props

- [`activeOpacity`](#activeopacity)
- [`caption`](#caption)
- [`captionStyle`](#captionstyle)
- [`containerStyle`](#containerstyle)
- [`contentContainerStyle`](#contentcontainerstyle)
- [`featured`](#featured)
- [`height`](#height)
- [`icon`](#icon)
- [`iconContainerStyle`](#iconcontainerstyle)
- [`ImageComponent`](#imagecomponent)
- [`imageContainerStyle`](#imagecontainerstyle)
- [`imageProps`](#imageprops)
- [`imageSrc`](#imagesrc)
- [`onPress`](#onpress)
- [`overlayContainerStyle`](#overlaycontainerstyle)
- [`title`](#title)
- [`titleNumberOfLines`](#titlenumberoflines)
- [`titleStyle`](#titlestyle)
- [`width`](#width)

---

## Reference

### `activeOpacity`

Number passed to control opacity on press (optional)

|  Type  | Default |
| :----: | :-----: |
| number |   0.2   |

---

### `caption`

Text inside the tilt when tile is featured

|                   Type                   | Default |
| :--------------------------------------: | :-----: |
| string **OR** React element or component |  none   |

---

### `captionStyle`

Styling for the caption (optional); You only use this if `caption` is a string

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `containerStyle`

Styling for the outer tile container (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `contentContainerStyle`

Styling for bottom container when not featured tile (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `featured`

Changes the look of the tile (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `height`

Height for the tile

|  Type  |       Default       |
| :----: | :-----------------: |
| number | Device Width \* 0.8 |

---

### `icon`

Icon Component Props (optional)

|                                                                                        Type                                                                                         | Default |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| object {name: string, color: string, size: number, type: string (default is material, or choose from [supported icon sets](icon.md#available-icon-sets)), iconStyle: object(style)} |  none   |

---

### `iconContainerStyle`

Styling for the outer icon container (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `ImageComponent`

Custom ImageComponent for Tile

|            Type            |     Default     |
| :------------------------: | :-------------: |
| React component or element | BackgroundImage |

---

### `imageContainerStyle`

Styling for the image (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `imageProps`

Optional properties to pass to the image if provided e.g "resizeMode" (options)

|                Type                | Default |
| :--------------------------------: | :-----: |
| {[...Image props](image.md#props)} |  none   |

---

### `imageSrc`

Source for the image (required)

|      Type      | Default |
| :------------: | :-----: |
| object (image) |  none   |

---

### `onPress`

Function to call when tile is pressed (optional)

|       Type       | Default |
| :--------------: | :-----: |
| function (event) |  none   |

---

### `overlayContainerStyle`

Styling for the overlay container when using featured tile (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `title`

Text inside the tile (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `titleNumberOfLines`

Number of lines for Title

|  Type  | Default |
| :----: | :-----: |
| number |  none   |

---

### `titleStyle`

Styling for the title (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `width`

Width for the tile (optional)

|  Type  |   Default    |
| :----: | :----------: |
| number | Device Width |
