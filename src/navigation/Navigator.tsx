import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ToSettings } from "../features/home";
import { COLORS, SCREENS } from "../constants";
import { useTranslation } from "react-i18next";
import { SettingsScreen } from "../features/settings";

export type RootStackParamList = {
  [SCREENS.SETTINGS.INDEX]: undefined;
  [SCREENS.HOME.INDEX]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const { t } = useTranslation(["home", "title"]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.GREY,
        },
      }}
    >
      <Stack.Screen
        name={SCREENS.HOME.INDEX}
        component={HomeScreen}
        options={{ title: t("home:title"), headerRight: () => <ToSettings /> }}
      />
      <Stack.Screen
        name={SCREENS.SETTINGS.INDEX}
        component={SettingsScreen}
        options={{ title: t("settings:title") }}
      />
    </Stack.Navigator>
  );
};
