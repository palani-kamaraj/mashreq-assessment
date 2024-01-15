import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SaveForm, MLayout } from '@mobileLib';

export const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <MLayout>
      <SaveForm />
    </MLayout>
  );
};
export default App;
