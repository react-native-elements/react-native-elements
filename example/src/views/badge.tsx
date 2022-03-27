import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from '@rneui/themed';
import { Header, SubHeader } from '../components/header';

const BadgedIcon = withBadge(15)(Icon);

const badgeComponent = () => {
  return (
    <>
      <Header title="Badge" view="badge" />
      <ScrollView>
        <SubHeader title={'Standard Badge'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          <Badge value="3" status="success" />
          <Badge value="99+" status="error" />
          <Badge value="500" status="primary" />
          <Badge value="10" status="warning" />
        </View>
        <SubHeader title={'Mini Badge'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Badge status="success" />
          <Badge status="error" />
          <Badge status="primary" />
          <Badge status="warning" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
          }}
        >
          <Text style={{ color: '#397af8', paddingVertical: 10 }}>Success</Text>
          <Text style={{ color: '#397af8', paddingVertical: 10 }}>Error</Text>
          <Text style={{ color: '#397af8', paddingVertical: 10 }}>Primary</Text>
          <Text style={{ color: '#397af8', paddingVertical: 10 }}>Warning</Text>
        </View>

        <SubHeader title={'Badge as Indicator'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            marginBottom: 40,
          }}
        >
          <View>
            <Avatar
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
              size="medium"
            />
            <Badge
              status="success"
              containerStyle={{ position: 'absolute', top: 5, left: 40 }}
            />
          </View>
          {/* @ts-ignore */}
          <BadgedIcon type="ionicon" name="ios-chatbubbles" />
          <View>
            <Avatar
              rounded
              source={{
                uri: 'https://randomuser.me/api/portraits/women/40.jpg',
              }}
              size="large"
            />
            <Badge
              status="primary"
              value={10}
              containerStyle={{ position: 'absolute', top: 5, left: 60 }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default badgeComponent;
