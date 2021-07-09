import React from 'react';
import { Animated } from 'react-native';
import { ListItemBase, ListItemBaseProps } from './ListItemBase';
import { ListItemContent } from './ListItemContent';
import { Icon, IconNode, IconProps } from '../Icon';
import { RneFunctionComponent } from '../helpers';

export type ListItemAccordionProps = ListItemBaseProps & {
  /** Decide if Accordion is Expanded. */
  isExpanded?: boolean;

  /** Icon for unexpanded Accordion. */
  icon?: IconNode;

  /** Icon when Accordion is expanded, if not provided `icon` will be rotated 180deg. */
  expandIcon?: IconNode;

  /** Similar to ListItem's child. */
  content?: React.ReactNode;

  /** Don't rotate when Accordion is expanded. */
  noRotation?: boolean;

  /** Don't show accordion icon. */
  noIcon?: boolean;

  /** Decide whether to show animation. */
  animation?:
    | {
        type?: 'timing' | 'spring';
        duration?: number;
      }
    | boolean;
};

/** This allows making a accordion list which can show/hide content. */
export const ListItemAccordion: RneFunctionComponent<ListItemAccordionProps> = ({
  children,
  isExpanded,
  icon,
  expandIcon,
  content,
  noRotation,
  noIcon,
  animation = {
    duration: 350,
    type: 'timing',
  },
  ...props
}) => {
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

  const rotate =
    noRotation || (typeof animation === 'boolean' && animation)
      ? '0deg'
      : transition.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '-180deg'],
        });

  return (
    <>
      <ListItemBase {...props}>
        {React.isValidElement(content) ? content : <ListItemContent />}
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
      </ListItemBase>
      <Animated.View
        style={[
          Boolean(animation) && {
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

ListItemAccordion.displayName = 'ListItem.Accordion';
