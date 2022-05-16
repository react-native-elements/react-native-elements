import React from 'react';
import { Animated } from 'react-native';
import { ListItemBase, ListItemProps } from './ListItem';
import { ListItemContent } from './ListItem.Content';
import { Icon, IconNode } from '../Icon';
import { renderNode, RneFunctionComponent } from '../helpers';

export interface ListItemAccordionProps extends ListItemProps {
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

  /** Rotate Icon left side */
  leftRotate?: boolean;

  /** Don't show accordion icon. */
  noIcon?: boolean;

  /** Decide whether to show animation.
   * @default Object with duration 350ms and type timing
   * @type Animated.TimingAnimationConfig
   */
  animation?:
    | {
        type?: 'timing' | 'spring';
        duration?: number;
      }
    | boolean;
}

/** This allows making a accordion list which can show/hide content. */
export const ListItemAccordion: RneFunctionComponent<
  ListItemAccordionProps
> = ({
  children,
  isExpanded = false,
  icon = <Icon name={'chevron-down'} type="material-community" />,
  expandIcon,
  content,
  leftRotate = false,
  noRotation,
  noIcon,
  animation = {
    duration: 350,
    type: 'timing',
  },
  ...rest
}) => {
  const transition = React.useRef(new Animated.Value(0));

  const startAnimation = React.useCallback(() => {
    if (typeof animation !== 'boolean') {
      Animated[animation.type || 'timing'](transition.current, {
        toValue: Number(isExpanded),
        useNativeDriver: true,
        duration: animation.duration || 350,
      }).start();
    }
  }, [isExpanded, animation]);

  React.useEffect(() => {
    startAnimation();
  }, [isExpanded, startAnimation]);

  const iconAnimation = React.useMemo(
    () => ({
      transform: [
        {
          rotate: noRotation
            ? '0deg'
            : transition.current.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', leftRotate ? '180deg' : '-180deg'],
              }),
        },
      ],
    }),
    [leftRotate, noRotation]
  );

  return (
    <>
      <ListItemBase {...rest}>
        {React.isValidElement(content) ? content : <ListItemContent />}
        {!noIcon && (
          <Animated.View
            testID="RNE__ListItem__Accordion__Icon"
            style={iconAnimation}
          >
            {renderNode(Icon, isExpanded ? expandIcon ?? icon : icon)}
          </Animated.View>
        )}
      </ListItemBase>
      {isExpanded && (
        <Animated.View
          testID="RNE__ListItem__Accordion__Children"
          style={{
            opacity: transition.current,
          }}
        >
          {children}
        </Animated.View>
      )}
    </>
  );
};

ListItemAccordion.displayName = 'ListItem.Accordion';
