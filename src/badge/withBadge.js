import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import Badge from "./Badge";

const styles = StyleSheet.create({
  badge: {
    borderRadius: 9,
    height: 18,
    minWidth: 0,
    width: 18
  },
  badgeContainer: {
    position: "absolute",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowRadius: 0.5,
    shadowOpacity: 1.0
  },
  badgeText: {
    fontSize: 10,
    paddingHorizontal: 0
  }
});

const withBadge = (value, options = {}) => WrappedComponent =>
  class extends React.Component {
    render() {
      const {
        status = "error",
        left = 10,
        bottom = 22,
        top = 0,
        right = 0,
        hidden = typeof value === "number"
          ? value === 0
          : typeof value === "string"
          ? value !== ""
          : value !== undefined && value !== null,
        badgeProps = {}
      } = options;
      const badgeValue = typeof value === "function" ? value(this.props) : value;
      return (
        <View>
          <WrappedComponent {...this.props} />
          {!hidden && (
            <Badge
              badgeStyle={styles.badge}
              textStyle={styles.badgeText}
              value={badgeValue}
              status={status}
              containerStyle={[styles.badgeContainer, { bottom, left, right, top }]}
              {...badgeProps}
            />
          )}
        </View>
      );
    }
  };

export default withBadge;
