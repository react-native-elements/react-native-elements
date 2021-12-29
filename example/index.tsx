import React from 'react';
import { registerRootComponent } from 'expo';
import { Text, View, StyleSheet } from 'react-native';
import { ButtonComp } from '@react-native-elements/theme';
// import { Tab } from '@react-native-elements/base';

// import App from './App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const App = () => (
  <View style={styles.container}>
    {/* <Tab value={2}>
      <Tab.Item title="Tab 1" />
      <Tab.Item title="Tab 2" />
    </Tab> */}
    <Text>Work</Text>
    <ButtonComp />
  </View>
);

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in Expo Go or in a native build,
// // the environment is set up appropriately
registerRootComponent(App);
