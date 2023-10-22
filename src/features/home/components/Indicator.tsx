import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../constants";

export const Indicator: FC<{ isWorking: boolean }> = ({ isWorking }) => (
  <View style={styles.indicatorWrapper}>
    <View style={[styles.indicator, isWorking && styles.indicator_active]} />
  </View>
);

const styles = StyleSheet.create({
  indicator: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: COLORS.RED,
    marginBottom: 32,
  },
  indicator_active: {
    backgroundColor: COLORS.GREEN,
  },
  indicatorWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
  }
});
