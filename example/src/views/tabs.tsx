import React from 'react';
import { Header } from '../components/header';
import { Tab, Text, TabView } from '@rneui/themed';
import { ScrollView } from 'react-native';

export default () => {
  const [index, setIndex] = React.useState(0);

  console.log('tabs re render');
  return (
    <>
      <Header title="Tab" />
      <Tab
        value={Math.ceil(index > -1 ? index : 0)}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        scrollable
        variant="primary"
      >
        <Tab.Item
          containerStyle={{
            width: 180,
          }}
          title="Recent"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Custom"
          containerStyle={(active) => ({
            backgroundColor: active ? '#208990' : 'transparent',
            width: 180,
          })}
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          containerStyle={{
            width: 180,
          }}
          title="Cart"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          containerStyle={{
            width: 180,
          }}
          title="Example tab 1"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          containerStyle={{
            width: 180,
          }}
          title="Example tab 2"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          containerStyle={{
            width: 180,
          }}
          title="Example tab 3"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
        />
      </Tab>
      {/* <Text>
        {index}
      </Text> */}

      <TabView
        onSwipeStart={(e) => console.log(e)}
        value={index}
        onChange={setIndex}
        animationType="spring"
        // containerStyle={{ width: 240, height: 200 }}
      >
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <ScrollView>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
            <Text h1>Recent 0</Text>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>Favorite 1</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
          <Text h1>Cart 2${Math.random()}</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <Text h1>Example 3</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>Example 4</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
          <Text h1>Example 5</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};
