import React from 'react';
import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material';
import { FieldController, useLang } from '@shared';
import CountryImage from './countryImage';
import { ICountryType, IFieldProps } from '@types';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  useController,
  useFormContext,
} from 'react-hook-form';

const CountrySelect = ({ name, label }: IFieldProps) => {
  const { countryOptions } = useLang();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({ control, name });
  const errorObj: Merge<FieldError, FieldErrorsImpl<ICountryType>> = errors?.[
    name
  ] || {};
  const errorMessage = errorObj?.code?.message || errorObj?.message || '';

  return (
    <FieldController name={name}>
      <Autocomplete
        id={`${name}-dropdown`}
        sx={{ mb: 1 }}
        value={value}
        onChange={(_, newValue) => {
          onChange(newValue);
        }}
        options={countryOptions}
        autoHighlight
        getOptionLabel={(option) => option?.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <CountryImage code={option.code} />
            {option.label} ({option.code})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            error={!!errorMessage}
            helperText={<>{errorMessage || ''}</>}
            {...params}
            label={label}
            inputProps={{
              ...params.inputProps,
              autoFocus: true,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: value ? (
                <InputAdornment sx={{ mx: 1 }} position="start">
                  <CountryImage code={value?.code} />
                </InputAdornment>
              ) : null,
            }}
          />
        )}
      />
    </FieldController>
  );
};

export default CountrySelect;
