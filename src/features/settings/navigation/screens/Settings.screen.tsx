import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../../constants";
import { SettingsBlock } from "../../components/SettingsBlock";
import { useTranslation } from "react-i18next";
import { ClientScreens } from "../../components/ClientScreens";
import { PresenceBlock } from "../../components/PresenceBlock";
import { CertificateSwitch } from "../../components/CertificateSwitch";
import { ICON_NAMES, SVG } from "../../../../components/SVG";

export const SettingsScreen = () => {
  const { t } = useTranslation("settings");
  return (
    <View style={styles.wrapper}>
      <View style={styles.user}>
        <SVG name={ICON_NAMES.USER} />
      </View>
      <SettingsBlock title={t("settings:client")}>
        <ClientScreens />
      </SettingsBlock>
      <SettingsBlock title={t("settings:presense_detection")}>
        <PresenceBlock />
      </SettingsBlock>
      <SettingsBlock title={t("settings:certificate")}>
        <CertificateSwitch />
      </SettingsBlock>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.GREY,
    paddingHorizontal: 16,
  },
  user: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
});
