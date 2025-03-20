import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // çeviriler buraya
        }
      },
      tr: {
        translation: {
          // çeviriler buraya
        }
      }
    },
    lng: 'tr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 