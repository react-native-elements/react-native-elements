---
id: rating
title: Rating
slug: /rating
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Usage from './usage/Rating/Rating.md'

Ratings are used to collect measurable feedback from users. Use Rating over an
Input where imagery can increase user interaction.

> This component is imported from [react-native-ratings](https://github.com/Monte9/react-native-ratings)

<img src="https://raw.githubusercontent.com/Monte9/react-native-ratings/master/resources/airbnb_ratings.gif" width="500" />

## Usage

## <Usage />

## Props

## Rating

- [`fractions`](#fractions)
- [`imageSize`](#imagesize)
- [`minValue`](#minValue)
- [`onFinishRating`](#onfinishrating)
- [`onStartRating`](#onstartrating)
- [`ratingBackgroundColor`](#ratingbackgroundcolor)
- [`tintColor`](#tintColor)
- [`ratingColor`](#ratingcolor)
- [`ratingCount`](#ratingcount)
- [`ratingImage`](#ratingimage)
- [`ratingTextColor`](#ratingtextcolor)
- [`readonly`](#readonly)
- [`showRating`](#showrating)
- [`startingValue`](#startingvalue)
- [`style`](#style)
- [`type`](#type)

---

## Reference

### `count`

Total number of ratings to display

|  Type  | Default |
| :----: | :-----: |
| number |    5    |

---

### `defaultRating`

Initial value for the rating

|  Type  | Default |
| :----: | :-----: |
| number |    3    |

---

### `fractions`

The number of decimal places for the rating value; must be between 0 and 20
(optional)

|  Type  |  Default  |
| :----: | :-------: |
| number | undefined |

---

### `imageSize`

The size of each rating image (optional)

|  Type  | Default |
| :----: | :-----: |
| number |   50    |

---

### `minValue`

The minimum value the user can select

|  Type  | Default |
| :----: | :-----: |
| number |    0    |

---

### `onFinishRating`

Callback method when the user finishes rating. Gives you the final rating value
as a whole number **(required)**

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onStartRating`

Callback method when the user starts the rating. (optional)

|   Type   |  Default  |
| :------: | :-------: |
| function | undefined |

---

### `ratingBackgroundColor`

Pass in a custom background-fill-color for the rating icon; use this along with
`type='custom'` prop above (optional)

|      Type      | Default |
| :------------: | :-----: |
| string (color) |  white  |

---

### `tintColor`

Pass in a custom background-color for the rating container; (optional)

|      Type      | Default |
| :------------: | :-----: |
| string (color) |  white  |

---

### `ratingColor`

Pass in a custom fill-color for the rating icon; use this along with
`type='custom'` prop above (optional)

|      Type      | Default |
| :------------: | :-----: |
| string (color) | #f1c40f |

---

### `ratingCount`

The number of rating images to display (optional)

|  Type  | Default |
| :----: | :-----: |
| number |    5    |

---

### `ratingImage`

Pass in a custom image source; use this along with `type='custom'` prop above
(optional)

|  Type  | Default |
| :----: | :-----: |
| string |  star   |

---

### `ratingTextColor`

Pass in a custom text color for the rating text (optional)

|      Type      | Default |
| :------------: | :-----: |
| string (color) | #f1c40f |

---

### `readonly`

Whether the rating can be modified by the user (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `reviews`

Labels to show when each value is tapped
e.g. If the first star is tapped, then value in index 0 will be used as the label

|   Type   |                   Default                    |
| :------: | :------------------------------------------: |
| string[] | ['Terrible', 'Bad', 'Okay', 'Good', 'Great'] |

---

### `showRating`

Determines if to show the reviews above the rating

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

---

### `showRating`

Displays the Built-in Rating UI to show the rating value in real-time (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  none   |

---

### `startingValue`

The initial rating to render (optional)

|  Type  |     Default     |
| :----: | :-------------: |
| number | ratingCount / 2 |

---

### `style`

Exposes style prop to add additional styling to the container view (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `type`

Choose one of the built-in types: `star`, `rocket`, `bell`, `heart` or use type
`custom` to render a custom image (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  star   |
