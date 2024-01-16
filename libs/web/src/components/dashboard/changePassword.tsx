import React from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  FormHelperText,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormProvider } from 'react-hook-form';
import { InputField } from '../../common';
import { useWebChangePassword } from '../../hooks/useWebChangePassword';
import { useStore } from '@shared';

export const ChangePassword = ({ onCancel }: { onCancel: () => void }) => {
  const { t } = useTranslation();
  const { form, onSubmitForm } = useWebChangePassword(onCancel);
  const invalidMsg = useStore((state) => state.invalidUserMessage);
  const resetInvalidUserMessage = useStore((state) => state.resetInvalidUserMessage);
  const theme = useTheme();
  const colorPrimary = theme.palette.primary.main;
  const buttonStyle = {
    borderColor: colorPrimary,
    margin: '0 10px',
    color: colorPrimary,
    fontSize: '1rem',
    bgcolor: '#fff',
    transition: 'all 0.5s',
    ':hover': {
      color: colorPrimary,
      borderColor: '#fff',
      boxShadow: `inset 0 0 0.6em 0em ${colorPrimary}`,
    },
  };
  const resetInvalidMsg = () => {
    if(invalidMsg){
      resetInvalidUserMessage();
    }
  }
  return (
    <Box
      bgcolor="white"
      borderRadius="15px"
      display="flex"
      flexDirection="column"
      sx={{
        width: { xs: '70%', sm: '500px' },
        padding: { xs: '30px', sm: '40px 50px' },
      }}
    >
      <FormProvider {...form}>
        <Typography variant="h6" color={colorPrimary} mb={4} textAlign="center">
          {t('screen.welcome.changePassword.title')}
        </Typography>
        <InputField
          name="oldPassword"
          label={t('screen.welcome.changePassword.oldPassword')}
          info={t('screen.login.fields.password')}
          onChange={resetInvalidMsg}
          isProtected
        />
        <InputField
          name="password"
          label={t('screen.welcome.changePassword.newPassword')}
          info={t('screen.login.fields.password')}
          onChange={resetInvalidMsg}
          isProtected
        />
        {invalidMsg && <FormHelperText error>{invalidMsg}</FormHelperText>}
        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="outlined" onClick={onCancel} sx={buttonStyle}>
            {t('actions.cancel')}
          </Button>
          <Button
            variant="outlined"
            onClick={form.handleSubmit((data) => onSubmitForm(data))}
            sx={buttonStyle}
          >
            {t('actions.changePassword')}
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
};
