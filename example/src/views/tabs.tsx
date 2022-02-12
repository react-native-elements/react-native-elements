import React from 'react';
import { Header } from '../components/header';
import { Tab, Text, TabView } from '@react-native-elements/themed';

export default () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Header title="Tab" />
      <Tab
        value={index}
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

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
          <Text h1>Cart</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <Text h1>Example tab 1</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>Example tab 2</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
          <Text h1>Example tab 3</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};
