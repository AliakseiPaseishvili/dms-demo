import React, { useMemo } from "react";
import { NavItem } from "../../../components/NavItem";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../../constants";

export const ClientScreens = () => {
  const { t } = useTranslation("settings");

  const links = useMemo(
    () => [
      {
        title: t("settings:identity"),
      },
      {
        title: t("settings:security"),
      },
    ],
    [t]
  );

  return (
    <>
      {links.map(({ title }, index) => (
        <NavItem
          onPress={() => {}}
          style={[
            index === 0 ? styles.firstItem : null,
            index === links.length - 1 ? styles.lastItem : null,
            index !== links.length ? styles.withBorder : null,
          ]}
        >
          <Text style={styles.text}>{title}</Text>
        </NavItem>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  firstItem: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  lastItem: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
  },
  withBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GREY,
  },
});
