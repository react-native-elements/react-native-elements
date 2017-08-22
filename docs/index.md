<p align="center">
  <a href="https://react-native-community.github.io/react-native-elements/">
    <img alt="react-native-elements" src="images/react_native_elements_logo.png" width="450">
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
  <a href="https://cdnjs.com/libraries/react-native-elements"><img src="https://img.shields.io/cdnjs/v/react-native-elements.svg?style=flat-square"></a>
  <a href="https://travis-ci.org/react-native-training/react-native-elements"><img src="https://img.shields.io/travis/react-native-training/react-native-elements/master.svg?style=flat-square"></a>
  <a href="https://reactnativetraining.herokuapp.com/"><img src="https://reactnativetraining.herokuapp.com/badge.svg"></a>
</p>

<p align="center">
  <a href="#backers"><img src="https://opencollective.com/react-native-elements/backers/badge.svg"></a>
  <a href="#sponsors"><img src="https://opencollective.com/react-native-elements/sponsors/badge.svg"></a>
  <a href="https://codecov.io/gh/react-native-training/react-native-elements"><img src="https://codecov.io/gh/react-native-training/react-native-elements/coverage.svg"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
</p>

<br />

![React Native UI Toolkit](http://i.imgur.com/UXrGTeG.png)

## Get Started

### Installation

- If you are using
[create-react-native-app](https://github.com/react-community/create-react-native-app)
or [Expo](https://expo.io), [follow these instructions](https://github.com/react-native-training/react-native-elements/blob/master/using-with-crna-or-expo.md).

- If your project is a standard React Native project (if you have an
ios/android directory and created it with `react-native init`), [follow these installation instructions](https://github.com/react-native-training/react-native-elements/blob/master/default_installation.md).

### Usage

Start using the components or try it on Snack [here](https://snack.expo.io/rJu6gJfBZ).

```js
import { Button } from 'react-native-elements';

<Button
  raised
  icon={{name: 'home', size: 32}}
  buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
  textStyle={{textAlign: 'center'}}
  title={`Welcome to\nReact Native Elements`}
/>
```

## Components Included

- [x] [Buttons](https://react-native-training.github.io/react-native-elements/API/buttons/)
- [x] [Social Icons / Social Icon Buttons](https://react-native-training.github.io/react-native-elements/API/social_icons/)
- [x] [Icons](https://react-native-training.github.io/react-native-elements/API/icons/)
- [x] [Side Menu](https://react-native-training.github.io/react-native-elements/API/side_menu/)
- [x] [Form Elements](https://react-native-training.github.io/react-native-elements/API/forms/)
- [x] [Search Bar](https://react-native-training.github.io/react-native-elements/API/searchbar/)
- [x] [ButtonGroup](https://react-native-training.github.io/react-native-elements/API/button_group/)
- [x] [Checkboxes](https://react-native-training.github.io/react-native-elements/API/checkbox/)
- [x] [List Element](https://react-native-training.github.io/react-native-elements/API/lists/)
- [x] [Badge](https://react-native-training.github.io/react-native-elements/API/badge/)
- [x] [Tab Bar Component](https://react-native-training.github.io/react-native-elements/API/tabbar/)
- [x] [HTML style headings](https://react-native-training.github.io/react-native-elements/API/HTML_style_headings/)
- [x] [Card component](https://react-native-training.github.io/react-native-elements/API/card/)
- [x] [Pricing Component](https://react-native-training.github.io/react-native-elements/API/pricing/)
- [x] [Grid Component](https://react-native-training.github.io/react-native-elements/API/grid/)
- [x] [Slider Component](https://react-native-training.github.io/react-native-elements/API/slider/)
- [x] [Tile Component](https://react-native-training.github.io/react-native-elements/API/tile/)
- [x] [Avatar Component](https://react-native-training.github.io/react-native-elements/API/avatar/)
- [x] [Rating Component](https://react-native-training.github.io/react-native-elements/API/rating/)
- [x] [SwipeDeck Component](https://react-native-training.github.io/react-native-elements/API/swipedeck/)

## Documentation

[View the full docs here](https://react-native-training.github.io/react-native-elements/API/buttons/)

## Demo App

Run the pre built and configured [React Native Elements App](https://expo.io/@monte9/react-native-elements-app) on Expo which uses all of the React Native Elements components.

Also checkout the `example/` folder to view the implementation & run the expo app locally.

## Roadmap

#### FIRST CONTRIBUTORS
Look for the label `Good First Task` on the issues. Click [here](https://github.com/react-native-training/react-native-elements/issues?q=is%3Aopen+is%3Aissue+label%3A%22Good+First+Task%22) to see them.

#### NOT STARTED
- [ ] [Compatibility with react-native-web](https://github.com/react-native-training/react-native-elements/issues/110)
- [ ] [Support Multiple FormInput refs](https://github.com/react-native-training/react-native-elements/issues/147)
- [ ] [Two-Marker Slider](https://github.com/react-native-training/react-native-elements/issues/15)
- [ ] [Add Notification Component](https://github.com/react-native-training/react-native-elements/issues/190)
- [ ] [Add Image Component which supports parallax](https://github.com/react-native-training/react-native-elements/issues/203)
- [ ] [Add DatePicker/Calendar Component](https://github.com/react-native-training/react-native-elements/issues/214)
- [ ] [Add Theming & Default Styles](https://github.com/react-native-training/react-native-elements/issues/216)
- [ ] Something you would like to see? Submit an [issue](https://github.com/react-native-training/react-native-elements/issues/new) or a [pull request](https://github.com/react-native-training/react-native-elements/pulls)

## Contributing

Interested in contributing to this repo? Have a look at our [Contributing Guide](./.github/CONTRIBUTING.md)

Also come say hi to the RNE community on our public [Slack team](https://reactnativetraining.herokuapp.com/). See you on the other side! :)

## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/react-native-elements#backer)]

<a href="https://opencollective.com/react-native-elements/backer/0/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/1/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/2/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/3/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/4/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/5/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/6/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/7/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/8/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/9/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/10/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/11/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/12/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/13/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/14/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/15/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/16/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/17/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/18/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/19/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/20/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/21/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/22/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/23/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/24/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/25/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/26/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/27/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/28/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/backer/29/website" target="_blank"><img src="https://opencollective.com/react-native-elements/backer/29/avatar.svg"></a>


## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/react-native-elements#sponsor)]

<a href="https://opencollective.com/react-native-elements/sponsor/0/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/1/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/2/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/3/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/4/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/5/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/6/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/7/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/8/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/9/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/10/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/11/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/12/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/13/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/14/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/14/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/15/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/15/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/16/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/16/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/17/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/17/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/18/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/18/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/19/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/19/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/20/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/20/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/21/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/21/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/22/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/22/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/23/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/23/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/24/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/24/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/25/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/25/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/26/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/26/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/27/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/27/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/28/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/28/avatar.svg"></a>
<a href="https://opencollective.com/react-native-elements/sponsor/29/website" target="_blank"><img src="https://opencollective.com/react-native-elements/sponsor/29/avatar.svg"></a>
