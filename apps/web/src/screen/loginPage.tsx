import { Box, Grid, Paper } from '@mui/material';
import { Login } from '@webLib';
import { LanguageMenu } from '@webLib';

const LoginPage = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={false}
        md={7}
        sx={{
          backgroundImage: 'url(../assets/images/left_banner.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={1} square>
        <Box sx={{mx: 4}} display='flex' justifyContent='flex-end'>
          <LanguageMenu />
        </Box>
        <Login />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
