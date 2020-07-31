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

## Installation

Installing React Native Elements depends on your type of react native project.

<div class="toggler">
  <ul role="tablist" >
    <li id="expo" class="button-expo" aria-selected="false" role="tab" tabindex="0" aria-controls="expo" onclick="displayTab('expo')">
      Expo | Create React Native App
    </li>
    <li id="native" class="button-native" aria-selected="false" role="tab" tabindex="-1" aria-controls="nativetab" onclick="displayTab('native')">
      React Native CLI
    </li>
  </ul>
</div>

<block class="expo" />

[Expo](https://expo.io) or
[create-react-native-app](https://github.com/react-community/create-react-native-app)
projects include **react-native-vector-icons** out of the box, so all you need
to do is install **react-native-elements**.

```
yarn add react-native-elements
# or with npm
npm install react-native-elements
```

> **Note:** If you see the `UNMET PEER DEPENDENCY` warning for
> **react-native-vector-icons** like below, you can ignore it as
> _react-native-vector-icons_ is already installed by _expo_ or _crna_.
>
> <img alt="React Native Vector Icons Unmet Peer Dependency" src={useBaseUrl('img/peer-dep-error.png')} />

<block class="native" />

If your project is a standard React Native project created using
`react-native init` (it should have an ios/android directory), then follow these
installation instructions:

### Step 1: Install react-native-elements

```
yarn add react-native-elements
# or with npm
npm i react-native-elements --save
```

### Step 2: Install react-native-vector-icons

If you have already installed **react-native-vector-icons** as a dependency for
your project you can skip this step. Otherwise run the following command:

> _Manual linking of react-native-vector-icons is not necessary if you're using react-native@0.60.0 or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run `react-native unlink react-native-vector-icons` and the process will run as expected._

```
# yarn
yarn add react-native-vector-icons
# or with npm
npm i --save react-native-vector-icons

# link
react-native link react-native-vector-icons
```

_If you have any issues installing react-native-vector-icons, check out their
installation guide
[here](https://github.com/oblador/react-native-vector-icons#installation) or
debug it using
[this issue](https://github.com/react-native-elements/react-native-elements/issues/503)._
