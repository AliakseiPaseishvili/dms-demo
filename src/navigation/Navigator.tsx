import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header, HomeScreen } from "../features/home";
import { COLORS, SCREENS } from "../constants";
import { useTranslation } from "react-i18next";
import {
  IdentityScreen,
  SecurityScreen,
  SettingsScreen,
} from "../features/settings";
import { OutboxScreen } from "../features/outbox";

export type RootStackParamList = {
  [SCREENS.SETTINGS.INDEX]: undefined;
  [SCREENS.HOME.INDEX]: undefined;
  [SCREENS.SETTINGS.IDENTITY]: undefined;
  [SCREENS.SETTINGS.SECURITY]: undefined;
  [SCREENS.OUTBOX.INDEX]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const { t } = useTranslation(["home", "title", "outbox"]);

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
        options={{
          header: () => <Header />
        }}
      />
      <Stack.Screen
        name={SCREENS.SETTINGS.INDEX}
        component={SettingsScreen}
        options={{ title: t("settings:title") }}
      />
      <Stack.Screen
        name={SCREENS.SETTINGS.SECURITY}
        component={SecurityScreen}
        options={{ title: t("settings:security") }}
      />
      <Stack.Screen
        name={SCREENS.SETTINGS.IDENTITY}
        component={IdentityScreen}
        options={{ title: t("settings:identity") }}
      />
      <Stack.Screen
        name={SCREENS.OUTBOX.INDEX}
        component={OutboxScreen}
        options={{ title: t("outbox:title") }}
      />
    </Stack.Navigator>
  );
};
