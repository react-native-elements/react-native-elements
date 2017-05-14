import Expo from 'expo';
import React, { Component } from 'react';
import {
  ScrollView,
  TouchableHighlight,
  View,
  StyleSheet,
  Platform,
  Image,
  ListView,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import {
  Text,
  Button,
  Grid,
  Col,
  Row,
  FormInput,
  FormLabel,
  CheckBox,
  List,
  ListItem,
  SearchBar,
  PricingCard,
  Card,
  Badge,
} from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

const log = () => {
  console.log('Attach a method here.');
};

const list1 = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Passwords',
    icon: 'fingerprint',
  },
  {
    title: 'Pitches',
    icon: 'lightbulb-outline',
  },
  {
    title: 'Updates',
    icon: 'track-changes',
  },
];

const list2 = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'Amanda Martin',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    subtitle: 'CEO',
  },
  {
    name: 'Christy Thomas',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    subtitle: 'Lead Developer',
  },
  {
    name: 'Melissa Jones',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/nuraika/128.jpg',
    subtitle: 'CTO',
  },
];

class Home extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(list1),
    };
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    this.refs.form2.refs.textInputRef.focus();
  }

  renderRow(rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={log}
        title={rowData.title}
        icon={{ name: rowData.icon }}
      />
    );
  }

  render() {
    return (
      <ScrollView
        style={{ backgroundColor: 'white' }}
        keyboardShouldPersistTaps="always"
      >
        <Card
          containerStyle={{
            marginTop: 15,
            marginBottom: 15,
            height: 230,
            paddingLeft: 10,
          }}
          title="BADGES"
        >
          <View style={{ alignItems: 'center' }}>
            <Badge
              value={3}
              textStyle={{ color: 'orange' }}
              containerStyle={{ marginBottom: 10 }}
            />

            <Badge
              containerStyle={{ backgroundColor: 'violet', marginBottom: 10 }}
            >
              <Text>User 1</Text>
            </Badge>
            <Badge
              containerStyle={{ marginBottom: 10 }}
              onPress={() => {
                console.log('pressed');
              }}
              value="5"
            />

            <Badge
              containerStyle={{ marginBottom: 10 }}
              omponent={TouchableHighlight}
              value={10}
            />
          </View>
        </Card>
        <View style={styles.headingContainer}>
          <MaterialIcons color="white" name="pets" size={62} />
          <Text style={styles.heading}>Forms</Text>
        </View>
        <FormLabel containerStyle={styles.labelContainerStyle}>Name</FormLabel>
        <FormInput
          ref="form2"
          containerStyle={{ marginRight: 20 }}
          containerRef="containerRefYOYO"
          textInputRef="textInputRef"
          placeholder="Please enter your name..."
        />
        <FormLabel containerStyle={styles.labelContainerStyle}>
          Address
        </FormLabel>
        <FormInput ref="form1" placeholder="Please enter your address..." />
        <FormLabel containerStyle={styles.labelContainerStyle}>Phone</FormLabel>
        <FormInput placeholder="Please enter your phone number..." />
        <Button
          onPress={() => console.log('yo')}
          icon={{ name: 'done' }}
          buttonStyle={{ marginTop: 15 }}
          title="SUBMIT"
        />
        <View style={{ marginTop: 20, marginBottom: 49 }}>
          <CheckBox title="Click Here" checked />
          <CheckBox center title="Click Here" checked />
          <CheckBox title="Click Here" checked right />
          <CheckBox
            right
            title="Click Here"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
          />
          <CheckBox
            center
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title="Click Here"
            checked
            checkedColor="#4a6da7"
          />
          <CheckBox center iconRight title="Click Here" />
          <CheckBox
            center
            iconRight
            uncheckedIcon="add"
            checkedIcon="clear"
            iconType="material"
            title="Click Here to Add This Item"
          />
          <CheckBox
            center
            checked
            iconType="material"
            checkedIcon="clear"
            uncheckedIcon="add"
            iconRight
            title="Click Here to Remove This Item"
            checkedColor="red"
          />
          <CheckBox center title="Add Phone" uncheckedIcon="plus" />
          <CheckBox
            checked
            center
            checkedTitle="You Clicked!"
            title="Click Here"
            iconType="material"
            checkedIcon="done"
            checkedColor="blue"
            uncheckedColor="red"
          />
          <CheckBox
            center
            iconType="material"
            title="Click Here"
            checkedIcon="accessibility"
            uncheckedIcon="check-box-outline-blank"
            checkedColor="blue"
            uncheckedColor="black"
          />
        </View>
        <View style={styles.hero}>
          <MaterialIcons
            color="white"
            name="sentiment-very-satisfied"
            size={62}
          />
          <Text style={styles.heading}>Searchbar & List</Text>
        </View>
        <View style={{ marginTop: 10, marginBottom: 0 }}>
          <SearchBar placeholder="Type Here..." />
        </View>
        <View style={{ marginTop: 10, marginBottom: 0 }}>
          <SearchBar noIcon clearIcon placeholder="Type Here..." />
        </View>
        <View style={{ marginTop: 10, marginBottom: 0 }}>
          <SearchBar round placeholder="Type Here..." />
        </View>
        <View style={{ marginTop: 10, marginBottom: 0 }}>
          <SearchBar lightTheme clearIcon placeholder="Type Here..." />
        </View>
        <View style={{ marginTop: 10, marginBottom: 0 }}>
          <SearchBar noIcon lightTheme placeholder="Type Here..." />
        </View>
        <View style={{ marginTop: 10, marginBottom: 0 }}>
          <SearchBar
            round
            lightTheme
            clearIcon
            textInputRef="searchBar3"
            placeholder="Type Here..."
          />
        </View>
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.state.dataSource}
          />
        </List>
        <List>
          {list2.map((l, i) => (
            <ListItem
              roundAvatar
              avatar={{ uri: l.avatar_url }}
              key={i}
              onPress={log}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))}
        </List>
        <List>
          {list2.map((l, i) => (
            <ListItem
              rightIcon={{ style: { marginLeft: 20 } }}
              roundAvatar
              avatar={{ uri: l.avatar_url }}
              key={i}
              onPress={log}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))}
        </List>
        <List containerStyle={{ paddingBottom: 10 }}>
          <ListItem
            roundAvatar
            title="Limited supply! Its like digital gold!"
            subtitle={
              <View style={styles.subtitleView}>
                <Image
                  source={require('./images/rating.png')}
                  style={styles.ratingImage}
                />
                <Text style={styles.ratingText}>5 months ago</Text>
              </View>
            }
            avatar={require('./images/avatar1.jpg')}
          />
        </List>
        <View style={styles.headingContainer}>
          <MaterialIcons color="white" name="games" size={62} />
          <Text style={styles.heading}>Pricing</Text>
        </View>
        <View style={styles.container}>
          <PricingCard
            color={colors.primary}
            title="Free"
            price="$0"
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
          <PricingCard
            color={colors.secondary}
            title="Starter"
            price="$19"
            info={['10 Users', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
          <PricingCard
            color={colors.secondary2}
            title="Enterprise"
            price="$49"
            info={['100 Users', 'One on One Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2,
  },
  titleContainer: {},
  button: {
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black,
      },
    }),
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary2,
  },
  labelContainerStyle: {
    marginTop: 8,
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey',
  },
});

export default Home;
