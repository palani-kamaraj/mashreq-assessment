import { useTranslation } from 'react-i18next';
import { ICountryType, ILanguageOptions, IThemeOptions } from '@types';
import { useStore } from '../store';

export const useLang = () => {
  const { t, i18n } = useTranslation();
  const setLanguage = useStore((state) => state.setLang);

  const options = [
    { value: ILanguageOptions.EN, label: t('lang.options.english') },
    { value: ILanguageOptions.AR, label: t('lang.options.arabic') },
    { value: ILanguageOptions.TA, label: t('lang.options.tamil') },
  ];

  const countryOptions: ICountryType[] = [
    { code: IThemeOptions.AE, label: t('screen.login.countryOptions.ae') },
    { code: IThemeOptions.IN, label: t('screen.login.countryOptions.in') },
    { code: IThemeOptions.LK, label: t('screen.login.countryOptions.lk') },
    { code: IThemeOptions.PK, label: t('screen.login.countryOptions.pk') },
  ];

  const changeLanguage = (lang: ILanguageOptions, onSuccess?: () => void) => {
    i18n.changeLanguage(lang).then(() => {
      setLanguage(lang);
      if (onSuccess) {
        onSuccess();
      }
    });
  };

  return {
    options,
    changeLanguage,
    countryOptions,
  };
};
