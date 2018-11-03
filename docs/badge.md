---
id: badge
title: Badge
---

Badges are small components typically used to communicate a numerical value or
indicate the status of an item to the user.

<div class="component-preview">
  <figure>
  <img src="/react-native-elements/img/badge/badge--standard.jpg" alt="Standard" />
    <figcaption>Standard</figcaption>
  </figure>
  <figure>
    <img src="/react-native-elements/img/badge/badge--mini.jpg" alt="Mini Badge" />
    <figcaption>Mini Badge</figcaption>
  </figure>
  <figure>
  <img src="/react-native-elements/img/badge/badge--indicator.jpg" alt="Badge as Indicator" />
    <figcaption>Badge as Indicator</figcaption>
  </figure>
</div>

### Mini Badge

This type of badge shows when no `value` prop is provided. This form is
effective for showing statuses.

## Usage

```js
import { Text, View } from 'react-native'
import { Avatar, Badge } from 'react-native-elements'

// Standard badge
<Badge value="99+" status="error" />
<Badge value={<Text>My Custom Badge</Text>}>

// Mini badge
<Badge status="success" />
<Badge status="error" />
<Badge status="primary" />
<Badge status="warning" />

// Avatar with mini badge
<View>
  <Avatar
    rounded
    source={{
      uri: 'https://randomuser.me/api/portraits/men/41.jpg',
    }}
    size="large"
  />

  <Badge
    status="success"
    containerStyle={{ position: 'absolute', top: -4, right: -4 }}
  />
</View>
```

---

## Props

* [`badgeStyle`](#badgestyle)
* [`containerStyle`](#containerstyle)
* [`onPress`](#onpress)
* [`status`](#status)
* [`textStyle`](#textstyle)
* [`value`](#value)
* [`Component`](#Component)

---

## Reference

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

### `status`

Determines color of the indicator

|                   Type                   | Default |
| :--------------------------------------: | :-----: |
| `primary`, `success`, `warning`, `error` | primary |

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
