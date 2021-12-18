```SnackPlayer name=RNE Avatar
import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

type AvatarData = {
  image_url: string;
};

const dataList: AvatarData[] = [
  {
    image_url: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg',
  },
  {
    image_url: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
  },
  {
    image_url:
      'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
  },
];

type AvatarComponentProps = {};

Array.prototype.chunk = function ( n ) {
    if ( !this.length ) {
        return [];
    }
    return [ this.slice( 0, n ) ].concat( this.slice(n).chunk(n) );
};

const Avatars: React.FunctionComponent<AvatarComponentProps> = () => {
  return (
    <>
      <ScrollView>
        <Text style={styles.subHeader}>Image Avatars</Text>
        {dataList.chunk(3).map((chunk, chunkIndex) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 30,
            }}
            key={chunkIndex}
          >
            {chunk.map((l, i) => (
              <Avatar
                size={64}
                rounded
                source={l.image_url ? { uri: l.image_url } : {}}
                key={`${chunkIndex}-${i}`}
              />
            ))}
          </View>
        ))}
        <Text style={styles.subHeader}>Icon Avatars</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}
        >
          <Avatar
            size={64}
            rounded
            icon={{ name: 'pencil', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#6733b9' }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'rowing' }}
            containerStyle={{ backgroundColor: '#00a7f7' }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'heartbeat', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#eb1561' }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}
        >
          <Avatar
            size={64}
            rounded
            icon={{
              name: 'extension',
              type: 'material',
              color: '#cdde20',
            }}
            containerStyle={{
              borderColor: 'grey',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'apartment', type: 'material', color: '#009688' }}
            containerStyle={{
              borderColor: 'grey',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
          <Avatar
            size={64}
            rounded
            icon={{ name: 'backup', type: 'material', color: '#ff5606' }}
            containerStyle={{
              borderColor: 'grey',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
        </View>

        <Text style={styles.subHeader}>Letter Avatars</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
          }}
        >
          <Avatar
            size={64}
            rounded
            title="Fc"
            containerStyle={{ backgroundColor: '#3d4db7' }}
          />
          <Avatar
            size={64}
            rounded
            title="P"
            containerStyle={{ backgroundColor: 'coral' }}
          />
          <Avatar
            size={64}
            rounded
            title="Rd"
            containerStyle={{ backgroundColor: 'purple' }}
          />
        </View>

        <Text style={styles.subHeader}>Badged Avatars</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 40,
          }}
        >
          <Avatar
            size={64}
            rounded
            icon={{ name: 'adb', type: 'material' }}
            containerStyle={{ backgroundColor: 'orange' }}
          >
            <Avatar.Accessory size={24} />
          </Avatar>
          <Avatar
            size={64}
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
            title="Bj"
            containerStyle={{ backgroundColor: 'grey' }}
          >
            <Avatar.Accessory size={23} />
          </Avatar>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  }
})

export default Avatars;
```
