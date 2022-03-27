import _ from 'lodash';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Avatar, Button, Icon, Theme, withTheme } from '@rneui/themed';

type UserData = {
  name: string;
  avatar: string;
  value: string;
  positive: boolean;
};

const USERS: Partial<UserData>[] = [
  {
    name: 'John Smith',
    avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
    value: '- 164',
  },
  {
    name: 'Sarah Parker',
    avatar:
      'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    value: '+ 203',
    positive: true,
  },
  {
    name: 'Barry Allen',
    avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
    value: '+ 464',
    positive: true,
  },
  {
    name: 'Terry Andrews',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    value: '- 80',
    positive: false,
  },
  {
    name: 'Andy Vitale',
    avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
    value: '- 230',
    positive: false,
  },
  {
    name: 'Katy Friedson',
    avatar:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    value: '+ 160',
    positive: true,
  },
];

type ListContentType = {
  theme?: Theme;
};

const ListContent = (props: ListContentType) => {
  const renderValue = (user: Partial<UserData>) => {
    const { value, positive } = user;

    if (positive) {
      return (
        <View
          style={{
            backgroundColor: 'rgba(220,230,218,1)',
            width: 70,
            height: 28,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 10,
          }}
        >
          <Icon
            name="caret-up-outline"
            type="ionicon"
            color="green"
            size={25}
          />
          <Text
            style={{
              color: 'green',
              fontFamily: 'regular',
              fontSize: 13,
              marginLeft: 5,
            }}
          >
            {value}
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            backgroundColor: 'rgba(244,230,224,1)',
            width: 70,
            height: 28,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: 10,
          }}
        >
          <Icon
            name="caret-down-outline"
            type="ionicon"
            color="red"
            size={25}
          />
          <Text
            style={{
              color: 'red',
              fontFamily: 'regular',
              fontSize: 13,
              marginLeft: 5,
            }}
          >
            {value}
          </Text>
        </View>
      );
    }
  };

  const renderCard = (user: Partial<UserData>, index: React.Key) => {
    const { name, avatar } = user;
    return (
      <View
        key={index}
        style={{
          height: 60,
          marginHorizontal: 10,
          marginTop: 10,
          backgroundColor: props?.theme?.colors?.grey4,
          borderRadius: 5,
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginLeft: 15 }}>
            <Avatar
              rounded
              source={{
                uri: avatar,
              }}
              activeOpacity={0.7}
            />
          </View>
          <Text
            style={{
              fontFamily: 'regular',
              fontSize: 15,
              marginLeft: 10,
              color: props?.theme?.colors?.grey0,
            }}
          >
            {name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 10,
          }}
        >
          {renderValue(user)}
          <View
            style={{
              backgroundColor: 'rgba(222,222,222,1)',
              width: 35,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}
          >
            <Icon name="md-person-add" type="ionicon" color="gray" size={20} />
          </View>
        </View>
      </View>
    );
  };

  const renderListCards = () => {
    return _.map(USERS, (user, index) => {
      return renderCard(user, index);
    });
  };

  return (
    <>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            borderRadius: 5,
            alignItems: 'center',
            marginHorizontal: 10,
            height: 250,
            marginBottom: 10,
          }}
        >
          <View style={{ flex: 3, flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                size={145}
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/1.jpg',
                }}
                activeOpacity={0.7}
                avatarStyle={{ borderRadius: 145 / 2 }}
                overlayContainerStyle={{ backgroundColor: 'transparent' }}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flex: 1,
                  marginTop: 10,
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    fontFamily: 'bold',
                    fontSize: 25,
                    color: props?.theme?.colors?.secondary,
                    marginLeft: -15,
                  }}
                >
                  Paul Allen
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 300,
              borderWidth: 0.5,
              borderColor: 'rgba(222, 223, 226, 1)',
              marginHorizontal: 20,
              height: 1,
              marginVertical: 10,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Button
                title="View Profile"
                buttonStyle={{
                  height: 33,
                  width: 120,
                  backgroundColor: 'rgba(222, 223, 226, 1)',
                  borderRadius: 5,
                  paddingVertical: 5,
                }}
                titleStyle={{
                  fontFamily: 'regular',
                  fontSize: 13,
                  color: 'gray',
                }}
                onPress={() => console.log('aye')}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Button
                title="Add User"
                buttonStyle={{
                  height: 33,
                  width: 120,
                  backgroundColor: 'rgba(113, 154, 112, 1)',
                  borderRadius: 5,
                  paddingVertical: 5,
                }}
                titleStyle={{
                  fontFamily: 'regular',
                  fontSize: 13,
                  color: 'white',
                }}
                onPress={() => console.log('aye')}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>{renderListCards()}</View>
      </ScrollView>
    </>
  );
};

export default withTheme(ListContent, '');
