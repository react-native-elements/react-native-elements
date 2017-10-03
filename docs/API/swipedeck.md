An SwipeDeck component that provides [Tinder Cards](https://github.com/Monte9/react-native-tinder-cards/blob/master/tinder_cards_demo.gif) like functionality.

> This component was inspired by Stephen Grider's Udemy course called React Native: Advanced Concepts. Check it out [here](https://www.udemy.com/react-native-advanced/learn/v4/overview).

> __Deprecation warning__: With the release of 1.0.0, we are going to remove this component, and its development is being moved to separate repo so that maintenance can be done easier. To keep up with it's development you can [check the project here](https://github.com/Monte9/react-native-tinder-cards).

### Demo

![SwipeDeck](https://i.imgur.com/d8FxHk2.gif)

```js
import { SwipeDeck } from 'react-native-elements';

<SwipeDeck
  data={DATA}
  renderCard={this.renderCard}
  renderNoMoreCards={this.renderNoMoreCards}
  onSwipeRight={this.onSwipeRight}
  onSwipeLeft={this.onSwipeLeft}
/>

renderCard(card) {
  return (
    <Card
      key={card.id}
      containerStyle={{borderRadius: 10, width: SCREEN_WIDTH * 0.92, height: SCREEN_HEIGHT - 165}}
      featuredTitle={`${card.text}, ${card.age}`}
      featuredTitleStyle={{position: 'absolute', left: 15, bottom: 10, fontSize: 30 }}
      image={{ uri: card.uri }}
      imageStyle={{borderRadius: 10, width: SCREEN_WIDTH * 0.915, height: SCREEN_HEIGHT - 165}}
    />
  )
}

onSwipeRight(card) {
  console.log("Card liked: " + card.text);
}

onSwipeLeft(card) {
  console.log("Card disliked: " + card.text);
}

renderNoMoreCards() {
  return (
    <Card
      containerStyle={{borderRadius: 10, width: SCREEN_WIDTH * 0.92, height: SCREEN_HEIGHT - 165}}
      featuredTitle="No more cards"
      featuredTitleStyle={{fontSize: 25}}
      image={{ uri: 'https://i.imgflip.com/1j2oed.jpg' }}
      imageStyle={{borderRadius: 10, width: SCREEN_WIDTH * 0.915, height: SCREEN_HEIGHT - 165}}
    />
  )
}

// test data
const DATA = [
  { id: 1, text: 'Amanda', age: 28, uri: 'http://f9view.com/wp-content/uploads/2013/10/American-Beautiful-Girls-Wallpapers-Hollywood-Celebs-1920x1200px.jpg' },
  { id: 2, text: 'Emma', age: 29, uri: 'https://i.imgur.com/FHxVpN4.jpg' },
  { id: 3, text: 'Scarlett', age: 25, uri: 'https://i.ytimg.com/vi/GOJZ5TIlc3M/maxresdefault.jpg' },
  { id: 4, text: 'Keira', age: 27, uri: 'http://www.bdprimeit.com/wp-content/uploads/Keira-Knightley-Most-beautiful-Hollywood-actress.jpg' },
  { id: 5, text: 'Ashley', age: 30, uri: 'https://s-media-cache-ak0.pinimg.com/736x/4c/89/67/4c8967fac1822eeddf09670565430fd5.jpg' },
  { id: 6, text: 'Jennifer', age: 24, uri: 'https://2.bp.blogspot.com/-Vy0NVWhQfKo/Ubma2Mx2YTI/AAAAAAAAH3s/LC_u8LRfm8o/s1600/aimee-teegarden-04.jpg' },
  { id: 7, text: 'Sarah', age: 28, uri: 'https://s-media-cache-ak0.pinimg.com/736x/41/75/26/4175268906d97492e4a3175eab95c0f5.jpg' },
];
```

#### SwipeDeck Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| **data** | none | array | An array of data object which contains each card details. Refer to code snippet above for example **(required)** |
| **renderCard** | none | function | A function that takes a card as a prop and renders it with custom UI **(required)** |
| renderNoMoreCards | none | function | A function that renders custom UI when no more cards are present |
| onSwipeRight | empty function | function | A callback function that takes a card as a prop and take the approriate action when the user swipes the card right |
| onSwipeLeft | empty function | function | A callback function that takes a card as a prop and take the approriate action when the user swipes the card left |
