import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { ContextProvider } from './context/Context';

render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
