import { ApolloProvider, webClient } from '@qstn/graphql/apollo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Layout from '../Layout';
import Web3Provider from './Web3Provider';

const qstnApolloClient = webClient;
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
});

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary>
      <Web3Provider>
        <ApolloProvider client={qstnApolloClient}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="light" attribute="class">
              <Layout>{children}</Layout>
            </ThemeProvider>
          </QueryClientProvider>
        </ApolloProvider>
      </Web3Provider>
    </ErrorBoundary>
  );
};

export default Providers;
