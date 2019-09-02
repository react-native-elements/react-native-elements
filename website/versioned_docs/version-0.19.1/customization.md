---
id: version-0.19.1-customization
title: Customization
original_id: customization
---

Congrats! You've installed React Native Elements and your immediate question goes something like this:

> So umm, how I do change how it looks?

Great question! A UI Kit wouldn't be that useful if the apps everyone built looked the same right? For this case
React Native Elements provide a number of props on each component to enable you to style them how you want.

## Containers

_Every_ component from React Native Elements has a container around it. The container is just a traditional `<View />` from
react native that has some styling on it. This default styling prevents components from colliding with each other.
If you want to change how two components react to each on the screen your first stop should be the `containerStyle` prop.

Similar to `containerStyle`, components may provide their custom style props like `buttonStyle`, `titleStyle` etc.
Always refer to the component doc to find out which style props the component provides.
