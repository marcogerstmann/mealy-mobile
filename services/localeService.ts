import * as Localization  from 'expo-localization';
import i18n from 'i18n-js';

export const initLocale = () => {
  i18n.translations = {
    en: require('../lang/en'),
    de: require('../lang/de')
  };

  i18n.defaultLocale = 'de';

  i18n.fallbacks = true;

  i18n.locale = Localization.locale;
}
