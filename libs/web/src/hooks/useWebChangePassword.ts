import { IUserChangePasswordSubmitHandlerType } from '@types';
import { useChangePasswordForm } from '@shared';

export const useWebChangePassword = (onCancel: () => void) => {
  const { form, onSubmit } = useChangePasswordForm();

  const onSubmitForm: IUserChangePasswordSubmitHandlerType = (data) => {
    const payload = {
      ...data,
      password: btoa(data?.password),
    };
    onSubmit(payload, () => {
      onCancel();
    });
  };

  return {
    form,
    onSubmitForm,
  };
};
