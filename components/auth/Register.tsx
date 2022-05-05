import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import { Checkbox, FormControlLabel, FormGroup, Link } from '@mui/material';
import NextLink from 'next/link';

interface State {
  password: string;
  showPassword: boolean;
}

export const Register = () => {
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
      <FormGroup>
        <Card sx={{ width: '100%', maxWidth: 300 }}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/*Username*/}
            <FormControl
              sx={{ margin: '15px ', width: '28ch' }}
              variant="standard"
            >
              <InputLabel htmlFor="username" sx={{ fontSize: 15 }}>
                Username
              </InputLabel>

              <Input id="username" type="text" />
            </FormControl>

            {/*Email*/}
            <FormControl
              sx={{ margin: '15px ', width: '28ch' }}
              variant="standard"
            >
              <InputLabel htmlFor="email" sx={{ fontSize: 15 }}>
                Email
              </InputLabel>

              <Input id="email" type="text" />
            </FormControl>

            {/*Password*/}
            <FormControl
              sx={{ margin: '15px ', width: '28ch' }}
              variant="standard"
            >
              <InputLabel htmlFor="password" sx={{ fontSize: 15 }}>
                Password
              </InputLabel>

              <Input id="password" type="password" />
            </FormControl>

            {/*Confirm Password*/}
            <FormControl
              sx={{ margin: '15px ', width: '28ch' }}
              variant="standard"
            >
              <InputLabel htmlFor="password2" sx={{ fontSize: 15 }}>
                Confirm Password
              </InputLabel>

              <Input id="password2" type="password" />
            </FormControl>
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
            <FormControlLabel
              control={<Checkbox size="small" name="acceptPolicity" />}
              sx={{ marginBottom: 2 }}
              label={
                <Typography
                  component="span"
                  sx={{ fontSize: 10, fontWeight: 400 }}
                >
                  I have read and agreed to the Terms of Use and Privacy Policy
                </Typography>
              }
            />
            <Button variant="outlined" size="large" fullWidth>
              Sign Up
            </Button>
          </CardActions>
        </Card>
      </FormGroup>

      <Typography component="div" sx={{ m: 3.5, fontSize: '10px' }}>
        Do you have account?{' '}
        <NextLink href="/auth/login">
          <Link>Log In</Link>
        </NextLink>
      </Typography>
    </>
  );
};
