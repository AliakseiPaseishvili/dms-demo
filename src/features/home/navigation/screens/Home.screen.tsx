import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";
import { Contact } from "../../components/Contact";
import { Indicator } from "../../components/Indicator";
import { PowerToggle } from "../../components/PowerToggle";
import { useToggleWork } from "../../hooks/toggleWork";

export const HomeScreen = () => {
  const { isWorking, toggleWork } = useToggleWork();

  return (
    <View style={styles.wrapper}>
      <Indicator isWorking={isWorking} />
      <PowerToggle onPress={toggleWork} />
      <Contact />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.GREY,
    justifyContent: "flex-end",
  },
});
