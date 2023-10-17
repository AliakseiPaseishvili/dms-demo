import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import { resources } from "./resources";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources,
});

export default i18n;
