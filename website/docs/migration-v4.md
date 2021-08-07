---
id: migration_v3_to_v4
title: Migration from v3 to v4
---

## Introduction

React Native Elements v4 introduces many features including few new components and some breaking changes whose migration is being [given below](#handling-breaking-changes).

Few added components are

- [LinearProgress (#2867)](https://github.com/react-native-elements/react-native-elements/pull/2867)
- [FAB (#2885)](https://github.com/react-native-elements/react-native-elements/pull/2885)
- [Speed dial (#2896)](https://github.com/react-native-elements/react-native-elements/pull/2896)
- [Tab & TabItem (#2919)](https://github.com/react-native-elements/react-native-elements/pull/2919)
- [CircularSlider (#1)](https://github.com/react-native-elements/react-native-elements-universe/pull/1)
- [TabView & TabView.Item (#2983)](https://github.com/react-native-elements/react-native-elements/pull/2983)
- [ListItem Accordion (#2953)](https://github.com/react-native-elements/react-native-elements/pull/2953)
- [ListItem Swipeable (#2982)](https://github.com/react-native-elements/react-native-elements/pull/2982)

## Handling breaking changes

### Migration to Pressable

:::note

Earlier React Native Elements was using `Touchable` as touch handler, but since `v4.0` will use `Pressable`

:::

> [Pressable](https://reactnative.dev/docs/pressable) is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.

This change would let you use `onPressIn` & `onPressOut` APIs in RNE components, For example

```diff
  <CheckBox
    title="I agree"
+   onPressIn={()=>{}}
+   onPressOut={()=>{}}
    onPress={() => {}}
  />
```

and the rest of props for `Pressable` can be added via `pressableProps` API

```diff
  <ButtonGroup
+   pressableProps={{android_ripple:{radius:2}}}
  />
```

:::info

`Button` Component still uses Touchable, As `Pressable` works differently compared to `TouchableNativeFeedback`, for instance, the Button will apply the primary color as the button background color, however, the pressable ripple effect will then render behind the button, which results in no ripple.

:::

### Tooltip

`Tooltip` is one of core component of RNE, Since v4 this component would be stateless and would use `visible`, `onOpen` & `onClose` Props for its working

```diff
  <Tooltip
+   visible={open}
+   onOpen={() => {
+      setOpen(true);
+   }}
+   onClose={() => {
+      setOpen(false);
+   }}
    popover="Hey All"
  />
```

You can still use Tooltip as stateful component by doing:

```js
const ControlledTooltip: React.FC<TooltipProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Tooltip
      visible={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      {...props}
    />
  );
};
```

### Text

`variant` can be => h1 h2 h3 h4 caption props

```diff
  <Text
-  h1
-  h1style={{}}
+  variant="h1"
   style={{}}
  />
```
