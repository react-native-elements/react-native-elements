![React Native Elements App](https://user-images.githubusercontent.com/5962998/37248832-a7060286-24b1-11e8-94a8-847ab6ded4ec.png)

# React Native Elements App

**[Mobile App](https://expo.dev/@rne_org/react-native-elements)**

This is the Demo app for [React Native Elements](https://expo.dev/@rne_org/react-native-elements) built with [Expo](https://expo.io/). The purpose of this app is to demonstrate the usage of the various UI components that React Native Elements provides out of the box.

This app also works on the `web` platform using [React Native Web](https://github.com/necolas/react-native-web). If you are looking to build a React Native mobile app which can reuse the code to deploy it on the web, this is the right place to begin. We decided to use [Expo](https://expo.io/), which reduces the effort required to build an app once and deploy it anywhere.

## Getting Started

### Run it locally

1. Install [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)

   ```bash
   [sudo] npm install -g expo-cli
   ```

   _If permissions errors then please use `--unsafe-perm=true` flag too [npm/npm#16766](https://github.com/npm/npm/issues/16766)_

2. Clone the project

   ```bash
   git clone https://github.com/react-native-elements/react-native-elements.git
   ```

3. Install dependencies

   ```bash
   cd react-native-elements

   # Using yarn
   yarn install

   # Using npm
   npm install

   cd example
   ```

4. Run the cross-platform app (uses [Expo](https://expo.io/learn))

   ```bash
   # Using yarn
   yarn start

   # Using npm
   npm start
   ```

### Deploy Web App

First you must set correct `publicPath` in `app.web-build.json`. Next you must build the web app using:

```bash
yarn web
```

Once you have built it, you can see generated `web-build` folder.

This folder can be hosted as static website. For example, you can publish on [Github Pages](https://pages.github.com/) via [gh-pages](https://github.com/tschaub/gh-pages) cli.

```bash
yarn deploy
```

**Note:** Don't forget to add or change "homepage" key in your package.json!

### Ejecting

The mobile app is built using Expo. If you would like to eject, you can run the following command:

```bash
# Using Yarn
yarn eject

# Using npm
npm run eject
```

We highly recommend you read the [official Expo ejection docs](https://docs.expo.io/versions/latest/expokit/eject/) before proceeding, as the action of ejecting is not reversible.

## Major contributors:

- [@oxyii](https://github.com/oxyii) 💪🏼
- [@xavier-villelegier](https://github.com/xavier-villelegier) 🔥
- [@martinezguillaume](https://github.com/martinezguillaume) 🎸
- [@iRoachie](https://github.com/iRoachie) 💯
- [@monte9](https://github.com/monte9) 🤓

## React Native Elements

This app is built using [React Native Elements](https://github.com/react-native-elements/react-native-elements). React Native Elements is a UI toolkit for React Native that provides you with production ready UI components so that you can focus on building the part that makes your app unique as opposed to reinvent the UI wheel. Aiding rapid development and pragmatic design, React Native Elements is the one-stop shop for all your requirements, making your web and mobile apps look more dynamic and professional.

You can install `react-native-elements` in your app using:

```bash
# Using yarn
yarn add react-native-elements

# Using npm
npm install react-native-elements --save
```

## Feedback

In case you run into any problems while running this app or have additional questions, please create a new issue on this repo, and we will follow up with you.
