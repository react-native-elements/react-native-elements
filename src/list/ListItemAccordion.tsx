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
  noAnimation?: boolean;
  noRotation?: boolean;
  noIcon?: boolean;
  animationDuration?: number;
};

const Accordion: RneFunctionComponent<ListItemAccordionProps> = ({
  children,
  isExpanded,
  icon,
  expandIcon,
  content,
  noAnimation,
  noRotation,
  noIcon,
  animationDuration = 350,
  ...props
}) => {
  const { current: animation } = React.useRef(new Animated.Value(0));

  const startAnimation = React.useCallback(() => {
    Animated.timing(animation, {
      toValue: Number(isExpanded),
      useNativeDriver: false,
      duration: animationDuration,
    }).start();
  }, [isExpanded, animation, animationDuration]);

  React.useEffect(() => {
    if (noAnimation) {
      return;
    }
    startAnimation();
  }, [isExpanded, startAnimation, noAnimation]);

  const rotate = noRotation
    ? '0deg'
    : animation.interpolate({
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
            maxHeight: animation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
            opacity: animation,
          },
          noAnimation && {
            maxHeight: isExpanded ? '100%' : '0%',
          },
        ]}
      >
        {children}
      </Animated.View>
    </>
  );
};

export default withTheme(Accordion, 'ListItemAccordion');
