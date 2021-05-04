import React from 'react';
import { Animated } from 'react-native';
import { ListItem, ListItemProps } from './ListItem';
import { withTheme } from '../config';
import { Icon, IconNode, IconProps } from '../icons/Icon';
import { RneFunctionComponent } from '../helpers';

export type ListItemAccordionProps = ListItemProps & {
  isExpanded?: boolean;
  icon?: IconNode;
  expandIcon?: IconNode;
  content?: React.ReactNode;
  noRotation?: boolean;
  noIcon?: boolean;
  animation?: {
    type?: 'timing' | 'spring';
    duration?: number;
  };
};

const Accordion: RneFunctionComponent<ListItemAccordionProps> = ({
  children,
  isExpanded,
  icon,
  expandIcon,
  content,
  noRotation,
  noIcon,
  animation,
  ...props
}) => {
  const { current: transition } = React.useRef(new Animated.Value(0));

  const startAnimation = React.useCallback(() => {
    Animated[animation.type || 'timing'](transition, {
      toValue: Number(isExpanded),
      useNativeDriver: false,
      duration: animation.duration || 350,
    }).start();
  }, [isExpanded, transition, animation]);

  React.useEffect(() => {
    startAnimation();
  }, [isExpanded, startAnimation]);

  const rotate = noRotation
    ? '0deg'
    : transition.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-180deg'],
      });

  return (
    <>
      <ListItem {...props}>
        {React.isValidElement(content) ? content : <ListItem.Content />}
        {!noIcon && (
          <Animated.View
            style={{
              transform: [
                {
                  rotate,
                },
              ],
            }}
          >
            {icon ? (
              <Icon
                {...((expandIcon
                  ? isExpanded
                    ? expandIcon
                    : icon
                  : icon) as IconProps)}
              />
            ) : (
              <Icon name={'chevron-down'} type="material-community" />
            )}
          </Animated.View>
        )}
      </ListItem>
      <Animated.View
        style={[
          {
            maxHeight: transition.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
            opacity: transition,
          },
        ]}
      >
        {children}
      </Animated.View>
    </>
  );
};

export default withTheme(Accordion, 'ListItemAccordion');
