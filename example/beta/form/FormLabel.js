import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, Platform, Text as NativeText } from 'react-native';
import colors from '../config/colors';
import fonts from '../config/fonts';
import Text from '../text/Text';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';

const FormLabel = props => {
  const {
    containerStyle,
    labelStyle,
    children,
    fontFamily,
    ...attributes
  } = props;
  return (
    <View
      style={[styles.container, containerStyle && containerStyle]}
      {...attributes}
    >
      <Text
        style={[
          styles.label,
          labelStyle && labelStyle,
          fontFamily && { fontFamily },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

FormLabel.propTypes = {
  containerStyle: ViewPropTypes.style,
  labelStyle: NativeText.propTypes.style,
  children: PropTypes.any,
  fontFamily: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {},
  label: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 1,
    color: colors.grey3,
    fontSize: normalize(12),
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        ...fonts.android.bold,
      },
    }),
  },
});

export default FormLabel;
