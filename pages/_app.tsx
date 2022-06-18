import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AuthProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
