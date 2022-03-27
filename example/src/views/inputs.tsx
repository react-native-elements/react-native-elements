//@ts-nocheck
import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Vibration,
} from 'react-native';
import {
  Input,
  SearchBar,
  Icon,
  Button,
  ThemeProvider,
  InputProps,
} from '@rneui/themed';
import { Header, SubHeader } from '../components/header';

const SCREEN_WIDTH = Dimensions.get('window').width;
const dummySearchBarProps = {
  showLoading: true,
  onFocus: () => console.log('focus'),
  onBlur: () => console.log('blur'),
  onCancel: () => console.log('cancel'),
  onClear: () => console.log('cleared'),
};

const SearchBarCustom = (props) => {
  const [value, setValue] = useState('');
  return <SearchBar value={value} onChangeText={setValue} {...props} />;
};

type InputsComponentProps = {};

const Inputs: React.FunctionComponent<InputsComponentProps> = () => {
  let email2Input = useRef(null);
  let passwordInput = useRef(null);
  let password2Input = useRef(null);
  let shakeInput = useRef(null);
  let confirmPassword2Input = useRef(null);

  const InputFieldsStyle = {
    borderWidth: 0,
  };

  const inputProps = {};
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={'padding'}
      enabled
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 84}
    >
      <Header title="Inputs" view="input" />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View>
          <SubHeader title={'Search Bars'} />
        </View>
        <SearchBarCustom
          placeholder="iOS searchbar"
          platform="ios"
          style={InputFieldsStyle}
          {...dummySearchBarProps}
        />
        <SearchBarCustom
          placeholder="Android searchbar"
          platform="android"
          style={InputFieldsStyle}
          {...dummySearchBarProps}
        />
        <SearchBarCustom
          placeholder="Default searchbar"
          style={InputFieldsStyle}
          {...dummySearchBarProps}
        />
        <View style={{ paddingTop: 30 }}>
          <SubHeader title={'Inputs'} />
        </View>
        <View style={{ alignItems: 'center', marginBottom: 16 }}>
          <Input
            {...(inputProps as InputProps)}
            containerStyle={{ width: '90%' }}
            placeholder="Input with label"
            label="LABEL"
            labelStyle={{ marginTop: 16 }}
            style={InputFieldsStyle}
          />
          <Input
            {...(inputProps as InputProps)}
            containerStyle={styles.inputContainerStyle}
            placeholder="Simple input"
            style={InputFieldsStyle}
          />
          <Input
            {...(inputProps as InputProps)}
            leftIcon={
              <Icon
                name="map-marker"
                type="font-awesome"
                color="#86939e"
                size={25}
              />
            }
            leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
            containerStyle={styles.inputContainerStyle}
            placeholder="Input with left icon"
            style={InputFieldsStyle}
          />
          <Input
            {...(inputProps as InputProps)}
            rightIcon={
              <Icon
                name="chevron-right"
                type="entypo"
                color="#86939e"
                size={25}
              />
            }
            containerStyle={styles.inputContainerStyle}
            placeholder="Input with right icon"
            style={InputFieldsStyle}
          />
          <Input
            {...(inputProps as InputProps)}
            containerStyle={styles.inputContainerStyle}
            placeholder="Input with error message"
            errorMessage="Invalid input"
            style={InputFieldsStyle}
          />
          <Input
            {...(inputProps as InputProps)}
            containerStyle={[styles.inputContainerStyle]}
            placeholder="Shake input"
            style={InputFieldsStyle}
            ref={(ref) => (shakeInput = ref)}
            rightIcon={
              <Button
                title="Shake"
                onPress={() => {
                  shakeInput && shakeInput.shake();
                  Vibration.vibrate(1000);
                }}
              />
            }
            errorMessage="Shake me on error !"
          />
        </View>
        <View style={styles.contentView}>
          <View
            style={{
              backgroundColor: '#2F343B',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 30,
                marginVertical: 10,
                fontWeight: '300',
                marginTop: 10,
                color: 'white',
              }}
            >
              Login
            </Text>
            <View>
              <View style={styles.triangleLeft} />
              <Input
                {...(inputProps as InputProps)}
                inputContainerStyle={{
                  borderWidth: 1,
                  borderColor: 'white',
                  borderLeftWidth: 0,
                  height: 50,
                  width: '80%',
                  backgroundColor: 'white',
                }}
                leftIcon={
                  <Icon
                    name="email-outline"
                    type="material-community"
                    color="black"
                    size={25}
                  />
                }
                leftIconContainerStyle={{
                  marginRight: 10,
                }}
                containerStyle={{ paddingHorizontal: 0 }}
                placeholder="Email"
                placeholderTextColor="black"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardAppearance="light"
                style={InputFieldsStyle}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInput.focus();
                }}
                blurOnSubmit={false}
              />
              <View style={styles.triangleRight} />
            </View>
            <View style={[{ marginBottom: 30, marginTop: 1 }]}>
              <View style={styles.triangleLeft} />
              <Input
                inputContainerStyle={{
                  borderWidth: 1,
                  borderColor: 'white',
                  borderLeftWidth: 0,
                  height: 50,
                  width: '80%',
                  backgroundColor: 'white',
                }}
                leftIconContainerStyle={{
                  marginRight: 10,
                }}
                containerStyle={{ paddingHorizontal: 0 }}
                leftIcon={
                  <Icon
                    name="lock"
                    type="simple-line-icon"
                    color="black"
                    size={25}
                  />
                }
                placeholder="Password"
                placeholderTextColor="black"
                autoCapitalize="none"
                keyboardAppearance="light"
                secureTextEntry={true}
                autoCorrect={false}
                style={InputFieldsStyle}
                keyboardType="default"
                returnKeyType="done"
                ref={(input) => (passwordInput = input)}
                blurOnSubmit={true}
              />
              <View style={styles.triangleRight} />
            </View>
          </View>

          <ThemeProvider
            theme={{
              Input: {
                containerStyle: {
                  width: SCREEN_WIDTH - 50,
                },
                inputContainerStyle: {
                  borderRadius: 40,
                  borderWidth: 1,
                  borderColor: 'rgba(110, 120, 170, 1)',
                  height: 50,
                  marginVertical: 10,
                },
                placeholderTextColor: 'rgba(110, 120, 177, 1)',
                inputStyle: {
                  marginLeft: 10,
                  color: 'white',
                },
                keyboardAppearance: 'light',
                blurOnSubmit: false,
              },
            }}
          >
            <View
              style={{
                backgroundColor: 'rgba(46, 50, 72, 1)',
                width: '100%',
                alignItems: 'center',
                paddingBottom: 30,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  marginVertical: 10,
                  fontWeight: '300',
                }}
              >
                Sign up
              </Text>
              <Input
                {...(inputProps as InputProps)}
                leftIcon={
                  <Icon
                    name="user"
                    type="simple-line-icon"
                    style={{ marginLeft: 12 }}
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                style={InputFieldsStyle}
                returnKeyType="next"
                onSubmitEditing={() => {
                  email2Input.focus();
                }}
              />
              <Input
                {...(inputProps as InputProps)}
                leftIcon={
                  <Icon
                    name="email-outline"
                    type="material-community"
                    style={{ marginLeft: 10 }}
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                style={InputFieldsStyle}
                returnKeyType="next"
                ref={(input) => (email2Input = input)}
                onSubmitEditing={() => {
                  password2Input.focus();
                }}
              />
              <Input
                {...(inputProps as InputProps)}
                leftIcon={
                  <Icon
                    name="lock"
                    type="simple-line-icon"
                    style={{ marginLeft: 10 }}
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                keyboardType="default"
                style={InputFieldsStyle}
                returnKeyType="next"
                ref={(input) => (password2Input = input)}
                onSubmitEditing={() => {
                  confirmPassword2Input.current.focus();
                }}
              />
              <Input
                {...(inputProps as InputProps)}
                leftIcon={
                  <Icon
                    name="lock"
                    type="simple-line-icon"
                    style={{ marginLeft: 10 }}
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="Confirm Password"
                autoCapitalize="none"
                keyboardAppearance="light"
                secureTextEntry={true}
                autoCorrect={false}
                keyboardType="default"
                returnKeyType="done"
                style={InputFieldsStyle}
                ref={(input) => (confirmPassword2Input = input)}
                blurOnSubmit
              />
            </View>
          </ThemeProvider>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangleLeft: {
    position: 'absolute',
    left: -20,
    top: 0,
    width: 0,
    height: 0,
    borderRightWidth: 20,
    borderRightColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent',
  },
  triangleRight: {
    position: 'absolute',
    right: -20,
    top: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent',
  },
  inputContainerStyle: {
    marginTop: 16,
    width: '90%',
  },
  keyboardAvoidingView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
