import Expo from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';

import { Text, Button, Icon, Card } from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

class FormsDetail extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Card
        title="MORE FORMS"
        containerStyle={{ marginTop: 15, marginBottom: 15 }}
      />
    );
  }
}

export default FormsDetail;
