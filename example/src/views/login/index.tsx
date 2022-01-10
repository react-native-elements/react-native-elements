import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Header } from '../../components/header';
import LoginScreen2 from './screen2';
import LoginScreen3 from './screen3';

type LoginComponentProps = {};

const Login: React.FunctionComponent<LoginComponentProps> = () => {
  return (
    <>
      <Header title="Login Example" />
      <View style={styles.container}>
        <ScrollView>
          <LoginScreen2 />
          <LoginScreen3 />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative',
  },
});

export default Login;
