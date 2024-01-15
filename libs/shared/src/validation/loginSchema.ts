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

export const loginValidationSchema = yup.object().shape({
  country: yup
    .object()
    .shape({
      code: yup.string().required(countryMessage),
      value: yup.string().required(countryMessage),
      label: yup.string().required(countryMessage),
    })
    .required(countryMessage),
  username: yup
    .string()
    .test('username', (val, { parent, createError, path }) => {
      const countryCode = parent.country?.code || '';
      const validationObj = validationRegex[countryCode as IThemeOptions];
      const usernameErrorMessage = createError({
        path,
        message: trans(`screen.login.error.username.${countryCode}`),
      });
      if (!val)
        return createError({
          path,
          message: trans(`screen.login.error.username.${countryCode}`),
        });
      if (countryCode) {
        return validationObj?.test(val) ? true : usernameErrorMessage;
      }
      return true;
    }),
  password: yup
    .string()
    .test('password', trans('screen.login.error.password'), (val) => {
      if (!val) return false;
      return true;
    }),
});
