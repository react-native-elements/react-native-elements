import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, StyleSheet } from 'react-native';

import { withTheme } from '../config';
import { ImageSourceType } from '../helpers';

import CardTitle from './CardTitle';
import CardDivider from './CardDivider';
import CardImage from './CardImage';
import CardFeaturedTitle from './CardFeaturedTitle';
import CardFeaturedSubtitle from './CardFeaturedSubtitle';

const Card = (props) => {
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

  if (title) {
    console.warn(
      "'Card.title' prop has been deprecated and will be removed in the next version."
    );
  }
  if (titleStyle) {
    console.warn(
      "'Card.titleStyle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (titleNumberOfLines) {
    console.warn(
      "'Card.titleNumberOfLines' prop has been deprecated and will be removed in the next version."
    );
  }
  if (dividerStyle) {
    console.warn(
      "'Card.dividerStyle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (image) {
    console.warn(
      "'Card.image' prop has been deprecated and will be removed in the next version."
    );
  }
  if (imageStyle) {
    console.warn(
      "'Card.imageStyle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (imageProps) {
    console.warn(
      "'Card.imageProps' prop has been deprecated and will be removed in the next version."
    );
  }
  if (imageWrapperStyle) {
    console.warn(
      "'Card.imageWrapperStyle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (featuredTitle) {
    console.warn(
      "'Card.featuredTitle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (featuredTitleStyle) {
    console.warn(
      "'Card.featuredTitleStyle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (featuredSubtitle) {
    console.warn(
      "'Card.featuredSubtitle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (featuredSubtitleStyle) {
    console.warn(
      "'Card.featuredSubtitleStyle' prop has been deprecated and will be removed in the next version."
    );
  }

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
                <CardTitle
                  style={StyleSheet.flatten([
                    image && styles.imageCardTitle,
                    titleStyle && titleStyle,
                  ])}
                  numberOfLines={titleNumberOfLines}
                >
                  {title}
                </CardTitle>

                {!image && <CardDivider style={dividerStyle} />}
              </View>
            )}

        {image && (
          <View style={imageWrapperStyle && imageWrapperStyle}>
            <CardImage style={imageStyle} source={image} {...imageProps}>
              {(featuredTitle || featuredSubtitle) && (
                <View style={styles.overlayContainer}>
                  {featuredTitle && (
                    <CardFeaturedTitle style={featuredTitleStyle}>
                      {featuredTitle}
                    </CardFeaturedTitle>
                  )}
                  {featuredSubtitle && (
                    <CardFeaturedSubtitle style={featuredSubtitleStyle}>
                      {featuredSubtitle}
                    </CardFeaturedSubtitle>
                  )}
                </View>
              )}
            </CardImage>

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
  container: (theme) => ({
    backgroundColor: theme.colors.white,
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
  wrapper: {
    backgroundColor: 'transparent',
  },
};

export { Card };
const ThemedCard = withTheme(Card, 'Card');
ThemedCard.Divider = CardDivider;
ThemedCard.Image = CardImage;
ThemedCard.Title = CardTitle;
ThemedCard.FeaturedTitle = CardFeaturedTitle;
ThemedCard.FeaturedSubtitle = CardFeaturedSubtitle;
export default ThemedCard;
