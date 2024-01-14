import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { LanguageMenu } from './languageMenu';

export const Header = () => {
  return (
    <>
      {/* <AppBar position="static"> */}
      <Toolbar variant="regular" sx={{ justifyContent: 'space-between' }}>
        <Box>Logo</Box>
        <Box sx={{ alignItems: 'center' }}>
          <LanguageMenu />
        </Box>
      </Toolbar>
      {/* </AppBar> */}
    </>
  );
};
