import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import { useLoginForm } from '@shared';
import CountrySelect from '../../common/form/countrySelect';
import { InputField } from '../../common';

const LoginForm = () => {
  const { t } = useTranslation();
  const { form, onSubmit } = useLoginForm();

  return (
    <Box sx={{ mt: 1 }}>
      <FormProvider {...form}>
        <CountrySelect name="country" label={t('screen.login.country')} />
        <InputField name="username" label={t('screen.login.username')} />
        <InputField name="password" label={t('screen.login.password')} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onSubmit}
        >
          {t('actions.login')}
        </Button>
      </FormProvider>
    </Box>
  );
};

export default LoginForm;
