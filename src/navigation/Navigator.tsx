import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../features/home";
import { SCREENS } from "../constants";
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const { t } = useTranslation("home");

  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name={SCREENS.HOME.INDEX}
        component={HomeScreen}
        options={{ title: t("home:title") }}
      />
    </Stack.Navigator>
  );
};
