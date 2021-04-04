import React from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Dimensions } from 'react-native';

const OPTIONS = [
  'Python',
  'JavaScript',
  'Swift',
  'C++',
  'Go',
  'Kotlin',
  'Dart',
  'Flutter',
  'Php',
];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  option: {
    alignItems: 'flex-start',
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function ModalPicker(props) {
  const onPressItem = (option) => {
    props.changeModalVisibilty(false);
    props.setData(option);
  };

  const options = OPTIONS.map((item, index) => {
    return (
      <TouchableHighlight
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}
      >
        <Text style={styles.text}>{item}</Text>
      </TouchableHighlight>
    );
  });

  return (
    <TouchableHighlight
      onPress={() => props.changeModalVisibilty(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT - 20 }]}>
        <ScrollView>{options}</ScrollView>
      </View>
    </TouchableHighlight>
  );
}
