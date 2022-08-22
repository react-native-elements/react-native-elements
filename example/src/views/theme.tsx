import React from 'react';
import { View, Pressable } from 'react-native';
import { useTheme, Text, makeStyles } from '@rneui/themed';
import { Header } from '../components/header';

type TextComponentProps = {};

const COLORS = [
  '2196f3',
  'e91e63',
  '3d5afe',
  '4615b2',
  'ffd600',
  'ff5722',
  '00a152',
];

const TextComponent: React.FunctionComponent<TextComponentProps> = () => {
  const { updateTheme } = useTheme();
  const styles = useStyles();

  return (
    <>
      <Header title="Theme" view="customization" />
      <View style={styles.view}>
        <Text>Simply select colors using the palette below.</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {COLORS.map((color) => (
            <Pressable
              key={color}
              style={{
                backgroundColor: '#' + color,
                height: 50,
                width: '100%',
                marginBottom: 10,
              }}
              onPress={() => {
                updateTheme({
                  lightColors: {
                    primary: '#' + color,
                  },
                  darkColors: {
                    primary: '#' + color,
                  },
                });
              }}
            />
          ))}
        </View>
      </View>
    </>
  );
};

const useStyles = makeStyles({
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
