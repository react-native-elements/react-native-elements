```SnackPlayer name=RNE ButtonGroup
import React, {useState} from 'react'
import { ButtonGroup } from 'react-native-elements'
import { Text, StyleSheet } from 'react-native';

export default() => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  return (
    <>
      <Text style={styles.subHeader}>Using Strings</Text>
      <ButtonGroup
        buttons={['SIMPLE', 'BUTTON', 'GROUP']}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
      <ButtonGroup
        buttons={['Multiple', 'Select', 'Button', 'Group']}
        selectMultiple
        selectedIndexes={selectedIndexes}
        onPress={(value) => {
          setSelectedIndexes(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
      <Text style={styles.subHeader}>Using Components</Text>
    </>
  )
}

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  }
})
```
