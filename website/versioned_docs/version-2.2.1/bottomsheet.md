---
id: bottomsheet
title: Bottom Sheet
---

<div class="component-preview">
  <figure>
  <img src="/react-native-elements/img/bottomSheet/SimpleBottomSheet.png" alt="Simple Bottom Sheet" />
    <figcaption>Simple Bottom Sheet</figcaption>
  </figure>
  <figure>
    <img src="/react-native-elements/img/bottomSheet/BottomSheetListWithIcons.png" alt="List with icons" />
    <figcaption>List with icons</figcaption>
  </figure>
  <figure>
  <img src="/react-native-elements/img/bottomSheet/BottomSheetWithButtonStyle.png" alt="Button Styling" />
    <figcaption>Button Styling</figcaption>
  </figure>
</div>

## Usage

```js

<BottomSheet
  list={[
    {title: 'List Item 1'},
    {title: 'List Item 2'},
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
    },
  ]}
  cancelButtonIndex={1}
  buttonProps={{title: 'Open Buttom Sheet'}}
/>

<BottomSheet
  list={[
    {
      title: 'Appointments',
      leftIcon: {name: 'av-timer'},
    },
    {
      title: 'Trips',
      leftIcon: {name: 'flight-takeoff'},
    },
    {
      title: 'Cancel',
      leftIcon: {name: 'close', color: 'white'},
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
    },
  ]}
  cancelButtonIndex={1}
  buttonProps={{title: 'Open Buttom Sheet'}}
/>


<BottomSheet
  list={[
    {
      title: 'Appointments',
      leftIcon: {name: 'av-timer'},
    },
    {
      title: 'Trips',
      leftIcon: {name: 'flight-takeoff'},
    },
    {
      title: 'Cancel',
      leftIcon: {name: 'close', color: 'white'},
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
    },
  ]}
  cancelButtonIndex={2}
  buttonProps={{
    title: 'Open Buttom Sheet',
    icon: {
      name: 'chevron-down',
      size: 15,
      color: 'white',
      type: 'entypo',
    },
  }}
/>

```

---

## Props

- [`list`](#list)
- [`cancelButtonIndex`](#cancelbuttonindex)
- [`buttonProps`](#buttonprops)

---

## Reference

### `list`

Array of List Item props of the React Native Element `ListItem` component

|                    Type                    | Default |
| :----------------------------------------: | :-----: |
| [{[...ListItem props](listitem.md#props)}] |   []    |

---

### `cancelButtonIndex`

index of the list item which closes Bottom Sheet Component

|  Type  | Default |
| :----: | :-----: |
| number |  null   |

---

### `buttonProps`

props of the React Native Element `Button` Component

|                 Type                 | Default |
| :----------------------------------: | :-----: |
| {[...Button props](button.md#props)} |  null   |
