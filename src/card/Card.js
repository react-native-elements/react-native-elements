import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  Text as NativeText,
} from 'react-native';
import fonts from '../config/fonts';
import colors from '../config/colors';
import Text from '../text/Text';
import Divider from '../divider/Divider';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';
import BackgroundImage from '../config/BackgroundImage';

const Card = props => {
  const {
    children,
    flexDirection,
    containerStyle,
    wrapperStyle,
    imageWrapperStyle,
    title,
    titleStyle,
    titleNumberOfLines, 
    featuredTitle,
    featuredTitleStyle,
    featuredSubtitle,
    featuredSubtitleStyle,
    dividerStyle,
    image,
    imageStyle,
    fontFamily,
    imageProps,
    ...attributes
  } = props;

  return (
    <View
      {...attributes}
      style={[
        styles.container,
        image && { padding: 0 },
        containerStyle && containerStyle,
      ]}
    >
      <View
        style={[
          styles.wrapper,
          wrapperStyle && wrapperStyle,
          flexDirection && { flexDirection },
        ]}
      >
        {title === '' ||
          (title &&
            title.length > 0 &&
            <View>
              <Text
                style={[
                  styles.cardTitle,
                  image && styles.imageCardTitle,
                  titleStyle && titleStyle,
                  fontFamily && { fontFamily },
                ]}
                numberOfLines={titleNumberOfLines}
              >
                {title}
              </Text>
              {!image &&
                <Divider
                  style={[styles.divider, dividerStyle && dividerStyle]}
                />}
            </View>)}
        {image &&
          <View style={imageWrapperStyle && imageWrapperStyle}>
            <BackgroundImage
              resizeMode="cover"
              style={[{ width: null, height: 150 }, imageStyle && imageStyle]}
              source={image}
              {...imageProps}
            >
              {(featuredTitle || featuredSubtitle) &&
                <View style={styles.overlayContainer}>
                  {featuredTitle &&
                    <Text
                      style={[
                        styles.featuredTitle,
                        featuredTitleStyle && featuredTitleStyle,
                      ]}
                    >
                      {featuredTitle}
                    </Text>}
                  {featuredSubtitle &&
                    <Text
                      style={[
                        styles.featuredSubtitle,
                        featuredSubtitleStyle && featuredSubtitleStyle,
                      ]}
                    >
                      {featuredSubtitle}
                    </Text>}
                </View>}
            </BackgroundImage>
            <View style={[{ padding: 10 }, wrapperStyle && wrapperStyle]}>
              {children}
            </View>
          </View>}
        {!image && children}
      </View>
    </View>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  flexDirection: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  overlayStyle: ViewPropTypes.style,
  title: PropTypes.string,
  titleStyle: NativeText.propTypes.style,
  featuredTitle: PropTypes.string,
  featuredTitleStyle: Text.propTypes.style,
  featuredSubtitle: PropTypes.string,
  featuredSubtitleStyle: Text.propTypes.style,
  dividerStyle: ViewPropTypes.style,
  image: Image.propTypes.source,
  imageStyle: ViewPropTypes.style,
  imageWrapperStyle: ViewPropTypes.style,
  fontFamily: PropTypes.string,
  imageProps: PropTypes.object,
  titleNumberOfLines: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: colors.grey5,
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  featuredTitle: {
    fontSize: normalize(18),
    marginBottom: 8,
    color: 'white',
    ...Platform.select({
      ios: {
        fontWeight: '800',
      },
      android: {
        ...fonts.android.black,
      },
    }),
  },
  featuredSubtitle: {
    fontSize: normalize(13),
    marginBottom: 8,
    color: 'white',
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
      android: {
        ...fonts.android.black,
      },
    }),
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
  divider: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: normalize(14),
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        ...fonts.android.black,
      },
    }),
    textAlign: 'center',
    marginBottom: 15,
    color: colors.grey1,
  },
  imageCardTitle: {
    marginTop: 15,
  },
  overlayContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignSelf: 'stretch',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Card;
