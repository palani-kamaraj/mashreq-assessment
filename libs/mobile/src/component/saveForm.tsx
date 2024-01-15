import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';
import { FormProvider } from 'react-hook-form';
import { useLoginForm } from '@shared';
import { MCountrySelect, MInputField } from '../common';
import { useOrientation } from '../hooks';
import { IOrientationType } from '@types';
import Logo from '../images/logo.png';

export const SaveForm = () => {
  const { form, onSubmit } = useLoginForm();
  const { t } = useTranslation();
  const deviceOrientation = useOrientation();
  const isPortrait = deviceOrientation === IOrientationType.PORTRAIT;

  return (
    <View style={styles.containerStyle}>
      <View style={{ width: isPortrait ? '100%' : 500 }}>
        <View style={styles.imageContainerStyle}>
          <View style={styles.imageWrapperStyle}>
            <Image
              style={styles.imageStyle}
              resizeMode="contain"
              source={Logo}
              alt="logo"
            />
          </View>
        </View>
        <FormProvider {...form}>
          <MCountrySelect name="country" label={t('screen.login.country')} />
          <MInputField name="username" label={t('screen.login.username')} />
          <MInputField name="password" label={t('screen.login.password')} />
          <Button style={{ marginTop: 10 }} mode="contained" onPress={onSubmit}>
            {t('actions.save')}
          </Button>
        </FormProvider>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: { alignItems: 'center' },
  imageContainerStyle: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  imageWrapperStyle: {
    height: 50,
    width: 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageStyle: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});
