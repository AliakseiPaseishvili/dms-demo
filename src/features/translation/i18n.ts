import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import { resources } from "./resources";

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: "en",
  lng: "en",
  resources,
});

export default i18n;
