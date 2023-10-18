import React from "react";
import { Button } from "../../../components/Button";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants";
import { RootStackParamList } from "../../../navigation/Navigator";

export const ToSettings = () => {
  const { t } = useTranslation("settings");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Button onPress={() => navigation.navigate(SCREENS.SETTINGS.INDEX)}>
      <Text>{t("settings:title")}</Text>
    </Button>
  );
};
