import React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { LanguageMenu } from './languageMenu';

export const Header = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none', top: 50}}>
        <Toolbar variant="regular" sx={{ justifyContent: 'space-between' }}>
          <Box flex={1}></Box>
          <Box>
            <LanguageMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
