import { useState } from 'react';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App(props) {
  const { Component, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <AppCacheProvider {...props}>
          <Component {...pageProps} />
        </AppCacheProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
