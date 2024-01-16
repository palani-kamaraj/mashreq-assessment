import { ILoginFormField, IUserSubmitHandlerType } from '@types';
import { encode } from '../utils/encode';

export const useSaveForm = (
  onSubmit: (data: ILoginFormField, success: () => void) => void
) => {

  const onSubmitForm: IUserSubmitHandlerType = (data) => {
    const payload = {
      ...data,
      password: encode(data.password),
    };
    onSubmit(payload, () => {});
  };

  return {
    onSubmitForm,
  };
};
