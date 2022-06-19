import { GetServerSideProps } from 'next';
import { Container, Grid } from '@mui/material';
import { Main } from '../../layouts/Main';
import { getSession } from 'next-auth/react';
import {AuthSettings} from '../../components/settings/AuthSettings';


const SettingsScreen = () => {
  const metaTags = {
    title: 'Settings',
    description: 'Settings',
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
              <AuthSettings />
            </Container>
          </Grid>
        </Grid>
      </>
    </Main>
  );
};

export default SettingsScreen;