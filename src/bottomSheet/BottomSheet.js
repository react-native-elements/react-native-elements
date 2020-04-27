import React, { Component } from 'react';
import {
  Modal,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { withTheme } from '../config';
import Button from '../buttons/Button';
import ListItem from '../list/ListItem';

const MAX_HEIGHT = 300;

class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      listHeight: undefined,
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

  measureView = event =>
    this.setState({ listHeight: event.nativeEvent.layout.height });

  render() {
    const { visible, listHeight } = this.state;
    const { list, cancelButtonIndex, buttonProps } = this.props;
    const maxHeight = listHeight < MAX_HEIGHT ? listHeight : MAX_HEIGHT;

    return (
      <>
        <Button {...buttonProps} onPress={() => this.setVisible(true)} />
        <Modal animationType="slide" transparent={true} visible={visible}>
          <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.modalView}>
              <View
                style={([styles.listContainer], { maxHeight })}
                onLayout={event => this.measureView(event)}
              >
                <ScrollView>
                  {list.map((item, i) => (
                    <ListItem
                      key={i}
                      {...this.createListItemObject(cancelButtonIndex, i, item)}
                    />
                  ))}
                </ScrollView>
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
  listContainer: { backgroundColor: 'white' },
});

BottomSheet.defaultProps = {
  list: [],
  buttonProps: {},
  cancelButtonIndex: null,
};

export { BottomSheet };

export default withTheme(BottomSheet, 'BottomSheet');
