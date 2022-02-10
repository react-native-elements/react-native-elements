```SnackPlayer name=RNE Tile
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Tile } from 'react-native-elements';

type TilesComponentProps = {};

const Tiles: React.FunctionComponent<TilesComponentProps> = () => {
  return (
    <>
      <View style={{ alignItems: 'center' }}>
        <ScrollView style={{ paddingVertical: 10 }}>
        <Text style={styles.subHeader}>Featured Tile</Text>
          <Tile
            imageSrc={{
              uri:
                'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp',
            }}
            title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
            titleStyle={{ fontSize: 15 }}
            featured
            caption="Mahatma Gandhi"
            activeOpacity={1}
            width={310}
          />
          <Text style={styles.subHeader}>Featured Tile with Icon</Text>
          <View style={{ paddingTop: 20 }}>
            <Tile
              imageSrc={{
                uri:
                  'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
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
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg/320px-Half_Dome_from_Glacier_Point%2C_Yosemite_NP_-_Diliff.jpg',
              }}
              title="Half Dome, Yosemite"
              titleStyle={{ fontSize: 20, textAlign: 'center', paddingBottom: 5 }}
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

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  }
});

export default Tiles;
```
