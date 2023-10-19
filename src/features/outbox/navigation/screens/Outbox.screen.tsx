import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../../constants";

export const OutboxScreen = () => <View style={styles.wrapper}></View>;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.GREY,
  },
});
