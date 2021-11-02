import * as React from 'react';
import { ErrorBoundary, Provider } from '@rollbar/react';

// same configuration you would create for the Rollbar.js SDK
const rollbarConfig = {
  accessToken: '826ce0b65389498d883ac996b312303a',
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
