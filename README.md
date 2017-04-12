<p align="center">
  <a href="https://react-native-community.github.io/react-native-elements/">
    <img alt="react-native-elements" src="./screenshots/react_native_elements_logo.png" width="450">
  </a>
</p>

<h3 align="center">
  React Native Elements
</h3>

<p align="center">
  Cross Platform <a href="https://facebook.github.io/react-native/">React Native</a> UI Toolkit
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-elements"><img src="https://img.shields.io/npm/v/react-native-elements.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/react-native-elements"><img src="https://img.shields.io/npm/dm/react-native-elements.svg?style=flat-square"></a>
  <a href="https://travis-ci.org/react-native-training/react-native-elements"><img src="https://img.shields.io/travis/react-native-training/react-native-elements/master.svg?style=flat-square"></a>
  <a href="https://codecov.io/gh/react-native-training/react-native-elements"><img src="https://codecov.io/gh/react-native-training/react-native-elements/coverage.svg?branch=v0.11.0"></a>
</p>

<br />

![React Native UI Toolkit](http://i.imgur.com/UXrGTeG.png)

## Get Started

### Installation

- If you are using
[create-react-native-app](https://github.com/react-community/create-react-native-app)
or [Expo](https://expo.io), [follow these instructions](https://github.com/react-native-training/react-native-elements/blob/master/using-with-crna-or-expo.md).

- If your project is a standard React Native project (if you have an
ios/android directory and created it with `react-native init`), [follow these installation instructions](https://github.com/react-native-training/react-native-elements/blob/master/installation.md).

### Usage

Start using the components:

```js
import { Button } from 'react-native-elements';

<Button
  raised
  icon={{name: 'home', size: 32}}
  buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
  textStyle={{textAlign: 'center'}}
  title={`Welcome to\nReact Native Elements`} />
```

## Components Included

- [x] [Buttons](https://github.com/react-native-community/react-native-elements#buttons)
- [x] [Social Icons / Buttons](https://github.com/react-native-community/react-native-elements#social-icons--buttons)
- [x] [Icons](https://github.com/react-native-community/react-native-elements#icons--icon-buttons)
- [x] [Side Menu](https://github.com/react-native-community/react-native-elements#sidemenu)
- [x] [Form Elements](https://github.com/react-native-community/react-native-elements#forms)
- [x] [Search Bar](https://github.com/react-native-community/react-native-elements#search-bar)
- [x] [ButtonGroup](https://github.com/react-native-community/react-native-elements#buttongroup)
- [x] [Checkboxes](https://github.com/react-native-community/react-native-elements#checkboxes)
- [x] [List Element](https://github.com/react-native-community/react-native-elements#lists)
- [x] [Linked List Element](https://github.com/react-native-community/react-native-elements#lists)
- [x] [Tab Bar Component](https://github.com/react-native-community/react-native-elements#tab-bar-component)
- [x] [HTML style headings (h1, h2, etc...)](https://github.com/react-native-community/react-native-elements#html-style-headings)
- [x] [Card component](https://github.com/react-native-community/react-native-elements#card)
- [x] [Pricing Component](https://github.com/react-native-community/react-native-elements#pricing-component)
- [x] [Grid Component](https://github.com/react-native-community/react-native-elements#grid-component)
- [x] [Slider Component](https://github.com/react-native-community/react-native-elements#slider-component)
- [x] [Tile Component](https://github.com/react-native-community/react-native-elements#tile-component)
- [x] [Avatar Component](https://github.com/react-native-community/react-native-elements#avatar-component)

## Documentation

[View the full docs here](https://react-native-training.github.io/react-native-elements/)

## Demo App

Check out the pre built and configured [React Native Hackathon Starter Project](https://github.com/dabit3/react-native-hackathon-starter) which uses all of these elements.

## Roadmap

#### FIRST CONTRIBUTORS
- [ ] [Add Profile Component](https://github.com/react-native-community/react-native-elements/issues/129)
- [ ] [Add Header Component](https://github.com/react-native-community/react-native-elements/issues/47)
- [ ] Expose & document Divider Component
- [ ] Refactor Social Icon to use Button

#### NOT STARTED
- [ ] [Floating labels on FormInput](https://github.com/react-native-community/react-native-elements/issues/94)
- [ ] [Compatibility with react-native-web](https://github.com/react-native-community/react-native-elements/issues/110)
- [ ] [Support Multiple FormInput refs](https://github.com/react-native-community/react-native-elements/issues/147)
- [ ] [Two-Marker Slider](https://github.com/react-native-community/react-native-elements/issues/15)
- [ ] [Add Notification Component](https://github.com/react-native-community/react-native-elements/issues/190)
- [ ] [Add Image Component which supports parallax](https://github.com/react-native-community/react-native-elements/issues/203)
- [ ] [Add DatePicker/Calendar Component](https://github.com/react-native-community/react-native-elements/issues/214)
- [ ] [Add Theming & Default Styles](https://github.com/react-native-community/react-native-elements/issues/216)
- [ ] Something you's like to see? Submit an [issue](https://github.com/dabit3/react-native-elements/issues) or a [pull request](https://github.com/dabit3/react-native-elements/pulls)

### Contributing

Interested in contributing to this repo? Have a look at our [Contributing Guide](./.github/CONTRIBUTING.md)
