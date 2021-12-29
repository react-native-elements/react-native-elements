import React, { useRef, useState } from 'react';
import {
  Alert,
  LayoutAnimation,
  TouchableOpacity,
  Dimensions,
  Image,
  UIManager,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageSourcePropType,
  TextInput,
  TextInputProps,
} from 'react-native';
import { Input, Button, Icon, InputProps } from '@react-native-elements/base';
import { LinearGradient } from '../../components/LinearGradient';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const USER_COOL = require('../../../assets/images/user-cool.png');
const USER_STUDENT = require('../../../assets/images/user-student.png');
const USER_HP = require('../../../assets/images/user-hp.png');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

type LoginScreen2Props = {};

const LoginScreen2: React.FunctionComponent<LoginScreen2Props> = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string>();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmationPassword, setConfirmationPassword] = useState<string>('');
  const [validEmail, setEmailValid] = useState<boolean>(true);
  const [validPassword, setPasswordValid] = useState<boolean>(true);
  const [validUsername, setUsernameValid] = useState<boolean>(true);
  const [validConfirmationPassword, setConfirmationPasswordValid] =
    useState<boolean>(true);
  let emailInput = useRef<InputProps>(null);
  let passwordInput = useRef<InputProps>(null);
  let confirmationPasswordInput = useRef<InputProps>(null);
  let usernameInput = useRef<InputProps>(null);

  const signup = () => {
    LayoutAnimation.easeInEaseOut();
    const usernameValid = validateUsername();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const confirmationPasswordValid = validateConfirmationPassword();
    if (
      emailValid &&
      passwordValid &&
      confirmationPasswordValid &&
      usernameValid
    ) {
      setLoading(true);
      setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
        setLoading(false);
        Alert.alert('🎸', 'You rock');
      }, 1500);
    }
  };

  const validateUsername = () => {
    const usernameCheck = username.length > 0;
    LayoutAnimation.easeInEaseOut();
    setUsernameValid(usernameCheck);
    usernameCheck || usernameInput.shake();
    return usernameCheck;
  };

  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailCheck = re.test(email);
    LayoutAnimation.easeInEaseOut();
    setEmailValid(emailCheck);
    emailCheck || emailInput.shake();
    return emailCheck;
  };

  const validatePassword = () => {
    const passwordCheck = password.length >= 8;
    LayoutAnimation.easeInEaseOut();
    setPasswordValid(passwordCheck);
    passwordCheck || passwordInput.shake();
    return passwordCheck;
  };

  const validateConfirmationPassword = () => {
    const confirmationPasswordCheck = password === confirmationPassword;
    LayoutAnimation.easeInEaseOut();
    setConfirmationPasswordValid(confirmationPasswordCheck);
    confirmationPasswordCheck || confirmationPasswordInput.shake();
    return confirmationPasswordCheck;
  };

  const selectedTypeHandler = (value: string) => {
    LayoutAnimation.easeInEaseOut();
    setSelectedType(value);
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
    >
      <Text style={styles.signUpText}>Sign up</Text>
      <Text style={styles.whoAreYouText}>WHO YOU ARE ?</Text>
      <View style={styles.userTypesContainer}>
        <UserTypeItem
          label="COOL"
          labelColor="#ECC841"
          image={USER_COOL}
          onPress={() => selectedTypeHandler('parent')}
          selected={selectedType === 'parent'}
        />
        <UserTypeItem
          label="STUDENT"
          labelColor="#2CA75E"
          image={USER_STUDENT}
          onPress={() => selectedTypeHandler('child')}
          selected={selectedType === 'child'}
        />
        <UserTypeItem
          label="HARRY POTTER"
          labelColor="#36717F"
          image={USER_HP}
          onPress={() => selectedTypeHandler('teacher')}
          selected={selectedType === 'teacher'}
        />
      </View>
      <View style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
        <FormInput
          refInput={(input) => (usernameInput = input)}
          icon="user"
          value={username}
          onChangeText={(text: string) => setUsername(text)}
          placeholder="Username"
          returnKeyType="next"
          errorMessage={validUsername ? '' : "Your username can't be blank"}
          onSubmitEditing={() => {
            validateUsername();
            emailInput.focus();
          }}
        />
        <FormInput
          refInput={(input) => (emailInput = input)}
          icon="envelope"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="next"
          errorMessage={validEmail ? '' : 'Please enter a valid email address'}
          onSubmitEditing={() => {
            validateEmail();
            passwordInput.focus();
          }}
        />
        <FormInput
          refInput={(input) => (passwordInput = input)}
          icon="lock"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
          returnKeyType="next"
          errorMessage={
            validPassword ? '' : 'Please enter at least 8 characters'
          }
          onSubmitEditing={() => {
            validatePassword();
            confirmationPasswordInput.focus();
          }}
        />
        <FormInput
          refInput={(input) => (confirmationPasswordInput = input)}
          icon="lock"
          value={confirmationPassword}
          onChangeText={(text: string) => setConfirmationPassword(text)}
          placeholder="Confirm Password"
          secureTextEntry
          errorMessage={
            validConfirmationPassword
              ? ''
              : 'The password fields are not identical'
          }
          returnKeyType="go"
          onSubmitEditing={() => {
            validateConfirmationPassword();
            signup();
          }}
        />
      </View>
      <Button
        loading={isLoading}
        title="SIGNUP"
        containerStyle={{ flex: -1, marginLeft: 'auto', marginRight: 'auto' }}
        buttonStyle={styles.signUpButton}
        linearGradientProps={{
          colors: ['#FF9800', '#F44336'],
          start: [1, 0],
          end: [0.2, 0],
        }}
        ViewComponent={LinearGradient}
        titleStyle={styles.signUpButtonText}
        onPress={() => {
          signup();
        }}
        disabled={isLoading}
      />
      <View style={styles.loginHereContainer}>
        <Text style={styles.alreadyAccountText}>Already have an account.</Text>
        <Button
          title="Login here"
          titleStyle={styles.loginHereText}
          containerStyle={{ flex: -1 }}
          buttonStyle={{ backgroundColor: 'transparent' }}
          onPress={() => Alert.alert('🔥', 'You can login here')}
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen2;

type UserTypeItemType = {
  image: ImageSourcePropType;
  label?: string;
  labelColor?: string;
  selected?: boolean;
  onPress?: () => void;
};

export const UserTypeItem = (props: UserTypeItemType) => {
  const { image, label, labelColor, selected, ...attributes } = props;
  return (
    <TouchableOpacity {...attributes}>
      <View
        style={[
          styles.userTypeItemContainer,
          selected && styles.userTypeItemContainerSelected,
        ]}
      >
        <Text style={[styles.userTypeLabel, { color: labelColor }]}>
          {label}
        </Text>
        <Image
          source={image}
          style={[
            styles.userTypeMugshot,
            selected && styles.userTypeMugshotSelected,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

type FormInputType = TextInputProps & {
  icon: string;
  refInput: React.Ref<TextInput>;
  errorMessage: string;
};

export const FormInput = (props: FormInputType) => {
  const { icon, refInput, ...otherProps } = props;

  return (
    <Input
      {...otherProps}
      ref={refInput}
      inputContainerStyle={styles.inputContainer}
      leftIcon={
        <Icon name={icon} type={'simple-line-icon'} color="#7384B4" size={18} />
      }
      inputStyle={styles.inputStyle}
      autoFocus={false}
      autoCapitalize="none"
      keyboardAppearance="dark"
      errorStyle={styles.errorInputStyle}
      autoCorrect={false}
      blurOnSubmit={false}
      placeholderTextColor="#7384B4"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#293046',
    width: '100%',
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  signUpText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'UbuntuLight',
    textAlign: 'center',
  },
  whoAreYouText: {
    color: '#7384B4',
    fontFamily: 'UbuntuBold',
    fontSize: 14,
    textAlign: 'center',
  },
  userTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  userTypeItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  userTypeItemContainerSelected: {
    opacity: 1,
  },
  userTypeMugshot: {
    margin: 4,
    height: 70,
    width: 70,
  },
  userTypeMugshotSelected: {
    height: 100,
    width: 100,
  },
  userTypeLabel: {
    color: 'yellow',
    fontFamily: 'UbuntuBold',
    fontSize: 11,
  },
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(110, 120, 170, 1)',
    height: 45,
    marginVertical: 10,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
    fontFamily: 'UbuntuLight',
    fontSize: 16,
  },
  errorInputStyle: {
    marginTop: 0,
    textAlign: 'center',
    color: '#F44336',
  },
  signUpButtonText: {
    fontFamily: 'UbuntuBold',
    fontSize: 13,
  },
  signUpButton: {
    width: 250,
    borderRadius: Math.round(45 / 2),
    height: 45,
  },
  loginHereContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alreadyAccountText: {
    fontFamily: 'UbuntuLightItalic',
    fontSize: 12,
    color: 'white',
  },
  loginHereText: {
    color: '#FF9800',
    fontFamily: 'UbuntuLightItalic',
    fontSize: 12,
  },
});
