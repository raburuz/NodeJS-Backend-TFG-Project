import React from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { FormControlLabel, Checkbox as CheckboxMui } from '@mui/material';
import Typography from '@mui/material/Typography';

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  errors?: any;
  rules?: RegisterOptions;
}

export const Checkbox = (props: Props) => {
  const { name, control, label, errors, rules } = props;

  const haveError =
    errors?.[name as keyof typeof errors] !== undefined ? true : false;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormControlLabel
          control={<CheckboxMui size="small" {...field} />}
          sx={{ marginBottom: 2 }}
          label={
            <Typography
              component="span"
              sx={{ fontSize: 10, fontWeight: 400 }}
              color={haveError ? '#f44336' : ''}
            >
              {label}
            </Typography>
          }
        />
      )}
    />
  );
};
