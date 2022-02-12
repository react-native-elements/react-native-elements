```SnackPlayer name=RNE Linear Text
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-elements';

type TextComponentProps = {};
const TextComponent: React.FunctionComponent<TextComponentProps> = () => {
  const { theme } = useTheme();

  return (
    <>
      <View style={styles.view}>
        <Text
          style={styles.text}
          h1
          h1Style={{ color: theme?.colors?.secondary }}
        >
          Heading 1
        </Text>
        <Text
          style={styles.text}
          h2
          h2Style={{ color: theme?.colors?.success }}
        >
          Heading 2
        </Text>
        <Text
          style={styles.text}
          h3
          h3Style={{ color: theme?.colors?.warning }}
        >
          Heading 3
        </Text>
        <Text
          style={styles.text}
          h4
          h4Style={{ color: theme?.colors?.primary }}
        >
          Heading 4
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  text: {
    textAlign: 'center',
    padding: 5,
  },
  more: {
    marginVertical: 20,
  },
  button: {
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default TextComponent;
```
