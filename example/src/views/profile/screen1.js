import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { Font, LinearGradient } from 'expo';

import Button from '../../../v1/buttons/Button';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IMAGE_SIZE = SCREEN_WIDTH - 80;

class CustomButton extends Component {
  constructor() {
    super();

    this.state = {
      selected: false
    };
  }

  componentDidMount() {
    const { selected } = this.props;

    this.setState({
      selected
    });
  }

  render() {
    const { title } = this.props;
    const { selected } = this.state;

    return (
      <Button
        text={title}
        textStyle={{ fontSize: 15, color: 'white', fontFamily: 'regular' }}
        buttonStyle={selected ? { backgroundColor: 'rgba(213, 100, 140, 1)', borderRadius: 100, width: 127 } : { borderWidth: 1, borderColor: 'white', borderRadius: 30, width: 127, backgroundColor: 'transparent' }}
        containerStyle={{ marginRight: 10 }}
        onPress={() => this.setState({ selected: !selected })}
      />
    );
  }
}

export default class LoginScreen1 extends Component {
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

  render() {
    return (
      <View>
        { this.state.fontLoaded ?
          <View style={{flex: 1, backgroundColor: 'rgba(47,44,60,1)'}}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
              <Text style={styles.nameHeader}>
                Theresa, 26
              </Text>
            </View>
            <ScrollView style={{flex: 1}}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={{ uri: 'https://static.pexels.com/photos/428336/pexels-photo-428336.jpeg' }}
                  style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, borderRadius: 10}}
                />
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 40, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{flex: 1, fontSize: 26, color: 'white', fontFamily: 'bold'}}>
                  Theresa
                </Text>
                <Text style={{flex: 1, fontSize: 15, color: 'gray', textAlign: 'left', marginTop: 5}}>
                  0.8 mi
                </Text>
                <Text style={{flex: 1, fontSize: 26, color: 'green', fontFamily: 'bold', textAlign: 'right'}}>
                  84%
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 20, width: SCREEN_WIDTH - 80, marginLeft: 40}}>
                <Text style={{flex: 1, fontSize: 15, color: 'white', fontFamily: 'regular'}}>
                  100% Italian, fun loving, affectionate, young lady who knows what it takes to make a relationship work.
                </Text>
              </View>
              <View style={{flex: 1, marginTop: 30}}>
                <Text style={{flex: 1, fontSize: 15, color: 'rgba(216, 121, 112, 1)', fontFamily: 'regular', marginLeft: 40}}>
                  INTERESTS
                </Text>
                <View style={{flex: 1, width: SCREEN_WIDTH, marginTop: 20}}>
                  <ScrollView
                    style={{flex: 1}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    <View style={{flex: 1, flexDirection: 'column', height: 150, marginLeft: 40, marginRight: 10}}>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <CustomButton title="Philosophy" selected={true} />
                        <CustomButton title="Sport" />
                        <CustomButton title="Swimming" selected={true} />
                        <CustomButton title="Religion" />
                      </View>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <CustomButton title="Music" />
                        <CustomButton title="Soccer" selected={true} />
                        <CustomButton title="Radiohead" selected={true} />
                        <CustomButton title="Micheal Jackson" />
                      </View>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <CustomButton title="Travelling" selected={true} />
                        <CustomButton title="Rock'n'Roll" />
                        <CustomButton title="Dogs" selected={true} />
                        <CustomButton title="France" selected={true} />
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
              <View style={{flex: 1, marginTop: 30}}>
                <Text style={{flex: 1, fontSize: 15, color: 'rgba(216, 121, 112, 1)', fontFamily: 'regular', marginLeft: 40}}>
                  INFO
                </Text>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 30}}>
                  <View style={{flex: 0.75, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text style={styles.infoTypeLabel}>Age</Text>
                      <Text style={styles.infoTypeLabel}>Height</Text>
                      <Text style={styles.infoTypeLabel}>Ethnicity</Text>
                      <Text style={styles.infoTypeLabel}>Sign</Text>
                      <Text style={styles.infoTypeLabel}>Religion</Text>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                      <Text style={styles.infoAnswerLabel}>26</Text>
                      <Text style={styles.infoAnswerLabel}>5'4"</Text>
                      <Text style={styles.infoAnswerLabel}>White</Text>
                      <Text style={styles.infoAnswerLabel}>Pisces</Text>
                      <Text style={styles.infoAnswerLabel}>Catholic</Text>
                    </View>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                      <Text style={styles.infoTypeLabel}>Body Type</Text>
                      <Text style={styles.infoTypeLabel}>Diet</Text>
                      <Text style={styles.infoTypeLabel}>Smoke</Text>
                      <Text style={styles.infoTypeLabel}>Drink</Text>
                      <Text style={styles.infoTypeLabel}>Drugs</Text>
                    </View>
                    <View style={{flex: 1, marginLeft: 10}}>
                      <Text style={styles.infoAnswerLabel}>Fit</Text>
                      <Text style={styles.infoAnswerLabel}>Vegan</Text>
                      <Text style={styles.infoAnswerLabel}>No</Text>
                      <Text style={styles.infoAnswerLabel}>No</Text>
                      <Text style={styles.infoAnswerLabel}>Never</Text>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 20}}
                onPress={() => console.log('Message Theresa')}
                activeOpacity={0.5}
              >
                <LinearGradient
                  colors={['rgba(214,116,112,1)', 'rgba(233,174,87,1)']}
                  style={{height: 55, width: SCREEN_WIDTH - 40, backgroundColor: 'rgba(223,144,98,1)', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}
                >
                  <Text style={{fontFamily: 'regular', fontSize: 20, color: 'white', backgroundColor: 'transparent', textAlign: 'center'}}>
                    Message Theresa
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
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
    alignContent: 'center'
  },
  nameHeader: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
  infoTypeLabel: {
    fontSize: 15,
    textAlign: 'right',
    color: 'rgba(126,123,138,1)',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
  infoAnswerLabel: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'regular',
    paddingBottom: 10,
  }
});
