import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";
import { Contact } from "../../components/Contact";

export const HomeScreen = () => {;

  return (
    <View style={styles.wrapper}>
      <Contact />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.GREY,
  },
});
