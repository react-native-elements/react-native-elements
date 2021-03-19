import React, { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';
const Message = ({ message, onHide }) => {
    const opacity = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.delay(2000),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start(() => onHide());
    }, [onHide, opacity]);
    return (<Animated.View style={{
        opacity,
        transform: [
            {
                translateY: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-20, 0],
                }),
            },
        ],
        margin: 10,
        marginBottom: 5,
        backgroundColor: 'white',
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
    }}>
      <Text>{message}</Text>
    </Animated.View>);
};
export default Message;
