import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { Icon, Card, Button, CheckBox } from 'react-native-elements';

class CustomCheckbox extends Component {
  constructor() {
    super();

    this.state = {
      checked: false
    };
  }

  render() {
    const { tag } = this.props;
    const { checked } = this.state;

    return (
      <CheckBox
        key={tag}
        center
        title={tag}
        iconRight
        iconType='material'
        checkedIcon='clear'
        uncheckedIcon='add'
        checkedColor='red'
        checked={checked}
        onPress={() => this.setState({checked: !checked})}
      />
    );
  }
}

class Playground extends Component {
  renderTags() {
    return ['One', 'Two', 'Three', 'Four'].map((tag, index) => {
      return <CustomCheckbox key={index} tag={tag} />;
    });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Text style={{margin: 20, fontSize: 25}}>Try any component below..</Text>
        <Card
          title='HELLO WORLD'
          image={{uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'}}
        >
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW'
          />
        </Card>
        {this.renderTags()}
      </ScrollView>
    );
  }
}

Playground.navigationOptions = {
  title: 'Playground',
};

export default Playground;
