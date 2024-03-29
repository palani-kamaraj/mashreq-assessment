import React from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useLang, useStore } from '@shared';
import { ILanguageOptions } from '@types';
import { Language } from '@mui/icons-material';

export const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const selectedLang = useStore((state) => state.lang);
  const setLanguage = useStore((state) => state.setLang);
  const { options, changeLanguage } = useLang();
  const currentLanguageLabel =
    options.find((lang) => lang.value === selectedLang)?.label || '';
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = (value: ILanguageOptions) => {
    setAnchorEl(null);
    if (value && typeof value === 'string') {
      changeLanguage(value, () => {
        setLanguage(value);
      });
    }
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        id="languageSelectionMenu"
        keepMounted
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {options.map(({ value, label }) => {
          return (
            <MenuItem
              key={`lang_${value}`}
              onClick={() => handleMenuClose(value)}
            >
              {label}
            </MenuItem>
          );
        })}
      </Menu>
      <Box
        sx={{ cursor: 'pointer' }}
        display="flex"
        alignItems="center"
        onClick={handleProfileMenuOpen}
      >
        <Typography component="span" variant="body1">
          {currentLanguageLabel}
        </Typography>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls="language-icon"
          aria-haspopup="true"
          color="inherit"
        >
          <Language />
        </IconButton>
      </Box>
    </>
  );
};
