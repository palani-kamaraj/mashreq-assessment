import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SaveForm, MLayout, Welcome } from '@mobileLib';
import { useStore } from '@shared';

export const App = () => {
  const isUserLoggedIn = useStore((state) => state.user?.country);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <MLayout>{isUserLoggedIn ? <Welcome /> : <SaveForm />}</MLayout>;
};
export default App;
