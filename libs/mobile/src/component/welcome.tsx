import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useMStore } from '../hooks';
import { ILanguageOptions } from '@types';

export const Welcome = () => {
  const userInfo = useMStore((state) => state.user);
  const resetUserInfo = useMStore((state) => state.resetUserInfo);
  const { t, i18n } = useTranslation();
  const isAR = i18n.language === ILanguageOptions.AR;

  if (!userInfo?.username) return null;

  return (
    <View>
      <Text style={styles.fontStyle} variant="displaySmall">
        {t('screen.mobWelcome.title')}{' '}
        <Text
          style={{ ...{ ...styles.fontStyle, fontSize: isAR ? 30 : 35 } }}
          variant="displaySmall"
        >
          {userInfo?.username}
        </Text>
      </Text>
      <Text style={styles.fontStyle} variant="bodyLarge">
        {t('screen.mobWelcome.desc')}
      </Text>
      <Text style={styles.fontStyle} variant="bodyLarge">
        {t('screen.mobWelcome.desc1')}
      </Text>
      <View style={{ alignItems: 'center' }}>
        <Button
          buttonColor="#fff"
          style={styles.buttonStyle}
          mode="outlined"
          onPress={resetUserInfo}
        >
          {t('actions.new')}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonStyle: { marginTop: 10, width: '50%', borderColor: '#fff' },
});
