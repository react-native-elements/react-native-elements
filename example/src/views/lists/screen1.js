import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';

import { Font } from 'expo';

import Avatar from '../../../v1/avatar/Avatar';
import Button from '../../../v1/buttons/Button';

import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const USERS = [
  {
    name: 'Johh Smith',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    value: '- 164'
  },
  {
    name: 'Sarah Parker',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg',
    value: '+ 203',
    positive: true
  },
  {
    name: 'Paul Allen',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
    value: '+ 464',
    positive: true
  },
  {
    name: 'Terry Andrews',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg',
    value: '- 80',
    positive: false
  },
  {
    name: 'Andy Vitale',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg',
    value: '- 230',
    positive: false
  },
  {
    name: 'Katy Friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    value: '+ 160',
    positive: true
  },
];

export default class ListsScreen1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'georgia': require('../../../assets/fonts/Georgia.ttf'),
      'regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
      'light': require('../../../assets/fonts/Montserrat-Light.ttf'),
      'bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  renderValue(user) {
    const { value, positive } = user;

    if (positive) {
      return (
        <View style={{ backgroundColor: 'rgba(220,230,218,1)', width: 70, height: 28, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 10}}>
          <Icon
            name='md-arrow-dropup'
            color='green'
            size={25}
          />
          <Text style={{color: 'green', fontFamily: 'regular', fontSize: 13, marginLeft: 5}}>{value}</Text>
        </View>
      );
    } else {
      return (
        <View style={{ backgroundColor: 'rgba(244,230,224,1)', width: 70, height: 28, borderRadius: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 10}}>
          <Icon
            name='md-arrow-dropdown'
            color='red'
            size={25}
          />
          <Text style={{color: 'red', fontFamily: 'regular', fontSize: 13, marginLeft: 5}}>{value}</Text>
        </View>
      );
    }
  }

  renderCard(user, index) {
    const { name, avatar } = user;

    return (
      <View key={index} style={{height: 60, marginHorizontal: 20, marginTop: 10, backgroundColor: 'white', borderRadius: 5, alignItems: 'center', flexDirection: 'row'}}>
        <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginLeft: 15}}>
            <Avatar
              small
              rounded
              source={{
                uri: avatar,
              }}
              activeOpacity={0.7}
            />
          </View>
          <Text style={{fontFamily: 'regular', fontSize: 15, marginLeft: 10, color: 'gray'}}>
            {name}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginRight: 10 }}>
          {this.renderValue(user)}
          <View style={{ backgroundColor: 'rgba(222,222,222,1)', width: 35, height: 28, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}}>
            <Icon
              name='md-person-add'
              color='gray'
              size={20}
            />
          </View>
        </View>
      </View>
    );
  }

  renderListCards() {
    return _.map(USERS, (user, index) => {
      return this.renderCard(user, index);
    });
  }

  render() {
    return (
      <View>
        {this.state.fontLoaded ?
          <View style={{ flex: 1, backgroundColor: 'rgba(241,240,241,1)' }}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
              <Text style={styles.nameHeader}>
                Growing
              </Text>
            </View>
            <ScrollView style={{flex: 1, marginBottom: 20}}>
              <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', borderRadius: 5, alignItems: 'center', marginHorizontal: 10, height: 250, marginBottom: 10}}>
                <View style={{flex: 3, flexDirection: 'row'}}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Avatar
                      width={145}
                      height={145}
                      source={{
                        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
                      }}
                      activeOpacity={0.7}
                      avatarStyle={{borderRadius: 145/2}}
                      overlayContainerStyle={{backgroundColor: 'transparent'}}
                    />
                  </View>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ flex: 1, marginTop: 10, justifyContent: 'center'}}>
                      <Text style={{ fontFamily: 'bold', fontSize: 25, color: 'rgba(98,93,144,1)', marginLeft: -15}}>
                        Paul Allen
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{width: 300, borderWidth: 0.5, borderColor: 'rgba(222, 223, 226, 1)', marginHorizontal: 20, height: 1, marginVertical: 10}} />
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1}}>
                    <Button
                      text ='View Profile'
                      buttonStyle={{height: 33, width: 120, backgroundColor: 'rgba(222, 223, 226, 1)', borderRadius: 5}}
                      textStyle={{fontFamily: 'regular', fontSize: 13, color: 'gray'}}
                      onPress={() => console.log('aye')}
                      underlayColor="transparent"
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <Button
                      text ='Add User'
                      buttonStyle={{height: 33, width: 120, backgroundColor: 'rgba(113, 154, 112, 1)', borderRadius: 5}}
                      textStyle={{fontFamily: 'regular', fontSize: 13, color: 'white'}}
                      onPress={() => console.log('aye')}
                      underlayColor="transparent"
                    />
                  </View>
                </View>
              </View>
              {this.renderListCards()}
            </ScrollView>
          </View> :
          <Text>Loading...</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameHeader: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'regular',
    marginLeft: 20
  }
});
