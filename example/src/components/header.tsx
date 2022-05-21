import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

type HeaderComponentProps = {
  title: string;
  view?: string;
};

type ParamList = {
  Detail: {
    openDrawer: void;
  };
};

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
  const navigation = useNavigation<DrawerNavigationProp<ParamList, 'Detail'>>();

  const docsNavigate = () => {
    Linking.openURL(
      `https://reactnativeelements.com/docs/components/${props.view}`
    );
  };

  const playgroundNavigate = () => {
    Linking.openURL(`https://react-native-elements.js.org/#/${props.view}`);
  };

  return (
    <HeaderRNE
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: navigation.openDrawer,
      }}
      rightComponent={
        props.view && (
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={docsNavigate}>
              <Icon name="description" color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={playgroundNavigate}
            >
              <Icon type="antdesign" name="rocket1" color="white" />
            </TouchableOpacity>
          </View>
        )
      }
      centerComponent={{ text: props.title, style: styles.heading }}
    />
  );
};

type SubHeaderProps = {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

const SubHeader = ({ title, containerStyle, textStyle }: SubHeaderProps) => {
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <Text style={[styles.heading, textStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { Header, SubHeader };
