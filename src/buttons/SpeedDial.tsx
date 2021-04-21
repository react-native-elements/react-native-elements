import React from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import FAB, { FABProps } from './FAB';
import { withTheme } from '../config';
import { IconNode } from '../icons/Icon';
import Color from 'color';
import { RneFunctionComponent } from '../helpers';

export type SpeedDialActionProps = Omit<FABProps, 'size'>;

const SpeedDialAction: RneFunctionComponent<SpeedDialActionProps> = withTheme(
  ({ title, titleStyle, ...actionProps }) => {
    return (
      <View style={styles.action}>
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        <FAB {...actionProps} size="small" style={[actionProps.style]} />
      </View>
    );
  },
  'SpeedDialAction'
);

export type SpeedDialProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  openIcon?: IconNode;
  overlayColor?: string;
  children?: React.ReactChild[];
  transitionDuration?: number;
} & FABProps;

const SpeedDial: RneFunctionComponent<SpeedDialProps> = ({
  theme,
  isOpen,
  onOpen = () => {},
  onClose = () => {},
  icon,
  openIcon,
  children,
  transitionDuration = 150,
  style,
  overlayColor,
  ...props
}) => {
  const animations = React.useRef<Animated.Value[]>(
    [...new Array(React.Children.count(children))].map(
      () => new Animated.Value(Number(isOpen))
    )
  );

  React.useEffect(() => {
    Animated.stagger(
      50,
      animations.current
        .map((animation) =>
          Animated.timing(animation, {
            toValue: Number(isOpen),
            duration: transitionDuration,
            useNativeDriver: true,
          })
        )
        [isOpen ? 'reverse' : 'sort']()
    ).start();
  }, [isOpen, animations, children, transitionDuration]);

  return (
    <View style={[styles.container, style]} pointerEvents="box-none">
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              opacity: animations.current[0],
              backgroundColor:
                overlayColor ||
                Color(theme?.colors?.black).alpha(0.6).rgb().toString(),
            },
          ]}
          pointerEvents={isOpen ? 'auto' : 'none'}
        />
      </TouchableWithoutFeedback>

      <SafeAreaView pointerEvents="box-none" style={styles.safeArea}>
        {React.Children.toArray(children).map((ChildAction, i: number) => (
          <Animated.View
            pointerEvents={isOpen ? 'auto' : 'none'}
            key={i}
            style={{
              transform: [{ scale: animations.current[i] }],
              opacity: animations.current[i],
            }}
          >
            {ChildAction}
          </Animated.View>
        ))}
        <FAB
          style={[styles.fab]}
          icon={isOpen ? openIcon : icon}
          {...props}
          onPress={isOpen ? onClose : onOpen}
        />
      </SafeAreaView>
    </View>
  );
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
  title: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
  },
  action: {
    marginBottom: 16,
    marginRight: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export { SpeedDial };

export default Object.assign(withTheme(SpeedDial, 'SpeedDial'), {
  Action: SpeedDialAction,
});
