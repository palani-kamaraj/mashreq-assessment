import React from 'react';
import { Typography, Button } from '@mui/material';
import { useStore } from '@shared';
import { useTranslation } from 'react-i18next';

export const Welcome = ({ onClick }: { onClick: () => void }) => {
  const userName = useStore((state) => state.user?.username);
  const { t } = useTranslation();
  const buttonStyle = {
    borderColor: '#fff',
    bgcolor: '#fff',
    transition: 'all 0.5s',
    ':hover': {
      color: '#fff',
      boxShadow: 'inset 0 0 0.6em 0em #fff',
    },
  };
  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        lineHeight="4.125rem"
        color="white"
      >
        {t('screen.mobWelcome.title')} {userName}
      </Typography>
      <Typography
        variant="subtitle2"
        my={2}
        mb={4}
        px={10}
        color="white"
        textAlign="center"
        sx={{
          maxWidth: { xs: '100%', sm: '60%', md: '55%' },
        }}
      >
        {t('screen.welcome.desc')}
      </Typography>
      <Button variant="outlined" onClick={onClick} sx={buttonStyle}>
        {t('actions.changePassword')}
      </Button>
    </>
  );
};
