import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AuthProvider } from '../context/auth/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
