import React from 'react';
import { Animated, TextProps } from 'react-native';
import { ListItem, Icon, ListItemProps } from '..';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import { IconNode, IconProps } from '../icons/Icon';

export type ListAccordion = ListItemProps & {
  expanded: boolean;
  icon: IconNode;
  title: string;
  titleProps: TextProps & { right?: boolean };
};

const Accordion: RneFunctionComponent<ListAccordion> = ({
  children,
  expanded,
  icon,
  title,
  titleProps,
  ...props
}) => {
  const { current: animation } = React.useRef(new Animated.Value(0));

  const startAnimation = React.useCallback(() => {
    Animated.timing(animation, {
      toValue: Number(expanded),
      useNativeDriver: false,
      duration: 200,
    }).start();
  }, [expanded, animation]);

  React.useEffect(() => {
    startAnimation();
  }, [expanded, startAnimation]);

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg'],
  });

  return (
    <>
      <ListItem bottomDivider {...props}>
        {icon && <Icon {...(icon as IconProps)} />}
        <ListItem.Content>
          <ListItem.Title {...titleProps}>{title}</ListItem.Title>
        </ListItem.Content>
        <Animated.View
          style={{
            transform: [
              {
                rotate,
              },
            ],
          }}
        >
          <Icon name={'chevron-up'} type="material-community" />
        </Animated.View>
      </ListItem>
      <Animated.View
        style={{
          maxHeight: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%'],
          }),
        }}
      >
        {children}
      </Animated.View>
    </>
  );
};

export { Accordion };

export default withTheme(Accordion, 'ListItem.Accordion');
