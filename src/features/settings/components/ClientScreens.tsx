import React, { useMemo } from "react";
import { NavItem } from "../../../components/NavItem";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";
import { SCREENS } from "../../../constants";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/Navigator";
import { getCommonStyles } from "../utils/commonStyles";

export const ClientScreens = () => {
  const { t } = useTranslation("settings");

  const links = useMemo(
    () => [
      {
        title: t("settings:identity"),
        to: SCREENS.SETTINGS.IDENTITY,
      },
      {
        title: t("settings:security"),
        to: SCREENS.SETTINGS.SECURITY,
      },
    ],
    [t]
  );

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      {links.map(({ title, to }, index) => (
        <NavItem
          key={to}
          onPress={() => navigation.navigate(to)}
          style={getCommonStyles({ index, length: links.length })}
        >
          <Text style={styles.text}>{title}</Text>
        </NavItem>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "400",
  },
});
