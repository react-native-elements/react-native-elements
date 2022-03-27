import React from 'react';
import { Text, Divider, useTheme } from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Header, SubHeader } from '../components/header';

type DividerViewTypes = {};

const DividerView: React.FunctionComponent<DividerViewTypes> = () => {
  const { theme } = useTheme();
  return (
    <>
      <Header title="Divider" view="divider" />
      <ScrollView>
        <SubHeader title="Horizontal Dividers" />
        <View style={styles.horizontal}>
          <Text style={styles.horizontalText}>Horizontal Divider</Text>
          <Divider />
          <Text style={styles.horizontalText}>
            Horizontal Divider with width and color
          </Text>
          <Divider width={5} color={theme?.colors?.primary} />
        </View>
        <SubHeader title="Horizontal Divider with Inset" />
        <View style={styles.horizontal}>
          <Text style={styles.horizontalText}>
            Horizontal Divider with left inset
          </Text>
          <Divider inset={true} />
          <Text style={styles.horizontalText}>
            Horizontal Divider with right inset
          </Text>
          <Divider inset={true} insetType="right" />
          <Text style={styles.horizontalText}>
            Horizontal Divider with middle inset
          </Text>
          <Divider inset={true} insetType="middle" />
          <Text style={styles.horizontalText}>Welcome to RNE App</Text>
        </View>
        <SubHeader title="Vertical Divider" />
        <View style={styles.vertical}>
          <Text>Left text</Text>
          <Divider orientation="vertical" />
          <Text>Right text</Text>
        </View>
        <View style={styles.vertical}>
          <Text>Left text</Text>
          <Divider orientation="vertical" width={5} />
          <Text>Right text</Text>
        </View>
        <SubHeader title="Divider with SubHeader" />
        <View style={styles.horizontal}>
          <Text style={styles.horizontalText}>Left text</Text>
          <Divider
            subHeader="Divider"
            inset={true}
            subHeaderStyle={{ color: theme?.colors?.primary }}
          />
          <Text style={styles.horizontalText}>Right text</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  horizontal: {
    marginBottom: 10,
  },
  horizontalText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  vertical: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default DividerView;
