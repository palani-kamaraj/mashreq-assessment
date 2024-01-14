/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import SplashScreen from 'react-native-splash-screen';

export const App = () => {
  const { t } = useTranslation();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text id="heading" style={{ textAlign: 'center' }}>
            {t('title')}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default App;
