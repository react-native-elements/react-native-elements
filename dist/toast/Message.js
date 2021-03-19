import React, { useEffect, useRef, useContext } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';
import { ToastContext, ToastPosition } from './ToastProvider';
const Message = ({ message, onHide }) => {
    const { duration, position } = useContext(ToastContext);
    const opacity = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.delay(duration),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => onHide());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<Animated.View style={Object.assign({ opacity, transform: [
            {
                translateY: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [position === ToastPosition.top ? -20 : 20, 0],
                }),
            },
        ], backgroundColor: message.type === 'error' ? 'red' : 'white' }, styles.message)}>
      <Text>{message.text}</Text>
    </Animated.View>);
};
const styles = StyleSheet.create({
    message: {
        margin: 10,
        marginBottom: 5,
        // backgroundColor: 'white',
        padding: 10,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
    },
});
export default Message;
