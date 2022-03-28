import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Tile } from '@rneui/themed';
import { Header } from '../components/header';

type TilesComponentProps = {};

const Tiles: React.FunctionComponent<TilesComponentProps> = () => {
  return (
    <>
      <Header title="Tiles" view="tile" />
      <View style={{ alignItems: 'center' }}>
        <ScrollView style={{ paddingVertical: 10 }}>
          <Tile
            imageSrc={{
              uri: 'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp',
            }}
            title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
            titleStyle={{ fontSize: 15 }}
            featured
            caption="Mahatma Gandhi"
            activeOpacity={1}
            width={310}
          />
          <View style={{ paddingTop: 20 }}>
            <Tile
              imageSrc={{
                uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
              icon={{
                name: 'heart',
                type: 'font-awesome',
                size: 60,
                color: 'red',
              }}
              featured
              activeOpacity={0.8}
              onPress={() => {
                'Tile pressed';
              }}
              width={310}
            />
          </View>
          <View style={{ paddingTop: 20, paddingBottom: 100 }}>
            <Tile
              imageSrc={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg',
              }}
              title="Half Dome, Yosemite"
              titleStyle={{
                fontSize: 20,
                textAlign: 'center',
                paddingBottom: 3,
              }}
              activeOpacity={1}
              width={310}
              contentContainerStyle={{ height: 70 }}
              style={{ paddingBottom: 20 }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{ color: 'green' }}>Visit</Text>
                <Text style={{ color: '#397af8' }}>Find out More</Text>
              </View>
            </Tile>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Tiles;
