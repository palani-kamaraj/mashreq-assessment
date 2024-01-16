import React, { useState } from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import { useController, useFormContext } from 'react-hook-form';
import { FieldController } from '@shared';
import { View } from 'react-native';

export const MInputField = ({
  name,
  label,
  info,
  showEye,
  onChangeText,
}: {
  name: string;
  label: string;
  info?: string;
  showEye?: boolean;
  onChangeText?: () => void;
}) => {
  const [secureText, setSecureText] = useState<boolean>(false);
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({ name, control });
  const errorMessage = errors?.[name]?.message || '';

  const onChangeInputText = (text: string) => {
    onChange(text);
    if (onChangeText) {
      onChangeText();
    }
  };

  const onPressIcon = () => {
    setSecureText(!secureText);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <FieldController name={name}>
        <TextInput
          mode="outlined"
          label={label}
          onChangeText={onChangeInputText}
          value={value}
          secureTextEntry={showEye}
          right={
            showEye ? <TextInput.Icon icon="eye" onPress={onPressIcon} /> : null
          }
        />
      </FieldController>
      <HelperText type={errorMessage ? 'error' : 'info'}>
        <>{info ? info : errorMessage}</>
      </HelperText>
    </View>
  );
};
