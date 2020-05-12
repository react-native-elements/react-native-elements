import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import isEqual from 'lodash.isequal';

import { withTheme } from '../config';
import { renderNode } from '../helpers';

import Icon from '../icons/Icon';
import Image from '../image/Image';
import Container from '../container/Container';

const avatarSizes = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
};

const AvatarComponent = ({
  containerProps,
  iconProps,
  imageProps,
  title,
  titleStyle,
  size,
  rounded,
  showAccessory,
  accessory,
  ...attributes
}) => {
  const width =
    typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
  const height = width;
  const titleSize = width / 2;
  accessory.size = (accessory && accessory.size) || width / 3;

  containerProps.style = StyleSheet.flatten([
    styles.container,
    { height, width },
    rounded && { borderRadius: width / 2 },
    containerProps && containerProps.style,
  ]);

  imageProps.container = imageProps.container || {};
  imageProps.container.style = StyleSheet.flatten([
    styles.overlayContainer,
    rounded && { borderRadius: width / 2, overflow: 'hidden' },
    imageProps.container.style,
  ]);

  imageProps.PlaceholderContent =
    (imageProps.PlaceholderContent &&
      renderNode(undefined, imageProps.PlaceholderContent)) ||
    (title && (
      <Text
        style={StyleSheet.flatten([
          styles.title,
          { fontSize: titleSize },
          titleStyle,
        ])}
      >
        {title}
      </Text>
    )) ||
    (iconProps && <Icon {...iconProps} />);

  imageProps.style = StyleSheet.flatten([styles.imageStyle, imageProps.style]);

  return (
    <Container {...containerProps}>
      <Image {...imageProps} />
      {showAccessory && <Accessory {...accessory} />}
    </Container>
  );
};

const Accessory = ({ container, style, size, ...attributes }) => {
  attributes = {
    name: 'mode-edit',
    type: 'material',
    color: '#fff',
    ...attributes,
  };
  container = {
    Component: TouchableHighlight,
    underlayColor: '#000',
    ...container,
  };
  container.style = StyleSheet.flatten([
    styles.accessory,
    {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
    container.style,
  ]);
  return (
    <Container {...container}>
      <View>
        {'source' in attributes ? (
          <Image
            style={{
              width: size,
              height: size,
              borderRadius: size / 2,
              ...style,
            }}
            {...attributes}
          />
        ) : (
          <Icon size={size * 0.8} {...attributes} />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
  },
  overlayContainer: {
    flex: 1,
  },
  title: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
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

AvatarComponent.propTypes = {
  containerProps: Container.propTypes,
  rounded: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  iconProps: PropTypes.object,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    PropTypes.number,
  ]),
  showAccessory: PropTypes.bool,
  accessory: PropTypes.shape({
    size: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    underlayColor: PropTypes.string,
    style: PropTypes.object,
  }),
  imageProps: PropTypes.object,
};

AvatarComponent.defaultProps = {
  containerProps: {},
  imageProps: {},
  accessory: {},
  showAccessory: false,
  size: 'small',
};

const Avatar = React.memo(AvatarComponent, isEqual);
export { Avatar };
export default withTheme(Avatar, 'Avatar');
