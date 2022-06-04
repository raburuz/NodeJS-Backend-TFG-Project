import { useState } from 'react';
import NextLink from 'next/link';
import { RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import { validate } from 'email-validator';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { FormGroup, Link } from '@mui/material';
import { Input } from '../form/input/Input.component';
import { Checkbox } from '../form/Checkbox/Checkbox.component';
import { useRouter } from 'next/router';

const isValidEmail = (email: string) => {
  return validate(email) ? undefined : 'Email is invalid';
};

interface InputComponent {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  rules?: RegisterOptions;
}

interface IFormInput {
  username: string;
  email: string;
  password: string;
  password2: string;
}

const inputs: InputComponent[] = [
  {
    name: 'username',
    type: 'text',
    label: 'Username',
    rules: { required: 'This field is required' },
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    rules: {
      required: 'This field is required',
      validate: isValidEmail,
    },
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    rules: {
      required: 'This field is required',
      minLength: { value: 8, message: 'Min length is 8 characters' },
    },
  },
  {
    name: 'password2',
    type: 'password2',
    label: 'Confirm Password',
    rules: {
      required: 'This field is required',
      minLength: { value: 8, message: 'Min length is 8 characters' },
    },
  },
];

export const Register = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const destination = router.query.page?.toString() ?? '/';

  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <>
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{ fontWeight: 800 }}
      >
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormGroup>
          <Card sx={{ width: '100%', maxWidth: 300 }}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {inputs.map((input: InputComponent) => {
                return (
                  <div key={input.name}>
                    <Input data={{ ...input, control, errors }} />
                  </div>
                );
              })}
            </CardContent>
            <Divider variant="middle" />
            <CardActions
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                m: 1.5,
                paddingBottom: '20px',
              }}
            >
              <Checkbox
                name={'acceptPolicy'}
                control={control}
                label={
                  ' I have read and agreed to the Terms of Use and Privacy Policy'
                }
                rules={{ required: true }}
                errors={errors}
              />
              <Button variant="outlined" size="large" fullWidth type="submit">
                Sign Up
              </Button>
            </CardActions>
          </Card>
        </FormGroup>
      </form>

      <Typography component="div" sx={{ m: 3.5, fontSize: '10px' }}>
        Do you have account?{' '}
        <NextLink href={`/auth/login?page=${destination}`}>
          <Link>Log In</Link>
        </NextLink>
      </Typography>
    </>
  );
};
