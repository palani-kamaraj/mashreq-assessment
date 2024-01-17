import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import { useLoginForm, useStore } from '@shared';
import { InputField, CountrySelect } from '../../common';
import { IThemeOptions, IUserSubmitHandlerType } from '@types';


const LoginForm = () => {
  const { t } = useTranslation();
  const { form, setUserNameError } = useLoginForm();
  const invalidUserMessage = useStore((state) => state.invalidUserMessage);
  const getUserData = useStore((state) => state.getUser);
  const resetInvalidUserMessage = useStore(
    (state) => state.resetInvalidUserMessage
  );
  const countryCode = form.watch('country')?.code || '';
  const isLoading = useStore((state) => state.isLoading);
  const navigate = useNavigate();

  const onSubmitForm: IUserSubmitHandlerType = (data) => {
    const payload = {
      ...data,
      password: btoa(data?.password),
      country: data.country?.code as IThemeOptions,
    };
    getUserData(payload, ()=>{
      navigate('/dashboard', { replace: true });
    }, setUserNameError);
  };

  return (
    <Box sx={{ mt: 1 }}>
      <FormProvider {...form}>
        <CountrySelect
          name="country"
          label={t('screen.login.country')}
          info={t('screen.login.fields.country')}
        />
        <InputField
          name="username"
          label={t('screen.login.username')}
          onChange={() => {
            if (invalidUserMessage) {
              resetInvalidUserMessage();
            }
          }}
          info={
            invalidUserMessage
              ? ''
              : countryCode
              ? t(`screen.login.fields.usernameInfo.${countryCode}`)
              : ''
          }
        />
        <InputField
          name="password"
          label={t('screen.login.password')}
          isProtected
          info={t('screen.login.fields.password')}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={form.handleSubmit((data) => onSubmitForm(data))}
          disabled={isLoading}
        >
          {t('actions.login')}
        </Button>
      </FormProvider>
    </Box>
  );
};

export default LoginForm;
