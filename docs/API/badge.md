![Badges](http://i.imgur.com/qvJgGF2.png)

Example badge usage
```js
<ListItem
  ...
  badge={{ value: 3, badgeTextStyle: { color: 'orange' }, badgeContainerStyle: { marginTop: -20 } }}
/>

<ListItem
  ...
  badge={{ element: <MyCustomElement> }}
/>

```

#### Badge props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| value | none | string | text value to be displayed by badge, defaults to empty| 
| badgeContainerStyle | inherited styling | object (style) | |
| badgeTextStyle | inherited styling | object (style) | 
| children | none | React Native Component | override the default badge contents, mutually exclusive with 'value' property |
| badge | none | object (props) | deprecated method of passing props to the badge |
