---
id: version-0.19.0-tile
title: Tile
original_id: tile
---

A component with full size image and with text either inside the image or under
the image along with customizable caption

> This component was inspired from [Shoutem UI](https://github.com/shoutem/ui)
> by [Shoutem](https://github.com/shoutem). Check out
> [Shoutem](http://shoutem.github.io/) if you haven't already!

#### Featured Tile

![screen shot 2017-01-15 at 9 50 15 pm](https://cloud.githubusercontent.com/assets/6476108/21969491/beea4630-db6c-11e6-8913-7cc8813e35d6.png)

```js
<Tile
  imageSrc={require('./img/path')}
  title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
  featured
  caption="Some Caption Text"
/>
```

#### Featured Tile with Icon

![screen shot 2017-01-15 at 9 50 22 pm](https://cloud.githubusercontent.com/assets/6476108/21969581/6004e408-db6d-11e6-9379-556a0c5e967a.png)

```js
<Tile
  imageSrc={require('./img/path')}
  icon={{ name: 'play-circle', type: 'font-awesome' }}
  featured
/>
```

#### Tile with Icon

![screen shot 2017-01-15 at 9 50 34 pm](https://cloud.githubusercontent.com/assets/6476108/21969683/fce073f0-db6d-11e6-8d03-6e42c15627a9.png)

```js
<Tile
  imageSrc={require('./img/path')}
  title="Lorem ipsum dolor sit amet, consectetur"
  icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
  contentContainerStyle={{ height: 70 }}
>
  <View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
  >
    <Text>Caption</Text>
    <Text>Caption</Text>
  </View>
</Tile>
```

---

### Props

> Also receives all
> [TouchableNativeFeedback](http://facebook.github.io/react-native/docs/touchablenativefeedback.html#props)
> (Android) or
> [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html#props)
> (iOS) props

* [`activeOpacity`](#activeopacity)
* [`caption`](#caption)
* [`captionStyle`](#captionstyle)
* [`containerStyle`](#containerstyle)
* [`contentContainerStyle`](#contentcontainerstyle)
* [`featured`](#featured)
* [`height`](#height)
* [`icon`](#icon)
* [`iconContainerStyle`](#iconcontainerstyle)
* [`imageContainerStyle`](#imagecontainerstyle)
* [`imageSrc`](#imagesrc)
* [`onPress`](#onpress)
* [`title`](#title)
* [`titleNumberOfLines`](#titlenumberoflines)
* [`titleStyle`](#titlestyle)
* [`width`](#width)

---

# Reference

### `activeOpacity`

Number passed to control opacity on press (optional)

|  Type  | Default |
| :----: | :-----: |
| number |   0.2   |

---

### `caption`

Text inside the tilt when tile is featured

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `captionStyle`

Styling for the caption (optional)

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

|                                                                                                                       Type                                                                                                                       | Default |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| object {name: string, color: string, size: number, type: string (default is material, or choose one of material-community, simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), iconStyle: object(style)} |  none   |

---

### `iconContainerStyle`

Styling for the outer icon container (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `imageContainerStyle`

Styling for the image (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

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
