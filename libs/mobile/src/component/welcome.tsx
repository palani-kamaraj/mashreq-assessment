import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Text } from 'react-native-paper';
import { useStore } from '@shared';
import { useTranslation } from 'react-i18next';

export const Welcome = () => {
  const userInfo = useStore((state) => state.user);
  const resetUserInfo = useStore((state) => state.resetUserInfo);
  const { t } = useTranslation();

  if (!userInfo?.username) return null;

  return (
    <View>
      <Text style={styles.fontStyle} variant="displaySmall">
        {t('screen.mobWelcome.title')} {userInfo?.username}
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
  buttonStyle: { marginTop: 10, width: '50%' },
});
