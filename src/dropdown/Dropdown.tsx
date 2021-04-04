import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableHighlight,
  Modal,
} from 'react-native';
import { Text } from '..';
import ModalPicker from './components/ModalPicker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    marginVertical: 20,
    fontSize: 25,
  },
  touchableHighlight: {
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
});

export default function Dropdown() {
  const [chooseData, setChooseData] = useState('Select Item...');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool);
  };

  const setData = (option) => {
    setChooseData(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight
        onPress={() => changeModalVisibility(true)}
        style={styles.touchableHighlight}
      >
        <Text style={styles.text}>{chooseData}</Text>
      </TouchableHighlight>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          changeModalVisibilty={changeModalVisibility}
          setData={setData}
        />
      </Modal>
    </SafeAreaView>
  );
}
