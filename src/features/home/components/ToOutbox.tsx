import React from "react";
import { Button } from "../../../components/Button";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants";
import { RootStackParamList } from "../../../navigation/Navigator";

export const ToOutbox = () => {
  const { t } = useTranslation("outbox");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Button onPress={() => navigation.navigate(SCREENS.OUTBOX.INDEX)}>
      <Text>{t("outbox:title")}</Text>
    </Button>
  );
};
