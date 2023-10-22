import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "../../../components/Button";
import {
  BottomSheetModal,
  useBottomSheetControllers,
} from "../../../components/BottomSheetModal";
import { COLORS } from "../../../constants";

export const Contact = () => {
  const { isOpened, onOpen, onClose } = useBottomSheetControllers();
  return (
    <>
      <SafeAreaView style={styles.safeWrapper}>
        <Button style={styles.wrapper} onPress={onOpen}>
          <Text>Contact</Text>
        </Button>
      </SafeAreaView>
      <BottomSheetModal isOpened={isOpened} onClose={onClose}>
        <Text>Here will be chat</Text>
      </BottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  safeWrapper: {
    backgroundColor: COLORS.WHITE,
  },
  wrapper: {
    display: "flex",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    backgroundColor: COLORS.WHITE,
    borderTopColor: COLORS.GREY,
  },
});
