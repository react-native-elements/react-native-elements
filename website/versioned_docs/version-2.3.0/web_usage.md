---
id: web_usage
title: Usage on the Web
---

React Native Elements just like on mobile can be used in your web projects. This is possible using [react-native-web](https://github.com/necolas/react-native-web). We'll highlight how to set this up using create-react-app.

## Why do I have to set this up?

On the web, you can usually use UI libraries directly from npm without any additional setup. However in react-native, it's a bit different.

The major difference is that React Native can support JSX and advanced javascript out the box. This means that we don't need to transpile our code before we ship it to npm. **We ship JSX and advanced javascript directly to npm** in React Native Elements, so we need to account for this in our web projects.

## Create React App

[Create React App](https://create-react-app.dev/) is a very popular framework for building react applications. Unfortunately it doesn't allow much customization of the build setup. To accomplish this we'll be making use of [react-app-rewired](https://github.com/timarney/react-app-rewired) and [customize-cra](https://github.com/arackaf/customize-cra).

After creating a new create-react-app project, run the following commands.

```bash
yarn add react-native-elements react-native-web react-native-vector-icons
```

```bash
yarn add --dev @babel/plugin-proposal-class-properties customize-cra react-app-rewired
```

Secondly, create a `config-overrides.js` file in the root of your project.

```js
const path = require('path');
const { override, addBabelPlugins, babelInclude } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
  babelInclude([
    path.resolve(__dirname, 'node_modules/react-native-elements'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-ratings'),
    path.resolve(__dirname, 'src'),
  ])
);
```

Also you should keep in mind that not all of React Native components are implemented for web-platform out-of-box.
For example, `Modal` component is not yet implemented in `react-native-web`. Therefore, to use some of our components
you may need to install additional third-party libraries that implement the missing functionality.
For [`Overlay`](overlay.md) and [`Tooltip`](tooltip.md) components `Modal` implementation is required.

Lastly, change your scripts in `package.json` to use react-app-rewired:

```diff
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test"
}
```

At this point your app can start. However trying to use any components that use icons, will not show them. In your App.js, load these fonts as you would on the web with a style tag.

```jsx
<style type="text/css">{`
  @font-face {
    font-family: 'MaterialIcons';
    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
  }
`}</style>
```

The full setup of the guide can be found at https://github.com/react-native-elements/create-react-app-example.
