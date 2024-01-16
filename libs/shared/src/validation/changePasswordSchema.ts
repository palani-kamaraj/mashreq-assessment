import * as yup from 'yup';
import { passwordRegex, trans } from './loginSchema';

export const changePasswordSchema = yup.object({
  oldPassword: yup
    .string()
    .test('oldPassword', trans('screen.login.error.password'), (val) => {
      if (!val) return false;
      return passwordRegex?.test(val);
    }),
  password: yup
    .string()
    .test('oldPassword', trans('screen.login.error.password'), (val) => {
      if (!val) return false;
      return passwordRegex?.test(val);
    }),
});
