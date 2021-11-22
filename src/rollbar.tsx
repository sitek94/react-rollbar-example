import * as React from 'react';
import { ErrorBoundary, Provider } from '@rollbar/react';
import Rollbar from 'rollbar';

const rollbarConfig: Rollbar.Configuration = {
  enabled: process.env.NODE_ENV === 'production',
  accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
  environment: 'production',
};

interface RollbarProviderProps {
  children: React.ReactNode;
}

export default function RollbarProvider({ children }: RollbarProviderProps) {
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Provider>
  );
}
