import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';
import colors from 'HSColors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Button,
  Text,
  FormInput,
  FormLabel,
  CheckBox,
  SearchBar,
} from 'react-native-elements';

class Forms extends Component {
  renderFormsSearchBars() {
    if (Platform.OS === 'ios') {
      return (
        <View>
          <FormLabel containerStyle={styles.labelContainerStyle}>
            Name
          </FormLabel>
          <FormInput
            ref="form2"
            containerRef="containerRefYOYO"
            textInputRef="textInputRef"
            placeholder="Please enter your name..."
          />
          <FormLabel
            textInputRef="textInputRef"
            containerStyle={styles.labelContainerStyle}
          >
            Address
          </FormLabel>
          <FormInput
            textInputRef="textInputRef"
            ref="form1"
            placeholder="Please enter your address..."
          />
          <FormLabel
            textInputRef="textInputRef"
            containerStyle={styles.labelContainerStyle}
          >
            Phone
          </FormLabel>
          <FormInput
            textInputRef="textInputRef"
            placeholder="Please enter your phone number..."
          />
          <Button
            onPress={() => console.log('yo')}
            icon={{ name: 'done' }}
            buttonStyle={{ marginTop: 15 }}
            title="SUBMIT"
          />
          <View style={{ marginTop: 10, marginBottom: 0, flexDirection: 'row', alignItems: 'flex-start'}}>
            <FormInput
              containerStyle={{ flex: 1, borderBottomColor: 'red' }}
              inputStyle={{ color: 'red' }}
              ref={ref => this.shakeInputRef = ref}
              value={'An invalid input'}
            />
            <Button
              onPress={() => this.shakeInputRef.shake()}
              title="SHAKE"
            />
          </View>
          <View style={{ marginTop: 10, marginBottom: 0 }}>
            <SearchBar
              lightTheme
              clearIcon
              textInputRef="textInputRef"
              placeholder="Type Here..."
            />
          </View>
          <View style={{ marginTop: 10, marginBottom: 0 }}>
            <SearchBar
              noIcon
              lightTheme
              textInputRef="textInputRef"
              placeholder="Type Here..."
            />
          </View>
          <View style={{ marginTop: 10, marginBottom: 0 }}>
            <SearchBar
              round
              lightTheme
              clearIcon
              textInputRef="searchBar3"
              placeholder="Type Here..."
            />
          </View>
          <View style={{ marginTop: 10, marginBottom: 0 }}>
            <SearchBar textInputRef="textInputRef" placeholder="Type Here..." />
          </View>
          <View style={{ marginTop: 10, marginBottom: 0 }}>
            <SearchBar
              noIcon
              clearIcon
              textInputRef="textInputRef"
              placeholder="Type Here..."
            />
          </View>
          <View style={{ marginTop: 10, marginBottom: 0 }}>
            <SearchBar
              round
              textInputRef="textInputRef"
              placeholder="Type Here..."
            />
          </View>
        </View>
      );
    }
  }
  render() {
    return (
      <ScrollView
        style={{ backgroundColor: 'white' }}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.headingContainer}>
          <Icon color="white" name="pets" size={62} />
          <Text style={styles.heading}>Forms</Text>
        </View>
        {this.renderFormsSearchBars()}
        <View style={{ marginTop: 20 }}>
          <CheckBox title="Click Here" checked />
          <CheckBox center title="Click Here" checked />
          <CheckBox title="Click Here" checked right />
          <CheckBox
            right
            title="Click Here"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            center
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title="Click Here"
            checked
            checkedColor="#4a6da7"
          />
          <CheckBox center iconRight title="Click Here" />
          <CheckBox
            center
            iconRight
            uncheckedIcon="add"
            checkedIcon="clear"
            iconType="material"
            title="Click Here to Add This Item"
          />
          <CheckBox
            center
            checked
            iconType="material"
            checkedIcon="clear"
            uncheckedIcon="add"
            iconRight
            title="Click Here to Remove This Item"
            checkedColor="red"
          />
          <CheckBox center title="Add Phone" uncheckedIcon="plus" />
          <CheckBox
            checked
            center
            checkedTitle="You Clicked!"
            title="Click Here"
            iconType="material"
            checkedIcon="done"
            checkedColor="blue"
            uncheckedColor="red"
          />
          <CheckBox
            center
            iconType="material"
            title="Click Here"
            checkedIcon="accessibility"
            uncheckedIcon="check-box-outline-blank"
            checkedColor="blue"
            uncheckedColor="black"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary2,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  labelContainerStyle: {
    marginTop: 8,
  },
});

export default Forms;
