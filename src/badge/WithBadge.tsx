import React from "react";
import { StyleSheet } from "react-native";
import { Badge } from "react-native-elements";

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "red",
    borderRadius: 11,
    padding: 7
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
  hidden = typeof value === "number" ? value === 0 : value !== ""
) => WrappedComponent =>
  class extends React.Component {
    render() {
      const badgeValue = typeof value === "function" ? value(this.props) : value;
      return (
        <React.Fragment>
          <WrappedComponent {...this.props} />
          {!hidden && (
            <Badge
              containerStyle={styles.badge}
              textStyle={styles.badgeText}
              value={badgeValue}
              wrapperStyle={[styles.badgeContainer, { bottom: offSetY, left: offSetX }]}
              {...badgeProps}
            />
          )}
        </React.Fragment>
      );
    }
  };

export default withBadge;

