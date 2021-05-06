import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TextInput,
  TextStyle,
  StyleProp,
  TextInputProps,
} from 'react-native';
import { RneFunctionComponent } from '../helpers';
import { withTheme } from '../config';

export type FloatingInputProps = TextInputProps & {
  attrName?: string;
  title?: string;
  value?: string;
  update?: (attrName: string, updatedValue: string) => any;
  titleActiveSize?: number;
  titleInActiveSize?: number;
  titleActiveColor?: string;
  titleInActiveColor?: string;
  textInputStyles?: StyleProp<TextStyle>;
  otherTextInputProps?: {};
};

const FloatingTextInput: RneFunctionComponent<FloatingInputProps> = ({
  keyboardType = 'default',
  titleActiveSize = 14,
  titleInActiveSize = 19,
  titleActiveColor = 'blue',
  titleInActiveColor = 'dimgrey',
  textInputStyles = {},
  ...props
}) => {
  const [isFieldActive, setIsFieldActive] = React.useState(false);
  const { current: position } = React.useRef(
    new Animated.Value(isFieldActive ? 1 : 0)
  );

  const handleFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true);
      Animated.timing(position, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleBlur = () => {
    if (isFieldActive && !props.value) {
      setIsFieldActive(false);
      Animated.timing(position, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  };

  const onChangeText = (updatedValue) => {
    const { attrName, update } = props;
    update(attrName, updatedValue);
  };

  const returnAnimatedTitleStyle = () => {
    return {
      top: position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
      fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
      color: isFieldActive ? titleActiveColor : titleInActiveColor,
    };
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.titleStyles, returnAnimatedTitleStyle()]}>
        {props.title}
      </Animated.Text>

      <TextInput
        value={props.value}
        style={[styles.textInput, textInputStyles]}
        underlineColorAndroid="transparent"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...props.otherTextInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 0.5,
    height: 50,
    marginVertical: 4,
  },
  textInput: {
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'Avenir-Medium',
    color: 'black',
  },
  titleStyles: {
    position: 'absolute',
    fontFamily: 'Avenir-Medium',
    left: 3,
  },
});

export { FloatingTextInput };
export default withTheme(FloatingTextInput, 'FloatingInput');
