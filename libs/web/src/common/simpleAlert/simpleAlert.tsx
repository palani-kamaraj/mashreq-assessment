import { Alert, AlertColor, Snackbar } from '@mui/material';
import React, { useEffect } from 'react';
import { useStore } from '@shared';

export const SimpleAlert = () => {
  const alertState = useStore((state) => state.alert);
  const resetAlert = useStore((state) => state.resetAlert);
  const { show, message, severity = 'success' } = alertState || {};

  useEffect(() => {
    const timer1 = setTimeout(() => resetAlert(), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, [show]);

  return (
    <Snackbar
      open={show}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity={severity as AlertColor} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
