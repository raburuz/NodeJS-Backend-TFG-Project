import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { FormGroup } from '@mui/material';

interface State {
  password: string;
  showPassword: boolean;
}

export const Login = () => {
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  /**Ui Show password */
  const handleChange =
    (prop: keyof State) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: target.value });
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
        Login In
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
            {/*Username or Email*/}
            <FormControl
              sx={{ margin: '15px ', width: '28ch' }}
              variant="standard"
            >
              <InputLabel htmlFor="email-username" sx={{ fontSize: 15 }}>
                Username or Email
              </InputLabel>

              <Input id="email-username" type="text" />
            </FormControl>
            {/*Password*/}

            <FormControl
              sx={{ margin: '15px ', width: '28ch' }}
              variant="standard"
            >
              <InputLabel htmlFor="password" sx={{ fontSize: 15 }}>
                Password
              </InputLabel>

              <Input
                id="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              m: 1.5,
            }}
          >
            <Button variant="contained" size="large" fullWidth>
              Login In
            </Button>
          </CardActions>
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
            <Typography
              component="div"
              sx={{ margin: '5px 0 20px', fontSize: '12px' }}
            >
              Don't have an account yet? Sign up for free!
            </Typography>
            <Link href="/auth/register">
              <Button variant="outlined" size="large" fullWidth>
                Sign Up
              </Button>
            </Link>
          </CardActions>
        </Card>
      </FormGroup>

      <Typography component="div" sx={{ m: 3.5, fontSize: '10px' }}>
        Forgot your password?
      </Typography>
    </>
  );
};
