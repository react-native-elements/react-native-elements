import React, { PropTypes } from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import Text from '../text/Text'
import normalize from '../helpers/normalizeText'

let styles = {}

const FormValidationMessage = ({containerStyle, labelStyle, children, fontFamily}) => (
  <View style={[styles.container, containerStyle && containerStyle]}>
    <Text style={[
      styles.label,
      labelStyle && labelStyle,
      fontFamily && {fontFamily}
    ]}>{children}</Text>
  </View>
);

FormValidationMessage.propTypes = {
  containerStyle: View.propTypes.style,
  labelStyle: View.propTypes.style,
  children: PropTypes.any,
  fontFamily: PropTypes.string,
};

styles = StyleSheet.create({
  container: {},
  label: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 1,
    color: colors.error,
    fontSize: normalize(12),
  }
});

export default FormValidationMessage
