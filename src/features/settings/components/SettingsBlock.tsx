import React, { FC } from "react";
import { ReactChildren } from "../../../types";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../constants";

export const SettingsBlock: FC<ReactChildren & { title: string }> = ({
  title,
  children,
}) => {
  return (
    <View>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
      <View style={styles.contentWrapper}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 8,
    marginLeft: 16,
    color: COLORS.GREY_DARKER,
  },
  contentWrapper: {
    marginBottom: 32,
  },
});
