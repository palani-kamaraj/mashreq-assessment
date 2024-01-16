import React, { useState } from 'react';
import DropDown from 'react-native-paper-dropdown';
import { useLang, FieldController } from '@shared';
import { IFieldProps, IFormCountryErrors } from '@types';
import { useController, useFormContext } from 'react-hook-form';
import { View } from 'react-native';
import { HelperText } from 'react-native-paper';

export const MCountrySelect = ({ name, label, info }: IFieldProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { countryOptions } = useLang();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({ control, name });
  const errorObj: IFormCountryErrors = errors?.[name] || {};
  const errorMessage = errorObj?.code?.message || errorObj?.message || '';

  return (
    <View style={{ marginBottom: 20 }}>
      <FieldController name={name}>
        <DropDown
          label={label}
          mode="outlined"
          visible={isOpen}
          showDropDown={() => setIsOpen(true)}
          onDismiss={() => setIsOpen(false)}
          value={value?.code}
          setValue={(val) =>
            onChange({
              code: val,
              value: val,
              label: label,
            })
          }
          list={countryOptions}
        />
      </FieldController>
      <HelperText type={errorMessage ? 'error' : 'info'}>
        <>{info ? info : errorMessage}</>
      </HelperText>
    </View>
  );
};
