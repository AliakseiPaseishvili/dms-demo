import React, { FC, useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacityProps } from "react-native";
import { Button } from "../../../components/Button";
import { COLORS } from "../../../constants";
import { Toggle } from "../../../components/Toggle";

type PresenceSwitchProps = {
  title: string;
  style?: TouchableOpacityProps['style']
}

export const PresenceSwitch: FC<PresenceSwitchProps> = ({ title, style }) => {
  const [presenceValue, setPrecence] = useState<boolean>(false);

  const onValueChange = useCallback(
    () => setPrecence((prevValue) => !prevValue),
    [setPrecence]
  );

  return (
    <Button style={[styles.wrapper, style]} onPress={onValueChange}>
      <Text style={styles.text}>{title}</Text>
      <Toggle value={presenceValue} onValueChange={setPrecence} />
    </Button>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
  },
});
