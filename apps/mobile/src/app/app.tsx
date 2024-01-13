/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { I18nextProvider, useTranslation } from 'react-i18next';
import SplashScreen from 'react-native-splash-screen';
import i18n from '../config/i18n.config';

export const App = () => {
  const { t } = useTranslation();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <Text id='heading' style={{ textAlign: 'center' }}>{t('title')}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </I18nextProvider>
  );
};
const styles = StyleSheet.create({});

export default App;
