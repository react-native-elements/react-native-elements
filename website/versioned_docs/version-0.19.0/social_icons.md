---
id: version-0.19.0-social_icon
title: SocialIcon
original_id: social_icon
---

![Social Icons](/react-native-elements/img/social-icons.png)

```js
import { SocialIcon } from 'react-native-elements'

// Icon
<SocialIcon
  type='twitter'
/>

<SocialIcon
  raised={false}
  type='gitlab'
/>

<SocialIcon
  light
  type='medium'
/>

<SocialIcon
  light
  raised={false}
  type='medium'
/>


// Button
<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>

<SocialIcon
  title='Some Twitter Message'
  button
  type='twitter'
/>

<SocialIcon
  button
  type='medium'
/>

<SocialIcon
  button
  light
  type='instagram'
/>
```

---

### Props

* [`button`](#button)
* [`component`](#component)
* [`disabled`](#disabled)
* [`fontFamily`](#fontfamily)
* [`fontStyle`](#fontstyle)
* [`fontWeight`](#fontweight)
* [`iconColor`](#iconcolor)
* [`iconSize`](#iconsize)
* [`iconStyle`](#iconstyle)
* [`light`](#light)
* [`loading`](#loading)
* [`onLongPress`](#onlongpress)
* [`onPress`](#onpress)
* [`raised`](#raised)
* [`style`](#style)
* [`title`](#title)
* [`type`](#type)
* [`underlayColor`](#underlaycolor)

---

# Reference

### `button`

creates button (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `component`

type of button (optional)

|          Type          |      Default       |
| :--------------------: | :----------------: |
| React Native Component | TouchableHighlight |

---

### `disabled`

disable button (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `fontFamily`

specify different font family (optional)

|  Type  |                      Default                       |
| :----: | :------------------------------------------------: |
| string | System font bold (iOS), Sans Serif Black (android) |

---

### `fontStyle`

specify text styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `fontWeight`

specify font weight of title if set as a button with a title

|  Type  |          Default           |
| :----: | :------------------------: |
| string | bold (ios), black(android) |

---

### `iconColor`

icon color (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  white  |

---

### `iconSize`

icon size (optional)

|  Type  | Default |
| :----: | :-----: |
| number |   24    |

---

### `iconStyle`

extra styling for icon component (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `light`

reverses icon color scheme, setting background to white and icon to primary color

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `loading`

shows loading indicator (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `onLongPress`

onLongPress method (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onPress`

onPress method (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `raised`

raised adds a drop shadow, set to false to remove

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

---

### `style`

button styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `title`

title if made into a button (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `type`

social media type (required)

|                                                                                                                                              Type                                                                                                                                              | Default |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| social media type (angellist, codepen, envelope, etsy, facebook, foursquare, github-alt, github, gitlab, instagram, linkedin, medium, pinterest, quora, reddit-alien, soundcloud, stack-overflow, steam, stumbleupon, tumblr, twitch, twitter,google-plus-official, vimeo, wordpress, youtube) |  none   |

---

### `underlayColor`

underlay color (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |
