import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { Button, Card, Icon } from 'react-native-elements';

import { SwipeDeck } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

// test data
const DATA = [
  {
    id: 1,
    text: 'Amanda',
    age: 28,
    uri: 'http://f9view.com/wp-content/uploads/2013/10/American-Beautiful-Girls-Wallpapers-Hollywood-Celebs-1920x1200px.jpg',
  },
  { id: 2, text: 'Emma', age: 29, uri: 'https://i.imgur.com/FHxVpN4.jpg' },
  {
    id: 3,
    text: 'Scarlett',
    age: 25,
    uri: 'https://i.ytimg.com/vi/GOJZ5TIlc3M/maxresdefault.jpg',
  },
  {
    id: 4,
    text: 'Keira',
    age: 27,
    uri: 'http://www.bdprimeit.com/wp-content/uploads/Keira-Knightley-Most-beautiful-Hollywood-actress.jpg',
  },
  {
    id: 5,
    text: 'Ashley',
    age: 30,
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/4c/89/67/4c8967fac1822eeddf09670565430fd5.jpg',
  },
  {
    id: 6,
    text: 'Jennifer',
    age: 24,
    uri: 'https://2.bp.blogspot.com/-Vy0NVWhQfKo/Ubma2Mx2YTI/AAAAAAAAH3s/LC_u8LRfm8o/s1600/aimee-teegarden-04.jpg',
  },
  {
    id: 7,
    text: 'Sarah',
    age: 28,
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/41/75/26/4175268906d97492e4a3175eab95c0f5.jpg',
  },
];

class SwipeDecker extends Component {
  renderCard(card) {
    return (
      <Card
        key={card.id}
        containerStyle={{
          borderRadius: 10,
          width: SCREEN_WIDTH * 0.92,
          height: SCREEN_HEIGHT - 165,
        }}
        featuredTitle={`${card.text}, ${card.age}`}
        featuredTitleStyle={{
          position: 'absolute',
          left: 15,
          bottom: 10,
          fontSize: 30,
        }}
        image={{ uri: card.uri }}
        imageStyle={{
          borderRadius: 10,
          width: SCREEN_WIDTH * 0.915,
          height: SCREEN_HEIGHT - 165,
        }}
      />
    );
  }

  onSwipeRight(card) {
    console.log('Card liked: ' + card.text);
  }

  onSwipeLeft(card) {
    console.log('Card disliked: ' + card.text);
  }

  renderNoMoreCards() {
    return (
      <Card
        containerStyle={{
          borderRadius: 10,
          width: SCREEN_WIDTH * 0.92,
          height: SCREEN_HEIGHT - 165,
        }}
        featuredTitle="No more cards"
        featuredTitleStyle={{ fontSize: 25 }}
        image={{ uri: 'https://i.imgflip.com/1j2oed.jpg' }}
        imageStyle={{
          borderRadius: 10,
          width: SCREEN_WIDTH * 0.915,
          height: SCREEN_HEIGHT - 165,
        }}
      />
    );
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeftIcon}>
          <Icon name="user" type="font-awesome" color="#ccc" size={35} />
        </View>
        <View style={styles.headerCenter}>
          <View style={styles.headerCenterToggleContainer}>
            <View style={styles.headerCenterToggleLeft}>
              <Icon
                name="fire"
                type="material-community"
                color="#fff"
                size={28}
              />
            </View>
            <View style={styles.headerCenterToggleRight}>
              <Icon name="group" type="font-awesome" color="#ccc" size={25} />
            </View>
          </View>
        </View>
        <View style={styles.headerRightIcon}>
          <Icon name="comments" type="font-awesome" color="#ccc" size={35} />
        </View>
      </View>
    );
  }

  renderFooter() {
    return (
      <View style={styles.footer}>
        <View style={[styles.footerIcon, { paddingLeft: 10 }]}>
          <Icon
            containerStyle={{
              backgroundColor: 'white',
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
            name="replay"
            size={30}
            color="orange"
          />
        </View>
        <View style={styles.footerIcon}>
          <Icon
            containerStyle={{
              backgroundColor: 'white',
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
            name="close"
            size={45}
            color="red"
          />
        </View>
        <View style={styles.footerIcon}>
          <Icon
            containerStyle={{
              backgroundColor: 'white',
              width: 48,
              height: 48,
              borderRadius: 24,
            }}
            name="bolt"
            type="font-awesome"
            size={30}
            color="purple"
          />
        </View>
        <View style={styles.footerIcon}>
          <Icon
            containerStyle={{
              backgroundColor: 'white',
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
            name="favorite"
            size={35}
            color="green"
          />
        </View>
        <View style={[styles.footerIcon, { paddingRight: 10 }]}>
          <Icon
            containerStyle={{
              backgroundColor: 'white',
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
            name="star"
            size={30}
            color="blue"
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View style={styles.deck}>
          <SwipeDeck
            data={DATA}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
            onSwipeRight={this.onSwipeRight}
            onSwipeLeft={this.onSwipeLeft}
          />
        </View>
        {this.renderFooter()}
      </View>
    );
  }
}

SwipeDecker.navigationOptions = {
  title: 'Swipe Decker',
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(211, 211, 211, 0.4)',
  },
  header: {
    height: 64,
    paddingTop: 35,
    flexDirection: 'row',
  },
  headerLeftIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 15,
  },
  headerCenter: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerCenterToggleContainer: {
    flexDirection: 'row',
    width: 160,
    height: 45,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  headerCenterToggleLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    borderRadius: 30,
  },
  headerCenterToggleRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 20,
  },
  deck: {
    flex: 1,
  },
  footer: {
    height: 64,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  footerIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 10,
  },
});

export default SwipeDecker;
