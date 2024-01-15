import React from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useController, useFormContext } from 'react-hook-form';
import { FieldController } from '@shared';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const InputField = ({
  name,
  label,
  isProtected
}: {
  name: string;
  label: string;
  isProtected?: boolean;
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = React.useState(false);
  const { field } = useController({ name, control });
  const errorMessage = errors?.[name]?.message || '';

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FieldController name={name}>
      <TextField
        margin="normal"
        required
        fullWidth
        id={name}
        label={label}
        error={!!errorMessage}
        helperText={<>{errorMessage ?? ''}</>}
        type={showPassword ? 'password' : 'text'}
        InputProps={{
          endAdornment: isProtected ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : (
            <></>
          ),
        }}
        {...field}
      />
    </FieldController>
  );
};
