import React, { useState, useContext } from 'react';
import { View, StyleSheet, SectionList } from 'react-native';
import {
  ListItem,
  Divider,
  SearchBar,
  Icon,
  SearchBarProps,
  Switch,
} from '@rneui/themed';
import { Header } from '../components/header';
import { ThemeReducerContext } from '../helpers/ThemeReducer';

const ORANGE = '#FF9500';
const BLUE = '#007AFF';
const GREEN = '#4CD964';
const RED = '#FF3B30';
const GREY = '#8E8E93';
const PURPLE = '#5856D6';
const TEAL_BLUE = '#5AC8FA';

type SettingData = {
  title?: string;
  icon: string;
  backgroundColor?: string;
  hideChevron?: boolean;
  checkbox?: boolean;
  rightTitle?: string;
  type?: string;
};

type SettingsData = {
  data: SettingData[];
};

const sections: SettingsData[] = [
  {
    data: [
      {
        title: 'Airplane Mode',
        icon: 'ios-airplane',
        backgroundColor: ORANGE,
        hideChevron: true,
        checkbox: true,
        type: 'ionicon',
      },
      {
        title: 'Wi-Fi',
        backgroundColor: BLUE,
        icon: 'ios-wifi',
        type: 'ionicon',
      },
      {
        title: 'Bluetooth',
        backgroundColor: BLUE,
        icon: 'ios-bluetooth',
        rightTitle: 'Off',
        type: 'ionicon',
      },
      {
        title: 'Cellular',
        backgroundColor: GREEN,
        icon: 'ios-phone-portrait',
        type: 'ionicon',
      },
      {
        title: 'Personal Hotspot',
        backgroundColor: GREEN,
        icon: 'ios-radio',
        rightTitle: 'Off',
        type: 'ionicon',
      },
    ],
  },
  {
    data: [
      {
        title: 'Notifications',
        icon: 'ios-notifications',
        backgroundColor: RED,
        type: 'ionicon',
      },
      {
        title: 'Control Center',
        backgroundColor: GREY,
        icon: 'switch',
        type: 'entypo',
      },
      {
        title: 'Do Not Disturb',
        backgroundColor: PURPLE,
        icon: 'ios-moon',
        type: 'ionicon',
      },
    ],
  },
  {
    data: [
      {
        title: 'General',
        icon: 'ios-settings',
        backgroundColor: GREY,
        type: 'ionicon',
      },
      {
        title: 'Display & Brightness',
        backgroundColor: BLUE,
        icon: 'ios-bulb',
        type: 'ionicon',
      },
      {
        title: 'Wallpaper',
        backgroundColor: TEAL_BLUE,
        icon: 'ios-color-wand',
        type: 'ionicon',
      },
      {
        title: 'Sounds',
        backgroundColor: RED,
        icon: 'ios-volume-high',
        type: 'ionicon',
      },
      {
        title: 'Touch ID & Code',
        backgroundColor: RED,
        icon: 'ios-finger-print',
        type: 'ionicon',
      },
      {
        title: 'Emergency Call',
        backgroundColor: ORANGE,
        icon: 'ios-medical',
        type: 'ionicon',
      },
      {
        title: 'Battery',
        backgroundColor: GREEN,
        icon: 'ios-battery-full',
        type: 'ionicon',
      },
      {
        title: 'Confidentiality',
        backgroundColor: GREY,
        icon: 'ios-hand-left',
        type: 'ionicon',
      },
    ],
  },
  // Space at the bottom
  { data: [] },
];

type SetttingsComponentProps = {};

const Settings: React.FunctionComponent<SetttingsComponentProps> = () => {
  const [switched, setSwitched] = useState(false);
  const { ThemeState } = useContext(ThemeReducerContext);

  const onSwitchEventHandler = (value: boolean) => {
    setSwitched(value);
  };

  const searchbarProps = {};

  const renderItem = ({
    item: {
      title,
      backgroundColor,
      icon,
      rightTitle,
      hideChevron,
      checkbox,
      type,
    },
  }: {
    item: SettingData;
  }) => (
    <ListItem containerStyle={{ paddingVertical: 8 }} key={title}>
      <Icon
        type={type}
        name={icon}
        size={20}
        color="white"
        containerStyle={{
          backgroundColor,
          width: 28,
          height: 28,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Title right>{rightTitle}</ListItem.Title>
      </ListItem.Content>
      {!hideChevron && <ListItem.Chevron />}
      {checkbox && (
        <Switch value={switched} onValueChange={onSwitchEventHandler} />
      )}
    </ListItem>
  );

  const renderSectionHeader = () => <View style={styles.headerSection} />;

  const ItemSeparatorComponent = () => (
    <View
      style={[
        ThemeState.themeMode === 'dark'
          ? styles.separatorComponentDark
          : styles.separatorComponentLight,
      ]}
    >
      <Divider style={styles.separator} />
    </View>
  );

  const ListHeaderComponent = () => (
    <View>
      <SearchBar
        {...(searchbarProps as SearchBarProps)}
        platform="ios"
        placeholder="Search"
      />
      <Divider />
    </View>
  );

  const keyExtractor: (item: SettingData, index: number) => string = (
    item: SettingData,
    index: React.Key
  ) => {
    return index.toString();
  };

  return (
    <>
      <Header title="Settings Example" />
      <SectionList
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeaderComponent}
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={ItemSeparatorComponent}
        SectionSeparatorComponent={Divider}
        stickySectionHeadersEnabled={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFF4',
  },
  separatorComponentLight: {
    backgroundColor: 'white',
  },
  separatorComponentDark: {
    backgroundColor: 'black',
  },
  separator: {
    marginLeft: 58,
  },
  headerSection: {
    height: 30,
  },
});

export default Settings;
