import { useTranslation } from 'react-i18next';
import { ICountryType, ILanguageOptions } from '@types';

export const useLang = () => {
  const { t, i18n } = useTranslation();

  const options = [
    { value: ILanguageOptions.EN, label: t('lang.options.english') },
    { value: ILanguageOptions.AR, label: t('lang.options.arabic') },
    { value: ILanguageOptions.TA, label: t('lang.options.tamil') },
  ];

  const countryOptions: ICountryType[] = [
    { code: 'AE', label: 'United Arab Emirates' },
    { code: 'IN', label: 'India' },
    { code: 'LK', label: 'Sri Lanka' },
    { code: 'PK', label: 'Pakistan' }
  ];

  const changeLanguage = (lang: ILanguageOptions) => {
    i18n.changeLanguage(lang);
  };

  return {
    options,
    changeLanguage,
    countryOptions,
  };
};
