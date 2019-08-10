---
id: swiper
title: Swiper
---

### Usage

```js
import { Swiper } from 'react-native-elements'

<Swiper>
  <View style={{ flex: 1 }}>{/* any content */}</View>
  <View style={{ flex: 1 }}>{/* any content */}</View>
  {/* ... */}
</Swiper>

<Swiper
  vertical {/* slide up / down instead left / right */}
  from={1} {/* initial slide is second */}
  loop {/* back to first slide after last */}
  timeout={2} {/* autoplay duration (2 secs) */}
  springConfig={{ speed: 11 }} {/* RN Animated.spring config */}
  minDistanceForAction={0.15} {/* Swipe less that 15% keep active slide */}
  positionFixed {/* Fix mobile safari vertical bounces */}
>
  <View style={{ flex: 1 }} /> {/* Slide 1 */}
  <View style={{ flex: 1 }} /> {/* Slide 2 */}
  {/* ... */}
</Swiper>
```

---

## Props

- [`vertical`](#vertical)
- [`from`](#from)
- [`loop`](#loop)
- [`timeout`](#timeout)
- [`gesturesEnabled`](#gesturesenabled)
- [`springConfig`](#springconfig)
- [`minDistanceToCapture`](#mindistancetocapture)
- [`minDistanceForAction`](#mindistanceforaction)
- [`positionFixed`](#positionfixed)
- [`containerStyle`](#containerstyle)
- [`innerContainerStyle`](#innercontainerstyle)
- [`swipeAreaStyle`](#swipeareastyle)
- [`slideWrapperStyle`](#slidewrapperstyle)
- [`controlsEnabled`](#controlsenabled)
- [`controlsProps`](#controlsprops)
- [`Controls`](#controls)
- [`onAnimationStart`](#onanimationstart)
- [`onAnimationEnd`](#onanimationend)
- [`onIndexChanged`](#onindexchanged)

### Controls Props

Over the swiper we need to create a controls layer. But this layer will block the possibility of swiper layer control.
We created 9 controls placeholders to solve this problem:
`top-left`, `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom` and `bottom-right`.
You can adjust controls position by placing into relevant placeholder:

```js
<Swiper
  ...
  controlsProps={{
    prevTitle: 'prev button title',
    nextTitle: 'next button title',
    dotsTouchable: true, {/* touch over dot will make swiper move to rel slide */}
    dotsPos: 'top',
    prevPos: false, {/* hide prev button */}
    nextPos: 'top-right',
    cellsStyle: {
      'top': { padding: 5, backgroundColor: 'rgba(0, 0, 0, .3)' },
      'top-left': { /* any custom placeholder style */ },
    },
    cellsContent: {
      'bottom-right': <AnyComponent /> {/* Additional content in placeholder */}
    }
  }}
/>
```

- [`cellsStyle`](#cellsstyle)
- [`cellsContent`](#cellscontent)
- [`dotsPos`](#dotspos)
- [`prevPos`](#prevpos)
- [`nextPos`](#nextpos)
- [`prevTitle`](#prevtitle)
- [`nextTitle`](#nexttitle)
- [`prevProps`](#prevprops)
- [`nextProps`](#nextprops)
- [`PrevComponent`](#prevcomponent)
- [`NextComponent`](#nextcomponent)
- [`firstPrevElement`](#firstprevelement)
- [`lastNextElement`](#lastnextelement)
- [`dotsTouchable`](#dotstouchable)
- [`dotsWrapperStyle`](#dotswrapperstyle)
- [`dotProps`](#dotprops)
- [`dotActiveStyle`](#dotactivestyle)
- [`DotComponent`](#dotcomponent)

### Interaction methods

Store a reference to the Swiper in your component by using the ref prop
provided by React ([see docs](https://reactjs.org/docs/refs-and-the-dom.html)):

```js
const swiperRef = useRef(null);

...

<Swiper
  ref={swiperRef}
  ...
/>
```

Then you can manually trigger swiper from anywhere:

```js
() => {
  swiperRef.goTo(1);
  swiperRef.goToPrev();
  swiperRef.goToNext();
  const index = swiperRef.getActiveIndex();
};
```

---

## Reference

### `vertical`

Swiper vertical layout

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `from`

Initial slide index

|  Type  | Default |
| :----: | :-----: |
| number |    0    |

---

### `loop`

Allow loop

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `timeout`

Autoplay slider timeout in secs. Negative value will play reverse

|  Type  | Default |
| :----: | :-----: |
| number |    0    |

---

### `gesturesEnabled`

Allow to swipe

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

---

### `springConfig`

Tune spring animation on autoplay, touch release or slides changes via buttons.

See official `react-native` [docs](https://facebook.github.io/react-native/docs/animated#spring)

---

### `minDistanceToCapture`

Initiate animation after swipe this distance. It fix gesture collisions inside ScrollView

|  Type  | Default |
| :----: | :-----: |
| number |    5    |

---

### `minDistanceForAction`

Minimal part of swiper width (or height for vertical) must be swiped for changing index.
Otherwise animation restore current slide. Default value 0.2 means that 20% must be swiped for change index

|  Type  | Default |
| :----: | :-----: |
| number |   0.2   |

---

### `positionFixed`

Swiper inner container position `fixed` instead `relative`. Fix mobile safari vertical bounce

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `containerStyle`

Outer (root) container style

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `innerContainerStyle`

Inner container style

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `swipeAreaStyle`

Swipe area style

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `slideWrapperStyle`

Each slide wrapper style

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `controlsEnabled`

Dots and control buttons visible and enabled

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

---

### `Controls`

Custom controls component

|   Type    | Default  |
| :-------: | :------: |
| component | internal |

---

### `onAnimationStart`

Any swiper animation start

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onAnimationEnd`

Any swiper animation end

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onIndexChanged`

Called when active index changed

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

## `controlsProps`

|   Type   | Default |
| :------: | :-----: |
|  object  |  below  |

---

### `cellsStyle`

Controls corners placeholders styles.
Allowed keys is: `top-left`, `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom` and `bottom-right`,
allowed values is `object (style)`

|   Type   | Default |
| :------: | :-----: |
|  object  |  none   |

---

### `cellsContent`

Controls corners placeholders additional content
Allowed keys is: `top-left`, `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom` and `bottom-right`,
allowed values is `string  OR  React element`

---

### `dotsPos`

Dots position.
Allowed values: `boolean` or `top-left`, `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom`, `bottom-right`

|             Type            |                Default              |
| :-------------------------: | :---------------------------------: |
|  boolean **OR** enum above  | 'bottom' **OR** 'right' if vertical |

---

### `prevPos`

Prev button position.
Allowed values: `boolean` or `top-left`, `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom`, `bottom-right`

|             Type            |                      Default                 |
| :-------------------------: | :------------------------------------------: |
|  boolean **OR** enum above  | 'bottom-left' **OR** 'top-right' if vertical |

---

### `nextPos`

Next button position.
Allowed values: `boolean` or `top-left`, `top`, `top-right`, `left`, `center`, `right`, `bottom-left`, `bottom`, `bottom-right`

|             Type            |     Default    |
| :-------------------------: | :------------: |
|  boolean **OR** enum above  | 'bottom-right' |

---

### `prevTitle`

Prev button title

|   Type   | Default |
| :------: | :-----: |
|  string  | 'Prev'  |

---

### `nextTitle`

Next button title

|   Type   | Default |
| :------: | :-----: |
|  string  | 'Prev'  |

---

### `dotsTouchable`

Touches over dots will move swiper to relative slide

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `dotsWrapperStyle`

Dots wrapper View style

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `dotProps`

Customizing dot with [Badge](/react-native-elements/docs/badge.html) props

|                                      Type                                         | Default |
| :-------------------------------------------------------------------------------: | :-----: |
| {[...Badge props](/react-native-elements/docs/badge.html#props)} |  none   |

---

### `dotActiveStyle`

Additional style to active dot

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `DotComponent`

Custom dot component

|   Type    |                              Default                             |
| :-------: | :--------------------------------------------------------------: |
| component | [Badge](/react-native-elements/docs/badge.html) |

---

### `prevProps`

Customize prev button with [Button](/react-native-elements/docs/button.html) props

|                                        Type                                         | Default |
| :---------------------------------------------------------------------------------: | :-----: |
| {[...Button props](/react-native-elements/docs/button.html#props)} |  none   |

---

### `nextProps`

Customize next button with [Button](/react-native-elements/docs/button.html) props

|                                        Type                                         | Default |
| :---------------------------------------------------------------------------------: | :-----: |
| {[...Button props](/react-native-elements/docs/button.html#props)} |  none   |

---

### `PrevComponent`

Custom prev button component

|   Type    |                               Default                              |
| :-------: | :----------------------------------------------------------------: |
| component | [Button](/react-native-elements/docs/button.html) |

---

### `NextComponent`

Custom next button component

|   Type    |                               Default                              |
| :-------: | :----------------------------------------------------------------: |
| component | [Button](/react-native-elements/docs/button.html) |

---

### `firstPrevElement`

Custom prev element on first slide (if not loop)

|   Type    | Default  |
| :-------: | :------: |
| component |   none   |

---

### `lastNextElement`

Custom next element on last slide (if not loop)

|   Type    | Default  |
| :-------: | :------: |
| component |   none   |
