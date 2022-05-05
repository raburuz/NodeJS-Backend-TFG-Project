import { Container, Grid } from '@mui/material';
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

export default RegisterScreen;
