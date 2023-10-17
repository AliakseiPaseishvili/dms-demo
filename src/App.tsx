import React from "react";
import { Navigation } from "./navigation/Navigation";
import { TranslationProvider } from "./features/translation";

export const App = () => (
  <TranslationProvider>
    <Navigation />
  </TranslationProvider>
);
