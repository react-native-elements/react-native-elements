import React, { Component } from 'react';
import {
  Modal,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { withTheme } from '../config';
import PropTypes from 'prop-types';

const MAX_HEIGHT = 300;

class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listHeight: undefined,
      isVisible: this.props.isVisible,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isVisible !== this.props.isVisible) {
      this.setState({ isVisible: this.props.isVisible });
    }
  }

  hideModal = () => this.setState({ isVisible: false });

  onLayout = (event) =>
    this.setState({ listHeight: event.nativeEvent.layout.height });

  renderChildren = () => {
    const { children } = this.props;
    const { listHeight } = this.state;
    const maxHeight = listHeight < MAX_HEIGHT ? listHeight : MAX_HEIGHT;

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.modalView}>
          <View
            style={([styles.listContainer], { maxHeight })}
            onLayout={this.onLayout}
          >
            <ScrollView>{children}</ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  render() {
    const { modalProps, isCancelable } = this.props;
    const { isVisible } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        {...modalProps}
      >
        {isCancelable === true ? (
          <TouchableWithoutFeedback onPress={() => this.hideModal()}>
            {this.renderChildren()}
          </TouchableWithoutFeedback>
        ) : (
          this.renderChildren()
        )}
      </Modal>
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
  modalProps: {},
  isVisible: false,
};

BottomSheet.propTypes = {
  modalProps: PropTypes.object,
  isVisible: PropTypes.bool,
};

export { BottomSheet };

export default withTheme(BottomSheet, 'BottomSheet');
