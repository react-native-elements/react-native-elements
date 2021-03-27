import React, { useEffect, useState } from 'react';
import Button from '../buttons/Button';
import Text from '../text/Text';
import { normalizeText, RneFunctionComponent } from '../helpers';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { withTheme } from '../config';

export type CounterProps = {
  initialValue?: number;
  min?: number;
  max?: number;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  buttonTitleStyle?: StyleProp<TextStyle>;
  onValueChange: (number) => void;
};

interface CounterInterface extends RneFunctionComponent<CounterProps> {}

const Counter: CounterInterface = ({
  initialValue = 0,
  min = 0,
  max = 5,
  buttonStyle,
  textStyle,
  buttonTitleStyle,
  onValueChange,
}) => {
  const [countValue, setCountValue] = useState(initialValue);

  useEffect(() => {
    setCountValue(initialValue);
  }, [initialValue]);

  const incrementHandler = () => {
    if (countValue < max) {
      const newValue = countValue + 1;
      setCountValue(newValue);
      onValueChange(newValue);
    } else {
      onValueChange(countValue);
    }
  };

  const decrementHandler = () => {
    if (countValue > min) {
      const newValue = countValue - 1;
      setCountValue(newValue);
      onValueChange(newValue);
    } else {
      onValueChange(countValue);
    }
  };

  return (
    <View style={styles.counter}>
      <Button
        testID="counterDecButton"
        onPress={decrementHandler}
        title="-"
        titleStyle={StyleSheet.flatten([styles.buttonTitle, buttonTitleStyle])}
        buttonStyle={StyleSheet.flatten([styles.button, buttonStyle])}
      />
      <Text
        testID="counterText"
        style={StyleSheet.flatten([{ fontSize: normalizeText(14) }, textStyle])}
      >
        {countValue}
      </Text>
      <Button
        testID="counterIncButton"
        onPress={incrementHandler}
        title="+"
        titleStyle={StyleSheet.flatten([styles.buttonTitle, buttonTitleStyle])}
        buttonStyle={StyleSheet.flatten([styles.button, buttonStyle])}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    display: 'flex',
    flexDirection: 'row',
    width: 140,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    borderRadius: 50,
    minWidth: 40,
  },
  buttonTitle: {
    fontSize: normalizeText(14),
    fontWeight: 'bold',
    marginTop: -2,
  },
});

export { Counter };
export default withTheme(Counter, 'Counter');
