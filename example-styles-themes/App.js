// @flow
import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { ButtonGroup, Button } from "react-native-elements";
import {
  proppedComponent,
  themedProppedComponent,
  ThemeProvider,
  withTheme
} from "./utils";

const genericPress = () => {
  console.warn("pressed");
};

// wrap a react-native-elements Button and supply props
const FlatBlueButton = proppedComponent(Button, props => {
  // testing for props.backgroundColor lets us decide if we want to override a prop or not
  const backgroundColor = props.backgroundColor || "#3f51b5";
  return {
    backgroundColor,
    containerViewStyle: { margin: 10 },
    onPress: genericPress
  };
});

// wrap an already-wrapped component
const FlatBlueButtonWithYellowTitle = proppedComponent(
  FlatBlueButton,
  props => {
    const color = props.color || "yellow";
    return { color };
  }
);

// wrap with themedProppedComponent to get the theme as a prop
// the component must be a descendent of ThemeProvider
const ThemedButton = themedProppedComponent(FlatBlueButton, props => {
  const color = props.color || (props.theme.activeText || "black");
  return {
    color,
    backgroundColor: props.theme.active
  };
});

// a simple custom button
class OtherComponent extends React.Component<*> {
  render() {
    const textColor = this.props.theme.activeText || "black";
    const buttonColor = this.props.theme.active || "white";
    return (
      <TouchableHighlight
        onPress={genericPress}
        style={{ backgroundColor: buttonColor }}
      >
        <Text style={{ color: textColor }}>Custom Button</Text>
      </TouchableHighlight>
    );
  }
}

// wrapping any component with "withTheme" hoc* injects the theme as a prop
const ThemedOtherComponent = withTheme(OtherComponent);

// * withTheme is just an alias for themedProppedComponent

// type AppState = ;
class App extends React.Component<void, { selectedThemeIndex: number }> {
  constructor(props: void) {
    super(props);

    this.state = {
      selectedThemeIndex: 0
    };
  }

  _switchTheme = index => {
    if (index != this.state.selectedThemeIndex)
      this.setState(prevState => {
        return {
          selectedThemeIndex: index
        };
      });
  };

  render() {
    const theme = Object.values(themes)[this.state.selectedThemeIndex];
    return (
      <ThemeProvider theme={theme}>
        <MainContainer>
          <ButtonGroup
            buttons={buttons}
            selectedIndex={this.state.selectedThemeIndex}
            onPress={index => {
              this._switchTheme(index);
            }}
          />
          <FlatBlueButton title="Flat Blue Button" />
          <FlatBlueButtonWithYellowTitle title="Flat Blue Button with Yellow Title" />
          <ThemedButton title="Themed Button" />
          <ThemedButton title="Themed Button: override color" color="green" />
          <ThemedOtherComponent />
          <ButtonGroup
            buttons={buttons}
            selectedIndex={this.state.selectedThemeIndex}
            onPress={index => {
              this._switchTheme(index);
            }}
            containerStyle={{ marginBottom: 60 }}
          />
        </MainContainer>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

const themes = {
  light: {
    pageColor: "#ddd",
    active: "#444",
    activeText: "#ccc"
  },
  dark: {
    pageColor: "#222",
    active: "#999",
    activeText: "#333"
  },
  red: {
    active: "#ff6464",
    pageColor: "#ff3939",
    activeText: "#9b0000"
  },
  blue: {
    active: "#5e5cc7",
    pageColor: "#403eb7"
  }
};

// notice that the blue theme forgets to include 'activeText'

const MainContainer = themedProppedComponent(View, props => {
  const backgroundColor = props.theme.pageColor || "white";
  return {
    style: styles.container,
    backgroundColor
  };
});
const buttons = Object.keys(themes);

export default App;
