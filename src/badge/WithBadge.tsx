import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Badge, BadgeProps } from "react-native-elements";
import { primaryColor } from "../../config/constants/colors";

const styles = StyleSheet.create({
  badge: {
    backgroundColor: primaryColor,
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

const WithBadge = (Component: ReactNode) => (
  value: string | number,
  offSetX: number = 10,
  offSetY: number = 15,
  badgeProps?: BadgeProps,
  hidden: boolean = typeof value === "number" ? value === 0 : value !== ""
) => (
  <View>
    {Component}
    {!hidden && (
      <Badge
        wrapperStyle={[styles.badgeContainer, { bottom: offSetY, left: offSetX }]}
        textStyle={styles.badgeText}
        containerStyle={styles.badge}
        value={value}
        {...badgeProps}
      />
    )}
  </View>
);

export default WithBadge;
