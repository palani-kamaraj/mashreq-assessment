import React, { useState } from 'react';
import { Box, Grid, Hidden, useTheme } from '@mui/material';
import { HeaderFrameIcon } from '@webLib';
import { ChangePassword } from './changePassword';
import { Welcome } from './welcome';

export const Dashboard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const colorPrimary = theme.palette.primary.main;

  const onClickChangePassword = () => {
    setShowPassword(true);
  };

  const onCancelPassword = () => {
    setShowPassword(false);
  };

  return (
    <Box>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        sx={{
          display: { xs: 'none', sm: 'block' },
          height: { sm: '5rem' },
        }}
      >
        <HeaderFrameIcon color={colorPrimary} height="5rem" width="100%" />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        flexGrow={1}
        bgcolor={colorPrimary}
        sx={{
          height: { xs: '100vh', sm: 'calc(100vh - 5rem)' },
          mt: { sm: '5rem' },
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{
            justifyContent: { sm: 'center' },
            px: { md: '4rem' },
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            xl={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            {showPassword ? (
              <ChangePassword onCancel={onCancelPassword} />
            ) : (
              <Welcome onClick={onClickChangePassword} />
            )}
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              lg={6}
              xl={6}
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Box
                component="img"
                maxWidth="100%"
                sx={{
                  height: { md: 420, lg: 530 },
                  marginTop: { xs: '3rem' },
                }}
                alt="Banner Image"
                src={'/assets/images/banner.png'}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </Box>
  );
};
