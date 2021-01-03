---
id: slider
title: Slider
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Props from './props/slider.md'

Sliders allow users to select a value from a fixed set of options.

<img alt="Slider" src={useBaseUrl('img/slider_screenshot.png')} />

> This component is a forked implementation of
> [react-native-slider](https://github.com/jeanregisser/react-native-slider).

## Usage

```js
import { Slider } from 'react-native-elements';
import { Animated } from 'react-native';

<View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
  <Slider
    value={this.state.value}
    onValueChange={(value) => this.setState({ value })}
  />
  <Text>Value: {this.state.value}</Text>
</View>;

// Replace Thumb with custom image
<View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
  <Slider
    value={this.state.value}
    onValueChange={(value) => this.setState({ value })}
    thumbStyle={{ height: 40, width: 40, backgroundColor: 'transparent' }}
    thumbProps={{
      Component: Animated.Image,
      source: {
        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      },
    }}
  />
  <Text>Value: {this.state.value}</Text>
</View>;

// Set Custom Children inside thumb
<View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
  <Slider
    value={value}
    onValueChange={setValue}
    maximumValue={50}
    minimumValue={20}
    step={1}
    trackStyle={{ height: 10, backgroundColor: 'transparent' }}
    thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
    thumbProps={{
      children: (
        <Icon
          name="heartbeat"
          type="font-awesome"
          size={20}
          reverse
          containerStyle={{ bottom: 20, right: 20 }}
          color="#f50"
        />
      ),
    }}
  />
  <Text>Value: {this.state.value}</Text>
</View>;
```

---

<Props />

---
