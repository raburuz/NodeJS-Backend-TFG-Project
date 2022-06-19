import { GetServerSideProps } from 'next';
import { Container, Grid } from '@mui/material';
import { Main } from '../../layouts/Main';
import { getSession, useSession } from 'next-auth/react';
import {AuthSettings} from '../../components/settings/AuthSettings';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const SettingsScreen = () => {
  const metaTags = {
    title: 'Settings',
    description: 'Settings',
    link:'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
  };
  const { data, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'authenticated') {
     
      
    }else{
      router.push("/templates");
    }
  }, [status, data]);
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