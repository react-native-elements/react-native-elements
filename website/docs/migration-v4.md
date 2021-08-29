---
id: migration_v3_to_v4
title: Migration from v3 to v4
---

### Table of Contents

- [What's New?](#whats-new)
  - [Migration to Functional](#migration-to-functional)
    - [Why?](#why)
    - [How would it affect?](#how-would-it-affect)
  - [Migration to Pressable](#migration-to-pressable)
    - [The Reason](#the-reason)
  - [Tests migrated to React Native Testing library](#tests-migrated-to-react-native-testing-library)
- [Handling breaking changes](#handling-breaking-changes)
  - [Tooltip](#tooltip)
  - [Text](#text)

## What's New?

React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being [given below](#handling-breaking-changes).

### Migration to Functional

These components are converted to Functional Components,

- Button
- Slider
- Tooltip
- Image

#### Why?

#### How would it affect?

> `ref` may not work as of now, but would be added in future releases.

### Migration to Pressable

#### The Reason

:::note

Earlier React Native Elements was using `Touchable` as touch handler, but since `v4.0` will use `Pressable`

:::

### Tests migrated to React Native Testing library

## Handling breaking changes

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
