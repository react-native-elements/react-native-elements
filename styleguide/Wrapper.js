import React from 'react';
import { View } from 'react-native';
// import ThemeProvider from '../utils/ThemeProvider';
// import { light, dark } from '../utils/themes';
import { Button } from 'react-native';
// import { proppedComponent } from '../utils/proppedComponent';

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.injectFonts();
    this.state = { isDark: false };
  }

  injectFonts = () => {
    const style = document.createElement('style');

    // fontAwesome
    const fontAwesomeFont = require('react-native-vector-icons/Fonts/FontAwesome.ttf');
    const fontAwesomeFontStyles = `@font-face {
  src: url(${fontAwesomeFont});
  font-family: 'FontAwesome';
}`;
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = fontAwesomeFontStyles;
    } else {
      style.appendChild(document.createTextNode(fontAwesomeFontStyles));
    }

    // material-community
    const materialCommunityFont = require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf');
    const materialCommunityFontStyles = `@font-face {
  src: url(${materialCommunityFont});
  font-family: 'Material Design Icons';
}`;
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = materialCommunityFontStyles;
    } else {
      style.appendChild(document.createTextNode(materialCommunityFontStyles));
    }

    // Material Icons
    const materialIconsFont = require('react-native-vector-icons/Fonts/MaterialIcons.ttf');
    const materialIconsFontStyles = `@font-face {
  src: url(${materialIconsFont});
  font-family: 'Material Icons';
}`;
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = materialIconsFontStyles;
    } else {
      style.appendChild(document.createTextNode(materialIconsFontStyles));
    }

    // Octicons
    const octiconsFont = require('react-native-vector-icons/Fonts/Octicons.ttf');
    const octiconsFontStyles = `@font-face {
  src: url(${octiconsFont});
  font-family: 'Octions';
}`;
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = octiconsFontStyles;
    } else {
      style.appendChild(document.createTextNode(octiconsFontStyles));
    }

    document.head.appendChild(style);
  };

  render() {
    return (
      // <ThemeProvider theme={this.state.isDark ? dark : light}>
      //   <View>
      //     <Button
      //       title="Toggle Dark Theme"
      //       color="#aaa"
      //       onPress={() => {
      //         this.setState({ isDark: !this.state.isDark });
      //       }}
      //     />
      //     <View
      //       style={{
      //         marginTop: 15,
      //         paddingHorizontal: 15,
      //         paddingVertical: 30,
      //         backgroundColor: this.state.isDark
      //           ? dark.pageColor
      //           : light.pageColor,
      //       }}
      //     >
      <View>{this.props.children}</View>
      //   </View>
      // </ThemeProvider>
    );
  }
}
