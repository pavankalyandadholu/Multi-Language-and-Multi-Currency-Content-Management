import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { languages } from '../config/languages';

// Import all language files
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import frTranslations from './locales/fr.json';
import deTranslations from './locales/de.json';
import zhTranslations from './locales/zh.json';
import jaTranslations from './locales/ja.json';
import arTranslations from './locales/ar.json';
import ruTranslations from './locales/ru.json';
import ptTranslations from './locales/pt.json';
import hiTranslations from './locales/hi.json';
import koTranslations from './locales/ko.json';
import itTranslations from './locales/it.json';

const resources = {
  en: { translation: enTranslations },
  es: { translation: esTranslations },
  fr: { translation: frTranslations },
  de: { translation: deTranslations },
  zh: { translation: zhTranslations },
  ja: { translation: jaTranslations },
  ar: { translation: arTranslations },
  ru: { translation: ruTranslations },
  pt: { translation: ptTranslations },
  hi: { translation: hiTranslations },
  ko: { translation: koTranslations },
  it: { translation: itTranslations }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

// Set initial direction based on language
const currentLang = i18n.language;
const currentLangConfig = languages.find(lang => lang.code === currentLang);
document.documentElement.dir = currentLangConfig?.dir || 'ltr';
document.documentElement.lang = currentLang;

export default i18n;