import { Resolver, useForm } from 'react-hook-form';
import { ILoginFormField } from '@types';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../validation/loginSchema';

export const useLoginForm = () => {
  const initialValues: ILoginFormField = {
    username: '',
    password: '',
    country: undefined,
  };
  const form = useForm<ILoginFormField>({
    defaultValues: initialValues,
    mode: 'all',
    resolver: yupResolver(loginSchema) as Resolver<ILoginFormField>,
  });

  const setUserNameError = (msg: string) => {
    form.setError('username', {
      type: 'username',
      message: msg,
    });
  };

  return {
    form,
    setUserNameError,
  };
};
