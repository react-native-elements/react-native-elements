import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Chip, withTheme } from '@rneui/themed';
import colors from '../config/colors';
import { Header } from '../components/header';

type ChipsComponentProps = {};

const Chips: React.FunctionComponent<ChipsComponentProps> = () => {
  return (
    <>
      <Header title="Chips" />
      <ScrollView>
        <View style={styles.contentView}>
          <View style={{ alignItems: 'center' }}>
            <Chip title="Solid Chip" containerStyle={{ marginVertical: 15 }} />
            <Chip
              title="Disabled Chip"
              disabled
              containerStyle={{ marginVertical: 15 }}
            />
            <Chip
              title="Outlined Chip"
              type="outline"
              containerStyle={{ marginVertical: 15 }}
            />
            <Chip
              title="Outlined & Disabled"
              type="outline"
              disabled
              containerStyle={{ marginVertical: 15 }}
            />
            <Chip
              title="Left Icon Chip"
              icon={{
                name: 'bluetooth',
                type: 'font-awesome',
                size: 20,
                color: 'white',
              }}
              containerStyle={{ marginVertical: 15 }}
            />
            <Chip
              title="Right Icon Chip"
              icon={{
                name: 'close',
                type: 'font-awesome',
                size: 20,
                color: 'white',
              }}
              iconRight
              containerStyle={{ marginVertical: 15 }}
            />
            <Chip
              title="Pressable Icon Chip"
              icon={{
                name: 'bluetooth',
                type: 'font-awesome',
                size: 20,
                color: colors.primary2,
              }}
              onPress={() => console.log('Icon chip was pressed!')}
              type="outline"
              containerStyle={{ marginVertical: 15 }}
            />
            <Chip
              title="Pressable Icon Chip"
              icon={{
                name: 'close',
                type: 'font-awesome',
                size: 20,
                color: colors.primary2,
              }}
              onPress={() => console.log('Icon chip was pressed!')}
              iconRight
              type="outline"
              containerStyle={{ marginVertical: 15 }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    marginTop: 20,
  },
});

export default withTheme(Chips, '');
