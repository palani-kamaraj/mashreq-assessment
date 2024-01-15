import React from 'react';
import { Box } from '@mui/material';
import LoginForm from './loginForm';

export const Login = () => {
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
      <Box sx={{ maxWidth: '462px' }}>
        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              mb: 3,
              height: 70,
              width: 70,
              borderRadius: '10px',
              overflow: 'hidden',
            }}
            width="100%"
          >
            <img
              width="100%"
              src="/assets/images/logo.png"
              alt="logo"
              loading="lazy"
            />
          </Box>
        </Box>
        <LoginForm />
      </Box>
    </Box>
  );
};
