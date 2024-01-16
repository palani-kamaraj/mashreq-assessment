import { Resolver, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IChangePasswordFormField } from '@types';
import { changePasswordSchema } from '../validation/changePasswordSchema';
import { useStore } from '../store';

export const useChangePasswordForm = () => {
  const userId = useStore((state) => state.user?.id);
  const updatePassword = useStore((state) => state?.updatePassword);
  const initialValues: IChangePasswordFormField = {
    oldPassword: '',
    password: '',
  };
  const form = useForm<IChangePasswordFormField>({
    defaultValues: initialValues,
    mode: 'all',
    resolver: yupResolver(
      changePasswordSchema
    ) as Resolver<IChangePasswordFormField>,
  });

  const onSubmit = (data: IChangePasswordFormField, success: () => void) => {
    updatePassword({ ...data, id: userId }, success);
  };

  return {
    form,
    onSubmit,
  };
};
