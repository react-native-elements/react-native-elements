import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import { Font } from 'expo';

import Button from '../../../v1/buttons/Button';
import Input from '../../../v1/input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../../../assets/images/bg_screen4.jpg');

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LoginScreen2 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      selectedCategory: 0,
    };

    this.selectCategory = this.selectCategory.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'georgia': require('../../../assets/fonts/Georgia.ttf'),
      'regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
      'light': require('../../../assets/fonts/Montserrat-Light.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  selectCategory(selectedCategory) {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      selectedCategory,
    });
  }

  render() {
    const { selectedCategory } = this.state;
    return (
      <View style={styles.container}>
        <Image
          source={BG_IMAGE}
          style={styles.bgImage}
        >
          {this.state.fontLoaded ?
            <View style={styles.loginContainer}>
              <View style={styles.titleContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.titleText}>BEAUX</Text>
                </View>
                <View style={{marginTop: -10, marginLeft: 10}}>
                  <Text style={styles.titleText}>VOYAGES</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.container} onPress={() => this.selectCategory(0)} activeOpacity={1}>
                  <Text style={[styles.categoryText, selectedCategory === 0 && styles.selectedCategoryText]}>
                    Login
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container} onPress={() => this.selectCategory(1)} activeOpacity={1}>
                  <Text style={[styles.categoryText, selectedCategory === 1 && styles.selectedCategoryText]}>
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.rowSelector}>
                <View style={styles.selectorContainer}>
                  <View style={selectedCategory === 0 && styles.selected}/>
                </View>
                <View style={styles.selectorContainer}>
                  <View style={selectedCategory === 1 && styles.selected}/>
                </View>
              </View>
              <View style={styles.formContainer}>
                <Input
                  icon={
                    <Icon
                      name='envelope-o'
                      color='rgba(0, 0, 0, 0.54)'
                      size={25}
                      style={{backgroundColor: 'transparent'}}
                    />
                  }
                  inputStyle={{marginLeft: 10}}
                  placeholder={'Email'}
                  containerStyle={{borderBottomColor: 'rgba(0, 0, 0, 0.54)'}}
                />
                <Input
                  icon={
                    <SimpleIcon
                      name='lock'
                      color='rgba(0, 0, 0, 0.54)'
                      size={25}
                      style={{backgroundColor: 'transparent'}}
                    />
                  }
                  containerStyle={{marginTop: 16, borderBottomColor: 'rgba(0, 0, 0, 0.54)'}}
                  inputStyle={{marginLeft: 10}}
                  placeholder={'Password'}
                />
                {selectedCategory === 1 &&
                  <Input
                    icon={
                      <SimpleIcon
                        name='lock'
                        color='rgba(0, 0, 0, 0.54)'
                        size={25}
                        style={{backgroundColor: 'transparent'}}
                      />
                    }
                    containerStyle={{marginTop: 16, borderBottomColor: 'rgba(0, 0, 0, 0.54)'}}
                    inputStyle={{marginLeft: 10}}
                    placeholder={'Confirm password'}
                  />}

                <View style={{height: 64}}>
                  <Button
                    buttonStyle={{backgroundColor: 'rgba(232, 147, 142, 1)', borderRadius: 10}}
                    containerStyle={{marginTop: 32}}
                    text={selectedCategory === 0 ? 'LOGIN' : 'SIGN UP'}
                    textStyle={{fontSize: 16, color: 'white', fontWeight: 'bold'}}
                  />
                </View>
              </View>
              <View style={styles.helpContainer}>
                <Text style={{color: 'white'}}>
                  Need help ?
                </Text>
              </View>
            </View>
           :
          <Text>Loading...</Text>
        }
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowSelector: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectorContainer: {
    flex: 1,
    alignItems: 'center',
  },
  selected: {
    position: 'absolute',
    borderRadius: 50,
    height: 0,
    width: 0,
    top: -5,
    borderRightWidth: 70,
    borderBottomWidth: 70,
    borderColor: 'white',
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    height: 200,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH - 30,
    borderRadius: 10,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems:'center',
  },
  loginText: {
   fontSize: 16,
   fontWeight: 'bold',
   color: 'white',
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'light',
    backgroundColor: 'transparent',
    opacity: 0.54,
  },
  selectedCategoryText: {
    opacity: 1,
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'regular',
  },
  helpContainer: {
    backgroundColor: 'transparent',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
