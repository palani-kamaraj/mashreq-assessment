import { ILoginFormField, IUserSubmitHandlerType } from '@types';
import { useNavigate } from 'react-router-dom';

export const useWebLoginForm = (
  onSubmit: (data: ILoginFormField, success: () => void) => void
) => {
  const navigate = useNavigate();
  const onSubmitForm: IUserSubmitHandlerType = (data) => {
    const payload = {
      ...data,
      password: btoa(data?.password),
    };
    onSubmit(payload, () => {
      navigate('/dashboard', { replace: true });
    });
  };

  return {
    onSubmitForm,
  };
};
