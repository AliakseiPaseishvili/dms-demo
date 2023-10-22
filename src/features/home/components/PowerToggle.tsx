import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "../../../components/Button";
import { ICON_NAMES, SVG } from "../../../components/SVG";
import { COLORS } from "../../../constants";

export const PowerToggle: FC<{ onPress: () => void}> = ({ onPress }) => {
  return (
    <View style={styles.wrapper}>
      <Button style={styles.button} onPress={onPress}>
        <SVG name={ICON_NAMES.POWER} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.GREY,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
  },
  button: {
    backgroundColor: COLORS.BLUE,
    padding: 16,
    borderRadius: 40,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -45,
  },
});
