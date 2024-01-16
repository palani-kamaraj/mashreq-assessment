import { useLoginForm } from '@shared';
import { useNavigate } from 'react-router-dom';
import { IUserSubmitHandlerType } from '@types';

export const useWebLoginForm = () => {
  const { form, onSubmit } = useLoginForm(true);
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
    form,
    onSubmitForm,
  };
};
