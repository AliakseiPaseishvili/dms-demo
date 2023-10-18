import React, { FC } from "react";
import { Button } from "../Button";
import { ReactChildren } from "../../types";
import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { COLORS } from "../../constants";

export const NavItem: FC<ReactChildren & { onPress: () => void; style?: StyleProp<ViewStyle> }> = ({
  onPress,
  children,
  style,
}) => {
  return (
    <Button onPress={onPress} style={[styles.wrapper, style]}>
      {children}
      <Text style={styles.arrow}>{'>'}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: COLORS.WHITE,
  },
  arrow: {
    color: COLORS.GREY_DARKER,
  }
});
