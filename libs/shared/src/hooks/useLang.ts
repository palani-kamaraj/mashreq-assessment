import { useTranslation } from 'react-i18next';
import { ICountryType, ILanguageOptions, IThemeOptions } from '@types';

export const useLang = () => {
  const { t, i18n } = useTranslation();

  const options = [
    { value: ILanguageOptions.EN, label: t('lang.options.english') },
    { value: ILanguageOptions.AR, label: t('lang.options.arabic') },
    { value: ILanguageOptions.TA, label: t('lang.options.tamil') },
    { value: ILanguageOptions.HI, label: t('lang.options.hindi') },
  ];

  const countryOptions: ICountryType[] = [
    {
      value: IThemeOptions.AE, // used in native
      code: IThemeOptions.AE, // used in web
      label: t('screen.login.countryOptions.ae'),
    },
    {
      value: IThemeOptions.IN,
      code: IThemeOptions.IN,
      label: t('screen.login.countryOptions.in'),
    },
    {
      value: IThemeOptions.LK,
      code: IThemeOptions.LK,
      label: t('screen.login.countryOptions.lk'),
    },
    {
      value: IThemeOptions.PK,
      code: IThemeOptions.PK,
      label: t('screen.login.countryOptions.pk'),
    },
  ];

  const changeLanguage = (lang: ILanguageOptions, onSuccess?: () => void) => {
    i18n.changeLanguage(lang).then(() => {
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
