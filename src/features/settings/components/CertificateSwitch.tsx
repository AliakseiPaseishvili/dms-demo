import React from "react";
import { PresenceSwitch } from "./PresenceSwitch";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";

export const CertificateSwitch = () => {
  const { t } = useTranslation("settings");

  return (
    <PresenceSwitch title={t("settings:certificate")} style={styles.wrapper} />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
  },
});
