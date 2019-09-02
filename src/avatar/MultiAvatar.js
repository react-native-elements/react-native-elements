import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import Utils from './Utils';
import PlaceholderContent from './PlaceholderContent';
import { withTheme, ViewPropTypes } from '../config';

const DEFAULT_SIZES = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150,
};

const MultiAvatar = ({
  onPress,
  onLongPress,
  component: Component = onPress || onLongPress ? TouchableOpacity : View,
  containerStyle,
  icon,
  iconStyle,
  size,
  avatarStyle,
  rounded,
  separatorColor,
  separatorWidth,
  title,
  titleStyle,
  overlayContainerStyle,
  showEditButton,
  editButton,
  onEditPress,
  showPlaceholder,
  placeholderStyle,
  renderPlaceholderContent,
  children
}) => {
  const width =
    typeof size === 'number'
        ? size : DEFAULT_SIZES[size] || DEFAULT_SIZES.small;
  const height = width
  const titleSize = width / 2;
  const iconSize = width / 2;

  const multiAvatarTouchable = !!(onPress || onLongPress);

  const placeholderContent = showPlaceholder && (
    <PlaceholderContent
      renderPlaceholderContent={renderPlaceholderContent}
      title={title}
      titleSize={titleSize}
      titleStyle={titleStyle}
      icon={icon}
      iconSize={iconSize}
      iconStyle={iconStyle}
    />
  );

  return (
    <Component
      onPress={onPress}
      onLongPress={onLongPress}
      style={[
        styles.container,
        { height, width },
        rounded && { borderRadius: width / 2, overflow: 'hidden' },
        containerStyle,
      ]}
    >
      <FadeInMultiAvatar
        placeholderStyle={placeholderStyle}
        PlaceholderContent={placeholderContent}
        containerStyle={overlayContainerStyle}
        avatarStyle={avatarStyle}
        gridViewProps={{ width, height, separatorColor, separatorWidth, multiAvatarTouchable, children}}
      />
      {showEditButton && (
        <Utils
          width={width}
          height={height}
          editButton={editButton}
          onEditPress={onEditPress}
        />
      )}
    </Component>
  );
};

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    width: null,
    height: null
  },
  multiAvatar: {
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  container: {
    backgroundColor: 'transparent',
  },
  overlayContainer: {
      flex: 1,
    },
  placeholderContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BDBDBD',
  }
});

MultiAvatar.propTypes = {
  component: PropTypes.oneOf([
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
  ]),
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  containerStyle: PropTypes.any,
  avatarStyle: PropTypes.any,
  rounded: PropTypes.bool,
  overlayContainerStyle: PropTypes.any,
  size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
      PropTypes.number,
    ]),
  showEditButton: PropTypes.bool,
  showPlaceholder: PropTypes.bool,
  placeholderStyle: ViewPropTypes.style,
  separatorColor: PropTypes.string,
  separatorWidth: PropTypes.number,
  children: PropTypes.node.isRequired
};

MultiAvatar.defaultProps = {
  showEditButton: false,
  showPlaceholder: true,
  size: 'small',
  separatorColor: 'white',
  separatorWidth: 1
};

class GridView extends React.PureComponent {
  avatarLoadEndCounter = 0;

  _onAvatarLoadEnd = numOfAvatars => () => {
    if (++this.avatarLoadEndCounter === numOfAvatars)
      this.props.onLoadEnd();
  }

  _getLargestSquare = n => Math.floor( Math.sqrt(n));

  render()  {
    const {
      onLoadEnd,
      avatarStyle,
      width,
      height,
      separatorColor,
      separatorWidth,
      multiAvatarTouchable,
      children
    } = this.props;

    const numColumns = children.length === 1 ? 1 : Math.max(2, this._getLargestSquare(children.length));
    const slicedChildren = children.slice(0, numColumns * numColumns);
    const scLength = slicedChildren.length;

    const numRows = Math.ceil(scLength / numColumns);
    const distributedSepWidth = separatorWidth - separatorWidth / numColumns;

    const avatarHeight = height / numRows - distributedSepWidth;

    // If multiAvatar is touchable, disable buttons & press events on each Avatar.
    const avatarProps = multiAvatarTouchable ? { component: View, showEditButton: false } : undefined;
    let avatars = [];
    let i = 0;
    while (i < scLength)  {
      let row = [];
      let numOfAvatarsToRender = Math.min(scLength - i, numColumns);
      let avatarWidth = numOfAvatarsToRender === 1 ? width : (width / numOfAvatarsToRender - distributedSepWidth);

      let c = i/numColumns, r = 0;
      while (r < numOfAvatarsToRender)  {
        row.push(
          React.cloneElement(
            slicedChildren[i],
            { ...avatarProps, key: (''+c+r), multiAvatarProps: { width: avatarWidth, onAvatarLoadEnd: this._onAvatarLoadEnd(scLength) } }
          )
        );
        r++;
      }

      avatars.push(
        <View key={c} style={{ flexDirection: 'row', justifyContent: 'space-between', overflow: 'hidden', height: avatarHeight }}>
          {row}
        </View>
      );
      i+=r;
    }

    return (
      <View
        style={[
          avatarStyle,
          styles.avatar,
          styles.multiAvatar,
          { backgroundColor: separatorColor }
        ]}>
        {avatars}
      </View>
    );
  }
}

class FadeInMultiAvatar extends React.PureComponent {
  placeholderContainerOpacity = new Animated.Value(1);

  onLoadEnd = () => {
    /* Images finish loading in the same frame for some reason,
      the images will fade in separately with staggerNonce */
    const minimumWait = 100;
    const staggerNonce = 200 * Math.random();
    setTimeout(() =>
      Animated.timing(this.placeholderContainerOpacity, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }).start(), minimumWait + staggerNonce);
  }

  render() {
    const { placeholderStyle, PlaceholderContent, containerStyle, avatarStyle, gridViewProps } = this.props;

    return (
      <View style={[styles.overlayContainer, containerStyle]}>
        <GridView
          avatarStyle={avatarStyle}
          onLoadEnd={this.onLoadEnd}
          {...gridViewProps}
        />
        <Animated.View pointerEvents='none' style={[styles.placeholderContainer, { opacity: this.placeholderContainerOpacity }]}>
          <View style={[avatarStyle, styles.placeholder, placeholderStyle]}>
            {PlaceholderContent}
          </View>
        </Animated.View>
      </View>
    );
  }
}

export { MultiAvatar };
export default withTheme(MultiAvatar, 'MultiAvatar');
