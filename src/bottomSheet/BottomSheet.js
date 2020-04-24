import React, { Component } from 'react';
import { Modal, SafeAreaView, View, StyleSheet } from 'react-native';
import { withTheme } from '../config';
import Button from '../buttons/Button';
import ListItem from '../list/ListItem';

class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  setVisible = visible => this.setState({ visible });

  createListItemObject = (cancelButtonIndex, i, item) => {
    let obj = {
      ...(cancelButtonIndex === i
        ? {
            ...item,
            onPress: () => {
              this.setVisible(false);
              item.onPress();
            },
          }
        : item),
    };
    return obj;
  };

  render() {
    const { visible } = this.state;
    const { list, cancelButtonIndex, buttonProps } = this.props;

    return (
      <>
        <Button {...buttonProps} onPress={() => this.setVisible(true)} />
        <Modal animationType="slide" transparent={true} visible={visible}>
          <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.modalView}>
              <View style={{ backgroundColor: 'white' }}>
                {list.map((item, i) => (
                  <ListItem
                    key={i}
                    {...this.createListItemObject(cancelButtonIndex, i, item)}
                  />
                ))}
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: { flex: 1, backgroundColor: 'rgba(0,0,0,0.2)' },
  modalView: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
});

BottomSheet.defaultProps = {
  list: [],
  buttonProps: {},
  cancelButtonIndex: null,
};

export { BottomSheet };

export default withTheme(BottomSheet, 'BottomSheet');
