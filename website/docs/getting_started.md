---
id: getting_started
title: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::note

The aim of React Native Elements is to provide an all-in-one UI kit for creating
apps in react native. There are many great ui components made by developers all
around open source. React Native Elements takes the hassle of assembling these
packages together by giving you a ready made kit with consistent api and look
and feel.
:::

### Stable

<Tabs
defaultValue="npm"
values={[
{ label: 'NPM', value: 'npm', },
{ label: 'Yarn', value: 'yarn', },
]
}>
<TabItem value="npm">

```bash
npm install react-native-elements
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add react-native-elements
```

</TabItem>
</Tabs>

### Bleeding Edge

<Tabs
defaultValue="npm"
values={[
{ label: 'NPM', value: 'npm', },
{ label: 'Yarn', value: 'yarn', },
]
}>
<TabItem value="npm">

```bash
npm install https://github.com/react-native-elements/react-native-elements#dist
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add  https://github.com/react-native-elements/react-native-elements#dist
```

</TabItem>
</Tabs>

### Install react-native-vector-icons

[Expo](https://expo.io) or
[create-react-native-app](https://github.com/react-community/create-react-native-app)
projects include **react-native-vector-icons** out of the box, hence this step can be skipped.

If your project is a standard React Native project created using
`react-native init` (it should have an ios/android directory), then you need to install `react-native-vector-icons`.

Or if you encounter the following error.

:::note

If you see the `UNMET PEER DEPENDENCY` warning for **react-native-vector-icons** like below, you can ignore it as _react-native-vector-icons_ is already installed by _expo_ or _crna_.
<img alt="React Native Vector Icons Unmet Peer Dependency" src={useBaseUrl('img/peer-dep-error.png')} />

:::

Otherwise run the following command:

:::tip

Manual linking of react-native-vector-icons is not necessary if you're using react-native@0.60.0 or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run `react-native unlink react-native-vector-icons` and the process will run as expected.

:::
<Tabs
defaultValue="npm"
values={[
{ label: 'NPM', value: 'npm', },
{ label: 'Yarn', value: 'yarn', },
]
}>
<TabItem value="npm">

```bash
npm install react-native-vector-icons
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add react-native-vector-icons
```

</TabItem>
</Tabs>

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

<Tabs
defaultValue="npm"
values={[
{ label: 'NPM', value: 'npm', },
{ label: 'Yarn', value: 'yarn', },
]
}>
<TabItem value="npm">

```bash
npm install react-native-safe-area-context
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add react-native-safe-area-context
```

</TabItem>
</Tabs>

:::info Useful information.

Manual linking of react-native-safe-area-context is not necessary if you're using react-native@0.60.0 or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run `react-native unlink react-native-safe-area-context` and the process will run as expected.

:::

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
