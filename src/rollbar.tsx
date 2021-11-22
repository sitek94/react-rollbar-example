import * as React from 'react';
import { ErrorBoundary, Provider } from '@rollbar/react';
import Rollbar from 'rollbar';

const rollbarConfig: Rollbar.Configuration = {
  accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
  environment: process.env.REACT_APP_ROLLBAR_ENV === 'production' ? 'FE: Prod' : 'FE: Dev',
  captureUncaught: true,
  captureUnhandledRejections: true,
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
