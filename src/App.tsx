import React from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Navigation } from "./navigation/Navigation";
import { TranslationProvider } from "./features/translation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const App = () => (
  <TranslationProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Navigation />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  </TranslationProvider>
);
