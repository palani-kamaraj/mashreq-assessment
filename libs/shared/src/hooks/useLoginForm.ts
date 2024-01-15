import { useForm } from 'react-hook-form';
import { ILoginFormField } from '@types';

export const useLoginForm = () => {
  const initialValues: ILoginFormField = {
    username: '',
    password: '',
    country: null,
  };
  const form = useForm<ILoginFormField>({
    defaultValues: initialValues,
    mode: "onChange",
  });
  
  const onSubmit = () => {
    // console.log(form.getValues(), "tst ======")
  };

  return {
    form,
    onSubmit,
  };
};
