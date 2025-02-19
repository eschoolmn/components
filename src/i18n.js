import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import {TRANSLATIONS_EN} from "./translations/en/translations";
import {TRANSLATIONS_MN} from "./translations/mn/translations";
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init
i18n
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
        fallbackLng: 'mn',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n;