import Expo, { Font } from 'expo';
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import {
  registerCustomIconType,
  Text,
  Button,
  Icon,
  SocialIcon,
  Card
} from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';
import fontelloConfig from '../../assets/fontello/config.json';

const log = () => {
  console.log('Attach a method here.');
};

class Buttons extends Component {
  constructor() {
    super();

    this.state = {
      fontLoaded: false
    };
  }

  componentDidMount() {
    Font.loadAsync({
      fontello: require('../../assets/fontello/font/fontello.ttf')
    }).then(() => {
      registerCustomIconType(
        'fontello',
        createIconSetFromFontello(fontelloConfig)
      );
      this.setState({ fontLoaded: true });
    });
  }
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color="white" name="whatshot" size={62} type="material" />
          <Text style={styles.heading}>Buttons & Icons</Text>
        </View>
        <Button
          buttonStyle={styles.button}
          backgroundColor={socialColors.facebook}
          icon={{ name: 'account', type: 'material-community' }}
          onPress={() =>
            navigation.navigate('Button_Detail', { name: 'Jordan' })}
          title="Got to Buttons Detail View"
        />
        <Button
          backgroundColor={socialColors.stumbleupon}
          onPress={() => log()}
          title="BUTTON"
          buttonStyle={styles.button}
        />
        <Button
          buttonStyle={styles.button}
          backgroundColor={socialColors.quora}
          iconRight={{ name: 'snapchat-ghost', type: 'font-awesome' }}
          onPress={() => log()}
          title="BUTTON WITH RIGHT ICON"
        />
        <Button
          buttonStyle={styles.button}
          rightIcon={{ name: 'account', type: 'material-community' }}
          backgroundColor={socialColors.tumblr}
          onPress={() => log()}
          title="BUTTON WITH RIGHT ICON"
        />
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.foursquare}
          icon={{ name: 'card-travel' }}
          onPress={() => log()}
          title="BUTTON RAISED"
        />
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.vimeo}
          icon={{ name: 'touch-app' }}
          onPress={() => log()}
          title="BUTTON RAISED"
        />
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.twitter}
          icon={{ name: 'new-releases' }}
          onPress={() => log()}
          title="BUTTON RAISED"
        />
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.linkedin}
          icon={{ name: 'business' }}
          onPress={() => log()}
          title="BUTTON RAISED"
        />
        <Button
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.pinterest}
          icon={{ name: 'send' }}
          onPress={() => log()}
          title="BUTTON RAISED"
        />
        <Button
          buttonStyle={styles.button}
          raised
          onPress={() => log()}
          title="BUTTON RAISED"
        />
        <Button
          large={true}
          buttonStyle={styles.button}
          onPress={() => log()}
          backgroundColor={socialColors.facebook}
          title="LARGE BUTTON"
        />
        <Button
          large={true}
          buttonStyle={styles.button}
          backgroundColor={socialColors.stumbleupon}
          icon={{ name: 'cached' }}
          title="LARGE BUTTON WITH ICON"
        />
        <Button
          large={true}
          buttonStyle={styles.button}
          backgroundColor={socialColors.quora}
          raised
          icon={{ name: 'album' }}
          title="LARGE RAISED WITH ICON"
        />
        <Button
          large={true}
          buttonStyle={styles.button}
          raised
          iconRight={{ name: 'account', type: 'material-community' }}
          backgroundColor={socialColors.tumblr}
          icon={{ name: 'accessibility' }}
          title="LARGE RAISED RIGHT ICON"
        />
        <Button
          large={true}
          buttonStyle={styles.button}
          raised
          iconRight={{ name: 'account', type: 'material-community' }}
          backgroundColor={socialColors.foursquare}
          leftIcon={{ name: 'account-balance' }}
          title="LARGE RAISED RIGHT ICON"
        />
        <Button
          large={true}
          buttonStyle={styles.button}
          raised
          backgroundColor={socialColors.vimeo}
          icon={{ name: 'change-history' }}
          title="LARGE RAISED WITH ICON"
        />
        <Button
          large={true}
          buttonStyle={[{ marginBottom: 15, marginTop: 15 }]}
          icon={{ name: 'code' }}
          backgroundColor={socialColors.twitter}
          title="LARGE ANOTHER BUTTON"
        />
        <Card title="ICONS" containerStyle={{ marginTop: 15 }}>
          <View style={[styles.socialRow, { marginVertical: 10 }]}>
            <Icon
              onPress={() => navigation.navigate('Icons_Detail')}
              type="font-awesome"
              color="#e14329"
              name="hashtag"
            />
            <Icon
              onPress={() => console.log('hello')}
              type="font-awesome"
              color="#02b875"
              name="rocket"
            />
            <Icon
              onPress={() => console.log('hello')}
              color="#000000"
              name="snapchat-ghost"
              type="font-awesome"
            />
            <Icon
              color="#6441A5"
              name="btc"
              type="font-awesome"
              onPress={() => console.log('hello')}
            />
            <Icon
              color="#f50"
              name="heartbeat"
              type="font-awesome"
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={[styles.socialRow, { marginVertical: 10 }]}>
            <Icon
              name="rowing"
              color="#673AB7"
              onPress={() => console.log('hello')}
            />
            <Icon
              name="g-translate"
              color="#03A9F4"
              onPress={() => console.log('hello')}
            />
            <Icon
              color="#009688"
              name="sc-telegram"
              type="evilicon"
              onPress={() => console.log('hello')}
            />
            <Icon
              color="#8BC34A"
              name="social-apple"
              type="foundation"
              onPress={() => console.log('hello')}
            />
            <Icon
              color="#FFC107"
              name="ios-american-football"
              type="ionicon"
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={styles.socialRow}>
            <Icon
              raised
              name="vpn-key"
              color="#E91E63"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              name="ring-volume"
              color="#3F51B5"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              color="#00BCD4"
              name="weekend"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              color="#CDDC39"
              name="bubble-chart"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              color="#FF5722"
              name="burst-mode"
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={styles.socialRow}>
            <Icon
              reverse
              raised
              name="account-balance"
              color="#673AB7"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              name="android"
              color="#03A9F4"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              color="#009688"
              name="code"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              color="#8BC34A"
              name="card-travel"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              color="#FF9800"
              name="extension"
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={styles.socialRow}>
            <Icon
              reverse
              name="group-work"
              color="#E91E63"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              name="lightbulb-outline"
              color="#3F51B5"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              color="#00BCD4"
              name="pets"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              color="#CDDC39"
              name="polymer"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              color="#FF5722"
              name="touch-app"
              onPress={() => console.log('hello')}
            />
          </View>
        </Card>
        <Card title="CUSTOM ICONS" containerStyle={{ marginTop: 15 }}>
          <View style={[styles.socialRow, { marginVertical: 10 }]}>
            {!this.state.fontLoaded && <Text>Loading Custom Font</Text>}
            {this.state.fontLoaded && (
              <Icon
                onPress={() => navigation.navigate('Icons_Detail')}
                type="fontello"
                color="#e14329"
                name="magic"
              />
            )}
          </View>
        </Card>
        <Card
          title="SOCIAL ICONS"
          containerStyle={[
            styles.socialRow,
            { marginTop: 15, marginBottom: 15 },
          ]}
        >          
        <View style={styles.socialRow}>
            <SocialIcon type="angellist" />
            <SocialIcon type="codepen" />
            <SocialIcon type="envelope" />
            <SocialIcon type="etsy" />
            <SocialIcon type="facebook" />
          </View>
          <View style={styles.socialRow}>
            <SocialIcon type="foursquare" />
            <SocialIcon type="github-alt" />
            <SocialIcon type="github" />
            <SocialIcon type="gitlab" />
            <SocialIcon type="instagram" />
          </View>
          <View style={styles.socialRow}>
            <SocialIcon type="linkedin" />
            <SocialIcon type="medium" />
            <SocialIcon type="pinterest" />
            <SocialIcon type="quora" />
            <SocialIcon type="reddit-alien" />
          </View>
          <View style={styles.socialRow}>
            <SocialIcon type="soundcloud" />
            <SocialIcon type="stack-overflow" />
            <SocialIcon type="steam" />
            <SocialIcon type="stumbleupon" />
            <SocialIcon type="tumblr" />
          </View>
          <View style={styles.socialRow}>
            <SocialIcon type="twitch" />
            <SocialIcon type="twitter" />
            <SocialIcon type="google-plus-official" />
            <SocialIcon type="vimeo" />
            <SocialIcon type="wordpress" />
          </View>
          <View style={styles.socialRow}>
            <SocialIcon type="youtube" />
          </View>
        </Card>
        <Card
          title="LIGHT SOCIAL ICONS"
          containerStyle={{ marginTop: 15, marginBottom: 15 }}
        >
          <View style={styles.socialRow}>
            <SocialIcon
              light
              raised={false}
              type="gitlab"
              onPress={() => console.log('hi!')}
            />
            <SocialIcon
              light
              type="medium"
              onPress={() => console.log('hi2!')}
            />
            <SocialIcon
              light
              type="github-alt"
              onPress={() => console.log('hi3!')}
            />
            <SocialIcon light type="twitch" />
            <SocialIcon light type="soundcloud" />
          </View>
        </Card>
        <Card
          containerStyle={{ marginTop: 15, marginBottom: 15 }}
          title="SOCIAL BUTTONS"
        >
          <SocialIcon button type="medium" />
          <SocialIcon button type="twitch" />
          <SocialIcon
            title="Sign In With Facebook"
            button
            fontWeight="400"
            type="facebook"
          />
          <SocialIcon title="Some Twitter Message" button type="twitter" />
          <SocialIcon
            light
            button
            title="Some Instagram Message"
            type="instagram"
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Buttons;
