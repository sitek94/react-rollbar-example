import * as React from 'react';
import { ErrorBoundary, Provider } from '@rollbar/react';

// same configuration you would create for the Rollbar.js SDK
const rollbarConfig = {
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  environment: 'production',
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
