import { GetServerSideProps } from 'next';
import { Container, Grid, Snackbar } from '@mui/material';
import { Login } from '../../components/auth/Login';
import { Main } from '../../layouts/Main';
import { getSession } from 'next-auth/react';
import { useState } from 'react';

interface Props {
  error?: boolean;
}

const LoginScreen = ({ error }: Props) => {
  const [hasError, setHasError] = useState(error);
  const metaTags = {
    title: 'Login',
    description: 'Login',
  };

  const handleClose = () => {
    setHasError(false);
  };

  return (
    <Main metaTags={metaTags}>
      <>
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            height: '90vh',
            alignContent: 'center',
          }}
        >
          <Grid item xs={12}>
            <Container
              maxWidth="lg"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Login />
              <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={!!hasError}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Something was wrong please check user/password"
              />
            </Container>
          </Grid>
        </Grid>
      </>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const session = await getSession({ req });
  const { callbackUrl = null } = query;

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      props: {
        error: false,
      },
    };
  }
  if (callbackUrl) {
    return {
      redirect: { destination: '/auth/login', permanent: false },
      props: { error: true },
    };
  }

  return {
    props: { error: false },
  };
};

export default LoginScreen;
