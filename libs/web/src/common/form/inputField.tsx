import React from 'react';
import { TextField } from '@mui/material';
import { useController, useFormContext } from 'react-hook-form';
import { FieldController } from '@shared';

export const InputField = ({
  name,
  label,
}: {
  name: string;
  label: string;
}) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control });
  return (
    <FieldController name={name}>
      <TextField
        margin="normal"
        required
        fullWidth
        id={name}
        label={label}
        {...field}
      />
    </FieldController>
  );
};
