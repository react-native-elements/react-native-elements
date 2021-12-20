import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CircularSlider } from 'react-native-elements-universe';
import { Header } from '../components/header';

export default function () {
  const [value, setValue] = React.useState(0);
  const [timer, setTimer] = React.useState(0);

  const interpolate = (start: number, end: number) => {
    let k = (value - 0) / 100;
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const color = () => {
    let r = interpolate(255, 0);
    let g = interpolate(0, 255);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };

  React.useEffect(() => {
    let subs = setInterval(() => {
      setTimer((timer + 0.5) % 100);
    }, 10);
    return () => {
      clearInterval(subs);
    };
  }, [timer]);

  return (
    <>
      <Header title="Circular Slider" view="circularslider" />
      <View style={styles.container}>
        <CircularSlider
          value={value}
          onChange={setValue}
          trackColor={color()}
          showThumbText
          showText
        />
        <CircularSlider value={timer} noThumb showText />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
