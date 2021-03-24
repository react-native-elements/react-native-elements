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

export type SpeedDialActionProps = Omit<FABProps, 'size'>;

const SpeedDialAction: React.FunctionComponent<SpeedDialActionProps> = withTheme(
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
  open?: boolean;
  openIcon?: IconNode;
  onChange?: () => void;
  children?: React.ReactChild[];
} & FABProps;

const SpeedDial: React.FunctionComponent<SpeedDialProps> = ({
  open,
  icon,
  openIcon,
  children,
  theme,
  onChange,
  style,
  ...props
}) => {
  const animations = React.useRef<Animated.Value[]>(
    [...new Array(children.length)].map(() => new Animated.Value(Number(open)))
  );

  React.useEffect(() => {
    Animated.stagger(
      50,
      animations.current
        .map((animation) =>
          Animated.timing(animation, {
            toValue: Number(open),
            duration: 150,
            useNativeDriver: true,
          })
        )
        [open ? 'reverse' : 'sort']()
    ).start();
  }, [open, animations, children]);

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback onPress={onChange}>
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              opacity: animations.current[0],
              backgroundColor: Color(theme.colors.black)
                .alpha(60)
                .rgb()
                .toString(),
            },
          ]}
          pointerEvents={open ? 'auto' : 'none'}
        />
      </TouchableWithoutFeedback>

      <SafeAreaView style={styles.safeArea}>
        {children.map((ChildAction, i: number) => (
          <Animated.View
            pointerEvents={open ? 'auto' : 'none'}
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
          {...props}
          onPress={onChange}
          style={[styles.fab]}
          icon={open ? openIcon : icon}
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
