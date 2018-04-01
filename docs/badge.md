---
id: badge
title: Badge
---

![Badges](/react-native-elements/img/badges.png)

Example badge usage

```js
<Badge
  value={3}
  textStyle={{ color: 'orange' }}
/>

<Badge containerStyle={{ backgroundColor: 'violet'}}>
  <Text>User 1</Text>
</Badge>

<Badge onPress={() => {console.log('pressed')}} value="5" />

<Badge component={TouchableNative} value={10} />
```

### Props

* [`children`](#children)
* [`component`](#component)
* [`containerStyle`](#containerstyle)
* [`onPress`](#onpress)
* [`textStyle`](#textstyle)
* [`value`](#value)
* [`wrapperStyle`](#wrapperstyle)

---

# Reference

### `children`

Override the default badge contents, mutually exclusive with 'value' property

|          Type          | Default |
| :--------------------: | :-----: |
| React Native Component |  none   |

---

### `component`

Custom component to replace the badge outer component

|          Type          |                Default                 |
| :--------------------: | :------------------------------------: |
| React Native Component | View, if onPress then TouchableOpacity |

---

### `containerStyle`

Style for the outer badge component

|       Type        |      Default      |
| :---------------: | :---------------: |
| inherited styling | inherited styling |

---

### `onPress`

Function called when pressed on the badge

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `textStyle`

Extra styling for icon component (optional)

|       Type        | Default |
| :---------------: | :-----: |
| inherited styling |  none   |

---

### `value`

Text value to be displayed by badge, defaults to empty

|       Type       | Default |
| :--------------: | :-----: |
| string or number |  none   |

---

### `wrapperStyle`

Style for the outer most badge component

|       Type        | Default |
| :---------------: | :-----: |
| inherited styling |  none   |
