import { IThemeOptions } from '@types';
import i18n from 'i18next';
import * as yup from 'yup';

const trans = (key: string) => i18n.t(key);
const countryMessage = trans('screen.login.country');

const validationRegex = {
  [IThemeOptions.AE]: /^[a-zA-Z0-9]{5,}$/,
  [IThemeOptions.IN]: /^[a-zA-Z][a-zA-Z0-9]{10,}$/,
  [IThemeOptions.LK]: /^[a-zA-Z0-9]*_+[a-zA-Z0-9_]*$/,
  [IThemeOptions.PK]: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
};

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const loginValidationSchema = yup.object().shape({
  country: yup
    .object()
    .shape({
      code: yup.string().required(countryMessage),
      value: yup.string().required(countryMessage),
      label: yup.string().required(countryMessage),
    })
    .required(countryMessage),
  username: yup.string().test('username', (val, { parent }) => {
    const countryCode = parent.country?.code || '';
    const validationObj = validationRegex[countryCode as IThemeOptions];
    if (!val) return false;
    if (countryCode) {
      return validationObj?.test(val);
    }
    return true;
  }),
  password: yup
    .string()
    .test('password', trans('screen.login.error.password'), (val) => {
      if (!val) return false;
      return passwordRegex?.test(val);
    }),
});
