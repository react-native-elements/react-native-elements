import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, Text as NativeText } from 'react-native';
import Text from '../text/Text';
import Divider from '../divider/Divider';
import ViewPropTypes from '../config/ViewPropTypes';
import BackgroundImage from '../config/BackgroundImage';

class Card extends React.PureComponent {
  render() {
    const {
      children,
      flexDirection,
      containerStyle,
      wrapperStyle,
      imageWrapperStyle,
      title,
      titleStyle,
      featuredTitle,
      featuredTitleStyle,
      featuredSubtitle,
      featuredSubtitleStyle,
      dividerStyle,
      image,
      imageStyle,
      fontFamily,
      ...attributes
    } = this.props;

    const styles = this.context.theme.card;

    return (
      <View
        style={[
          styles.container,
          image && { padding: 0 },
          containerStyle && containerStyle,
        ]}
        {...attributes}
      >
        <View
          style={[
            styles.wrapper,
            wrapperStyle && wrapperStyle,
            flexDirection && { flexDirection },
          ]}
        >
          {title &&
            <View>
              <Text
                style={[
                  styles.cardTitle,
                  image && styles.imageCardTitle,
                  titleStyle && titleStyle,
                  fontFamily && { fontFamily },
                ]}
              >
                {title}
              </Text>
              {!image &&
                <Divider
                  style={[styles.divider, dividerStyle && dividerStyle]}
                />}
            </View>}
          {image &&
            <View style={imageWrapperStyle && imageWrapperStyle}>
              <BackgroundImage
                resizeMode="cover"
                style={[{ width: null, height: 150 }, imageStyle && imageStyle]}
                source={image}
              >
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
                </View>
              </BackgroundImage>
              <View style={[{ padding: 10 }, wrapperStyle && wrapperStyle]}>
                {children}
              </View>
            </View>}
          {!image && children}
        </View>
      </View>
    );
  }
}

Card.propTypes = {
  children: PropTypes.any,
  flexDirection: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
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
};

Card.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default Card;
