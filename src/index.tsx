import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import RollbarProvider from './rollbar';

ReactDOM.render(
  <React.StrictMode>
    <RollbarProvider>
      <App />
    </RollbarProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
