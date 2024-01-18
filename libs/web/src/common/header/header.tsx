import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Box, Toolbar } from '@mui/material';
import { LanguageMenu } from './languageMenu';
import { useStore } from '@shared';

export const Header = () => {
  const { t } = useTranslation();
  const resetUser = useStore((state) => state.resetUserInfo);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: 'transparent', boxShadow: 'none', top: 50 }}
      >
        <Toolbar variant="regular" sx={{ justifyContent: 'space-between' }}>
          <Box flex={1}></Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={5}
          >
            <Box sx={{ cursor: 'pointer' }} onClick={resetUser}>
              {t('actions.logout')}
            </Box>
            <LanguageMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
