import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../locales/en/translation.json";
import translationAL from "../locales/al/translation.json";
import translationFR from "../locales/fr/translation.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "al", "fr"];

const resources = {
  en: {
    translation: translationEN
  },
  al: {
    translation: translationAL
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
    

    detection: {
      checkWhitelist: true
    },

    debug: true,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  }
  );

export default i18n;
