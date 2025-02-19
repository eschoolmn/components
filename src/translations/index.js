import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { TRANSLATIONS_MN } from "./mn/translations";
import { TRANSLATIONS_EN } from "./en/translations";

i18n
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            mn: {
                translation: TRANSLATIONS_MN
            },
            en: {
                translation: TRANSLATIONS_EN
            },
        },
        // lng: 'mn',
        fallbackLng: 'mn',
    });

export default i18n;

// i18n.changeLanguage("mn");