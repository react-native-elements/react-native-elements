# Compatibility with react-native-web

## Component Progress

| Component    | initial check | estimated effort            | add tests  | final |
| ------------ | ------------- | --------------------------- | ---------- | ----- |
| Avatar       | 2017-11-08    | [med](#avatar-changes)      | 2017-11-29 |
| Badge        | 2017-11-10    | [med](#badge-changes)       | 2017-12-01 |
| Button Group | 2017-11-11    | [low](#buttongroup-changes) | 2017-11-29 |
| Buttons      | 2017-11-09    | [low](#button-changes)      | 2017-11-29 |
| Card         | 2017-11-10    | [low](#card-changes)        | 2017-12-01 |
| Checkbox     | 2017-11-10    | [low](#checkbox-changes)   | 2017-12-02 |
| Divider      | 2017-11-10    | no changes                     | 2017-12-02 |
| Forms        | 2017-11-11    | [low](#form-changes)        | 2017-11-29 |
| Header       | 2017-11-07    | no changes                    | 2017-12-02 |
| Icon         | 2017-11-07    | [med](#icon-changes)        | 2017-11-30 |
| Lists        | 2017-11-11    | [low](#listitem-changes)     | 2017-12-03 |
| Pricing      | 2017-11-11    | [low](#pricing-changes)      | 2017-12-03 |
| Rating       | 2017-11-11    | [med](#rating-changes)      | 2017-11-21 |
| SearchBar    | 2017-11-12    | [low](#search-changes)     | 2017-12-03 |
| Slider       | 2017-11-08    | [low](#slider-changes)       | 2017-12-04 |
| Social Icons | 2017-11-11    | [low](#socialicon-changes) | 2017-11-30 |
| Text         | 2017-11-12    | [low](#text-changes)         | 2017-12-04 |
| Tiles        | 2017-11-12    | [low](#tile-changes)         | 2017-12-04 |

## Component Changes
**note**: "dom prop warnings" refer to console.warn messages which alert the developer that a dom element has been passed props it connot recognize
**note**: Any component which uses react-native-vector-icons will produce "Warning: React.createElement: type is invalid" messages during test runs.  These can be ignored.

### Avatar changes
- fix: for `onPress`, `onLongPress`, and `activeOpactiy`: utilize `touchableProps` object, empty if View, then added via `"{...touchableProps}"` - to avoid dom prop warnings
- fix: `iconStyle` was not being passed to Icon - see [below](#outstanding)
- fix: set `draggable` to false for Image
- fix: changed `component` proptype from `.oneOf([...components])` to `.any` to make styleguide (react-docgen) happy
- change: added web support for `raised` prop

### Badge changes
- fix: removed isValidElement check for `control` prop

### Button changes
- change: add web support for raised
- fix: for `Component`, `leftIcon`, and `rightIcon`: delete from `attributes`- to avoid dom prop warnings

### ButtonGroup changes
- fix: for `activeOpacity`, `setOpactityTo`: introduce `{...opacityProps}` and for `onHideUnderlay`, `onShowUnderlay`, `underlayColor`: `{...highlightProps}` - to avoid dom prop warnings
- fix: add defaultProps: `{underlayColor: '#ffffff'}` to keep orig behaviour

### Card changes
- change: add web shadow to appear raised
- change: add web support for default font weights

### CheckBox changes
- change: added web support for bold text

### FormInput changes
- fix: `shake` and `textInputRef` added to props destructuring to avoid dom prop warnings
- change: add web support for default styles

### FormLabel changes
- change: added web support for bold text

### Icon changes
- fix: for `onPress`, `onLongPress`, `underlayColor` use `{...touchableProps}` to avoid dom prop warnings
- change: added web support for `raised` prop

### ListItem changes
- fix: use `{...highlightProps}` to avoid dom prop warnings for the following props:
  -  `onPress`,
  -  `onLongPress`,
  -  `underlayColor`
- fix: use `{...leftIconHighlightProps}` to avoid dom prop warnings for the following props:
  -  `leftIconOnPress`,
  -  `leftIconOnLongPress`,
  -  `leftIconUnderlayColor`
- fix: set `title` and `subtitle` default font sizes larger for web
- fix: add "alignItems: 'center'" to default `wrapperStyle` for web

### Pricing changes
- change: added 'isRequired' to propTypes for:
  - `title`
  - `price`
  - `info`
  - `button`
  - `color`

### Rating changes
- fix: added `draggable={false}` to keep Image elements from dragging instead of chaning the rating
- fix: changed pointerEvents; `box-none` for parent View, `none` for Image
- fix: changed the way Animated was being used:
  - switched from ValueXY to Value - only need X
  - simplified interpolations
  - keep one Animated.Value instead of creating new
  - change anim value via Animated.event(), which is async, and keeps from using setState on the same thread as render(); use a listener on the anim value for the same reason

### SearchBar changes
- fix: pass `loadingIcon`.color to ActivityIndicator instead of `icon`.color
- fix: add `onClearText` to props destructuring to avoid dom prop warnings
- change: add web support for default icon styles
- change: renamed class from `Search` to `SearchBar` for styleguidist

### Slider changes
- fix: added to props destructuring to avoid dom prop warnings:
  - `thumbTouchSize`
  - `onSlidingStart`
  - `onSlidingComplete`
  - `animationType`
  - `animateTransitions`
  - `animationConfig` 
- fix: removed `marginTop` from `minimumTrackStyle`.  No negative effect on android

### SocialIcon changes
- fix: use `{...touchableProps}` and `{highlightProps}` to avoid dom prop warnings for
  - `onPress`
  - `onLongPress`
  - `underlayColor`
- change: added web support for `raised` prop

### Text changes
- change: for styleguidist:
- fix: set fontWeight for web

### Tile changes
- fix: add `activeOpacity` to proper element
- fix: add styles.imageStyle to BackgroundImage.style

## Other Changes
- rnw does not export `ViewPropTypes` from the same place
- to resolve:
  - src/config/ViewPropTypes.js split into .ios .android and .web
  - added `moduleNameMapper` to jest config in package.json
  - added module.resolve.extensions to webpack.config.js


## Outstanding

### Themes & Styles:
- **note**:  planning to handle this with documentation and examples

### Badge:
- **suggestion**:  new prop to set Text node's `selectable` prop, defaults to false

- **suggestion**:  default value for `wrapperStyle` prop - set  to `alignSelf: 'flex-start'`, which sets width to fit content

- **confirm**:  ok to disable validElement check for `control` prop?

### Button
- **note**:  `leftIcon` and `rightIcon` cause React.createElement errors during run, but produce acceptable snapshots

### ButtonGroup:
- **question**:  `containerBorderRadius` prop has no effect on web.  current source is labelled as a workaround.  implement a workaround for web or chang the whole thing?

### CheckBox:
- **unresolved**:  `onLongIconPress` does not function on web
- **note**:  dom prop warnings are generated by react-native-vector-icons

### Icon:
- **suggestion**:  new prop to set Text node's `selectable` prop, defaults to false

- **suggestion**: default value for `containerStyle` prop - set  to `alignSelf: 'flex-start'`, which sets width to fit content

- **confirm**:  are changes to `iconStyle` prop ok?

### ListItem:
- **note**: the following props have no effect on web:
  - `textInputAutoCapitalize` (does work in Chrome and iOS Safari)
  - `textInputAutoCorrect` (does work in iOS Safari)
  - `textInputReturnKeyType`

### PricingCard:
- **note**: `info` prop should be marked as required in the api docs
 
### Rating
- **suggestion**: on web, it might make sense to behave a bit differently.  Instead of forcing a user to slide, one should be able to click anywhere on the group of stars/things

### Slider
- **note**: keeping `onValueChange` from propagating to dom elements causes test: "should call onValueChange" to fail, even though the function does get called in practical testing.  Left the warning for now
- **note**: the PanResponder isn't very robust on the newest versions of Firefox.  I submitted [an issue](https://github.com/necolas/react-native-web/issues/729) to the react-native-web project.
