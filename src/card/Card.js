import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, StyleSheet } from 'react-native';

import normalize from '../helpers/normalizeText';
import { fonts, withTheme } from '../config';
import { ImageSourceType } from '../helpers';

import Text from '../text/Text';
import Divider from '../divider/Divider';
import Image from '../image/Image';

const Card = props => {
  const {
    children,
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
    imageProps,
    theme,
    ...attributes
  } = props;

  return (
    <View
      {...attributes}
      style={StyleSheet.flatten([
        styles.container(theme),
        image && { padding: 0 },
        containerStyle && containerStyle,
      ])}
    >
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          wrapperStyle && wrapperStyle,
        ])}
      >
        {title === '' || React.isValidElement(title)
          ? title
          : title &&
            title.length && (
              <View>
                <Text
                  testID="cardTitle"
                  style={StyleSheet.flatten([
                    styles.cardTitle(theme),
                    image && styles.imageCardTitle,
                    titleStyle && titleStyle,
                  ])}
                  numberOfLines={titleNumberOfLines}
                >
                  {title}
                </Text>

                {!image && (
                  <Divider
                    style={StyleSheet.flatten([
                      styles.divider,
                      dividerStyle && dividerStyle,
                    ])}
                  />
                )}
              </View>
            )}

        {image && (
          <View style={imageWrapperStyle && imageWrapperStyle}>
            <Image
              style={StyleSheet.flatten([
                { width: null, height: 150 },
                imageStyle && imageStyle,
              ])}
              source={image}
              {...imageProps}
            >
              {(featuredTitle || featuredSubtitle) && (
                <View style={styles.overlayContainer}>
                  {featuredTitle && (
                    <Text
                      style={StyleSheet.flatten([
                        styles.featuredTitle,
                        featuredTitleStyle && featuredTitleStyle,
                      ])}
                    >
                      {featuredTitle}
                    </Text>
                  )}
                  {featuredSubtitle && (
                    <Text
                      style={StyleSheet.flatten([
                        styles.featuredSubtitle,
                        featuredSubtitleStyle && featuredSubtitleStyle,
                      ])}
                    >
                      {featuredSubtitle}
                    </Text>
                  )}
                </View>
              )}
            </Image>

            <View
              style={StyleSheet.flatten([
                { padding: 10 },
                wrapperStyle && wrapperStyle,
              ])}
            >
              {children}
            </View>
          </View>
        )}

        {!image && children}
      </View>
    </View>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  wrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  overlayStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  featuredTitle: PropTypes.string,
  featuredTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  featuredSubtitle: PropTypes.string,
  featuredSubtitleStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  dividerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  image: ImageSourceType,
  imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  imageWrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  imageProps: PropTypes.object,
  titleNumberOfLines: PropTypes.number,
  theme: PropTypes.object,
};

const styles = {
  container: theme => ({
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    borderColor: theme.colors.grey5,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  }),
  featuredTitle: {
    fontSize: normalize(18),
    marginBottom: 8,
    color: 'white',
    ...Platform.select({
      android: {
        ...fonts.android.black,
      },
      default: {
        fontWeight: '800',
      },
    }),
  },
  featuredSubtitle: {
    fontSize: normalize(13),
    marginBottom: 8,
    color: 'white',
    ...Platform.select({
      android: {
        ...fonts.android.black,
      },
      default: {
        fontWeight: '400',
      },
    }),
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
  divider: {
    marginBottom: 15,
  },
  cardTitle: theme => ({
    fontSize: normalize(14),
    color: theme.colors.grey1,
    ...Platform.select({
      android: {
        ...fonts.android.black,
      },
      default: {
        fontWeight: 'bold',
      },
    }),
    textAlign: 'center',
    marginBottom: 15,
  }),
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
};

export { Card };
export default withTheme(Card, 'Card');
