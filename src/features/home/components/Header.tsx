import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ToOutbox } from "./ToOutbox";
import { ToSettings } from "./ToSettings";
import { ICON_NAMES, SVG } from "../../../components/SVG";
import { COLORS } from "../../../constants";

export const Header = () => (
  <SafeAreaView style={styles.wrapper}>
    <View style={styles.contentWrapper}>
      <ToOutbox />
      <SVG name={ICON_NAMES.LOGO} />
      <ToSettings />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.GREY,
    paddingTop: 16,
  },
  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
})