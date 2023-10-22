import React from "react";
import { Button } from "../../../components/Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants";
import { RootStackParamList } from "../../../navigation/Navigator";
import { ICON_NAMES, SVG } from "../../../components/SVG";

export const ToSettings = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Button onPress={() => navigation.navigate(SCREENS.SETTINGS.INDEX)}>
      <SVG name={ICON_NAMES.GEAR} />
    </Button>
  );
};
