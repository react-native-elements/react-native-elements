---
id: getting_started
title: Getting Started
sidebar_label: Getting Started
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The aim of React Native Elements is to provide an all-in-one UI kit for creating
apps in react native. There are many great ui components made by developers all
around open source. React Native Elements takes the hassle of assembling these
packages together by giving you a ready made kit with consistent api and look
and feel.

### Stable

```bash
npm install react-native-elements

# or with yarn
yarn add react-native-elements
```

### Bleeding Edge

```bash
npm install https://github.com/react-native-elements/react-native-elements#dist

# or with yarn
yarn add  https://github.com/react-native-elements/react-native-elements#dist
```

### Install react-native-vector-icons

[Expo](https://expo.io) or
[create-react-native-app](https://github.com/react-community/create-react-native-app)
projects include **react-native-vector-icons** out of the box, hence this step can be skipped.

If your project is a standard React Native project created using
`react-native init` (it should have an ios/android directory), then you need to install `react-native-vector-icons`.

Or if you encounter the following error.

> **Note:** If you see the `UNMET PEER DEPENDENCY` warning for
> **react-native-vector-icons** like below, you can ignore it as
> _react-native-vector-icons_ is already installed by _expo_ or _crna_.
>
> <img alt="React Native Vector Icons Unmet Peer Dependency" src={useBaseUrl('img/peer-dep-error.png')} />

Otherwise run the following command:

> _Manual linking of react-native-vector-icons is not necessary if you're using react-native@0.60.0 or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run `react-native unlink react-native-vector-icons` and the process will run as expected._

```bash
npm install react-native-vector-icons

# or with yarn
yarn add react-native-vector-icons
```

Link the dependency

```bash
npx react-native link react-native-vector-icons
```

_If you have any issues installing react-native-vector-icons, check out their
installation guide
[here](https://github.com/oblador/react-native-vector-icons#installation) or
debug it using
[this issue](https://github.com/react-native-elements/react-native-elements/issues/503)._

### Install react-native-safe-area-context

If you have already installed **react-native-safe-area-context** as a dependency for
your project you can skip this step. Otherwise run the following command:

```bash
npm install react-native-safe-area-context
# or with yarn
yarn add react-native-safe-area-context
```

> _Manual linking of react-native-safe-area-context is not necessary if you're using react-native@0.60.0 or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run `react-native unlink react-native-safe-area-context` and the process will run as expected._

```bash
react-native link react-native-safe-area-context
```

It is required to add the `SafeAreaProvider` to the outside of the app. The suggested way to do this is
the following:

```js
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return <SafeAreaProvider>...</SafeAreaProvider>;
}
```
