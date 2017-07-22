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
  KeyboardAvoidingView,
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
    const isLoginPage = selectedCategory === 0;
    const isSignUpPage = selectedCategory === 1;
    return (
      <View style={styles.container}>
        <Image
          source={BG_IMAGE}
          style={styles.bgImage}
        >
          {this.state.fontLoaded ?
            <View>
              <KeyboardAvoidingView contentContainerStyle={styles.loginContainer} behavior='position'>
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
                    <Text style={[styles.categoryText, isLoginPage && styles.selectedCategoryText]}>
                      Login
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.container} onPress={() => this.selectCategory(1)} activeOpacity={1}>
                    <Text style={[styles.categoryText, isSignUpPage && styles.selectedCategoryText]}>
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.rowSelector}>
                  <View style={styles.selectorContainer}>
                    <View style={isLoginPage && styles.selected}/>
                  </View>
                  <View style={styles.selectorContainer}>
                    <View style={isSignUpPage && styles.selected}/>
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
                    autoFocus={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="next"
                    inputStyle={{marginLeft: 10}}
                    placeholder={'Email'}
                    containerStyle={{borderBottomColor: 'rgba(0, 0, 0, 0.54)'}}
                    ref={input => this.emailInput = input}
                    onSubmitEditing={() => this.passwordInput.focus()}
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
                    keyboardAppearance="light"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    // keyboardType="default"
                    // returnKeyType="done"
                    blurOnSubmit={true}
                    containerStyle={{marginTop: 16, borderBottomColor: 'rgba(0, 0, 0, 0.54)'}}
                    inputStyle={{marginLeft: 10}}
                    placeholder={'Password'}
                    ref={input => this.passwordInput = input}
                    onSubmitEditing={() => isSignUpPage && this.passwordConfirmationInput.focus()}
                  />
                  {isSignUpPage &&
                    <Input
                      icon={
                        <SimpleIcon
                          name='lock'
                          color='rgba(0, 0, 0, 0.54)'
                          size={25}
                          style={{backgroundColor: 'transparent'}}
                        />
                      }
                      secureTextEntry={true}
                      containerStyle={{marginTop: 16, borderBottomColor: 'rgba(0, 0, 0, 0.54)'}}
                      inputStyle={{marginLeft: 10}}
                      placeholder={'Confirm password'}
                      ref={input => this.passwordConfirmationInput = input}
                    />}

                  <View style={{height: 64}}>
                    <Button
                      buttonStyle={{backgroundColor: 'rgba(232, 147, 142, 1)', borderRadius: 10}}
                      containerStyle={{marginTop: 32}}
                      text={isLoginPage ? 'LOGIN' : 'SIGN UP'}
                      textStyle={{fontSize: 16, color: 'white', fontWeight: 'bold'}}
                    />
                  </View>
                </View>
              </KeyboardAvoidingView>
              <View style={styles.helpContainer}>
                <Button
                  text={'Need help ?'}
                  textStyle={{color: 'white'}}
                  buttonStyle={{backgroundColor: 'transparent'}}
                  underlayColor="transparent"/>
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
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
