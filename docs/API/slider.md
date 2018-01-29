![Slider](https://raw.githubusercontent.com/react-native-training/react-native-elements/master/docs/images/slider_screenshot.png)

A pure JavaScript <Slider> component for react-native. It is a drop-in replacement for Slider.

> This component is a forked implementation of  [react-native-slider](https://github.com/jeanregisser/react-native-slider). Also note that due to the nature of the platform, and the existence of breaking changes between React Native releases, this implementation currently only supports v0.26.0+

```js
import { Slider } from 'react-native-elements'

<View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
  <Slider
    value={this.state.value}
    onValueChange={(value) => this.setState({value})} />
  <Text>Value: {this.state.value}</Text>
</View>

```
## Slider Props

prop                  | type     | optional | default                   | description
--------------------- | -------- | -------- | ------------------------- | -----------
value                 | number   | Yes      | 0                         | Initial value of the slider
disabled              | bool     | Yes      | false                     | If true the user won't be able to move the slider
minimumValue          | number   | Yes      | 0                         | Initial minimum value of the slider
maximumValue          | number   | Yes      | 1                         | Initial maximum value of the slider
step                  | number   | Yes      | 0                         | Step value of the slider. The value should be between 0 and maximumValue - minimumValue)
minimumTrackTintColor | string   | Yes      | '#3f3f3f'                 | The color used for the track to the left of the button
maximumTrackTintColor | string   | Yes      | '#b3b3b3'                 | The color used for the track to the right of the button
thumbTintColor        | string   | Yes      | '#343434'                 | The color used for the thumb
thumbTouchSize        | object   | Yes      | `{width: 40, height: 40}` | The size of the touch area that allows moving the thumb. The touch area has the same center as the visible thumb. This allows to have a visually small thumb while still allowing the user to move it easily.
onValueChange         | function | Yes      |                           | Callback continuously called while the user is dragging the slider
onSlidingStart        | function | Yes      |                           | Callback called when the user starts changing the value (e.g. when the slider is pressed)
onSlidingComplete     | function | Yes      |                           | Callback called when the user finishes changing the value (e.g. when the slider is released)
style                 | [style](http://facebook.github.io/react-native/docs/view.html#style)    | Yes      |                           | The style applied to the slider container
trackStyle            | [style](http://facebook.github.io/react-native/docs/view.html#style)    | Yes      |                           | The style applied to the track
thumbStyle            | [style](http://facebook.github.io/react-native/docs/view.html#style)    | Yes      |                           | The style applied to the thumb
debugTouchArea        | bool     | Yes      | false                     | Set this to true to visually see the thumb touch rect in green.
animateTransitions    | bool     | Yes      | false                     | Set to true if you want to use the default 'spring' animation
animationType         | string   | Yes      | 'timing'                  | Set to 'spring' or 'timing' to use one of those two types of animations with the default [animation properties](https://facebook.github.io/react-native/docs/animations.html).
animationConfig       | object   | Yes      | undefined                 | Used to configure the animation parameters.  These are the same parameters in the [Animated library](https://facebook.github.io/react-native/docs/animations.html).
orientation           | string   | Yes      | 'horizontal'              | Set the orientation of the slider.
