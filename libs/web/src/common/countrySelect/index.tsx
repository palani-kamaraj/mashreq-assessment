import React, { useState } from 'react';
import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material';
import { useLang } from '@shared';
import CountryImage from './countryImage';
import { ICountryType } from '@types';

const CountrySelect = () => {
  const [value, setValue] = useState<ICountryType | null>(null);
  const { countryOptions } = useLang();

  return (
    <Autocomplete
      id="country-dropdown"
      sx={{ mb: 1}}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
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
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoFocus: true,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: value ? (
              <InputAdornment sx={{mx: 1}} position="start">
                <CountryImage code={value?.code} />
              </InputAdornment>
            ) : null
          }}
        />
      )}
    />
  );
};

export default CountrySelect;
