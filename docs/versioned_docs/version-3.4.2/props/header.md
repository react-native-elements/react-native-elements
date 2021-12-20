## Props

- [`backgroundColor`](#backgroundcolor)
- [`backgroundImage`](#backgroundimage)
- [`backgroundImageStyle`](#backgroundimagestyle)
- [`barStyle`](#barstyle)
- [`centerComponent`](#centercomponent)
- [`centerContainerStyle`](#centercontainerstyle)
- [`containerStyle`](#containerstyle)
- [`leftComponent`](#leftcomponent)
- [`leftContainerStyle`](#leftcontainerstyle)
- [`linearGradientProps`](#lineargradientprops)
- [`placement`](#placement)
- [`elevated`](#elevated)
- [`rightComponent`](#rightcomponent)
- [`rightContainerStyle`](#rightcontainerstyle)
- [`statusBarProps`](#statusbarprops)
- [`ViewComponent`](#viewcomponent)

---

## Reference

### `backgroundColor`

sets backgroundColor of the parent component

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `backgroundImage`

sets backgroundImage for parent component

|      Type      | Default |
| :------------: | :-----: |
| object (image) |  none   |

---

### `backgroundImageStyle`

styling for backgroundImage in the main container

| Type  | Default |
| :---: | :-----: |
| style |  none   |

---

### `elevated`

elevation for header

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `barStyle`

Sets the color of the status bar text.

|                    Type                    |                                  Default                                   |
| :----------------------------------------: | :------------------------------------------------------------------------: |
| 'default', 'light-content', 'dark-content' | 'default' ([source](https://reactnative.dev/docs/statusbar.html#barstyle)) |

---

### `centerComponent`

define your center component here

|                                                                                           Type                                                                                            | Default |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| { text: string, [...Text props](https://reactnative.dev/docs/text.html#props)}<br/>**OR**<br/>{ icon: string, [...Icon props](icon.md#props)} <br/>**OR**<br/> React element or component |  none   |

---

### `centerContainerStyle`

styling for container around the centerComponent

| Type  |   Default   |
| :---: | :---------: |
| style | { flex: 3 } |

---

### `containerStyle`

styling around the main container

| Type  | Default |
| :---: | :-----: |
| style |  none   |

---

### `leftComponent`

define your left component here

|                                                                                           Type                                                                                            | Default |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| { text: string, [...Text props](https://reactnative.dev/docs/text.html#props)}<br/>**OR**<br/>{ icon: string, [...Icon props](icon.md#props)} <br/>**OR**<br/> React element or component |  none   |

---

### `leftContainerStyle`

styling for container around the leftComponent

| Type  |   Default   |
| :---: | :---------: |
| style | { flex: 1 } |

---

### `linearGradientProps`

displays a linear gradient. See [usage](#lineargradient-usage).

|                                                      Type                                                      | Default |
| :------------------------------------------------------------------------------------------------------------: | :-----: |
| {[...Gradient props](https://github.com/react-native-community/react-native-linear-gradient#additional-props)} |  none   |

---

### `placement`

Alignment for title

|            Type             | Default  |
| :-------------------------: | :------: |
| 'left', 'center' or 'right' | 'center' |

---

### `rightComponent`

define your right component here

|                                                                                           Type                                                                                            | Default |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| { text: string, [...Text props](https://reactnative.dev/docs/text.html#props)}<br/>**OR**<br/>{ icon: string, [...Icon props](icon.md#props)} <br/>**OR**<br/> React element or component |  none   |

---

### `rightContainerStyle`

styling for container around the rightComponent

| Type  |   Default   |
| :---: | :---------: |
| style | { flex: 1 } |

---

### `statusBarProps`

accepts all props for StatusBar

|                                    Type                                     | Default |
| :-------------------------------------------------------------------------: | :-----: |
| { [...StatusBar props](https://reactnative.dev/docs/statusbar.html#props) } |  none   |

---

### `ViewComponent`

component for container

|          Type          |     Default     |
| :--------------------: | :-------------: |
| React Native Component | ImageBackground |
