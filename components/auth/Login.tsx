import { useContext, useState } from 'react';
import Link from 'next/link';
import { RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import Cookies from 'js-cookie';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';
import { FormGroup, Snackbar } from '@mui/material';

import { Input } from '../form/input/Input.component';
import { loginApi } from '../../apis/authApi';
import { LoginInterface } from '../../interfaces';
import { AuthContext } from '../../context';
import { useRouter } from 'next/router';

interface InputComponent {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  rules?: RegisterOptions;
}

const inputs: InputComponent[] = [
  {
    name: 'username',
    type: 'text',
    label: 'Username',
    rules: { required: 'This field is required' },
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    rules: {
      required: 'This field is required',
    },
  },
];

export const Login = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const [showError, setShowError] = useState(false);
  const [blockButton, setBlockButton] = useState(false);
  const destination = router.query.page?.toString() ?? '/';
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<LoginInterface>();

  const onSubmit: SubmitHandler<LoginInterface> = async data => {
    setBlockButton(true);
    const isValidLogin = await login(data);
    setTimeout(() => {
      setBlockButton(false);
      if (!isValidLogin) {
        setShowError(true);
        resetField('password');
        return;
      }

      router.replace(destination);
    }, 500);
  };

  const handleClose = () => {
    setShowError(false);
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <CardActions
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                m: 1.5,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={blockButton}
              >
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
              <Link href={`/auth/register?page=${destination}`}>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  disabled={blockButton}
                >
                  Sign Up
                </Button>
              </Link>
            </CardActions>
          </Card>
        </FormGroup>
      </form>
      <Typography component="div" sx={{ m: 3.5, fontSize: '10px' }}>
        Forgot your password?
      </Typography>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={showError}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Something was wrong please check user/password"
      />
    </>
  );
};
