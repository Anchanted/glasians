//i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/locales/en';
import zh from '@/locales/zh';
import it from '@/locales/it';

const resources = {
  en: {
    translation: en
  },
  zh: {
    translation: zh
  },
  it: {
    translation: it
  }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;