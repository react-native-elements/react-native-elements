import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../beta//buttons/Button';

class Buttons extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <Icon color="black" name="gamepad" size={62} />
          <Text style={styles.headerTitle}>Buttons</Text>
        </View>
        <View style={styles.contentView}>
          <Button
            type="login"
            containerStyle={{marginVertical: 10}}
          />
          <Button
            type="login_android"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            containerStyle={{marginVertical: 10}}
            onPress={() => console.log('aye')}
          />
          <Button
            text="Add to Cart"
            underlayColor="rgba(80,117,196,1)"
            activeOpacity={0.4}
            textStyle={{fontWeight: 'bold', fontSize: 18}}
            buttonStyle={{backgroundColor: 'rgba(90, 154, 230, 1)', height: 40, width: 200, borderWidth: 0, borderColor: 'transparent', borderRadius: 20}}
            containerStyle={{marginVertical: 10}}
            icon={
              <Icon
                name='arrow-right'
                size={15}
                color='white'
              />
            }
            iconRight
            iconContainerStyle={{marginLeft: 5}}
          />
          <Button
            text="Request an agent"
            textStyle={{fontWeight: '500'}}
            buttonStyle={{backgroundColor: 'rgba(199, 43, 98, 1)', width: 275, height: 45, borderColor: 'transparent', borderWidth: 0}}
            containerStyle={{marginTop: 10}}
          />
          <Button
            text="SIGN UP"
            disabled={true}
            textStyle={{fontWeight: '700'}}
            buttonStyle={{backgroundColor: 'rgba(92, 99,216, 1)', width: 300, height: 45, borderColor: 'transparent', borderWidth: 0, borderRadius: 5}}
            containerStyle={{marginTop: 20}}
          />
          <Button
            text="SIGN UP"
            loading={true}
            textStyle={{fontWeight: '700'}}
            buttonStyle={{backgroundColor: 'rgba(92, 99,216, 1)', width: 300, height: 45, borderColor: 'transparent', borderWidth: 0, borderRadius: 5}}
            containerStyle={{marginTop: 20}}
          />
          <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Button
              text="HOME"
              icon={
                <Icon
                  name='home'
                  size={15}
                  color='white'
                />
              }
              iconContainerStyle={{marginRight: 10}}
              textStyle={{fontWeight: '700'}}
              buttonStyle={{backgroundColor: 'rgba(90, 154, 230, 1)', width: 100, height: 30, borderColor: 'transparent', borderWidth: 0, borderRadius: 30}}
              containerStyle={{marginTop: 20}}
            />
            <Button
              text="PROFILE"
              icon={
                <Icon
                  name='user'
                  size={15}
                  color='white'
                />
              }
              iconRight
              iconContainerStyle={{marginLeft: 10}}
              textStyle={{fontWeight: '700'}}
              buttonStyle={{backgroundColor: 'rgba(199, 43, 98, 1)', width: 120, height: 35, borderColor: 'transparent', borderWidth: 0, borderRadius: 30}}
              containerStyle={{marginTop: 20}}
            />
            <Button
              text="HOME"
              loading={true}
              textStyle={{fontWeight: '700'}}
              buttonStyle={{backgroundColor: 'rgba(111, 202, 186, 1)', width: 100, height: 30, borderColor: 'transparent', borderWidth: 0, borderRadius: 30}}
              containerStyle={{marginTop: 20}}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  headerView: {
    height: 125,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 28,
    textAlign: 'center'
  },
  contentView: {
    flex: 1,
    marginTop: 10,
  }
});

export default Buttons;
