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
    const { tag, color, updateCount } = this.props;
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
        containerStyle={{ width: 70, backgroundColor: color}}
        onPress={() => {
          this.setState({
            checked: !checked
          });
          updateCount(!this.state.checked);
        }}
      />
    );
  }
}

class CustomTagGroups extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  renderTags(tags, color) {
    return tags.map((tag, index) => {
      return (
        <View key={index} style={{ flex: 1, flexDirection: 'column', width: 70 }}>
          <CustomCheckbox tag={tag} color={color} updateCount={this.updateCount.bind(this)} />
        </View>
      );
    });
  }

  updateCount(increment) {
    const { count } = this.state;

    this.setState({
      count: increment ? count + 1 : count - 1
    });
  }

  render() {
    const { tags, color } = this.props;
    const { count } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center' }}>Group 1</Text>
        {this.renderTags(tags, color)}
        <Text style={{ textAlign: 'center' }}>Count: {count}</Text>
      </View>
    );
  }
}

class Playground extends Component {
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
        <View style={{flexDirection: 'row', marginVertical: 30}}>
          <CustomTagGroups tags={['5', '3', '2', '9']} color='green' />
          <CustomTagGroups tags={['10', '5', '7', '3']} color='blue' />
          <CustomTagGroups tags={['1', '2', '3', '4']} color='pink' />
          <CustomTagGroups tags={['18', '9', '0', '2']} color='orange' />
        </View>
      </ScrollView>
    );
  }
}

Playground.navigationOptions = {
  title: 'Playground',
};

export default Playground;
