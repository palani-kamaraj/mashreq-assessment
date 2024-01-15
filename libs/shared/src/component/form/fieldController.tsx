import React, { ReactElement } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const FieldController = ({
  name,
  defaultValue,
  children,
}: {
  name: string;
  defaultValue?: string;
  children: ReactElement;
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={{ required: true }}
      render={() => children}
    />
  );
};
