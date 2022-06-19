import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getSession, signIn } from 'next-auth/react';
import { RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';
import { FormGroup,Snackbar } from '@mui/material';

import { Input } from '../form/input/Input.component';
import { LoginInterface } from '../../interfaces';
import { AuthContext } from '../../context';
import { loginApi } from '../../apis/authApi';

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
    rules: { required: 'This field is required',  },
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
interface ResponseLogin {
  error: string;
  status: number;
  ok: boolean;
  url: string;
}
export const Login = () => {
  const router = useRouter();
  const [showError, setShowError] = useState(false);
  const [valueResponse, setResponse] = useState<ResponseLogin[]>([])
  const [blockButton, setBlockButton] = useState();
  const destination = router.query.page?.toString() ?? '/';
  const session = getSession();
  const {loginUser} = useContext(AuthContext)
  const { error } = useRouter().query;
  if(session === null){

    setShowError(true);

 }
 
  const {
    control,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<LoginInterface>();

  const onSubmit: SubmitHandler<LoginInterface> = async data => {
   
    
    const response = await signIn('credentials', {
      username: data.username,
      password: data.password
    });
    console.log(error)
    // const response = await loginApi(data);
    // loginUser(response.data)
     console.log(response)
    // if(response){
    //   setShowError(true);
    // }
    
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
          <Card sx={{ width: '100%', maxWidth: 300, background:'transparent' }}>
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
                    <Input data={{ ...input, control, errors, }} />
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
                sx={{background: '#3f0466', color:'white'}}
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
                  sx={{background: '#3f0466', color:'white',border:'0'}}
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
