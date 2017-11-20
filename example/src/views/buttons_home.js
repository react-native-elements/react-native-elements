import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../v1/buttons/Button';

class Buttons extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contentView}>
          <Button containerStyle={{marginVertical: 10}}/>
          <Button
            text ='LOG IN'
            buttonStyle={{height: 50, width: 250, backgroundColor: 'black', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
            containerStyle={{marginVertical: 10}}
            textStyle={{fontWeight: 'bold'}}
          />
          <Button
            text ='Log in'
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{height: 50, width: 230, backgroundColor: 'rgba(111, 202, 186, 1)', borderRadius: 5}}
            textStyle={{fontWeight: 'bold', fontSize: 23}}
            containerStyle={{marginVertical: 10}}
            onPress={() => console.log('aye')}
            underlayColor="transparent"
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
            loadingProps={{size: 'large', color: 'rgba(111, 202, 186, 1)'}}
            textStyle={{fontWeight: '700'}}
            buttonStyle={{backgroundColor: 'rgba(92, 99,216, 1)', width: 300, height: 45, borderColor: 'transparent', borderWidth: 0, borderRadius: 5}}
            containerStyle={{marginTop: 20}}
          />
          <View style={{flexDirection: 'row'}}>
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
              buttonStyle={{backgroundColor: 'rgba(90, 154, 230, 1)', width: 130, borderColor: 'transparent', borderWidth: 0, borderRadius: 30}}
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
              buttonStyle={{backgroundColor: 'rgba(199, 43, 98, 1)', width: 150, borderColor: 'transparent', borderWidth: 0, borderRadius: 30}}
              containerStyle={{marginTop: 20}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button
              text="Basic Button"
              buttonStyle={{backgroundColor: 'rgba(78, 116, 289, 1)', borderRadius: 3}}
              containerStyle={{marginTop: 20}}
            />
            <Button
              text="Outline Button"
              buttonStyle={{backgroundColor: 'white', borderColor: 'rgba(78, 116, 289, 1)', borderWidth: 1}}
              containerStyle={{marginTop: 20}}
              textStyle={{color: 'rgba(78, 116, 289, 1)'}}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
            <Button
              text="HOME"
              loading={true}
              textStyle={{fontWeight: '700'}}
              buttonStyle={{backgroundColor: 'rgba(111, 202, 186, 1)', width: 100, height: 30, borderColor: 'transparent', borderWidth: 0, borderRadius: 30}}
              containerStyle={{marginTop: 20}}
            />
            <Button
              text="Clear Button"
              clear
              textStyle={{color: 'rgba(78, 116, 289, 1)'}}
              containerStyle={{marginTop: 20}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button
              text="Light"
              buttonStyle={{backgroundColor: 'rgba(244, 244, 244, 1)', width: null, height: 40, borderRadius: 3}}
              containerStyle={{marginTop: 20}}
              textStyle={{marginHorizontal: 20, color: 'black'}}
            />
            <Button
              text="Dark"
              buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)', width: null, height: 40}}
              containerStyle={{marginTop: 20}}
              textStyle={{color: 'white', marginHorizontal: 20}}
            />
            <Button
              text="Default"
              containerStyle={{marginTop: 20}}
              buttonStyle={{backgroundColor: 'rgba(78, 116, 289, 1)', width: null, height: 40}}
              textStyle={{color: 'white', marginHorizontal: 20}}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
            <Button
              text="Secondary"
              buttonStyle={{backgroundColor: 'rgba(127, 220, 103, 1)', width: null, height: 40}}
              containerStyle={{marginTop: 20}}
              textStyle={{color: 'white', marginHorizontal: 20}}
            />
            <Button
              text="Danger"
              buttonStyle={{backgroundColor: 'rgba(214, 61, 57, 1)', width: null, height: 40}}
              containerStyle={{marginTop: 20}}
              textStyle={{color: 'white', marginHorizontal: 20}}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  contentView: {
    flex: 1,
    marginTop: 10
  }
});

export default Buttons;
