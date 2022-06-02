import React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from '@template/provider';
import App from '~/app';
import Toaster from '@components/toaster/toaster';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Toaster />
      <App />
    </Providers>
  </React.StrictMode>,
);
