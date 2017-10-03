A component with full size image and with text either inside the image or under the image along with customizable caption

> This component was inspired from [Shoutem UI](https://github.com/shoutem/ui) by [Shoutem](https://github.com/shoutem). Check out [Shoutem](http://shoutem.github.io/) if you haven't already!

#### Featured Tile
![screen shot 2017-01-15 at 9 50 15 pm](https://cloud.githubusercontent.com/assets/6476108/21969491/beea4630-db6c-11e6-8913-7cc8813e35d6.png)

```js
<Tile
   imageSrc={{require: ('./img/path')}}
   title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
   featured
   caption="Some Caption Text"
/>
```
#### Featured Tile with Icon
![screen shot 2017-01-15 at 9 50 22 pm](https://cloud.githubusercontent.com/assets/6476108/21969581/6004e408-db6d-11e6-9379-556a0c5e967a.png)

```js
<Tile
  imageSrc={{require: ('./img/path')}}
  icon={{name: 'play-circle', type: 'font-awesome'}}
  featured
/>
```
#### Tile with Icon
![screen shot 2017-01-15 at 9 50 34 pm](https://cloud.githubusercontent.com/assets/6476108/21969683/fce073f0-db6d-11e6-8d03-6e42c15627a9.png)

```js
<Tile
  imageSrc={{require: ('./img/path')}}
  title="Lorem ipsum dolor sit amet, consectetur"
  icon={{name: 'play-circle', type: 'font-awesome'}}  // optional
  contentContainerStyle={{height: 70}}
>
  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
    <Text>Caption</Text>
    <Text>Caption</Text>
  </View>
</Tile>
```

### Tile Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| icon | none | object {name: string, color: string, size: number, type: string (default is material, or choose one of material-community, simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), iconStyle: object(style)} | Icon Component Props (optional) |
| iconContainerStyle | none | object (style) | Styling for the outer icon container (optional) |
| title | none | string | Text inside the tile (optional) |
| titleStyle | none | object (style) | Styling for the title (optional) |
| titleNumberOfLines | none | number | Number of lines for Title |
| caption | none | string | Text inside the tilt when tile is featured
| captionStyle | none | object (style) | Styling for the caption (optional) |
| featured | false | boolean | Changes the look of the tile (optional) |
| containerStyle | none | object (style) | Styling for the outer tile container (optional) |
| imageSrc | none | object (image) | Source for the image (required) |
| imageContainerStyle | none | object (style) | Styling for the image (optional) |
| onPress | none | function (event) | Function to call when tile is pressed (optional) |
| activeOpacity | 0.2 | number | Number passed to control opacity on press (optional) |
| contentContainerStyle | none | object (style) | Styling for bottom container when not featured tile (optional) |
| width | Device Width | number | Width for the tile (optional) |
| height | Device Width * 0.8 | number | Height for the tile |
