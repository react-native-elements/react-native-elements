import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { Header } from '../components/header';

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <>
      <Header title="BottomSheet" view="bottomsheet" />
      <Button
        title="Open Bottom Sheet with handler"
        onPress={() => setIsVisible(true)}
        buttonStyle={styles.button}
      />
      <BottomSheet
        modalProps={{}}
        onBackdropPress={() => setIsVisible(false)}
        isVisible={isVisible}
      >
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default BottomSheetComponent;
