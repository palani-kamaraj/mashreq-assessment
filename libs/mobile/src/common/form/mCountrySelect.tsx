import React, { useState } from 'react';
import DropDown from 'react-native-paper-dropdown';
import { useLang, FieldController } from '@shared';
import { IFieldProps } from '@types';
import { useController, useFormContext } from 'react-hook-form';
import { View } from 'react-native';

export const MCountrySelect = ({ name, label }: IFieldProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { countryOptions } = useLang();
  const { control } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({ control, name });

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
    </View>
  );
};
