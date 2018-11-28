import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Badge } from "react-native-elements";

const styles = StyleSheet.create({
  badge: {
    backgroundColor: Platform.select({
      android: "#f44336",
      ios: "#ff3b30"
    }),
    borderRadius: 9,
    height: 18,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowRadius: 0.5,
    shadowOpacity: 1.0,
    padding: 0,
    width: 18
  },
  badgeContainer: {
    position: "absolute"
  },
  badgeText: {
    fontSize: 10
  }
});

const withBadge = (
  value,
  offSetX = 10,
  offSetY = 22,
  badgeProps = {},
  hidden = typeof value === "number"
    ? value === 0
    : typeof value === "string"
    ? value !== ""
    : value !== undefined && value !== null;
) => WrappedComponent =>
  class extends React.Component {
    render() {
      const badgeValue = typeof value === "function" ? value(this.props) : value;
      return (
        <View>
          <WrappedComponent {...this.props} />
          {!hidden && (
            <Badge
              badgeStyle={styles.badge}
              textStyle={styles.badgeText}
              value={badgeValue}
              containerStyle={[styles.badgeContainer, { bottom: offSetY, left: offSetX }]}
              {...badgeProps}
            />
          )}
        </View>
      );
    }
  };

export default withBadge;
