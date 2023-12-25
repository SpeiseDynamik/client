import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Component {...pageProps} />
    </AppCacheProvider>
  );
}
