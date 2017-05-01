import React, { PropTypes } from 'react';
import { StyleSheet, View, Text as NativeText } from 'react-native';
import colors from '../config/colors';
import Text from '../text/Text';
import normalize from '../helpers/normalizeText';

const FormValidationMessage = props => {
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

FormValidationMessage.propTypes = {
  containerStyle: View.propTypes.style,
  labelStyle: NativeText.propTypes.style,
  children: PropTypes.any,
  fontFamily: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {},
  label: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 1,
    color: colors.error,
    fontSize: normalize(12),
  },
});

export default FormValidationMessage;
