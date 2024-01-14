import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, TextField } from '@mui/material';
import CountrySelect from '../../common/countrySelect';

export const Login = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        mx: 4,
        height: 'calc(100% - 48px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          mb: 3,
          height: 70,
          width: 70,
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <img
          width="100%"
          src="/assets/images/logo.png"
          alt="logo"
          loading="lazy"
        />
      </Box>
      <Box sx={{ mt: 1 }}>
        <CountrySelect />
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {t('actions.login')}
        </Button>
      </Box>
    </Box>
  );
};
