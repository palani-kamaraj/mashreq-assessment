import React from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useController, useFormContext } from 'react-hook-form';
import { FieldController } from '@shared';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const InputField = ({
  name,
  label,
  info,
  isProtected,
  onChange,
}: {
  name: string;
  label: string;
  info?: string;
  isProtected?: boolean;
  onChange?: () => void;
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

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.value);
    if (onChange) {
      onChange();
    }
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
        helperText={<>{(info ? info : errorMessage) || ''}</>}
        type={showPassword ? 'password' : 'text'}
        value={field?.value}
        onChange={onChangeText}
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
      />
    </FieldController>
  );
};
