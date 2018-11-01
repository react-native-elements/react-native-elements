---
id: badge
title: Badge
---

Badges are small components typically used to communicate a numerical value to
the user.

![Badges](/react-native-elements/img/badges.png)

```js
<Badge
  value={3}
  textStyle={{ color: 'orange' }}
/>

<Badge
  containerStyle={{ backgroundColor: 'violet'}}
  value={<Text>User 1</Text>}
/>

<Badge onPress={() => {console.log('pressed')}} value="5" />

<Badge Component={TouchableNative} value={10} />
```

### Props

* [`badgeStyle`](#badgestyle)
* [`containerStyle`](#containerstyle)
* [`onPress`](#onpress)
* [`textStyle`](#textstyle)
* [`value`](#value)
* [`Component`](#Component)

---

# Reference

### `badgeStyle`

Additional styling for badge (background) view component (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| View style (object) | Internal Style |

---

### `containerStyle`

Style for the container (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| View style (object) | Internal Style |

---

### `onPress`

Function called when pressed on the badge

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `textStyle`

Extra styling for icon component (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| Text style (object) | Internal Style |

---

### `value`

Text value to be displayed by badge, defaults to empty

|                    Type                    | Default |
| :----------------------------------------: | :-----: |
| String OR Number OR React Native Component |  none   |

---

### `Component`

Custom component to replace the badge outer component

|          Type          |                  Default                   |
| :--------------------: | :----------------------------------------: |
| React Native Component | View, if `onPress` then `TouchableOpacity` |
