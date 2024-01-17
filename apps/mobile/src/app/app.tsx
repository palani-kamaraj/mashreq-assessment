import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SaveForm, MLayout, Welcome, useMStore } from '@mobileLib';

export const App = () => {
  const isUserLoggedIn = useMStore((state) => state.user?.country);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <MLayout>{isUserLoggedIn ? <Welcome /> : <SaveForm />}</MLayout>;
};
export default App;
