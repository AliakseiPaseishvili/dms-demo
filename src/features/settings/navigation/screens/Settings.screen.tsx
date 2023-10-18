import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../../constants";
import { SettingsBlock } from "../../components/SettingsBlock";
import { useTranslation } from "react-i18next";
import { ClientScreens } from "../../components/ClientScreens";

export const SettingsScreen = () => {
  const { t } = useTranslation("settings");
  return (
    <View style={styles.wrapper}>
      <SettingsBlock title={t("settings:client")}>
        <ClientScreens />
      </SettingsBlock>
      <SettingsBlock title={t("settings:presense_detection")}>
        <View />
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
});
