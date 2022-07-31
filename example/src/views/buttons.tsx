import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { ButtonGroup, withTheme, Text, Icon } from '@rneui/themed';
import { Header, SubHeader } from '../components/header';
import { LinearGradient } from '../components/LinearGradient';
import { Stack } from '@rneui/layout';

type ButtonsComponentProps = {};

const Buttons: React.FunctionComponent<ButtonsComponentProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([0, 2, 3]);

  return (
    <>
      <Header title="Buttons" view="button" />
      <ScrollView>
        <View style={styles.contentView}>
          <SubHeader title="Basic Buttons" />
          <View style={{ alignItems: 'center' }}>
            <Stack align="center" spacing={4}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </Stack>
            <View>
              <Stack align="center" spacing={8}>
                <Button>Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="warning">Warning</Button>
                <Button color="error">Error</Button>
                <Button type="outline">Outline</Button>
                <Button type="clear">Clear</Button>
                <Button uppercase>Uppercase</Button>
                <Button radius="xl">Rounded</Button>
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button>
                  <Icon name="edit" color={'white'} />
                </Button>
              </Stack>
            </View>

            <SubHeader title="Rounded Buttons" />
            <View style={styles.buttonsContainer}>
              <Button
                title="LOG IN"
                radius={30}
                buttonStyle={{
                  backgroundColor: 'black',
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}
              />
              <Button
                title="HOME"
                icon={{
                  name: 'home',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                }}
                radius={30}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
              <Button
                title="PROFILE"
                icon={{
                  name: 'user',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(199, 43, 98, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                }}
                radius={30}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
              <Button
                title={<CustomTitle />}
                titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                linearGradientProps={{
                  colors: ['#FF9800', '#F44336'],
                  start: [1, 0],
                  end: [0.2, 0],
                }}
                ViewComponent={LinearGradient}
                buttonStyle={{
                  borderWidth: 0,
                  borderColor: 'transparent',
                  borderRadius: 20,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                icon={{
                  name: 'arrow-right',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
              />
            </View>

            <SubHeader title="Light Buttons" />
            <View style={styles.buttonsContainer}>
              <Button
                title="SIGN UP"
                disabled={true}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(92, 99,216, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                }}
                containerStyle={{
                  width: 200,
                  height: 45,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
              <Button
                title="Outline Button"
                buttonStyle={{
                  borderColor: 'rgba(78, 116, 289, 1)',
                }}
                type="outline"
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
              <Button
                title="Raised Button"
                buttonStyle={{
                  borderColor: 'rgba(78, 116, 289, 1)',
                }}
                type="outline"
                raised
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
              <Button
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                title="Clear Button"
                type="clear"
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
              />
              <Button
                title="Light"
                buttonStyle={{
                  backgroundColor: 'rgba(244, 244, 244, 1)',
                  borderRadius: 3,
                }}
                containerStyle={{
                  height: 40,
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                titleStyle={{ marginHorizontal: 20, color: 'black' }}
              />
            </View>
            <SubHeader title="Loading Buttons" />
            <View style={styles.buttonsContainer}>
              <Button
                title="HOME"
                loading
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(111, 202, 186, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  paddingVertical: 5,
                }}
                containerStyle={{
                  width: 200,
                  height: 40,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
              <Button
                title="SIGN UP"
                loading={true}
                loadingProps={{
                  size: 'small',
                  color: 'rgba(111, 202, 186, 1)',
                }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(92, 99,216, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                  paddingVertical: 10,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
            </View>
          </View>
          <SubHeader title="Button Groups" />
          <ButtonGroup
            buttons={['SIMPLE', 'BUTTON', 'GROUP']}
            selectedIndex={selectedIndex}
            onPress={(value) => {
              setSelectedIndex(value);
            }}
            containerStyle={{ marginBottom: 20 }}
          />
          <ButtonGroup
            buttons={['Multiple', 'Select', 'Button', 'Group']}
            selectMultiple
            selectedIndexes={selectedIndexes}
            onPress={(value) => {
              setSelectedIndexes(value);
            }}
            containerStyle={{ marginBottom: 20 }}
          />
        </View>
      </ScrollView>
    </>
  );
};

const CustomTitle = () => {
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>John Doe</Text>
      <Text style={{ fontStyle: 'italic', fontSize: 12 }}>
        Minister of Magic
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
});

export default withTheme(Buttons, '');
