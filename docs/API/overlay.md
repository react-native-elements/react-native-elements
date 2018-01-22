
#### Overlay

<img src="https://raw.githubusercontent.com/react-native-training/react-native-elements/master/docs/images/overlay.png" width="400" >

``` js
<Overlay
  isVisible={this.state.isVisible}
>
  <Text>Hello from Overlay!</Text>
</Overlay>

{
  this.state.visible && (
    <Overlay isVisible>
      <Text>Hello from Overlay!</Text>
    </Overlay>
  )
}

<Overlay
  isVisible={this.state.isVisible}
  windowBackgroundColor='rgba(255, 255, 255, .5)'
  overlayBackgroundColor='red'
  width='auto'
  height='auto'
>
  <Text>Hello from Overlay!</Text>
</Overlay>

```

### Overlay Props   

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| children | none | any | What the modal will render |
| isVisible | none | boolean | If true, the overlay is visible |
| containerStyle | various styles | object (style) | Style of the overlay container |
| overlayStyle | various styles | object (style) | style of the actual overlay |
| overlayBackgroundColor | white | string | Background color of the actual overlay |
| windowBackgroundColor | rgba(0, 0, 0, .5) | string | Background color for the overlay background |
| borderRadius | 3 | number | Border radius for the overlay |
| width | window width - 80 | string or number | Width of the overlay |
| height | window height - 180 | string or number | Height of the overlay |
| fullScreen | none | boolean | If set to true, the modal will take up the entire screen width and height |
