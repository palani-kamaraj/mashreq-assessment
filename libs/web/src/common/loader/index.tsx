import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useStore } from '@shared';

export const Loader = () => {
  const isLoading = useStore((state) => state.isLoading);
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
