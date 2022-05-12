import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { FormControl, FormHelperText } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { default as InputComponent } from '@mui/material/Input';

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  defaultValue?: string;
  rules?: RegisterOptions;
  errors?: any;
}

export const Input = (props: Props) => {
  const {
    name,
    control,
    label,
    type = 'text',
    defaultValue = '',
    rules,
    errors,
  } = props;
  const haveError =
    errors?.[name as keyof typeof errors] !== undefined ? true : false;

  return (
    <FormControl
      sx={{ margin: '15px ', width: '28ch' }}
      variant="standard"
      error={haveError}
    >
      <InputLabel htmlFor={name} sx={{ fontSize: 15 }}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <InputComponent id={name} type={type} {...field} />
        )}
      />

      {errors && (
        <FormHelperText id="my-helper-text">
          {errors[name as keyof typeof errors]?.type === 'required' &&
            `${label} is required`}
        </FormHelperText>
      )}
    </FormControl>
  );
};
