import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { useController, useFormContext } from 'react-hook-form';
import { FieldController } from '@shared';
import { View } from 'react-native';

export const MInputField = ({
  name,
  label,
  showEye,
}: {
  name: string;
  label: string;
  showEye?: boolean;
}) => {
  const [secureText, setSecureText] = useState<boolean>(false);
  const { control } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({ name, control });

  const onPressIcon = () => {
    setSecureText(!secureText);
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <FieldController name={name}>
        <TextInput
          mode="outlined"
          label={label}
          onChangeText={onChange}
          value={value}
          secureTextEntry={showEye}
          right={
            showEye ? <TextInput.Icon icon="eye" onPress={onPressIcon} /> : null
          }
        />
      </FieldController>
    </View>
  );
};
