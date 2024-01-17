import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';
import { Image, StyleSheet, View } from 'react-native';
import { FormProvider, SubmitErrorHandler } from 'react-hook-form';
import { useLoginForm } from '@shared';
import { MCountrySelect, MInputField } from '../common';
import { useMStore, useOrientation } from '../hooks';
import {
  ILoginFormField,
  IOrientationType,
  IThemeOptions,
  IUserSubmitHandlerType,
} from '@types';
import { encode } from '../utils/encode';
import Logo from '../images/logo.png';

export const SaveForm = () => {
  const { form, setUserNameError } = useLoginForm();
  const invalidUserMessage = useMStore((state) => state.invalidUserMessage);
  const setUserData = useMStore((state) => state.setUser);
  const resetInvalidUserMessage = useMStore(
    (state) => state.resetInvalidUserMessage
  );
  const { t } = useTranslation();
  const deviceOrientation = useOrientation();
  const isPortrait = deviceOrientation === IOrientationType.PORTRAIT;
  const countryCode = form.watch('country')?.code || '';

  const onInvalid: SubmitErrorHandler<ILoginFormField> = (errors) => {
    //console.error(errors)
    console.log(errors);
  };

  const onSubmitForm: IUserSubmitHandlerType = (data) => {
    const payload = {
      ...data,
      password: encode(data.password),
      country: data.country?.code as IThemeOptions,
    };
    setUserData(payload, () => {}, setUserNameError);
  };

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
          <MCountrySelect
            name="country"
            label={t('screen.login.country')}
            info={t('screen.login.fields.country')}
          />
          <MInputField
            name="username"
            label={t('screen.login.username')}
            onChangeText={() => {
              if (invalidUserMessage) {
                resetInvalidUserMessage();
              }
            }}
            info={
              invalidUserMessage
                ? ''
                : countryCode
                ? t(`screen.login.fields.usernameInfo.${countryCode}`)
                : ''
            }
          />
          <MInputField
            name="password"
            label={t('screen.login.password')}
            info={t('screen.login.fields.password')}
          />
          <Button
            style={{ marginTop: 10 }}
            mode="contained"
            onPress={form.handleSubmit(onSubmitForm, onInvalid)}
          >
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
