import React from 'react';
import { TouchableHighlight, View, Platform, StyleSheet } from 'react-native';
import { withTheme } from '../config';
import Image, { ImageProps } from '../image/Image';
import Icon, { IconProps } from '../icons/Icon';

export type AccessoryProps = Partial<IconProps> &
  Partial<ImageProps> &
  typeof defaultProps;
const defaultProps = {
  size: 10,
  name: 'mode-edit',
  type: 'material',
  color: '#fff',
  underlayColor: '#000',
};

const Accessory: React.FunctionComponent<AccessoryProps> = ({
  size,
  style,
  underlayColor,
  onPress,
  onLongPress,
  source,
  ...props
}: AccessoryProps) => {
  return (
    <TouchableHighlight
      style={StyleSheet.flatten([
        styles.accessory,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ])}
      underlayColor={underlayColor}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View>
        {source ? (
          <Image
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
            }}
            {...props}
          />
        ) : (
          <Icon size={size * 0.8} {...props} />
        )}
      </View>
    </TouchableHighlight>
  );
};

Accessory.defaultProps = defaultProps;

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
