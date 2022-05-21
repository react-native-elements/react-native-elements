import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Button } from '@rneui/themed';
import { LinearGradient } from '../components/LinearGradient';

const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_SIZE = SCREEN_WIDTH - 80;

type CustomButtonProps = {
  selected: boolean;
  title: string;
};

const CustomButton: React.FunctionComponent<CustomButtonProps> = (props) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (props) {
      setSelected(props.selected);
    }
  }, [props]);

  const { title } = props;

  return (
    <Button
      title={title}
      titleStyle={{ fontSize: 15, color: 'white', fontFamily: 'regular' }}
      buttonStyle={
        selected
          ? {
              backgroundColor: 'rgba(213, 100, 140, 1)',
              borderRadius: 100,
              width: 127,
            }
          : {
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 30,
              width: 127,
              backgroundColor: 'transparent',
            }
      }
      containerStyle={{ marginRight: 10 }}
      onPress={() => setSelected(!selected)}
    />
  );
};

type LoginComponentProps = {};

const LoginScreen1: React.FunctionComponent<LoginComponentProps> = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: 'rgba(47,44,60,1)' }}>
        <View style={styles.statusBar} />
        <ScrollView style={{ flex: 1 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{
                uri: 'https://static.pexels.com/photos/428336/pexels-photo-428336.jpeg',
              }}
              style={{
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                borderRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 20,
              marginHorizontal: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 26,
                color: 'white',
                fontFamily: 'bold',
              }}
            >
              Theresa
            </Text>
            <Text
              style={{
                flex: 0.5,
                fontSize: 15,
                color: 'gray',
                textAlign: 'left',
                marginTop: 5,
              }}
            >
              0.8 mi
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 26,
                color: 'green',
                fontFamily: 'bold',
                textAlign: 'right',
              }}
            >
              84%
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 20,
              width: SCREEN_WIDTH - 80,
              marginLeft: 40,
            }}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 15,
                color: 'white',
                fontFamily: 'regular',
              }}
            >
              100% Italian, fun loving, affectionate, young lady who knows what
              it takes to make a relationship work.
            </Text>
          </View>
          <View style={{ flex: 1, marginTop: 30 }}>
            <Text
              style={{
                flex: 1,
                fontSize: 15,
                color: 'rgba(216, 121, 112, 1)',
                fontFamily: 'regular',
                marginLeft: 40,
              }}
            >
              INTERESTS
            </Text>
            <View style={{ flex: 1, width: SCREEN_WIDTH, marginTop: 20 }}>
              <ScrollView
                style={{ flex: 1 }}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    height: 170,
                    marginLeft: 40,
                    marginRight: 10,
                  }}
                >
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <CustomButton title="Philosophy" selected={true} />
                    <CustomButton title="Sport" selected={false} />
                    <CustomButton title="Swimming" selected={true} />
                    <CustomButton title="Religion" selected={false} />
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <CustomButton title="Music" selected={false} />
                    <CustomButton title="Soccer" selected={true} />
                    <CustomButton title="Radiohead" selected={true} />
                    <CustomButton title="Micheal Jackson" selected={false} />
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <CustomButton title="Travelling" selected={true} />
                    <CustomButton title="Rock'n'Roll" selected={false} />
                    <CustomButton title="Dogs" selected={true} />
                    <CustomButton title="France" selected={true} />
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={{ flex: 1, marginTop: 30 }}>
            <Text
              style={{
                flex: 1,
                fontSize: 15,
                color: 'rgba(216, 121, 112, 1)',
                fontFamily: 'regular',
                marginLeft: 40,
              }}
            >
              INFO
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 30,
              }}
            >
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.infoTypeLabel}>Age</Text>
                  <Text style={styles.infoTypeLabel}>Height</Text>
                  <Text style={styles.infoTypeLabel}>Ethnicity</Text>
                  <Text style={styles.infoTypeLabel}>Sign</Text>
                  <Text style={styles.infoTypeLabel}>Religion</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.infoAnswerLabel}>26</Text>
                  <Text style={styles.infoAnswerLabel}>5'4"</Text>
                  <Text style={styles.infoAnswerLabel}>White</Text>
                  <Text style={styles.infoAnswerLabel}>Pisces</Text>
                  <Text style={styles.infoAnswerLabel}>Catholic</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.infoTypeLabel}>Body Type</Text>
                  <Text style={styles.infoTypeLabel}>Diet</Text>
                  <Text style={styles.infoTypeLabel}>Smoke</Text>
                  <Text style={styles.infoTypeLabel}>Drink</Text>
                  <Text style={styles.infoTypeLabel}>Drugs</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 10, marginRight: -20 }}>
                  <Text style={styles.infoAnswerLabel}>Fit</Text>
                  <Text style={styles.infoAnswerLabel}>Vegan</Text>
                  <Text style={styles.infoAnswerLabel}>No</Text>
                  <Text style={styles.infoAnswerLabel}>No</Text>
                  <Text style={styles.infoAnswerLabel}>Never</Text>
                </View>
              </View>
            </View>
          </View>
          <Button
            containerStyle={{ marginVertical: 20 }}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            buttonStyle={{
              height: 55,
              width: SCREEN_WIDTH - 40,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            linearGradientProps={{
              colors: ['rgba(214,116,112,1)', 'rgba(233,174,87,1)'],
              start: [1, 0],
              end: [0.2, 0],
            }}
            ViewComponent={LinearGradient}
            title="Message Theresa"
            titleStyle={{
              fontFamily: 'regular',
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
            }}
            onPress={() => console.log('Message Theresa')}
            activeOpacity={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameHeader: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  infoTypeLabel: {
    fontSize: 15,
    textAlign: 'right',
    color: 'rgba(126,123,138,1)',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
  infoAnswerLabel: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
});

export default LoginScreen1;
