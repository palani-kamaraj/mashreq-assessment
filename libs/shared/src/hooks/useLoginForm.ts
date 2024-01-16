import { Resolver, useForm } from 'react-hook-form';
import { ILoginFormField, IThemeOptions } from '@types';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '../validation/loginSchema';
import { useLang } from './useLang';
import { useStore } from '../store';

export const useLoginForm = (isLoginForm: boolean = false) => {
  const { countryOptions } = useLang();
  const setUserData = useStore((state) => state.setUser);
  const getUserData = useStore((state) => state.getUser);
  const initialValues: ILoginFormField = {
    username: '',
    password: '',
    country: countryOptions[0],
  };
  const form = useForm<ILoginFormField>({
    defaultValues: initialValues,
    mode: 'all',
    resolver: yupResolver(loginValidationSchema) as Resolver<ILoginFormField>,
  });

  const onSaveSubmit = (data: ILoginFormField, success: () => void) => {
    const payload = {
      ...data,
      country: data.country?.code as IThemeOptions,
    };
    setUserData(payload, success, (msg: string) => {
      if (msg) {
        form.setError('username', {
          type: 'username',
          message: msg,
        });
      }
    });
  };

  const onLoginSubmit = (data: ILoginFormField, success: () => void) => {
    const payload = {
      ...data,
      country: data.country?.code as IThemeOptions,
    };
    getUserData(payload, success);
  };

  return {
    form,
    onSubmit: isLoginForm ? onLoginSubmit : onSaveSubmit,
  };
};
