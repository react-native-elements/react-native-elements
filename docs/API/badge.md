![Badges](https://i.imgur.com/LNzKrd8.png)

Example badge usage
```js
<Badge
  value={3}
  textStyle={{ color: 'orange' }}
/>

<Badge containerStyle={{ backgroundColor: 'violet'}}>
  <Text>User 1</Text>
</Badge>

<Badge onPress={() => {console.log('pressed')}} value="5" />

<Badge component={TouchableNative} value={10} />
```

#### Badge props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| value | none | string or number | text value to be displayed by badge, defaults to empty| 
| containerStyle | inherited styling | object (style) | style for the outer badge component |
| wrapperStyle | inherited styling | object (style) | style for the outer most badge component |
| textStyle | inherited styling | object (style) | style for the text in the badge's value property |
| children | none | React Native Component | override the default badge contents, mutually exclusive with 'value' property |
| onPress | none | function | function called when pressed on the badge |
| component | View, if onPress then TouchableOpacity | React Element | custom component to replace the badge outer component |
