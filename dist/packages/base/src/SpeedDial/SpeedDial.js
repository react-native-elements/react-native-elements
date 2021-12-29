import React from 'react';
import { View, Animated, StyleSheet, SafeAreaView, Pressable, } from 'react-native';
import FAB from '../FAB';
import Color from 'color';
/** When pressed, a floating action button can display three to six related actions in the form of a speed dial.
 * If more than six actions are needed, something other than a FAB should be used to present them.
 * Upon press, the FAB remains visible and emits a stack of related actions.
 * If the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions.
 */
export const SpeedDial = ({ isOpen, onOpen = () => { }, onClose = () => { }, icon, openIcon, children, transitionDuration = 150, style, overlayColor, theme, backdropPressableProps: pressableProps, ...rest }) => {
    const animations = React.useRef([...new Array(React.Children.count(children))].map(() => new Animated.Value(Number(isOpen))));
    React.useEffect(() => {
        Animated.stagger(50, animations.current
            .map((animation) => Animated.timing(animation, {
            toValue: Number(isOpen),
            duration: transitionDuration,
            useNativeDriver: true,
        }))[isOpen ? 'reverse' : 'sort']()).start();
    }, [isOpen, animations, children, transitionDuration]);
    return (<View style={[styles.container, style]} pointerEvents="box-none">
      {/* For overlay  */}
      <Pressable {...pressableProps} onPress={onClose} style={[StyleSheet.absoluteFillObject]} pointerEvents={isOpen ? 'auto' : 'none'}>
        <Animated.View style={[
            StyleSheet.absoluteFillObject,
            {
                opacity: animations.current[0],
                backgroundColor: overlayColor ||
                    Color(theme?.colors?.black).alpha(0.6).rgb().toString(),
            },
        ]}/>
      </Pressable>

      <SafeAreaView pointerEvents="box-none" style={styles.safeArea}>
        {React.Children.toArray(children).map((ChildAction, i) => (<Animated.View pointerEvents={isOpen ? 'auto' : 'none'} key={i} style={{
                transform: [{ scale: animations.current[i] }],
                opacity: animations.current[i],
            }}>
            {ChildAction}
          </Animated.View>))}
        <FAB style={[styles.fab]} icon={isOpen ? openIcon : icon} {...rest} onPress={isOpen ? onClose : onOpen}/>
      </SafeAreaView>
    </View>);
};
const styles = StyleSheet.create({
    safeArea: {
        alignItems: 'flex-end',
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
    },
    fab: {
        margin: 16,
        marginTop: 0,
    },
});
SpeedDial.displayName = 'SpeedDial';
