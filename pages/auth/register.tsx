import { Container, Grid } from '@mui/material';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { Register } from '../../components/auth/Register';
import { Main } from '../../layouts/Main';

const RegisterScreen = () => {
  const metaTags = {
    title: 'Register',
    description: 'Register',
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
              <Register />
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

  console.log(session);

  if (session) {
    return {
      redirect: {
        destination: '/templates',
        permanent: false,
      },
      props: {
        error: false,
      },
    };
  }
  if (callbackUrl) {
    return {
      redirect: { destination: '/auth/register', permanent: false },
      props: { error: true },
    };
  }

  return {
    props: { error: false },
  };
};

export default RegisterScreen;
