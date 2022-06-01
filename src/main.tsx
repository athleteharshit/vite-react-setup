import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

// styles
import './index.css';
import Providers from './template/provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
);
