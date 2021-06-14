import React from 'react';
import {
  Pressable,
  View,
  Platform,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ColorValue,
} from 'react-native';
import { withTheme } from '../config';
import Image, { ImageProps } from '../image/Image';
import Icon, { IconProps } from '../icons/Icon';
import { RneFunctionComponent } from '../helpers';

export type AccessoryProps = Partial<IconProps> &
  Partial<ImageProps> & {
    underlayColor?: ColorValue;
    style?: StyleProp<ViewStyle>;
  };

const Accessory: RneFunctionComponent<AccessoryProps> = ({
  size = 10,
  style,
  underlayColor = '#000',
  onPress,
  onLongPress,
  source,
  ...props
}: AccessoryProps) => {
  return (
    <Pressable
      style={[
        styles.accessory,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
      android_ripple={{
        color: underlayColor,
        borderless: false,
        radius: -5,
      }}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View>
        {source ? (
          <Image
            source={source}
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
            }}
            {...props}
          />
        ) : (
          <Icon
            name="mode-edit"
            type="material"
            color="#fff"
            size={size * 0.8}
            {...props}
          />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  accessory: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.5,
      },
    }),
  },
});

export default withTheme(Accessory, 'AvatarAccessory');
