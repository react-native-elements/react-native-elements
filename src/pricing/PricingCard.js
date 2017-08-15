import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import Text from '../text/Text';
import Button from '../buttons/Button';
import ViewPropTypes from '../config/ViewPropTypes';

class PricingCard extends React.PureComponent {
  render() {
    const {
      containerStyle,
      wrapperStyle,
      title,
      price,
      info,
      button,
      color,
      titleFont,
      pricingFont,
      infoFont,
      buttonFont,
      onButtonPress,
      ...attributes
    } = this.props;

    const styles = this.context.theme.pricingCard;
    const cColor = color || this.context.theme.colors.primary;

    return (
      <View
        style={[styles.container, containerStyle && containerStyle]}
        {...attributes}
      >
        <View style={[styles.wrapper, wrapperStyle && wrapperStyle]}>
          <Text
            style={[
              styles.pricingTitle,
              { color: cColor },
              titleFont && { fontFamily: titleFont },
            ]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.pricingPrice,
              pricingFont && { fontFamily: pricingFont },
            ]}
          >
            {price}
          </Text>
          {info.map((item, i) => {
            return (
              <Text
                key={i}
                style={[
                  styles.pricingInfo,
                  infoFont && { fontFamily: infoFont },
                ]}
              >
                {item}
              </Text>
            );
          })}
          <Button
            icon={{ name: button.icon }}
            buttonStyle={[
              styles.button,
              button.buttonStyle,
              { backgroundColor: cColor },
            ]}
            fontFamily={buttonFont && buttonFont}
            title={button.title}
            onPress={onButtonPress}
          />
        </View>
      </View>
    );
  }
}

PricingCard.propTypes = {
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  info: PropTypes.array,
  button: PropTypes.object,
  color: PropTypes.string,
  onButtonPress: PropTypes.any,
  titleFont: PropTypes.string,
  pricingFont: PropTypes.string,
  infoFont: PropTypes.string,
  buttonFont: PropTypes.string,
};

PricingCard.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default PricingCard;
