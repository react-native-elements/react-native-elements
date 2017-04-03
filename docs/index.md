![React Native Elements](http://i.imgur.com/Ok2KaWq.png)
## Cross Platform React Native UI Toolkit

![React Native UI Toolkit](http://i.imgur.com/UXrGTeG.png)

## Get Started

- If you are using
[create-react-native-app](github.com/react-community/create-react-native-app)
or [Expo](https://expo.io), [follow these instructions](https://github.com/react-native-community/react-native-elements/blob/master/using-with-crna-or-expo.md).

- If your project is a standard React Native project (if you have an
ios/android directory and created it with `react-native init`), [follow these installation instructions](https://github.com/react-native-community/react-native-elements/blob/master/installation.md).

## Included
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

## Roadmap

#### IN PROGRESS
- [ ] [Add Unit Tests](https://github.com/react-native-community/react-native-elements/issues/196)
- [ ] [Create React Native Elements Website](https://github.com/react-native-community/react-native-elements/issues/43)

#### FIRST CONTRIBUTORS
- [ ] [Add Profile Component](https://github.com/react-native-community/react-native-elements/issues/129)
- [ ] [Add Header Component](https://github.com/react-native-community/react-native-elements/issues/47)
- [ ] [Add featuredTile prop in Tile](https://github.com/react-native-community/react-native-elements/issues/188)
- [ ] [Add Badge Component](https://github.com/react-native-community/react-native-elements/issues/203)
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

## Examples
Check out the pre built and configured [React Native Hackathon Starter Project](https://github.com/dabit3/react-native-hackathon-starter) which uses all of these elements.

## Notes

#### Fonts
React Native Elements uses the System font as the default font family for iOS and Sans Serif as the default font family for Android.

**In the example screenshots, we are using Lato which can be downloaded [here](https://fonts.google.com/specimen/Lato?selection.family=Lato).**

> We are working on a way to make a custom font family configurable through the command line.

[Here](https://github.com/dabit3/react-native-fonts) is a list of fonts available out of the box for each platform, or you can install and use a custom font of your own.

To override the fontFamily in any element, simply provide a fontFamily prop:

```js
<Button
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON'
  fontFamily='Comic Sans MS' />

```