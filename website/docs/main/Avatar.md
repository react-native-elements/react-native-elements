---
id: avatar

title: Avatar

slug: /avatar
---

import Usage from './usage/Avatar/Avatar.md'

Avatars are found all over ui design from lists to profile screens.

They are commonly used to represent a user and can contain photos, icons, or even text.

## Components

- [Avatar.Accessory](#avataraccessory)
  This is used for adding an accessory to the Avatar.
  Receives either all [Icon](icon#props) or [Image](image#props) props.

## Usage

<Usage />

---

## Props

### Avatar

- [Component](#component)
- [ImageComponent](#imagecomponent)
- [activeOpacity](#activeopacity)
- [avatarStyle](#avatarstyle)
- [containerStyle](#containerstyle)
- [icon](#icon)
- [iconStyle](#iconstyle)
- [imageProps](#imageprops)
- [onLongPress](#onlongpress)
- [onPress](#onpress)
- [overlayContainerStyle](#overlaycontainerstyle)
- [placeholderStyle](#placeholderstyle)
- [renderPlaceholderContent](#renderplaceholdercontent)
- [rounded](#rounded)
- [size](#size)
- [source](#source)
- [title](#title)
- [titleStyle](#titlestyle)

### Avatar.Accessory

- [style](#style)
- [underlayColor](#underlaycolor)

## Reference

### Avatar

#### Component

Component for enclosing element (eg: TouchableHighlight, View, etc).

| Type            | Default           |
| --------------- | ----------------- |
| React Component | Pressable or View |

---

#### ImageComponent

Custom ImageComponent for Avatar.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### activeOpacity

Opacity when pressed.

| Type   | Default |
| ------ | ------- |
| number | None    |

---

#### avatarStyle

Style for avatar image.

| Type       | Default |
| ---------- | ------- |
| ImageStyle | None    |

---

#### containerStyle

Styling for outer container.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### icon

Displays an icon as the main content of the Avatar. **Cannot be used alongside title**. When used with the `source` prop it will be used as the placeholder.

| Type       | Default |
| ---------- | ------- |
| AvatarIcon | None    |

---

#### iconStyle

Extra styling for icon component.

| Type               | Default |
| ------------------ | ------- |
| Text Style(Object) | None    |

---

#### imageProps

Optional properties to pass to the avatar e.g "resizeMode".

| Type               | Default |
| ------------------ | ------- |
| ImageProps(Object) | None    |

---

#### onLongPress

Callback function when long pressing component.

Called when a long-tap gesture is detected.

| Type                                                      | Default |
| --------------------------------------------------------- | ------- |
| (() => void) and ((event: GestureResponderEvent) => void) | None    |

---

#### onPress

Callback function when pressing component.

Called when a single tap gesture is detected.

| Type                                                      | Default |
| --------------------------------------------------------- | ------- |
| (() => void) and ((event: GestureResponderEvent) => void) | None    |

---

#### overlayContainerStyle

Style for the view outside image or icon.

| Type               | Default |
| ------------------ | ------- |
| Text Style(Object) | None    |

---

#### placeholderStyle

Adds style to the placeholder wrapper.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### renderPlaceholderContent

Custom placeholder element (by default, it's the title).

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### rounded

Makes the avatar circular.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

#### size

Size of the avatar.

| Type                                                 | Default |
| ---------------------------------------------------- | ------- |
| number or "small" or "medium" or "large" or "xlarge" | small   |

---

#### source

Image source to be displayed on avatar.

| Type                | Default |
| ------------------- | ------- |
| ImageSourcePropType | None    |

---

#### title

Renders title in the placeholder.

| Type   | Default |
| ------ | ------- |
| string | None    |

---

#### titleStyle

Style for the title.

| Type               | Default |
| ------------------ | ------- |
| Text Style(Object) | None    |

---

### Avatar.Accessory

#### style

Style prop inherited from TextProps and TouchableWithoutFeedbackProperties

Only exist here so we can have ViewStyle or TextStyle

Style

Add custom styling to the accessory of avatar.

| Type               | Default |
| ------------------ | ------- |
| Text Style(Object) | None    |

---

#### underlayColor

The color of the underlay that will show through when the touch is active.

Add underlay color to the accessory of avatar.

| Type       | Default |
| ---------- | ------- |
| ColorValue | #000    |

---
