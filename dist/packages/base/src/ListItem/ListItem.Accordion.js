import React from 'react';
import { Animated } from 'react-native';
import { ListItemBase } from './ListItem';
import { ListItemContent } from './ListItem.Content';
import { Icon } from '../Icon';
/** This allows making a accordion list which can show/hide content. */
export const ListItemAccordion = ({ children, isExpanded, icon, expandIcon, content, noRotation, noIcon, animation = {
    duration: 350,
    type: 'timing',
}, ...rest }) => {
    const { current: transition } = React.useRef(new Animated.Value(0));
    const startAnimation = React.useCallback(() => {
        if (typeof animation !== 'boolean') {
            Animated[animation.type || 'timing'](transition, {
                toValue: Number(isExpanded),
                useNativeDriver: false,
                duration: animation.duration || 350,
            }).start();
        }
    }, [isExpanded, transition, animation]);
    React.useEffect(() => {
        startAnimation();
    }, [isExpanded, startAnimation]);
    const rotate = noRotation || (typeof animation === 'boolean' && animation)
        ? '0deg'
        : transition.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-180deg'],
        });
    return (<>
      <ListItemBase {...rest}>
        {React.isValidElement(content) ? content : <ListItemContent />}
        {!noIcon && (<Animated.View style={{
                transform: [
                    {
                        rotate,
                    },
                ],
            }}>
            {icon ? (<Icon {...(expandIcon
                ? isExpanded
                    ? expandIcon
                    : icon
                : icon)}/>) : (<Icon name={'chevron-down'} type="material-community"/>)}
          </Animated.View>)}
      </ListItemBase>
      <Animated.View style={[
            Boolean(animation) && {
                maxHeight: transition.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                }),
                opacity: transition,
            },
        ]}>
        {children}
      </Animated.View>
    </>);
};
ListItemAccordion.displayName = 'ListItem.Accordion';
