import React from 'react';
import '../../static/css/components.css';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <>
      <div className="container">
        <div
          className="snack-player"
          data-snack-name="RNE Demo"
          data-snack-code={demoCode}
          data-snack-dependencies="react-native-elements"
        />
      </div>
    </>
  );
};

export default Home;

const demoCode = `import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Image, Text } from 'react-native-elements';

const uri ='https://reactnativeelements.com/img/website/logo.png';

const App = () => (
  <View style={styles.box}>
    <Image
      source={{
        uri,
      }}
      style={styles.image}
    />
    <Text h4 style={styles.text}>
      Cross Platform React Native UI Toolkit
    </Text>
    <Button title="Getting Started" />
  </View>
);

export default App;

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    padding: 20,
  },
  image: { width: 200, height: 200 },
  text: { textAlign: 'center', fontWeight: 'bold' },
});
`;
